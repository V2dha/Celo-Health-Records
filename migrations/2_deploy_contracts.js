var Healthrecords = artifacts.require('Healthrecords')

module.exports = function(deployer) {
  deployer.deploy(Healthrecords)
}