const { ethers, run } = require("hardhat");

async function main() {

  await run("compile");
  const [deployer] = await ethers.getSigners();
  console.log(`Deployer: ${deployer.address}`);

  const TokenFactory = await ethers.getContractFactory(
    "MockToken"
  );
  const tokenA = await TokenFactory.deploy('TOKEN-A', 'TKA');
  const tokenB = await TokenFactory.deploy('TOKEN-A', 'TKA');
  await tokenA.deployed();
  await tokenB.deployed();
  console.log(`Token A address: ${tokenA.address}`);
  console.log(`Token B address: ${tokenB.address}`);

  console.log("Waiting to verify...");
  await new Promise((r) => setTimeout(r, 60000));

  console.log("Verifying...");
  await run("verify:verify", {
    address: tokenA.address,
    constructorArguments: ['TOKEN-A', 'TKA'],
  });
  await run("verify:verify", {
    address: tokenB.address,
    constructorArguments: ['TOKEN-B', 'TKB'],
  });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });