import {useWeb3Provider} from "@Hooks/web3Provider";
import {Button, Typography} from "@mui/material";
import {userAccountsRecoil} from "@Recoil/user";
import {toast} from "material-react-toastify";
import {useCallback, useEffect, useState} from "react";
import {useRecoilState} from "recoil";

export default function Home() {
  const [ethNumber, setEthNumber] = useState(10);
  const [userAccounts, setUserAccounts] = useRecoilState(userAccountsRecoil);

  const web3Api = useWeb3Provider();

  useEffect(() => {
    console.log("web3Api", web3Api);
  }, [web3Api]);

  const onConnectClick = useCallback(() => {
    window.ethereum
      .request({method: "eth_requestAccounts"})
      .then((a) => setUserAccounts(a))
      .catch((e) => toast.error(e.message));
  }, []);
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <div className="mb-2">
          {userAccounts?.length ? (
            userAccounts.map((item) => (
              <div className="flex items-center" key={item}>
                <Typography variant="subtitle2" className="mr-2">
                  Account:{" "}
                </Typography>
                <Typography key={item} variant="caption" color="textSecondary">
                  {item}
                </Typography>
              </div>
            ))
          ) : (
            <Button variant="outlined" color="inherit" onClick={onConnectClick}>
              Connect to Account
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
