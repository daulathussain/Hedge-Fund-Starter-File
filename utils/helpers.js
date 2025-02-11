import { ethers } from "ethers";
import { NETWORKS } from "./constants";

export const shortenAddress = (address) => {
  if (!address) return "";
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

export const formatEther = (value) => {
  if (!value) return "0";
  try {
    return parseFloat(ethers.utils.formatEther(value)).toFixed(6);
  } catch (error) {
    console.error("Error formatting ether:", error);
    return "0";
  }
};

export const parseEther = (value) => {
  if (!value) return ethers.BigNumber.from(0);
  try {
    return ethers.utils.parseEther(value.toString());
  } catch (error) {
    console.error("Error parsing ether:", error);
    return ethers.BigNumber.from(0);
  }
};

export const calculateTimeRemaining = (endTime) => {
  const now = Math.floor(Date.now() / 1000);
  const timeLeft = endTime - now;

  if (timeLeft <= 0) return "Matured";

  const days = Math.floor(timeLeft / 86400);
  const hours = Math.floor((timeLeft % 86400) / 3600);

  if (days > 0) {
    return `${days} days ${hours} hours`;
  }
  return `${hours} hours`;
};

export const formatDate = (timestamp) => {
  return new Date(timestamp * 1000).toLocaleDateString();
};

export const calculateExpectedReturn = (amount, annualRate) => {
  return amount.mul(annualRate).div(100);
};

export const switchNetwork = async (provider, targetNetwork) => {
  try {
    await provider.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: NETWORKS[targetNetwork].chainId }],
    });
    return true;
  } catch (error) {
    if (error.code === 4902) {
      try {
        await provider.request({
          method: "wallet_addEthereumChain",
          params: [
            {
              chainId: NETWORKS[targetNetwork].chainId,
              rpcUrls: [NETWORKS[targetNetwork].rpcUrl],
              chainName: NETWORKS[targetNetwork].name,
              nativeCurrency: {
                name: "ETH",
                symbol: "ETH",
                decimals: 18,
              },
            },
          ],
        });
        return true;
      } catch (addError) {
        console.error("Error adding network:", addError);
        return false;
      }
    }
    console.error("Error switching network:", error);
    return false;
  }
};

export const validateInvestmentAmount = (
  amount,
  minimumInvestment,
  balance
) => {
  if (!amount || amount <= 0) {
    return "Please enter a valid amount";
  }

  const amountBN = parseEther(amount);
  if (amountBN.lt(minimumInvestment)) {
    return "Amount below minimum investment";
  }

  if (amountBN.gt(balance)) {
    return "Insufficient balance";
  }

  return null;
};

export const handleError = (error) => {
  if (error?.data?.message) {
    return error.data.message;
  }

  if (error?.message) {
    // Clean up common web3 errors
    const message = error.message.replace("MetaMask Tx Signature: ", "");
    return message.replace("execution reverted: ", "");
  }

  return "An unknown error occurred";
};
