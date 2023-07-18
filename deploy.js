// Code to deploy our SimpleStorage smart contract
const ethers = require("ethers");
const fs = require("fs-extra");

async function main() {
  // compile them in our code
  // compile them separately
  // RPC URL for Ganache on our PC: http://127.0.0.1:7545

  // connect to our script to the local Blockchain
  const provider = new ethers.providers.JsonRpcProvider("127.0.0.1:8545");

  // connect to one of the wallets in Ganache using its private Key
  const wallet = new ethers.Wallet(
    "0x0aab9796875f1c0a8b0cc041033e4a0d262b311a9555d4cbbbef09143bb22f7e",
    provider
  );

  // To compile the code, we need the ABI and the Binary compiled code of the contract
  // Use fs to read from SimpleStorage_sol_SimpleStorage.abi and SimpleStorage_sol_SimpleStorage.bin
  const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf8");
  const binary = fs.readFileSync(
    "./SimpleStorage_sol_SimpleStorage.bin",
    "utf8"
  );

  // contractFactory is an object used to deploy contracts using ethers
  const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
  console.log("Deploying, please wait...");
  const contract = await contractFactory.deploy(); // STOP here! Wait for contract to deploy
  console.log(contract);
}

//to compile the code, we need the ABI and the Binary compiled code of the contract
// Use fs to read from SimpleStorage_sol_SimpleStorage.abi and SimpleStorage_sol_SimpleStorage.bin

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
