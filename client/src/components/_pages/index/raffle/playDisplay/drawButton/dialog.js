import { Dialog, Box, Button, Typography, CircularProgress } from '@mui/material';

export default function DrawResultDialog({
  open = false,
  handleClose = () => {},
  loading = false,
  data = {},
  error = null
}) {
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
              <Typography variant='caption' mt={2}>Drawing prize</Typography>
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
              <Typography variant='h4'>{data}</Typography>
              <Typography variant='caption'>{error}</Typography>
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