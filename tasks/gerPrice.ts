import { BigNumber } from "ethers";
import { task } from "hardhat/config";
import { config } from "../config";
import { Token, UniswapAdaptor } from "../typechain-types";

task("price", "Gives price for tokens")
  .addParam("amountOut", "The amount of output tokens you want to swap.")
  .addParam(
    "path",
    "Path for swap. !THIS IS ARRAY OF TOKEN ADDRESSES! ELEMENTS ARE SEPARATED BY A COMMA, WITHOUT SPACE"
  )
  .setAction(async (taskArgs, hre) => {
    const adaptor: UniswapAdaptor = (await hre.ethers.getContractAt(
      "UniswapAdaptor",
      config.ADAPTOR
    )) as UniswapAdaptor;
    const { amountOut } = taskArgs;

    const pathString = taskArgs.path;
    const path = pathString.slice(1, pathString.length - 1).split(",");
    const tokenOutDecimal = await (
      (await hre.ethers.getContractAt("Token", path[path.length - 1])) as Token
    ).decimals();
    const tokenInDecimal = await (
      (await hre.ethers.getContractAt("Token", path[0])) as Token
    ).decimals();
    const realAmountOut = BigNumber.from(amountOut).mul(
      BigNumber.from(10).pow(tokenOutDecimal)
    );
    const realAmountIn = await adaptor.getPriceFor(realAmountOut, path);
    const amountIn = realAmountIn.toNumber() / 10 ** tokenInDecimal;

    console.log("====== Info: ======");
    console.log(
      `To receive ${amountOut}(${realAmountOut.toNumber()}) tokens you need to pass ${amountIn}(${realAmountIn.toNumber()}) other tokens`
    );
  });
