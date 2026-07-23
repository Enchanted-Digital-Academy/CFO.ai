import { BrowserRouter, Link } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/reports" style={{ marginRight: '1rem' }}>Reports</Link>
        <Link to="/notifications" style={{ marginRight: '1rem' }}>Notifications</Link>
        <Link to="/settings">Settings</Link>
      </nav>

      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;