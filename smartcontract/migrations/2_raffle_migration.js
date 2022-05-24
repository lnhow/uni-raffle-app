require('dotenv').config();

const PrizeRaffle = artifacts.require("PrizeRaffle");

const NAME = 'Prize';
const SYMBOL = 'P';
const END_TIME = new Date('31 October 2022 00:00 UTC');
const END_TIME_IN_SEC = Math.floor(END_TIME.getTime() / 1000);
const INITIAL_EMPTY_POOL_SIZE = 0;

module.exports = function (deployer) {
  deployer.deploy(PrizeRaffle, NAME, SYMBOL, END_TIME_IN_SEC, INITIAL_EMPTY_POOL_SIZE);
};
