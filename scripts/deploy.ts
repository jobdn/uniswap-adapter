import { ethers } from "hardhat";
import { UniswapAdaptor__factory } from "../typechain-types";

async function main() {
  const [signer] = await ethers.getSigners();
  const adaptor = await new UniswapAdaptor__factory(signer).deploy();

  await adaptor.deployed();

  console.log("Adaptor deployed to:", adaptor.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
