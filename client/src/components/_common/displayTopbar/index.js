import { IconButton, Typography, Box, Tooltip } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';

export default function DisplayTopbar({
  title='',
  tooltip='',
  handleRefresh = null // Else function
}) {
  const renderRefresh = () => {
    if (handleRefresh) {
      return (
        <IconButton onClick={handleRefresh}>
          <RefreshIcon />
        </IconButton>
      )
    }
    return <></>
  }

  return (
    <Box display='flex'>
      <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
        <Box>
          <Tooltip title={tooltip}>
            <Typography variant='body1'>{title}</Typography>
          </Tooltip>
          <Typography variant='caption'>{tooltip}</Typography>
        </Box>
      </Box>
      {renderRefresh()}
    </Box>
  )
}
