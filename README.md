# Kickstart

Kickstart is a **personal learning** experience to create a Smart Contract using Solidity. The front end was built with ReactJS and Next JS, while testing was done with Mocha.

The project mimics a crowdfunding platform where each project is a contract in itself. Those who back up the project have the right to vote on the proposed spending from the owner of the project.

> The sole purpose of this project is to learn, and it's far from production ready.

The project runs on the ETH Rinkeby Test Network.

## Installation

Since this project is for learning purposes only, there is no production script. Download/Fork the repository and run the following commands.
Process will run in port 3000.

```bash
npm install

Deploy Contract
add your own infura rinkeby API link in deploy.js
add your own mnemonic key in deploy.js

Creat Instance of Contract
add your deployed address in factory.js

npm run dev
```

## Main Characteristics

### Project Contracts created with a Factory Contract

Every single project is a contract in itself, however I have deployed into the Rinkeby network a contract that acts as a factory creating a contract for every single project. That was a workaround for not having to share the contracts code with everyone who wanted to create a project, not having to pay gas myself for every project creation.

### Owner submits requests and backers need to approve

The contract logic is build so that the owner needs to have >50% of positive votes so as to execute requests. These requests are ETH transfer from the contract's balance to another ETH Address and can only be performed by the contracts owner.

## Final Thoughts

This was a very interesting experience to learn how to program in Solidity and to mix that up with ReactJS in the front end.

- On Solidity and Smart Contracts
  - Building contracts with solidity could be taught at world-know coding bootcamps. It could be thought as another _backend approach_.
  - Smart Contracts are already showing their importance to the world, however every application could leverage on them to improve security. Things are not black and white and people could use a combination of own servers and ETH as a transition to a more secure and decentralized internet.
- On the Project
  - The project still needs to more validations to make it bullet proof.
  - The UX/UI needs improvement to make it nicer. Having the address of the project's contract is not useful for normal users.
  - Although far from production ready, still it was a very useful learning experience.
