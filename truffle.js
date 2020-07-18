const path = require('path')
const HDWalletProvider = require('truffle-hdwallet-provider')
// ganache wallet - DO NOT USE IN PRODUCTION
const mnemonic = () => {
    return process.env.MNEMONIC || 'day behind kiss talent bonus unfold expire hidden sorry culture collect layer'
}
// address '0: 0x3Ed68019F385A51FA92E6e1009C4Afa2e4Cc3e1F

const ONE_GWEI = 1000000000

module.exports = {

  plugins: ["truffle-security"],

   networks: {
        development: {
            host: "localhost",
            port: 8545,
            network_id: "*", // Match any network id
            gasPrice: 1,
            gas: 8000029
        },
        ropsten: {
            provider: function() {
                return new HDWalletProvider(mnemonic(), 'https://ropsten.infura.io/v3/cab9930f8ed349d0b3a3b9bba5a00bd5')
            },
            network_id: 3,
            gas: 8000029,
            gasPrice: 1 * ONE_GWEI
        },
        kovan: {
            provider: function() {
                return new HDWalletProvider(mnemonic(), 'https://kovan.infura.io/v3/26f99ccfafad4957abdf77c323779acc')
            },
            network_id: 42,
            gas: 9000000,
            gasPrice: 2 * ONE_GWEI
        },
        mainnet: {
            provider: function() {
                return new HDWalletProvider(mnemonic(), 'https://mainnet.infura.io/v3/cab9930f8ed349d0b3a3b9bba5a00bd5')
            },
            network_id: 1,
            gas: 6000000,
            gasPrice: 14 * ONE_GWEI
        },
        rsk_testnet: {
            provider: function() {
                return new HDWalletProvider(mnemonic(), 'http://35.182.141.145:4444')
            },
            network_id: '*',
            gasPrice: 59250000
        },
        rsk_local: {
            provider: function() {
                return new HDWalletProvider(mnemonic(), 'http://localhost:4444')
            },
            network_id: '*',
            gasPrice: 59250000
        }
    }
};
