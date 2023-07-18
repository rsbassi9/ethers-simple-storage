// Code to deploy our SimpleStorage smart contract
const ethers = require("ethers");
const fs = require("fs-extra");

async function main() {
  // compile them in our code
  // compile them separately
  // RPC URL for Ganache on our PC: http://127.0.0.1:7545

  // connect to our script to the local Blockchain
  const provider = new ethers.providers.JsonRpcProvider(
    "http://127.0.0.1:7545"
  );

  // connect to one of the wallets in Ganache using its private Key
  const wallet = new ethers.Wallet(
    "0x3c24f128e219c80ca2889737351a6384ad33330c216c1f8d037aaec7aa049115",
    provider
  );

  // To compile the code, we need the ABI and the Binary compiled code of the contract
  // Use fs to read from SimpleStorage_sol_SimpleStorage.abi and SimpleStorage_sol_SimpleStorage.bin
  const abi = fs.readFileSync("./SimpleStorage_sol_StimpleStorage.abi", "utf8");
  const binary = fs.readFileSync(
    "./SimpleStorage_sol_StimpleStorage.bin",
    "utf8"
  );
  // contractFactory is an object used to deploy contracts using ethers
  const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
}

//to compile the code, we need the ABI and the Binary compiled code of the contract
// Use fs to read from SimpleStorage_sol_SimpleStorage.abi and SimpleStorage_sol_SimpleStorage.bin

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
