import {useWeb3Provider} from "@Hooks/web3Provider";
import {Button, Typography} from "@mui/material";
import {userAccountsRecoil} from "@Recoil/user";
import {useCallback, useEffect, useMemo, useState} from "react";
import {useRecoilState} from "recoil";

export default function Home() {
  const [ethNumber, setEthNumber] = useState(0);
  const [userAccounts, setUserAccounts] = useRecoilState(userAccountsRecoil);

  const web3Api = useWeb3Provider();

  const hasMetaMask = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.ethereum;
  }, []);

  const onConnectClick = useCallback(() => {
    if (!hasMetaMask) return window.open("https://metamask.io/", "_blank");
    window.ethereum
      .request({method: "eth_requestAccounts"})
      .then((a) => setUserAccounts(a[0]))
      .catch((e) => console.log("eth_requestAccounts", e.message));
  }, [hasMetaMask, setUserAccounts]);

  useEffect(() => {
    console.log("web3Api", web3Api);
  }, [web3Api]);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <div className="mb-2">
          {userAccounts ? (
            <div className="flex items-center">
              <Typography variant="subtitle2" className="mr-2">
                Account:{" "}
              </Typography>
              <Typography variant="caption" color="textSecondary">
                {userAccounts}
              </Typography>
            </div>
          ) : (
            <Button variant="outlined" color="inherit" onClick={onConnectClick}>
              Connect to Account
            </Button>
          )}
        </div>

        <Typography variant="h4" className="my-4">
          Current Balance: <strong>{ethNumber}</strong> ETH
        </Typography>

        <div className="flex items-center justify-center	">
          <Button variant="contained" className="mr-2">
            Donate
          </Button>
          <Button variant="contained" color="secondary">
            Withdraw
          </Button>
        </div>
      </div>
    </div>
  );
}
