import { Outlet } from 'react-router-dom';
import LayoutFooter from './footer';
import LayoutNavBar from './navBar';

export default function AppDefaultLayout() {
  return (
    <>
      <LayoutNavBar />
      <Outlet />
      <LayoutFooter />
    </>
  )
}
