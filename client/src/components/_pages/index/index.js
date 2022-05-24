import { Box, Container, Typography } from '@mui/material';
import { useContext } from 'react';
import ErrorPage from '../../_common/errorPage';
import AppContext from '../../_context';
import OwnerControls from './ownerControls';
import PrizeList from './prizeList';

export default function HomePage() {
  const { raffle, error } = useContext(AppContext);

  if (error) {
    return (
      <ErrorPage
        title='Error'
        details={error}
      />
    )
  }

  if (!raffle) {
    return (
      <ErrorPage
        title='Cannot proceed'
        details='Please connect to wallet to proceed'
      />
    )
  }

  return (
    <Container maxWidth='xl'>
      <Typography variant='h6' m={1}>Raffles</Typography>
      <OwnerControls />
      <Box mt={3} />
      <PrizeList />
    </Container>
  )
}
