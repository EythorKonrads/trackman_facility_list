import { Link, useLocation } from 'react-router-dom';
import './_header.scss';

export default function Header() {
  const { pathname } = useLocation();

  return (
    <header className="header">
      <div className="header__logo">
        <img
          src={import.meta.env.BASE_URL + 'trackman_logo.svg'}
          alt="Trackman Logo"
          className="header__logo-image"
        />
      </div>

      <nav className="header__nav">
        <Link
          to="/"
          className={`header__link ${pathname === '/' ? 'header__link--active' : ''}`}
        >
          Facilities
        </Link>
        <Link
          to="/facility-form"
          className={`header__link ${pathname === '/facility-form' ? 'header__link--active' : ''}`}
        >
          Facility Form
        </Link>
      </nav>
    </header>
  );
}
