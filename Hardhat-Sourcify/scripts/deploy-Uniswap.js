const { ethers } = require("hardhat");
const fs = require("fs");
const path = require("path");

async function deploy() {
  [account] = await ethers.getSigners();
  deployerAddress = account.address;
  console.log(`Deploying contracts using ${deployerAddress}`);
  const UniswapPool = await ethers.getContractFactory("UniswapPool");
  const uniswapPool = await UniswapPool.deploy();
  await uniswapPool.deployed();
  console.log("Uniswap Pool contract deployed at", uniswapPool.address);

  await run(`verify:verify`, {
    address: uniswapPool.address,
    constructorArguments: [],
  });

  fs.writeFileSync(
    path.join(__dirname, "./address.json"),
    JSON.stringify({ address: uniswapPool.address })
  );
}

deploy()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
