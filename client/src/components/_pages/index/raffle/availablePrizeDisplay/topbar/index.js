import { IconButton, Typography, Box, Tooltip } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';

export default function DisplayTopbar({
  title='',
  tooltip='',
  handleRefresh = () => {}
}) {
  return (
    <Box display='flex'>
      <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center'}}>
        <Tooltip title={tooltip}>
          <Typography variant='h6'>{title}</Typography>
        </Tooltip>
      </Box>
      <IconButton onClick={handleRefresh}><RefreshIcon /></IconButton>
    </Box>
  )
}