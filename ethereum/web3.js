//This file has all of the web3 config that we need.

import Web3 from "web3";

const OPTIONS = {
  defaultBlock: "latest",
  transactionConfirmationBlocks: 1,
  transactionBlockTimeout: 5,
};

// const web3 = new Web3(window.ethereum, null, OPTIONS); //the copy of web3 that is comming from metamask
// window.ethereum.enable();

let web3;
if (typeof window !== "undefined" && window.ethereum !== "undefined") {
  //in here we will see if we are in the browser and the user has metamask

  //console.log("im running");
  web3 = new Web3(window.ethereum, null, OPTIONS); //the copy of web3 that is comming from metamask
  window.ethereum.enable();
} else {
  //We are in the server or the user is not running metamask.
  //We will generate our own provider with infura to get to Rinkeby.
  const provider = new Web3.providers.HttpProvider(
    "https://mainnet.infura.io/v3/33af1f3b3ca349f18a174b639d069e81"
  );
  web3 = new Web3(provider);
}

export default web3;
