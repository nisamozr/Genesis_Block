const Token  = artifacts.require("Token.sol");

module.exports = function(_deployer) {
  // Use deployer to state migration tasks.
  _deployer.deploy(Token, 1000000);
};
