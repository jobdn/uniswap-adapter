import { task } from "hardhat/config";
import { config } from "../config";
import { UniswapAdaptor } from "../typechain-types";

task("swap", "Swap tokens")
  .addParam("amountIn", "The amount of input tokens to send.")
  .addParam(
    "amountOutMin",
    "The minimum amount of output tokens that must be received for the transaction not to revert."
  )
  .addParam(
    "path",
    "Path for swap. !THIS IS ARRAY OF TOKEN ADDRESSES! ELEMENTS ARE SEPARATED BY A COMMA, WITHOUT SPACE"
  )
  .addParam("to", "Recipient of the output tokens.")
  .addParam(
    "deadline",
    "Unix timestamp after which the transaction will revert."
  )
  .setAction(async (taskArgs, hre) => {
    const adaptor: UniswapAdaptor = (await hre.ethers.getContractAt(
      "UniswapAdaptor",
      config.ADAPTOR
    )) as UniswapAdaptor;
    const { amountIn, amountOutMin, to, deadline } = taskArgs;

    const pathString = taskArgs.path;
    const path = pathString.slice(1, pathString.length - 1).split(",");
    const tx = await adaptor.swap(amountIn, amountOutMin, path, to, deadline);

    console.log("====== Info: ======");
    console.log(`Check transaction: ${tx.hash}`);
  });
