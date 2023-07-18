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
    "0x157ddba59444e791e23270fe55f116b3c15ff8b9ceab2ffa793ef5a806cdc7bb",
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
