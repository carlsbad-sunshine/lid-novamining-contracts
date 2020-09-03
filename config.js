const { ether, BN } = require("@openzeppelin/test-helpers");

let config = {};

config.timer = {
  startTime: 1598673600,
  hardCapTimer: 172800,
  softCap: ether("4000"),
};

config.redeemer = {
  redeemBP: 200,
  redeemInterval: 3600,
  bonusRangeStart: [
    ether("0"),
    ether("2000"),
    ether("3500"),
    ether("5000")
  ],
  bonusRangeBP: [1000, 500, 250, 0],
};

config.presale = {
  maxBuyPerAddress: ether("50"),
  maxBuyWithoutWhitelisting: ether("50"),
  uniswapEthBP: 7500,
  lidEthBP: 500,
  referralBP: 250,
  hardcap: ether("6500"),
  token: "0xd9A6803f41A006CBf389f21e55D7A6079Dfe8DF3",
  uniswapRouter: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
  lidFund: "0xb63c4F8eCBd1ab926Ed9Cb90c936dffC0eb02cE2",
  access: "0x6eF6d87C9000E4952341B49208f5238EAFbdEbE9"
};

module.exports = config;
