import { Dialog, Box } from '@mui/material';
import BootstrapDialogTitle from '../../../../_common/dialogTop';
import AddNewForm from './form';

export default function AdjustEmptyPoolSizeDialog({
  open = false,
  handleClose = () => {}
}) {
  return (
    <Dialog onClose={handleClose} open={open} maxWidth='sm' fullWidth>
      <BootstrapDialogTitle onClose={handleClose}>
        Add new prize
      </BootstrapDialogTitle>
      <Box padding={2}>
        <AddNewForm />
      </Box>
    </Dialog>
  );
}