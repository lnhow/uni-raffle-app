import { IconButton, Typography, Box } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';

export default function DisplayTopbar({
  title='',
  handleRefresh = () => {}
}) {
  return (
    <Box display='flex'>
      <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
        <Typography variant='h6'>{title}</Typography>
      </Box>
      <IconButton onClick={handleRefresh}><RefreshIcon /></IconButton>
    </Box>
  )
}