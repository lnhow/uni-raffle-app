import { Grid } from '@mui/material';
import AvailablePrizeDisplay from './availablePrizeDisplay';
import DrawDisplay from './drawDisplay';
import PlayDisplay from './playDisplay';
import PrizeDisplay from './prizeDisplay';

export default function RaffleInfo() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid container spacing={2} item lg={8}>
          <Grid item xs={12} order={{ lg: 0, xs: 0 }}>
            <PlayDisplay />
          </Grid>
          <Grid item xs={12} lg={6} sm={6} order={{ lg: 0, xs: 0 }}>
            <AvailablePrizeDisplay />
          </Grid>
          <Grid item xs={12} lg={6} sm={6} order={{ lg: 0, xs: 0 }}>
            <PrizeDisplay />
          </Grid>
        </Grid>
        
        <Grid item xs={12} lg={4} order={{ lg: 0, xs: 0 }}>
          <DrawDisplay />
        </Grid>
        
        {/* <Grid item lg={3} xs={12} order={{ lg: 3, xs: 0 }}></Grid> */}
      </Grid>
    </>
  )
}
