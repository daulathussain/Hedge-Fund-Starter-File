export const NETWORKS = {
  localhost: {
    name: "Localhost",
    chainId: "0x7A69",
    rpcUrl: "http://127.0.0.1:8545/",
  },
  holesky: {
    name: "Holesky",
    chainId: "0x4268",
    rpcUrl: process.env.NEXT_PUBLIC_HOLESKY_RPC_URL,
  },
};

export const ANNUAL_RETURN_RATE = 10; // 10% annual return
export const INVESTMENT_DURATION = 365; // 365 days

export const TRANSACTION_STATES = {
  PENDING: "PENDING",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
};

export const ERROR_MESSAGES = {
  WALLET_CONNECTION: "Please connect your wallet to continue",
  NETWORK_ERROR: "Please switch to a supported network",
  INSUFFICIENT_BALANCE: "Insufficient balance",
  MINIMUM_INVESTMENT: "Amount below minimum investment",
  TRANSACTION_FAILED: "Transaction failed. Please try again",
};

export const SUCCESS_MESSAGES = {
  INVESTMENT_CREATED: "Investment successfully created",
  WITHDRAWAL_COMPLETE: "Withdrawal successfully processed",
  MANAGER_WITHDRAWAL: "Manager withdrawal successful",
};
