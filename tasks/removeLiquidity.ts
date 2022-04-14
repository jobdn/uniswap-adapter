import { task } from "hardhat/config";
import { config } from "../config";
import { IUniswapV2Factory, UniswapAdaptor } from "../typechain-types";

task("removeLiq", "Remove liquidity from the pool")
  .addParam("tokenA", "A pool token.")
  .addParam("tokenB", "B pool token.")
  .addParam("liquidity", "The amount of liquidity tokens to remove.")
  .addParam("amountAMin", "Min amount of tokens A which will be received")
  .addParam("amountBMin", "Min amount of tokens B which will be received")
  .addParam("to", "Recipient of the underlying assets.")
  .addParam(
    "deadline",
    "Unix timestamp after which the transaction will revert."
  )
  .setAction(async (taskArgs, hre) => {
    const adaptor: UniswapAdaptor = (await hre.ethers.getContractAt(
      "UniswapAdaptor",
      config.ADAPTOR
    )) as UniswapAdaptor;
    const { tokenA, tokenB, liquidity, amountAMin, amountBMin, to, deadline } =
      taskArgs;

    await adaptor.removeLiquidity(
      tokenA,
      tokenB,
      liquidity,
      amountAMin,
      amountBMin,
      to,
      deadline
    );

    const factory: IUniswapV2Factory = (await hre.ethers.getContractAt(
      "IUniswapV2Factory",
      process.env.FACTORY_ADDRESS as string
    )) as IUniswapV2Factory;
    const pair = await factory.getPair(tokenA, tokenB);

    console.log("====== Info: ======");
    console.log(`${liquidity} liquidity removed from pair(${pair})`);
  });
