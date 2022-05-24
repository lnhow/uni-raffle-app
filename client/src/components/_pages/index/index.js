import { Box, Container, Typography } from '@mui/material';
import OwnerControls from './ownerControls';
import PrizeList from './prizeList';

export default function HomePage() {
  return (
    <Container maxWidth='xl'>
      <Typography variant='h6' m={1}>Raffles</Typography>
      <OwnerControls />
      <Box mt={3} />
      <PrizeList />
    </Container>
  )
}
