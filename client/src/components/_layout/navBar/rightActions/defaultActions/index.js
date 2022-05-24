import { Button } from '@mui/material';
import useConnectWalletHandler from '../../../../_hooks/useConnectWalletHandler';

export default function DefaultActions() {
  const connectWalletHandler = useConnectWalletHandler();

  return (
    <>
      <Button variant='outlined' onClick={connectWalletHandler}>
        Connect to Wallet
      </Button>
    </>
  );
}
