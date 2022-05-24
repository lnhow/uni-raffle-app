import { Outlet } from 'react-router-dom';
import NavBar from './navBar';

export default function AppDefaultLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}
