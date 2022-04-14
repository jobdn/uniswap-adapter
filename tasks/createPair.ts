import { task } from "hardhat/config";
import { config } from "../config";
import { IUniswapV2Factory, UniswapAdaptor } from "../typechain-types";

task("createPair", "Create pair")
  .addParam("tokenA", "A pool token.")
  .addParam("tokenB", "B pool token.")
  .setAction(async (taskArgs, hre) => {
    const adaptor: UniswapAdaptor = (await hre.ethers.getContractAt(
      "UniswapAdaptor",
      config.ADAPTOR
    )) as UniswapAdaptor;
    const factory: IUniswapV2Factory = (await hre.ethers.getContractAt(
      "IUniswapV2Factory",
      <string>process.env.FACTORY_ADDRESS
    )) as IUniswapV2Factory;
    const { tokenA, tokenB } = taskArgs;

    await adaptor.createPair(tokenA, tokenB);
    console.log("Pair was created at: ", await factory.getPair(tokenA, tokenB));
  });
