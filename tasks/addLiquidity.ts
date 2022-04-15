import { task } from "hardhat/config";
import { config } from "../config";
import { UniswapAdaptor } from "../typechain-types";

task("addLiq", "Add liquidity to the pool")
  .addParam("tokenA", "A pool token.")
  .addParam("tokenB", "B pool token.")
  .addParam("amountADesired", "Amount of tokens A")
  .addParam("amountBDesired", "Amount of tokens B")
  .addParam("amountAMin", "Min amount of tokens A to add liquidity")
  .addParam("amountBMin", "Min amount of tokens B to add liquidity")
  .addParam("to", "Recipient of the liquidity tokens.")
  .addParam(
    "deadline",
    "Unix timestamp after which the transaction will revert."
  )
  .setAction(async (taskArgs, hre) => {
    const {
      tokenA,
      tokenB,
      amountADesired,
      amountBDesired,
      amountAMin,
      amountBMin,
      to,
      deadline,
    } = taskArgs;

    const adaptor: UniswapAdaptor = (await hre.ethers.getContractAt(
      "UniswapAdaptor",
      config.ADAPTOR
    )) as UniswapAdaptor;

    const tx = await adaptor.addLiquidity(
      tokenA,
      tokenB,
      amountADesired,
      amountBDesired,
      amountAMin,
      amountBMin,
      to,
      deadline
    );

    console.log("====== Info: ======");
    console.log(`Check transaction: ${tx.hash}`);
  });
