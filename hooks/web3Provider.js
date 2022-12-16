import {useEffect, useRef} from "react";
import Web3 from "web3";

export const useWeb3Provider = () => {
  const provider = useRef();
  const isLoading = useRef(true);
  useEffect(() => {
    if (typeof window === "undefined") return;
    isLoading.current = true;
    if (window.ethereum) {
      provider.current = window.ethereum;
    } else if (window.web3) provider.current = window.web3.currentProvider;
    else provider.current = new Web3.providers.HttpProvider("http://localhost:7545");

    isLoading.current = false;
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.ethereum) return;
    window.ethereum.on("accountsChanged", (accounts) => {
      console.log("accounts", accounts);
    });
  }, []);

  return {
    web3: new Web3(provider.current),
    provider: provider.current,
    contract: null,
    isLoading: isLoading.current,
  };
};
