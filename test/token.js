const token = artifacts.require("Token.sol");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("token", function (/* accounts */) {
  it("should assert true", async function () {
    await token.deployed();
    return assert.isTrue(true);
  });
  it("TotalSupply initialisation upon deployment", async ()=>{
    await token.deployed().then(instance=>{
      tokenInstance = instance;
      return tokenInstance.totalSupply();
    }).then(totalSupply=>{
      assert.equal(totalSupply.toNumber(),1000000, 'set totalsupply to 10000000')
    })
  })

});
