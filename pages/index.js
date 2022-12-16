import {useWeb3Provider} from "@Hooks/web3Provider";
import {Button, Typography} from "@mui/material";
import {userAccountsRecoil} from "@Recoil/user";
import {toast} from "material-react-toastify";
import {useCallback, useEffect, useMemo, useState} from "react";
import {useRecoilState} from "recoil";

export default function Home() {
  const [ethNumber, setEthNumber] = useState(10);
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
      .catch((e) => toast.error(e.message));
  }, [hasMetaMask, setUserAccounts]);

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
              {hasMetaMask ? "Connect to Account" : "Install Metamask"}
            </Button>
          )}
        </div>

        <Typography variant="h4">
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
