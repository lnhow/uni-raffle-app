import { Box, Paper, Typography } from '@mui/material';
import AddNewPrizeControl from './addNew';
import AdjustEmptyPoolSizeControl from './adjustEmptyPoolSize';

export default function OwnerControls() {
  return (
    <Paper sx={{ padding: 2 }}>
      <Typography variant='body1'>Manage (Owner only)</Typography>
      <Box
        mt={2}
        display='flex'
        flexDirection='row'
        gap={2}
      >
        <AddNewPrizeControl />
        <AdjustEmptyPoolSizeControl />
      </Box>
    </Paper>
  )
}
