import { task } from "hardhat/config";
import { Token__factory } from "../typechain-types";

task("deployToken", "Deploy token")
  .addParam("name", "Name of token")
  .addParam("symbol", "Symbol of token")
  .addParam("decimals", "Decimal of token")
  .setAction(async (taskArgs, hre) => {
    const [signer] = await hre.ethers.getSigners();
    const { name, symbol, decimals } = taskArgs;
    const token = await new Token__factory(signer).deploy(
      name,
      symbol,
      decimals
    );
    await token.deployed();
    console.log("Token deployed to:", token.address);
  });
