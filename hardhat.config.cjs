require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    hardhat: {
      initialBaseFeePerGas: 1_000_000_000, // 1 gwei
      chainId: 31337,
    },
    localhost: {
      url: "http://127.0.0.1:8545",
      chainId: 31337,
    },
    classnet: {
      url: process.env.RPC_URL,
      chainId: Number(process.env.CHAIN_ID),
      accounts: [process.env.PRIVKEY],
    },
  },
};


