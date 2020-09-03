const { scripts, ConfigManager } = require('@openzeppelin/cli');
const { add, push, create } = scripts;
const {publicKey} = require("../privatekey")

async function deploy(options) {
  add({ contractsData: [
    { name: 'LidTimeLock', alias: 'LidTimeLockEcosystem' },
    { name: 'LidTimeLock', alias: 'LidTimeLockFee' }
  ] });
  options.force = true;
  await push(options);
  await create(Object.assign({ contractAlias: 'LidTimeLockEcosystem' }, options));
  await create(Object.assign({ contractAlias: 'LidTimeLockFee' }, options));
}

module.exports = function(deployer, networkName, accounts) {
  deployer.then(async () => {
    let account = accounts[0]
    const { network, txParams } = await ConfigManager.initNetworkConfiguration({ network: networkName, from: account })
    await deploy({ network, txParams })
  })
}
