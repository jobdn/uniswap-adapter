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
import { utils } from "ethers";
import { ethers } from "hardhat";
import { expect } from "chai";

const toEther = (amount: number) => utils.parseEther(amount.toString());
const getCurrentTime = async () =>
  (await ethers.provider.getBlock(ethers.provider.getBlockNumber())).timestamp;

describe("UniswapAdaptor", () => {
  let adaptor: UniswapAdaptor;
  let token0: Token;
  let token1: Token;
  let signer: SignerWithAddress;
  let factory: IUniswapV2Factory;
  let router: IUniswapV2Router02;
  let pair: IUniswapV2Pair;

  beforeEach(async () => {
    [signer] = await ethers.getSigners();
    token0 = await new Token__factory(signer).deploy("TOKEN0", "T000", 5);
    await token0.deployed();

    token1 = await new Token__factory(signer).deploy("TOKEN1", "T111", 5);
    await token1.deployed();

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

    token0.mint(signer.address, toEther(100));
    token0.approve(router.address, toEther(100));
    token1.mint(signer.address, toEther(200));
    token1.approve(router.address, toEther(200));
  });

  describe("deploy", () => {
    it("should be set correct address of factory and router", async () => {
      expect(await adaptor.FACTORY_ADDRESS()).to.eq(factory.address);
      expect(await adaptor.ROUTER_ADDRESS()).to.eq(router.address);
    });
  });

  describe("createPair", () => {
    it("should be possible create pair", async () => {
      await adaptor.createPair(token0.address, token1.address);
      expect(await factory.getPair(token0.address, token1.address)).to.be
        .properAddress;
    });
  });

  describe("addLiquidity", () => {
    it("should be possible add liquidity to the pair", async () => {
      const deadline = (await getCurrentTime()) + 100;
      await adaptor.createPair(token0.address, token1.address);
      await token0.approve(adaptor.address, toEther(100));
      await token1.approve(adaptor.address, toEther(200));
      const FIRST_LIQUIDITY = 10000;

      // first time
      await adaptor.addLiquidity(
        token0.address,
        token1.address,
        FIRST_LIQUIDITY,
        FIRST_LIQUIDITY,
        0,
        0,
        signer.address,
        deadline
      );
      const pairAddress = await factory.getPair(token0.address, token1.address);
      pair = <IUniswapV2Pair>(
        await ethers.getContractAt("IUniswapV2Pair", pairAddress)
      );
      const MINIMUM_LIQUIDITY = await pair.MINIMUM_LIQUIDITY();

      // first amount of pool tokens is equal to sqrt(a*b) - MINIMUM_LIQUIDITY
      const firstPoolTokens = await pair.balanceOf(signer.address);
      expect(await pair.balanceOf(signer.address)).to.eq(
        FIRST_LIQUIDITY - MINIMUM_LIQUIDITY.toNumber()
      );

      // second time
      await adaptor.addLiquidity(
        token0.address,
        token1.address,
        FIRST_LIQUIDITY,
        FIRST_LIQUIDITY,
        0,
        0,
        signer.address,
        deadline
      );
      expect(await pair.balanceOf(signer.address)).to.eq(
        firstPoolTokens.add(FIRST_LIQUIDITY)
      );
    });
  });
});
