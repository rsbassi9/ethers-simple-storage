// Code to deploy our SimpleStorage smart contract
const ethers = require("ethers");
const fs = require("fs-extra");

async function main() {
  // compile them in our code
  // compile them separately
  // RPC URL for Ganache on our PC: http://172.20.48.1:7545

  // connect to our script to the local Blockchain
  const provider = new ethers.providers.JsonRpcProvider(
    "http://172.20.48.1:7545"
  );

  // connect to one of the wallets in Ganache using its private Key
  const wallet = new ethers.Wallet(
    "0x82361db44afbe08fea0090d14a6d420f739f3b312abe2f65408d3550cde706ad",
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

  const gasLimit = 5000000;
  const contract = await contractFactory.deploy({ gasLimit }); // STOP here! Wait for contract to deploy
  console.log("Contract address:", contract.address);
}

//to compile the code, we need the ABI and the Binary compiled code of the contract
// Use fs to read from SimpleStorage_sol_SimpleStorage.abi and SimpleStorage_sol_SimpleStorage.bin

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
