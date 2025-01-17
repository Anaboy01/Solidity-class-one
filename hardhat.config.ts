import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

import { vars } from "hardhat/config";

const ALCHEMY_API_KEY = vars.get("ALCHEMY_API_KEY");
const ETHERSCAN_API_KEY = vars.get("ETHERSCAN_API_KEY");

// const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY

const config: HardhatUserConfig = {
  solidity: "0.8.27",

  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: vars.has("PIVATE_KEY") ? [vars.get("PIVATE_KEY")] : [],
    },
  },
  etherscan:{
    apiKey: ETHERSCAN_API_KEY,
  }
};

export default config;



//
