import { NavLink } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <>
      <nav className="flex justify-center gap-3 p-4 bg-neutral-900 border-b border-neutral-800">
        <NavLink
          to="/reports"
          className={({ isActive }) =>
            `px-4 py-2 rounded-md font-medium transition-colors ${
              isActive ? 'bg-yellow-400 text-black' : 'text-white hover:bg-neutral-800'
            }`
          }
        >
          Reports
        </NavLink>
        <NavLink
          to="/notifications"
          className={({ isActive }) =>
            `px-4 py-2 rounded-md font-medium transition-colors ${
              isActive ? 'bg-yellow-400 text-black' : 'text-white hover:bg-neutral-800'
            }`
          }
        >
          Notifications
        </NavLink>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `px-4 py-2 rounded-md font-medium transition-colors ${
              isActive ? 'bg-yellow-400 text-black' : 'text-white hover:bg-neutral-800'
            }`
          }
        >
          Settings
        </NavLink>
      </nav>

      <div className="flex justify-center w-full">
        <AppRoutes />
      </div>
    </>
  );
}

export default App;