/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const fs = require("fs");
const path = require("path");
require("@nomiclabs/hardhat-ethers");
require("@nomicfoundation/hardhat-chai-matchers");
require("@nomicfoundation/hardhat-verify");

module.exports = {
  networks: {
    hardhat: {},
    buildbear:{
      url:"<YOUR RPC URL>"
    }
  },
  sourcify: {
    enabled: true,
    apiUrl: "https://rpc.buildbear.io/verify/sourcify/server/<YOUR NODE ID>"
  },
   etherscan:{
    enabled: false,
  },
  solidity: {
    compilers: [
      {
        version: "0.8.16",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.7.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.8.4",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.8.9",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.5.0",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.8.13",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.5.5",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
 
  paths: {
    sources: "./contracts",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  mocha: {
    timeout: 20000000000,
  },
};
