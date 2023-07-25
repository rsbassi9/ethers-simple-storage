// Script to encrypt the private Key, so that it no longer shows up if the code is shared

const ethers = require("ethers")
const fs = require("fs")
require("dotenv").config()

async function main() {
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY)
    // encrypt() returns an encrypted json key that is stored locally. we can only decrypt it using a password
    const encryptedJsonKey = await wallet.encrypt(
        process.env.PRIVATE_KEY_PASSWORD,
        process.env.PRIVATE_KEY,
    )

    console.log(encryptedJsonKey)

    // save to a new file, and pass it the encryptedKey we just made
    fs.writeFileSync("./.encryptedKey.json", encryptedJsonKey)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
