import { Box, Tooltip } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { styled } from '@mui/system';
import { useContext, useState } from 'react';
import AppContext from '../../../../../_context';
import { toast } from 'react-toastify';
import DrawResultDialog from './dialog';

// https://mui.com/styles/basics/
// https://github.com/ekaone/Cakes-MaterialUI/blob/master/src/components/Buttons/Buttons.js
const CustomLoadingButton = styled(LoadingButton)({
  border: 'none',
  margin: 20,
  borderRadius: 16,
  textTransform: 'uppercase',
  boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)',
  cursor: 'pointer',
  color: '#fff',
  backgroundSize: '200%',
  transition: '0.4s',
  '&:hover': {
    backgroundPosition: 'right',
    fontSize: 20,
  },
  backgroundImage: 'linear-gradient(45deg, #0081cb, #14cba8, #00b0ff)'
})

export default function DrawButton() {
  const { raffle, address } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);

  const handleDraw = () => {
    if (raffle) {
      setData({});
      setError(null);
      setLoading(true);
      setOpen(true);
      raffle.methods.draw().send({
        from: address,
        gas: 3000000,
      })
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
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
        <CustomLoadingButton
          variant='contained'
          size='large'
          style={{ width: 250, height: 140 }}
          onClick={handleDraw}
        >
          Draw
        </CustomLoadingButton>
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
