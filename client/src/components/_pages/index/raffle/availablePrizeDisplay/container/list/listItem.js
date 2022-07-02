import { 
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  Avatar
} from '@mui/material';

export default function DisplayListItem({row = {}}) {
  return (
    <ListItem alignItems='flex-start'>
      <ListItemAvatar>
        <Avatar 
          variant='rounded'
          src={row.image || 'https://via.placeholder.com/50x50?text=no+image'}
        >
          {row.id}
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={
          <>
            <Typography variant='subtitle2'>
              <b>{row.description || '(No description)'}</b>
            </Typography>
          </>
        }
        secondary={
          <>
            <Typography
              sx={{ display: 'inline' }}
              component='span'
              variant='body2'
              color='text.primary'
            >
              {`PrizeID: ${row.id}`}
            </Typography>
          </>
        }
      />
    </ListItem>
  )
}