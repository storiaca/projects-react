import { Outlet } from 'react-router-dom';
import Navigation from '../../components/Navigation';

import './root.css';

const Root = () => {
  return (
    <div>
      <Navigation />
      <main className="container">
        <Outlet />
      </main>
    </div>
  );
};

export default Root;
