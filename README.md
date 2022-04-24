# Arbie
## Swap Relay Contract

1. This contract is designed to relay arbitrage trades between UniswapV2 and Sushiswap from a MM Snap.
2. The deployment script will do the following:
    - mint token A and token B to the deployer address
    - create token A & token B pairs on UniswapV2 and Sushiswap
    - deploy the relay contract
3. Steps to deploy these contracts on your own:
    - Add an .env file locally and update it to include a MNEMONIC field.
    - Run `yarn hardhat run --network rinkeby scripts/deploy.js`
