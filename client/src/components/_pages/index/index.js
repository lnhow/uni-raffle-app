import { Box, Container } from '@mui/material';
import { useContext } from 'react';
import ErrorPage from '../../_common/errorPage';
import AppContext from '../../_context';
import OwnerControls from './ownerControls';
import RaffleInfo from './raffle';

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
        title='Raffle app'
        details='Please connect to wallet to proceed'
      />
    )
  }

  return (
    <Container maxWidth='xl' sx={{ marginTop: 2 }}>
      <Box mb={3}>
        <OwnerControls />
      </Box>
      <RaffleInfo />
    </Container>
  )
}
