import { NavLink } from 'react-router-dom';
import styles from './Layout.module.css';

const Layout = () => {
  return (
    <nav className={styles.container}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? styles.activeLink : styles.link
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={({ isActive }) =>
          isActive ? styles.activeLink : styles.link
        }
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default Layout;
