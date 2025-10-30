import { useNavigate } from 'react-router-dom';
import './_not-found.scss';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found">
      <h1>Oops! Page Not Found</h1>
      <img
        src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
        alt="404"
        loading="lazy"
      />
      <h2>Look like you're lost</h2>
      <p className="not-found__text">
        The page you are looking for not avaible!
      </p>
      <button
        type="button"
        className="not-found__button"
        onClick={() => navigate('/')}
      >
        Go to Home
      </button>
    </div>
  );
};

export default NotFound;
