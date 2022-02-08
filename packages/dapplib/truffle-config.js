require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enroll other venture strike rival magic hub harvest cricket obscure viable'; 
let testAccounts = [
"0x128aaba6c9e6ccfa50db3a53f37f6f72bfc61243464a31b0968f989492f0b29a",
"0xe23e2415a312d41ce65fc116297d94f8074c4bff5e530d23e4ff4e8d514b99af",
"0xf0c6ec76896600609e44cb773985ef9104b57f7e44976f2b6ca7fbc95b183731",
"0xd38db1d74d4aea27fe071ac4d31f4030e74256928d69290e526dbfb0a1511404",
"0x2cf0e4471e977d5b949610f235491f57d7bc14cfcc6bf5bd4915b3017cd9f0cd",
"0xf40f3031b37aaca79a6ecf4cd81aaccdc5ea313504d8193649453cd047fe6bd3",
"0x3a869ac6d49c90923e45a218df7bdb190b1891dab20be050bcf202e9f8a1ecf4",
"0x7b00f2ec53d8cb320cc20ef50a061ff91c0caa87e02b9777963b63132425068c",
"0xce7a543ddaf772a5be5c1b343d2e20558b9174544d713d7e3127abb6654f8eba",
"0x8a8b746e7bb16c8fc36d80ba44fb784af13a3f9da3fe41b24d8730becf1f7ab1"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


