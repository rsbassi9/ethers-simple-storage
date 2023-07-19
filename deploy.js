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
    "0xf20bec9bac8f62263654b291db5c4f79d09ec38c3113a8dcd3d329df4bf78f05",
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
  // const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
  // console.log("Deploying, please wait...");

  // // Specify the gas limit for the deployment transaction (e.g., 5000000) and override within deploy function
  // const gasLimit = 5000000;
  // const contract = await contractFactory.deploy({ gasLimit }); // STOP here! Wait for contract to deploy

  // // Wait one block to make sure our contract is attached to the chain after it is deployed
  // const deploymentReceipt = await contract.deployTransaction.wait(1);

  console.log("Let's deploy with only transaction data!");
  const nonce = await wallet.getTransactionCount();
  const tx = {
    // number only used once is the number of the next transaction from Ganache
    nonce: nonce,
    gasPrice: 20000000000,
    gasLimit: 5000000,
    to: null,
    value: 0,
    // 0x + binary object from SimpleStorage
    data: "0x608060405234801561000f575f80fd5b506108f78061001d5f395ff3fe608060405234801561000f575f80fd5b5060043610610055575f3560e01c80636057361d146100595780636f760f41146100755780638bab8dd5146100915780639e7a13ad146100c1578063b05784b8146100f2575b5f80fd5b610073600480360381019061006e91906102d0565b610110565b005b61008f600480360381019061008a9190610437565b610119565b005b6100ab60048036038101906100a69190610491565b6101a2565b6040516100b891906104e7565b60405180910390f35b6100db60048036038101906100d691906102d0565b6101cf565b6040516100e992919061057a565b60405180910390f35b6100fa610284565b60405161010791906104e7565b60405180910390f35b805f8190555050565b5f6040518060400160405280838152602001848152509050600281908060018154018082558091505060019003905f5260205f2090600202015f909190919091505f820151815f0155602082015181600101908161017791906107a2565b5050508160018460405161018b91906108ab565b908152602001604051809103902081905550505050565b6001818051602081018201805184825260208301602085012081835280955050505050505f915090505481565b600281815481106101de575f80fd5b905f5260205f2090600202015f91509050805f015490806001018054610203906105d5565b80601f016020809104026020016040519081016040528092919081815260200182805461022f906105d5565b801561027a5780601f106102515761010080835404028352916020019161027a565b820191905f5260205f20905b81548152906001019060200180831161025d57829003601f168201915b5050505050905082565b5f8054905090565b5f604051905090565b5f80fd5b5f80fd5b5f819050919050565b6102af8161029d565b81146102b9575f80fd5b50565b5f813590506102ca816102a6565b92915050565b5f602082840312156102e5576102e4610295565b5b5f6102f2848285016102bc565b91505092915050565b5f80fd5b5f80fd5b5f601f19601f8301169050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b61034982610303565b810181811067ffffffffffffffff8211171561036857610367610313565b5b80604052505050565b5f61037a61028c565b90506103868282610340565b919050565b5f67ffffffffffffffff8211156103a5576103a4610313565b5b6103ae82610303565b9050602081019050919050565b828183375f83830152505050565b5f6103db6103d68461038b565b610371565b9050828152602081018484840111156103f7576103f66102ff565b5b6104028482856103bb565b509392505050565b5f82601f83011261041e5761041d6102fb565b5b813561042e8482602086016103c9565b91505092915050565b5f806040838503121561044d5761044c610295565b5b5f83013567ffffffffffffffff81111561046a57610469610299565b5b6104768582860161040a565b9250506020610487858286016102bc565b9150509250929050565b5f602082840312156104a6576104a5610295565b5b5f82013567ffffffffffffffff8111156104c3576104c2610299565b5b6104cf8482850161040a565b91505092915050565b6104e18161029d565b82525050565b5f6020820190506104fa5f8301846104d8565b92915050565b5f81519050919050565b5f82825260208201905092915050565b5f5b8381101561053757808201518184015260208101905061051c565b5f8484015250505050565b5f61054c82610500565b610556818561050a565b935061056681856020860161051a565b61056f81610303565b840191505092915050565b5f60408201905061058d5f8301856104d8565b818103602083015261059f8184610542565b90509392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f60028204905060018216806105ec57607f821691505b6020821081036105ff576105fe6105a8565b5b50919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f600883026106617fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610626565b61066b8683610626565b95508019841693508086168417925050509392505050565b5f819050919050565b5f6106a66106a161069c8461029d565b610683565b61029d565b9050919050565b5f819050919050565b6106bf8361068c565b6106d36106cb826106ad565b848454610632565b825550505050565b5f90565b6106e76106db565b6106f28184846106b6565b505050565b5b818110156107155761070a5f826106df565b6001810190506106f8565b5050565b601f82111561075a5761072b81610605565b61073484610617565b81016020851015610743578190505b61075761074f85610617565b8301826106f7565b50505b505050565b5f82821c905092915050565b5f61077a5f198460080261075f565b1980831691505092915050565b5f610792838361076b565b9150826002028217905092915050565b6107ab82610500565b67ffffffffffffffff8111156107c4576107c3610313565b5b6107ce82546105d5565b6107d9828285610719565b5f60209050601f83116001811461080a575f84156107f8578287015190505b6108028582610787565b865550610869565b601f19841661081886610605565b5f5b8281101561083f5784890151825560018201915060208501945060208101905061081a565b8683101561085c5784890151610858601f89168261076b565b8355505b6001600288020188555050505b505050505050565b5f81905092915050565b5f61088582610500565b61088f8185610871565b935061089f81856020860161051a565b80840191505092915050565b5f6108b6828461087b565b91508190509291505056fea2646970667358221220bb702084561f81204ae98ca34fffce80843aa6b28e3fbc842445e93150c32e7c64736f6c63430008140033",
    // Ganache ChainId 5777 seems to have issues. use 1337 instead
    chainId: 1337,
  };
  const sentTxResponse = await wallet.sendTransaction(tx);
  await sentTxResponse.wait(1);
  console.log(sentTxResponse);
}

//to compile the code, we need the ABI and the Binary compiled code of the contract
// Use fs to read from SimpleStorage_sol_SimpleStorage.abi and SimpleStorage_sol_SimpleStorage.bin

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
