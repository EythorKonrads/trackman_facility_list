import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';

export default function App() {
  const location = useLocation();

  return (
    <div className="app">
      <Header />
      <main className="app__content">
        <div key={location.pathname} className="app__page app__page--fade-in">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
