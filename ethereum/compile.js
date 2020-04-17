const path = require("path");
const solc = require("solc");
const fs = require("fs-extra"); //this we changed it so that we could build the Build folder.

const buildPath = path.resolve(__dirname, "build");
fs.removeSync(buildPath); //removes the folder and everyting inside.
const campaignPath = path.resolve(__dirname, "contracts/Campaign.sol");
const source = fs.readFileSync(campaignPath, "utf-8");
const output = solc.compile(source, 1).contracts; // there are two objects, one for the campaign and one for the factory!
fs.ensureDirSync(buildPath);

for (let contract in output) {
  //contract is the key of an object that is the return from the solc.compile!
  fs.outputJSONSync(path.resolve(buildPath, `${contract.replace(":", "")}.json`), output[contract]);
}
