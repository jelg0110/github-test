import { useEffect, useState } from "react";
import { createSearchParams, useLoaderData, useNavigate } from "react-router-dom";
import { getRepositoryLanguages, getRepositoryReadme } from "../../../../services/RepositoryService";
import { ApiRepository, Readme } from "../../../../types/Repository";
import styles from './RepositoryDetails.module.scss';
import Loader from "../../../common/Loader";
import { getError } from "../../../../services/utils";
import RepositoryLanguages from "../RepositoryLanguages";

function RepositoryDetailComponent() {
  const navigate = useNavigate();
  const data = useLoaderData() as ApiRepository;
  const [readme, setReadme] = useState<null | Readme>(null);
  const [loadingReadme, setLoadingReadme] = useState(true);
  const [languages, setLanguages] = useState<string[]>([]);
  const [loadingLanguages, setLoadingLanguages] = useState(true);
  const [error, setError] = useState<null | Error | Response>(null);

  useEffect(() => {
    if (data) {
      fetchReadme(data);
      fetchLanguages(data);
    }
  }, [data])

  const fetchReadme = (data: ApiRepository) => {
    setLoadingReadme(true);
    getRepositoryReadme(data.owner.login, data.name)
      .then(response => {
        setReadme(response);
        setLoadingReadme(false);
        setError(null);
      })
      .catch((error) => {
        setError(error);
        setLoadingReadme(false);
        setReadme(null);
      })
  }

  const fetchLanguages = (data: ApiRepository) => {
    setLoadingLanguages(true);
    getRepositoryLanguages(data.owner.login, data.name)
      .then(response => {
        setLanguages(Object.keys(response));
        setLoadingLanguages(false);
        setError(null);
      })
      .catch((error) => {
        setError(error);
        setLoadingLanguages(false);
        setLanguages([]);
      })
  }

  const handleBackButton = () => {
    navigate({
      pathname: '/',
      search: `?${createSearchParams({ user: data.owner.login })}`,
    });
  }

  const Content = !error
    ? <div>
      <h3>Languages:</h3>
      <RepositoryLanguages languages={languages} />
      {
        readme && <>
          <h3>Readme:</h3>
          <div className={styles.Details__readme}>
            {window.atob(readme.content)}
          </div>
        </>
      }
    </div>
    : <div className={styles.Details__container}>
      <h1 className={styles.Details__container__error}>
        {getError(error)}
      </h1>
    </div>

  return <div className={styles.Details}>
    <div className={styles.Details__header}>
      <h2>Repository: <a href={data.html_url} target="_blank">{data.name}</a></h2>
      <button onClick={handleBackButton} className={styles.Details__header__back_button}>
        Back
      </button>
    </div>
    {
      loadingReadme || loadingLanguages
        ? <Loader />
        : Content
    }
  </div>
}

export default RepositoryDetailComponent;