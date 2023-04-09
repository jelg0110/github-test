import { Outlet } from "react-router-dom";
import Header from "../common/Header";
import styles from './Layout.module.scss';

export default function Layout() {

  return <>
    <Header />
    <div className={styles.Layout__container}>
      <Outlet />
    </div>
  </>;
}