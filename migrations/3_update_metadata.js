var Metadata = artifacts.require('./Metadata.sol')
var BrandoToken = artifacts.require('./BrandoToken.sol')

let _ = '        '

module.exports = (deployer, helper, accounts) => {

  deployer.then(async () => {
    try {
      // Deploy Metadata.sol
      await deployer.deploy(Metadata, {replace: true})
      let metadata = await Metadata.deployed()
      console.log(_ + 'Metadata deployed at: ' + metadata.address)

     // Deploy BrandoToken.sol
     let token = await BrandoToken.deployed()
     console.log(_ + 'BrandoToken deployed at: ' + token.address)

     await token.updateMetadata(metadata.address)
     console.log(_ + 'BrandoToken metadata updated to ' + metadata.address)
     

    } catch (error) {
      console.log(error)
    }
  })
}