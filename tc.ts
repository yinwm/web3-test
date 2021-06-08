import Web3 from 'web3';

const projectId = '424176d4351b4a83ac7ea415b02e941f';
const provider = new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/" + projectId);

const web3 = new Web3(provider);

web3.eth.net.isListening()
   .then(() => console.log('web3 is connected'))
   .catch(e => console.log('Wow. Something went wrong'));


const abi = require('./1_Storage.abi.json');
// const abi =[{"inputs":[],"name":"retrieve","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"num","type":"uint256"}],"name":"store","outputs":[],"stateMutability":"nonpayable","type":"function"}];

// console.log(abi)

const contract_Address="0x8784555edd2ebdc887b5ea9d1bc252c4295214c9";
const contract = new web3.eth.Contract(abi, contract_Address);

contract.methods.retrieve().call().then(console.log);


