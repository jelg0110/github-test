import logo from '../../../assets/images/logo.svg';
import styles from './Loader.module.scss';

export default function Loader() {
  return <div className={styles.Loader}>
    <img src={logo} alt="logo" />
  </div>;
}