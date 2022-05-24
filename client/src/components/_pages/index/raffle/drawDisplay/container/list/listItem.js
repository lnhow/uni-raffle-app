import { 
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  Avatar,
  Link
} from '@mui/material';
import trimAddress from '../../../../../../../utils/trimAddress';
import { NETWORK_URL } from '../../../../../../../utils/constants';

export default function DisplayListItem({row = {}}) {
  const drawer = row.drawer ? trimAddress(row.drawer) : '(Unknown)';
  const drawerLink = row.drawer ? `${NETWORK_URL}/address/${row.drawer}` : null;

  return (
    <ListItem alignItems='flex-start'>
      <ListItemAvatar>
        <Avatar variant='rounded'>{row.id}</Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={`ID: ${row.id}`}
        secondary={
          <>
            <Typography
              sx={{ display: 'inline' }}
              component='span'
              variant='caption'
              color='text.primary'
            >
              Drawer: {drawerLink ? (
                <Link
                  href={drawerLink}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {drawer}
                </Link>
              ) : drawer }
            </Typography>
            <Typography
              sx={{ display: 'inline', pl: 1 }}
              component='span'
              variant='caption'
              color='text.primary'
            >
              Index drawed: {row.drawIndex}
            </Typography>
            <Typography
              sx={{ display: 'inline', pl: 1 }}
              component='span'
              variant='caption'
              color='text.primary'
            >
              {row.isWon ? 'Won a prize' : 'Did not win anything'}
            </Typography>
          </>}
      />
    </ListItem>
  )
}