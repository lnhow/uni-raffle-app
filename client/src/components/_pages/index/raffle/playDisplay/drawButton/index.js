import { Box, Tooltip } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useContext, useState } from 'react';
import AppContext from '../../../../../_context';
import { toast } from 'react-toastify';
import DrawResultDialog from './dialog';

export default function DrawButton() {
  const { raffle, address } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);

  const handleDraw = () => {
    if (raffle) {
      setLoading(true);
      setOpen(true);
      raffle.methods.draw().send({
        from: address,
        gas: 300000,
      })
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      })
    }
    else {
      toast.error('Error - accessing raffle');
    }
  }

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <Box sx={{
      display: 'flex',
      padding: 4,
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Tooltip title='Draw prize'>
        <LoadingButton
          variant='contained'
          size='large'
          style={{ width: 250, height: 140 }}
          onClick={handleDraw}
        >
          Draw
        </LoadingButton>
      </Tooltip>
      <DrawResultDialog
        open={open}
        loading={loading}
        data={data}
        error={error}
        handleClose={handleClose}
      />
    </Box>
  )
}
