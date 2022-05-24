import { 
  List,
} from '@mui/material';
import DisplayListItem from './listItem';

export default function DisplayList({
  data = []
}) {

  return (
    <List>
      {data.map((row, index) => (
        <DisplayListItem key={index} row={row} />
      ))}
    </List>
  )
}