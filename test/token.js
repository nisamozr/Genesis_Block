const token = artifacts.require("Token.sol");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("token", function (accounts ) {
  // it("should assert true", async function () {
  //   await token.deployed();
  //   return assert.isTrue(true);
  // });
  it("TotalSupply initialisation upon deployment", async ()=>{
    await token.deployed().then(instance=>{
      tokenInstance = instance;
      return tokenInstance.totalSupply();
    }).then(totalSupply=>{
      assert.equal(totalSupply.toNumber(),1000000, 'set totalsupply to 10000000')
      return tokenInstance.balanceof(accounts[0]);
    }).then(adminAccountBalance=>{
      assert.equal(adminAccountBalance.toNumber(),1000000,"adiminBalace not ")
    })
  })

  it("transfer token ",async()=>{
   await token.deployed().then(instance=>{
      tokenInstance = instance;
      return tokenInstance.transfer.call(accounts[0],999999999999);
    }).then(assert.fail).catch(error=>{
      assert(error.message.indexOf('revert') >= 0, 'error massef contain rever massage')
      return tokenInstance.Transfer.Call(accounts[1],250000, {from: accounts[0]})
    }).then(recipt=>{
      return tokenInstance.balanceof(accounts[1]);
    }).then(balance=>{
      assert.equal(balance.toNumber(),250000, "add the number to the resvie account")
      return tokenInstance.balanceof(accounts[0]);
    }).then(balance=>{
      assert.equal(balance.toNumber(),75000000,"hhd")
    })
  })

});
