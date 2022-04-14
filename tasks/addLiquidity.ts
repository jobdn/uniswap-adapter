import { task } from "hardhat/config";
import { config } from "../config";
import { IUniswapV2Factory, UniswapAdaptor } from "../typechain-types";

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
    const factory: IUniswapV2Factory = (await hre.ethers.getContractAt(
      "IUniswapV2Factory",
      process.env.FACTORY_ADDRESS as string
    )) as IUniswapV2Factory;

    await adaptor.addLiquidity(
      tokenA,
      tokenB,
      amountADesired,
      amountBDesired,
      amountAMin,
      amountBMin,
      to,
      deadline
    );
    const pair = await factory.getPair(tokenA, tokenB);

    console.log("====== Info: ======");
    console.log(
      `${amountADesired} of ${tokenA} tokens was added to the pair(${pair})`
    );
    console.log(
      `${amountBDesired} of ${tokenB} tokens was added to the pair(${pair})`
    );
  });
