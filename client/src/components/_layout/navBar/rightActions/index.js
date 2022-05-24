import { useContext } from 'react';
import { AppContext } from '../../../_context';
import DefaultActions from './defaultActions';
import LoggedInActions from './loggedInActions';

export default function RightActions() {
  const {address} = useContext(AppContext);

  if (address !== null) {
    return <LoggedInActions />;
  }

  return <DefaultActions />;
}
