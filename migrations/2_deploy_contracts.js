var Metadata = artifacts.require('./Metadata.sol')
var BrandoToken = artifacts.require('./BrandoToken.sol')

let _ = '        '

module.exports = (deployer, helper, accounts) => {

  deployer.then(async () => {
    try {
      // Deploy Metadata.sol
      await deployer.deploy(Metadata)
      let metadata = await Metadata.deployed()
      console.log(_ + 'Metadata deployed at: ' + metadata.address)

     // Deploy BrandoToken.sol
      await deployer.deploy(BrandoToken, 'BrandoToken Name', 'BrandoToken Symbol', metadata.address)
      let token = await BrandoToken.deployed()
      console.log(_ + 'BrandoToken deployed at: ' + token.address)

    } catch (error) {
      console.log(error)
    }
  })
}