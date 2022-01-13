import Web3 from "web3";

const stakingContractAddress = "0x13dF370f0d99f65031E155737c78a88c2EcA53d4";
const tokenContractAddress = "0xA6f4d3105bFE3BC5F8625007234A19FF4eA8d26d";

const stakingContractAbi = require("../abi/contract.json");
const tokenContractAbi = require("../abi/tokenabi.json");

const createWeb3Instance = (web3Provider) => {
  return new Web3(web3Provider);
};
const createStakingContractInstance = (web3) => {
  return new web3.eth.Contract(stakingContractAbi, stakingContractAddress);
};

const createTokenContractInstance = (web3) => {
  return new web3.eth.Contract(tokenContractAbi, tokenContractAddress);
};

const humanReadableAccount = (account) => {
  return account.slice(0, 6) + "..." + account.slice(account.length - 4);
};

export {
  stakingContractAddress,
  createWeb3Instance,
  createStakingContractInstance,
  createTokenContractInstance,
  humanReadableAccount,
};
