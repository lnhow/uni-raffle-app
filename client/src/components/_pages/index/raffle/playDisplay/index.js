import { Paper, Typography, Box } from '@mui/material';
import ContractAddressDisplay from './addressDisplay';
import DrawButton from './drawButton';
import EmptyPoolSizeDisplay from './emptyPoolDisplay';
import EndTimeDisplay from './endTimeDisplay';
import OwnerDisplay from './ownerDisplay';

export default function PlayDisplay() {
  return (
    <Paper sx={{ padding: 2, height: 500 }}>
      <Typography variant='h6'>Raffle</Typography>
      <Box mt={1}>
        <ContractAddressDisplay />
        <OwnerDisplay />
        <EndTimeDisplay />
        <EmptyPoolSizeDisplay />
        <DrawButton />
      </Box>
    </Paper>
  )
}
