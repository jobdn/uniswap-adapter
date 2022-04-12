import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
// import { expect } from "chai";
import {
  IUniswapV2Factory,
  IUniswapV2Router02,
  Token,
  Token__factory,
  UniswapAdaptor,
  UniswapAdaptor__factory,
} from "../typechain-types";
import { utils } from "ethers";
import { ethers } from "hardhat";

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
    console.log(await ethers.provider.getCode(factory.address));

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
  describe("createPair", () => {
    it("should be possible create pair", async () => {});
  });
});
