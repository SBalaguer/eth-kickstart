"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require("web3");

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OPTIONS = {
  defaultBlock: "latest",
  transactionConfirmationBlocks: 1,
  transactionBlockTimeout: 5
};

// const web3 = new Web3(window.ethereum, null, OPTIONS); //the copy of web3 that is comming from metamask
// window.ethereum.enable();

//This file has all of the web3 config that we need.

var web3 = void 0;
if (typeof window !== "undefined" && window.ethereum !== "undefined") {
  //in here we will see if we are in the browser and the user has metamask

  //console.log("im running");
  web3 = new _web2.default(window.ethereum, null, OPTIONS); //the copy of web3 that is comming from metamask
  window.ethereum.enable();
} else {
  //We are in the server or the user is not running metamask.
  //We will generate our own provider with infura to get to Rinkeby.
  var provider = new _web2.default.providers.HttpProvider("https://mainnet.infura.io/v3/33af1f3b3ca349f18a174b639d069e81");
  web3 = new _web2.default(provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsIk9QVElPTlMiLCJkZWZhdWx0QmxvY2siLCJ0cmFuc2FjdGlvbkNvbmZpcm1hdGlvbkJsb2NrcyIsInRyYW5zYWN0aW9uQmxvY2tUaW1lb3V0Iiwid2ViMyIsIndpbmRvdyIsImV0aGVyZXVtIiwiZW5hYmxlIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJIdHRwUHJvdmlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLEFBQU87Ozs7OztBQUVQLElBQU07Z0JBQVUsQUFDQSxBQUNkO2lDQUZjLEFBRWlCLEFBQy9COzJCQUhGLEFBQWdCLEFBR1c7QUFIWCxBQUNkOztBQUtGO0FBQ0E7O0FBWEE7O0FBYUEsSUFBSSxZQUFKO0FBQ0EsSUFBSSxPQUFBLEFBQU8sV0FBUCxBQUFrQixlQUFlLE9BQUEsQUFBTyxhQUE1QyxBQUF5RDtBQUd2RDs7QUFDQTtTQUFPLEFBQUksa0JBQUssT0FBVCxBQUFnQixVQUFoQixBQUEwQixNQUptQyxBQUlwRSxBQUFPLEFBQWdDLFNBSjZCLEFBQ3BFLENBR2lELEFBQ2pEO1NBQUEsQUFBTyxTQUFQLEFBQWdCLEFBQ2pCO0FBTkQsT0FNTyxBQUNMO0FBQ0E7QUFDQTtNQUFNLFdBQVcsSUFBSSxjQUFBLEFBQUssVUFBVCxBQUFtQixhQUFwQyxBQUFpQixBQUNmLEFBRUY7U0FBTyxBQUFJLGtCQUFYLEFBQU8sQUFBUyxBQUNqQjtBQUVEOztrQkFBQSxBQUFlIiwiZmlsZSI6IndlYjMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3NhbnRpYWdvZWJhbGFndWVyL2lyb25oYWNrL2NvbnRpbnVvcy1sZWFybmluZy9ldGgtc29saWRpdHkva2lja3N0YXJ0In0=