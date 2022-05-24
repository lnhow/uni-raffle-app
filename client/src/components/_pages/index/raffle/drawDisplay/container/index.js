import { Box, Typography, Paper } from '@mui/material';
import Loader from '../../../../../_common/loader';
import DisplayList from './list';

export default function DisplayContainer({
  loading = false,
  data = [],
  error = null
}) {
  if (error) {
    return (
      <Box display='flex' m={1} justifyContent='center'>
        <Typography variant='caption'>{error}</Typography>
      </Box>
    );
  }

  if (loading) {
    return (<Loader />);
  }

  if (data.length === 0) {
    return (
      <Box display='flex' m={1} justifyContent='center'>
        <Typography variant='caption'>(Empty)</Typography>
      </Box>
    );
  }

  return (
    <Paper variant='outlined'>
      <Box>
        <Box sx={{ width: '100%', height: '420px', overflowY: 'scroll' }}>
          <DisplayList data={data} />
        </Box>
      </Box>
    </Paper>
  )
}