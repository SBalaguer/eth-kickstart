import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x5a288d15116dc30bc3439c1a798fdee5414a5f10"
);

export default instance;
