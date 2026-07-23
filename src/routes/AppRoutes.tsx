import { Routes, Route } from 'react-router-dom';
import Reports from '../pages/Reports/Reports';
import Notifications from '../pages/Notifications/Notifications';
import Settings from '../pages/Settings/Settings';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/reports" element={<Reports />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}

export default AppRoutes;