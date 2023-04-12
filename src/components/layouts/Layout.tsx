import { Outlet, useNavigation } from "react-router-dom";
import styles from './Layout.module.scss';
import Header from "../common/Header";
import Loader from "../common/Loader";

export default function Layout() {
  const navigation = useNavigation();

  return <>
    <Header />
    <div className={styles.Layout__container}>
      {
        navigation.state === 'loading' 
        ? <Loader />
        : <Outlet />
      }
    </div>
  </>;
}