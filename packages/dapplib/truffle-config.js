require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give prison obtain suggest name rescue still hub include arch orange gasp'; 
let testAccounts = [
"0x96e8bdbdedf991fd45f1347a1db4d047628a7cbbf62d86213d638d13cfa4b6b2",
"0x4b34e3c1a98a1bf28125fba19f428828300f2adcb1a7dc1cd4f490901e225ec7",
"0xf5f2f62e923cb374ace1a8c9ab072ea9b35b4013f8ba9d6ef5f04a667f92f059",
"0x895efb47b2b262ea1be1c70a2c499dd10388910e0e8624a76bda9c3a41a2c27e",
"0xe3d5495a7280227f82667c2664ca8d69b5e7d307d8ca3dc6b5ea71bbd08fa504",
"0xa67512e4d015d83f00c90332f6d86b24b0b7957c952af4c2e21df7a3e8a81da3",
"0x3b11c6e6a95a946fd748b8aada10f1452858608e765045e5218983f9bb93cee1",
"0x30cb30b79a514a43aee7cfc9e847e15666bccffe980d94413e2352ea6eaf973f",
"0xf3aeafaa20bb3bec8abeeb25bee089796713c9b65db659bf8b2abf58ec9f0606",
"0xafeafccedf2d158f7352111ce39ad8a442887bd356f789655bacc7051559f48d"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

