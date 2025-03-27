require("@nomiclabs/hardhat-ethers")
require("dotenv").config()
require("hardhat-gas-reporter")
module.exports = {
  solidity: "0.8.28",
  gasReporter: {
    enabled: true,
    currency: "USD",
    coinmarketcap: "d4ea4554-3cca-46d6-b46a-03fe94ae8d89",
    // gasPriceApi:"https://pro-
// provides real-time cryptocurrency market data, including price, market cap, volume, and exchange rates. 
//api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=d4ea4554-3cca-46d6-b46a-03fe94ae8d89",
//This helps track gas costs, execution times, and estimated transaction fees.
    gasPriceApi:`https://api.etherscan.io/api?module=proxy&action=eth_gasPrice&apikey=${process.env.API_KEY}`

  },
  networks: {
    localhost:{
      url:"http://127.0.0.1:8545"
    }
  },
};
