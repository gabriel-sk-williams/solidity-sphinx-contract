const { alchemyApiKey, mnemonic } = require('./scripts/env.json');
const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {

  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
     },

    goerli: {
      provider: () => new HDWalletProvider(
        mnemonic, `https://eth-goerli.g.alchemy.com/v2/${alchemyApiKey}`,
      ),
      network_id: 5,
      skipDryRun: true,
    },

    mainnet: {
      provider: () => new HDWalletProvider(
        mnemonic, `https://eth-mainnet.g.alchemy.com/v2/${alchemyApiKey}`,
      ),
      network_id: 1, //5 for goerli
      skipDryRun: true,
    },
  },

  mocha: {
    // timeout: 100000
  },

  compilers: {
    solc: {
      version: "0.8.16",
    }
  },
};
