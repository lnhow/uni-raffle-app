import {
  Routes,
  Route,
} from 'react-router-dom';
import AppDefaultLayout from '../_layout';
import HomePage from '../_pages/index';

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<AppDefaultLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  )
}
