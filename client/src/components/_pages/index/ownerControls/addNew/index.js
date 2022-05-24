import { Box, Button, Tooltip } from '@mui/material';

export default function AddNewPrizeControl() {
  return (
    <Box>
      <Tooltip title='Add a new prize'>
        <Button variant='contained'>
          Add Prize
        </Button>
      </Tooltip>
    </Box>
  )
}