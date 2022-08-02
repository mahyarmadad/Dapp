import {useEffect, useRef} from "react";
import Web3 from "web3";

export const useWeb3Provider = () => {
  const provider = useRef();
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.ethereum) {
      provider.current = window.ethereum;
    } else if (window.web3) provider.current = window.web3.currentProvider;
    else provider.current = new Web3.providers.HttpProvider("http://localhost:7545");
  }, []);

  if (typeof window === "undefined") return null;

  return {
    web3: new Web3(provider),
    provider: provider.current,
  };
};
