import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo-white.svg';
import styles from './Header.module.scss';

export default function Header() {

  return <header className={styles.Header}>
    <Link className={styles.Header__title} to="/" data-testid="header-title">
      <img src={logo} alt="logo" />
      Github Browser
    </Link>
  </header>;
}