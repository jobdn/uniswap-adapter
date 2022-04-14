import { task } from "hardhat/config";
import { config } from "../config";
import { UniswapAdaptor } from "../typechain-types";

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
  });
