import { Box } from '@mui/material';
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
        from: address
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
      height: 300,
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <LoadingButton
        variant='contained'
        size='large'
        style={{ width: 200, height: 160 }}
        onClick={handleDraw}
      >
        Draw
      </LoadingButton>
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
