import { Link } from 'react-router-dom';
import navStyles from '../styles/NavBar.module.css';

function NavBar() {
  return (
    <nav className={navStyles.navContainer}>
      <div className={navStyles.container}>
        <h1 className={navStyles.navTitle}>Bookstore CMS</h1>
        <ul className={navStyles.navLinks}>
          <li>
            <Link to="/" className={navStyles.navLink}>Home</Link>
          </li>
          <li>
            <Link to="/categories" className={navStyles.navLink}>Categories</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
