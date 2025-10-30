import { Link, useLocation } from 'react-router-dom';
import './_header.scss';

export default function Header() {
  const { pathname } = useLocation();

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <Link to="/">
            <img
              className="header__logo-image header__logo-image--mobile"
              src={import.meta.env.BASE_URL + 'favicon/favicon.ico'}
              alt="Trackman Favicon"
              loading="lazy"
            />
            <img
              className="header__logo-image header__logo-image--desktop"
              src={import.meta.env.BASE_URL + 'trackman_logo.svg'}
              alt="Trackman Logo"
              loading="lazy"
            />
          </Link>
        </div>

        <nav className="header__nav">
          <Link
            to="/"
            className={`header__link ${pathname === '/' || pathname.startsWith('/facility') ? 'header__link--active' : ''}`}
          >
            Facilities
          </Link>
          <Link
            to="/locations"
            className={`header__link ${pathname === '/locations' ? 'header__link--active' : ''}`}
          >
            Locations
          </Link>
          <Link
            to="/players"
            className={`header__link ${pathname === '/players' ? 'header__link--active' : ''}`}
          >
            Players
          </Link>
          <Link
            to="/access-management"
            className={`header__link ${pathname === '/access-management' ? 'header__link--active' : ''}`}
          >
            Access Management
          </Link>
        </nav>
      </div>
    </header>
  );
}
