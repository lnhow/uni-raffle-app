import { Box, Button, Tooltip } from '@mui/material';
import { useState } from 'react';
import AddDialog from './dialog';

export default function AddNewPrizeControl() {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(true);
  }

  const toggleClose = () => {
    setOpen(false);
  }

  return (
    <Box>
      <Tooltip title='Add a new prize'>
        <Button variant='contained' onClick={toggleOpen}>
          Add Prize
        </Button>
      </Tooltip>
      <AddDialog open={open} handleClose={toggleClose} />
    </Box>
  )
}