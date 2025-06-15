# Archived
# raffle

A blockchain-based random game

- 18120304 - Võ Văn Hoàng Danh
- 18120312 - Trần Hoàng Đạt
- 18120355 - Lê Nguyên Hào

## Notes

- `/client`: React client app
- `/smartcontract`: Truffle-Infura deploy solidity contract

### Client app `/client`

- Environment variables: `.env`
  - REACT_APP_CONTRACT_ADDRESS: Address that point to deployed contract (Default: 0x16C934C1eDF0F6c16907086BC7e840478B87d363)
  - REACT_APP_NETWORK_URL: URL to etherscan of the network that the deployed contract (Default: https://rinkeby.etherscan.io/)
- Install dependencies: `npm install`
- Start running app: `npm run start`

### Contract `/smartcontract`

`truffle-config.js` is set up to deploy on rinkeby testnet

- Environment variables: `.env`
  - SECRET_KEY_1: Private key of the to-be-deployed contract's owner
  - INFURA_API_URL: Infura API URL
- Install dependencies: `npm install`
- Deploy contract: `npm run migrate:rinkeby`
- Force deploy contract: `npm run migrate-forced:rinkeby`
- Notes:
  - If deploy fail, try to adjust gas limit in `truffle-config.js`
  - Initial contract deploy params can be adjust in `/migration/2_raffle_migration.js`

## References

- https://github.com/kiraAdi/Blockchain-based-Smart-Contract-Digitized-Lottery-Scheme-/blob/main/Contracts/ChainLottery.sol
- https://github.com/PortalNetwork/nifty-game
- https://github.com/jspruance/block-explorer-tutorials/tree/main/apps/Lottery
