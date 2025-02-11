const { ethers } = require("hardhat");
const fs = require("fs");
const path = require("path");

const MANAGER2_ADDRESS = process.env.MANAGER2_ADDRESS;

const TOKEN_NAME = process.env.TOKEN_NAME;
const TOKEN_SYMBOL = process.env.TOKEN_SYMBOL;
const TOKEN_INITIAL_SUPPLY = process.env.TOKEN_INITIAL_SUPPLY;
const ICO_DURATION = process.env.ICO_DURATION;
const INITIAL_HEDGE_FUND_TOKENS = process.env.INITIAL_HEDGE_FUND_TOKENS;
const MINIMUM_INVESTMENT = process.env.MINIMUM_INVESTMENT;
