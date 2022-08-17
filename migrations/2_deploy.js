// migrations/2_deploy.js
const Sphinx = artifacts.require('Sphinx');
const _solution1 = '0x22f7d115ef96740bf3a77468dd73a483994e10cdc418a7caa7c5bc76202f085a';
const _solution2 = '0xcb120632fb98fe42ef0cdcbc3d00d0a7bbf4a892c2f42b1e0fcd4d739cd24c0e';
const _solution3 = '0x8e91a17937ade759877f93c3b7b3264c84ecd1da53976cb63b173a78e4410556';

module.exports = async function (deployer) {
  await deployer.deploy(Sphinx, _solution1, _solution2, _solution3);
};