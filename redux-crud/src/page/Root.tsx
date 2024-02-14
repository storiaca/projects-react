import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';

const Root = () => {
  return (
    <div className="container">
      <Navigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Root;
