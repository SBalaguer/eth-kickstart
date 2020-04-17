const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");

const OPTIONS = {
  defaultBlock: "latest",
  transactionConfirmationBlocks: 1,
  transactionBlockTimeout: 5,
};

const provider = ganache.provider();
const web3 = new Web3(provider, null, OPTIONS);

const compiledFactory = require("../ethereum/build/CampaignFactory.json");
const compiledCampaign = require("../ethereum/build/Campaign.json");

let accounts;
let factory;
let campaignAddress;
let campaign;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();

  factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({ from: accounts[0], gas: "1000000" });

  await factory.methods.createCampaign("100").send({ from: accounts[0], gas: "1000000" });

  [campaignAddress] = await factory.methods.getCampaigns().call(); //this assigns the first element of the return and is assigned to the variable.
  campaign = await new web3.eth.Contract(JSON.parse(compiledCampaign.interface), campaignAddress); //this is to get a contract that already exists!
});

describe("Campaigns", () => {
  it("deploys a factory and a campaign", () => {
    assert.ok(factory.options.address);
    assert.ok(campaign.options.address);
  });

  it("marks caller as the campaign manager", async () => {
    const manager = accounts[0];
    const managerInCampaign = await campaign.methods.manager().call();
    assert.equal(managerInCampaign, manager);
  });

  it("allows people to contribute money and marks them as approvers", async () => {
    await campaign.methods.contribute().send({
      value: "200",
      from: accounts[1],
    });

    const isContributor = await campaign.methods.approvers(accounts[1]).call();
    assert(isContributor);
  });

  it("requires a minimum contribution", async () => {
    try {
      await campaign.methods.contribute.send({
        value: "5",
        from: accounts[1],
      });
      assert(false);
    } catch (error) {
      assert(error);
    }
  });

  it("allows a manager to make a payment request", async () => {
    await campaign.methods.createRequest("Buy batteries", "100", accounts[1]).send({
      from: accounts[0],
      gas: "1000000",
    });

    const request = await campaign.methods.requests(0).call();
    //console.log(request);
    assert.equal("Buy batteries", request.description);
    assert.equal("100", request.value);
    assert.equal(accounts[1], request.recipient);
  });

  it("process requests", async () => {
    //we put ourselves as contributors
    await campaign.methods.contribute().send({
      from: accounts[0],
      value: web3.utils.toWei("10", "ether"),
    });
    //we create a request
    await campaign.methods
      .createRequest("Testing", web3.utils.toWei("5", "ether"), accounts[1])
      .send({
        from: accounts[0],
        gas: "1000000",
      });
    //we approve the request
    await campaign.methods.approveRequest(0).send({
      from: accounts[0],
      gas: "1000000",
    });
    //we finalize the request
    await campaign.methods.finalizeRequest(0).send({
      from: accounts[0],
      gas: "1000000",
    });

    let balance = await web3.eth.getBalance(accounts[1]);
    balance = web3.utils.fromWei(balance, "ether");
    balance = parseFloat(balance);

    assert(balance > 104); //maybe it would be better to check the balance at the beggining
  });

  it("returns all the contracts info", async () => {
    const manager = accounts[0];
    const managerInCampaign = await campaign.methods.manager().call();

    const result = await campaign.methods.getSummary().call();
    console.log(result);
    assert.equal(result["4"], accounts[0]);
  });
});
