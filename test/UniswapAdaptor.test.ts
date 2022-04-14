import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import {
  IUniswapV2Factory,
  IUniswapV2Pair,
  IUniswapV2Router02,
  Token,
  Token__factory,
  UniswapAdaptor,
  UniswapAdaptor__factory,
} from "../typechain-types";
import { BigNumber, constants, utils } from "ethers";
import { ethers } from "hardhat";
import { expect } from "chai";

const MINIMUM_LIQUIDITY = 10 ** 3;
const getCurrentTime = async () =>
  (await ethers.provider.getBlock(ethers.provider.getBlockNumber())).timestamp;

describe("UniswapAdaptor", () => {
  let adaptor: UniswapAdaptor;
  let token0: Token;
  let token1: Token;
  let token2: Token;
  let signer: SignerWithAddress;
  let trader: SignerWithAddress;
  let factory: IUniswapV2Factory;
  let router: IUniswapV2Router02;
  let pair01: IUniswapV2Pair;
  let pair12: IUniswapV2Pair;
  let INITIAL_BALANCE: BigNumber;
  let FIRST_LIQUIDITY: BigNumber;

  beforeEach(async () => {
    [signer, trader] = await ethers.getSigners();
    token0 = await new Token__factory(signer).deploy("TOKEN0", "T000", 3);
    await token0.deployed();
    token1 = await new Token__factory(signer).deploy("TOKEN1", "T111", 3);
    await token1.deployed();
    token2 = await new Token__factory(signer).deploy("TOKEN2", "T222", 3);
    await token2.deployed();

    factory = <IUniswapV2Factory>(
      await ethers.getContractAt(
        "IUniswapV2Factory",
        <string>process.env.FACTORY_ADDRESS
      )
    );

    router = <IUniswapV2Router02>(
      await ethers.getContractAt(
        "IUniswapV2Router02",
        <string>process.env.ROUTER_ADDRESS
      )
    );

    adaptor = await new UniswapAdaptor__factory(signer).deploy(
      router.address,
      factory.address
    );
    await adaptor.deployed();

    INITIAL_BALANCE = utils.parseUnits("100", await token0.decimals());
    // Mint tokens
    token0.mint(signer.address, INITIAL_BALANCE);
    token0.mint(trader.address, INITIAL_BALANCE);
    token1.mint(signer.address, INITIAL_BALANCE.mul(2));
    token2.mint(signer.address, INITIAL_BALANCE.mul(2));

    // Create pair
    await adaptor.createPair(token0.address, token1.address);
    await adaptor.createPair(token1.address, token2.address);
    pair01 = <IUniswapV2Pair>(
      await ethers.getContractAt(
        "IUniswapV2Pair",
        await factory.getPair(token0.address, token1.address)
      )
    );
    pair12 = <IUniswapV2Pair>(
      await ethers.getContractAt(
        "IUniswapV2Pair",
        await factory.getPair(token1.address, token2.address)
      )
    );

    // ! We need to approve the adaptor to debit our tokens
    await token0.approve(adaptor.address, INITIAL_BALANCE);
    await token1.approve(adaptor.address, INITIAL_BALANCE);
    await token2.approve(adaptor.address, INITIAL_BALANCE);

    // addLiquidity
    FIRST_LIQUIDITY = utils.parseUnits("10", await token0.decimals());
    const deadline = (await getCurrentTime()) + 100;
    await adaptor.addLiquidity(
      token0.address,
      token1.address,
      FIRST_LIQUIDITY,
      FIRST_LIQUIDITY,
      FIRST_LIQUIDITY.sub(1),
      FIRST_LIQUIDITY.sub(1),
      signer.address,
      deadline
    );
  });

  describe("deploy", () => {
    it("should be set correct address of factory and router", async () => {
      expect(await adaptor.FACTORY_ADDRESS()).to.eq(factory.address);
      expect(await adaptor.ROUTER_ADDRESS()).to.eq(router.address);
    });
  });

  describe("createPair", () => {
    it("should be create pair", async () => {
      expect(await factory.getPair(token0.address, token1.address)).to.be
        .properAddress;
    });
  });

  describe("addLiquidity and removeLiquidity", () => {
    it("should be possible add liquidity to the pair first time", async () => {
      // First amount of LP is equal to sqrt(a*b) - MINIMUM_LIQUIDITY
      expect(await pair01.balanceOf(signer.address)).to.eq(
        FIRST_LIQUIDITY.sub(MINIMUM_LIQUIDITY)
      );
    });

    it("should be possible to remove all liquidity", async () => {
      const deadline = (await getCurrentTime()) + 100;
      // ! We need to appove the adaptor to send pool tokens
      await pair01.approve(adaptor.address, FIRST_LIQUIDITY);

      await adaptor.removeLiquidity(
        token0.address,
        token1.address,
        await pair01.balanceOf(signer.address),
        0,
        0,
        signer.address,
        deadline
      );

      expect(await pair01.balanceOf(signer.address)).to.eq(0);
      expect(await token0.balanceOf(signer.address)).to.eq(
        INITIAL_BALANCE.sub(MINIMUM_LIQUIDITY)
      );
    });

    it("should be fail if there is not pair", async () => {
      const deadline = (await getCurrentTime()) + 100;
      // ! We need to appove the adaptor to send pool tokens
      await pair01.approve(adaptor.address, FIRST_LIQUIDITY);

      await expect(
        adaptor.removeLiquidity(
          token0.address,
          constants.AddressZero,
          await pair01.balanceOf(signer.address),
          0,
          0,
          signer.address,
          deadline
        )
      ).to.be.revertedWith("Adaptor: nonexistent pair");
    });
  });

  describe("swap", () => {
    it("should be possible swap token0 for token1", async () => {
      const price = await adaptor.getPriceFor(
        utils.parseUnits("1", await token0.decimals()),
        [token0.address, token1.address]
      );
      const reservesBefore = await pair01.getReserves();
      await adaptor.swap(
        price,
        utils.parseUnits("1", await token1.decimals()),
        [token0.address, token1.address],
        signer.address,
        (await getCurrentTime()) + 100
      );
      const reservesAfter = await pair01.getReserves();
      const [reserve0, reserve1] =
        token0.address < token1.address
          ? [reservesAfter[0], reservesAfter[1]]
          : [reservesAfter[1], reservesAfter[0]];
      expect(reserve0).to.eq(reservesBefore[0].add(price));
      expect(reserve1).to.eq(
        reservesBefore[1].sub(utils.parseUnits("1", await token0.decimals()))
      );
    });
    it("should be possible swap token0 for token2", async () => {
      // Add liquidity to pair02
      await adaptor.addLiquidity(
        token1.address,
        token2.address,
        FIRST_LIQUIDITY,
        FIRST_LIQUIDITY,
        FIRST_LIQUIDITY.sub(1),
        FIRST_LIQUIDITY.sub(1),
        signer.address,
        (await getCurrentTime()) + 100
      );
      const wantToBuy = utils.parseUnits("1", await token0.decimals());
      const price = await adaptor.getPriceFor(wantToBuy, [
        token0.address,
        token1.address,
        token2.address,
      ]);
      // Trader need to approve the adaptor to send tokens
      await token0.connect(trader).approve(adaptor.address, INITIAL_BALANCE);
      // trader swaps tokens
      await adaptor
        .connect(trader)
        .swap(
          price,
          0,
          [token0.address, token1.address, token2.address],
          trader.address,
          (await getCurrentTime()) + 100
        );
      expect(await token0.balanceOf(trader.address)).to.eq(
        INITIAL_BALANCE.sub(price)
      );
      expect(await token2.balanceOf(trader.address)).to.eq(wantToBuy);
    });
  });
});
