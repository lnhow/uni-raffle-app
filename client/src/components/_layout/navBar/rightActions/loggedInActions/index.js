import { Button, Tooltip } from '@mui/material';
import { useContext } from 'react';
import { AppContext } from '../../../../_context';

export default function LoggedInActions() {
  const { address } = useContext(AppContext);
  const walletAddress = address || '';
  const displayAddress = `${walletAddress.slice(0, 6)}...${walletAddress.slice(walletAddress.length - 4)}`

  return (
    <>
      <Tooltip title='Connected wallet address'>
        <Button variant='outlined'>
          {displayAddress}
        </Button>
      </Tooltip>
    </>
  );
}
