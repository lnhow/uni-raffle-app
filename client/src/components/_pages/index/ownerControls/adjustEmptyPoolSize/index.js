import { Box, Button, Tooltip } from '@mui/material';
import { useState } from 'react';
import AdjustEmptyPoolSizeDialog from './dialog';

export default function AdjustEmptyPoolSizeControl() {
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
        <Button variant='contained' color='secondary' onClick={toggleOpen}>
          Adjust Empty Pool Size
        </Button>
      </Tooltip>
      <AdjustEmptyPoolSizeDialog open={open} handleClose={toggleClose} />
    </Box>
  )
}