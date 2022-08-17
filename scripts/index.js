// scripts/index.js
module.exports = async function main (callback) {
    try {
        // Retrieve accounts from the local node
        const accounts = await web3.eth.getAccounts();
        const Sphinx = artifacts.require('Sphinx');
        
        callback(0);
    } catch (error) {
        console.error(error);
        callback(1);
    }
};