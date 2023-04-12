import { isRouteErrorResponse, useRouteError, Link } from "react-router-dom";
import styles from './Error.module.scss';

export default function Error() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div className={styles.Error}>
        <h1>Oops!</h1>
        <h2>{error.status}</h2>
        {error.statusText && <p>{error.statusText}</p>}
        {error.data?.message && <p>{error.data.message}</p>}
        <Link to="/">Back to home</Link>
      </div>
    );
  } else {
    return <div>Oops</div>;
  }
}