import { Dialog, Box, Button, Typography, CircularProgress, Link } from '@mui/material';
import { NETWORK_URL } from '../../../../../../utils/constants';

export default function DrawResultDialog({
  open = false,
  handleClose = () => {},
  loading = false,
  data = {},
  error = null
}) {
  // console.log(data);
  const blockLink = data.blockNumber ? `${NETWORK_URL}block/${data.blockNumber}` : null;
  const transLink = data.transactionHash ? `${NETWORK_URL}tx/${data.transactionHash}` : null;

  return (
    <Dialog onClose={handleClose} open={open} maxWidth='sm' fullWidth>
      <Box sx={{ height: 400 }}>
        <Box sx={{
          height: '100%',
          padding: 2,
          flexGrow: 1, 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {loading && (
            <>
              <CircularProgress size={120} color='primary'/>
              <Box mt={2}>
                <Typography variant='caption'>Drawing prize</Typography>
              </Box>
            </>
          )}
          {(!loading && error) && (
            <>
              <Typography variant='h4'>Error</Typography>
              <Typography variant='caption'>{error}</Typography>
            </>
          )}
          {(!loading && !error) && (
            <>
              <Typography variant='h6'>Drawn successfully</Typography>
              <Typography variant='body2'>Check draw history for more details</Typography>
              <Box m={2}>
                <Typography variant='body2'>
                  Block number: 
                  <Link
                    href={blockLink}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {data.blockNumber}
                  </Link>
                </Typography>
                <Typography variant='body2'>
                  {'Transaction hash: '}
                  <Link
                    href={transLink}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {data.transactionHash}
                  </Link>
                </Typography>
              </Box>
            </>
          )}
          {!loading && (
            <Box mt={2}>
              <Button
                onClick={handleClose}
                variant='contained'
              >
                Close
              </Button>
            </Box>
          )}
        </Box>
      </Box>
    </Dialog>
  );
}