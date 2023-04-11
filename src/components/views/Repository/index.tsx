import { useState } from 'react';
import styles from './Repository.module.scss';
import Card from '../../common/Card';
import SearchInput from '../../common/SearchInput';
import Loader from '../../common/Loader';
import RepositoryCardContent from './RepositoryCardContent';
import { getRepositoryLanguages, getUserRepositories } from '../../../services/RepositoryService';
import { Repository } from '../../../types/Repository';

function RepositoryComponent() {
  const [loading, setLoading] = useState(false);
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [error, setError] = useState<null | Error | Response>(null);

  const fetchRepositories = (value: string) => {
    setLoading(true);
    getUserRepositories(value)
      .then(response => {
        // Filtering out forked repositories
        const repositories = response.filter(repo => !repo.fork);

        // Get max star value for filtered repositories
        const maxStars = Math.max(...repositories.map(obj => obj.stargazers_count));

        // Filtering repositories that have max star value
        const filteredRepositories = repositories.filter(repo => repo.stargazers_count === maxStars);

        // fetch languages for each repository
        Promise.all(filteredRepositories.map(repo => getRepositoryLanguages(value, repo.name)))
          .then(res => {
            setRepositories(filteredRepositories.map((repo, index) => ({
              ...repo,
              languages: res[index],
            })));
            setLoading(false);
            setError(null);
          })
          .catch((error) => {
            setLoading(false);
            setRepositories(filteredRepositories);
          })
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
        setRepositories([]);
      })
  }

  const getError = (error: Error | Response) => {
    if (error instanceof Response) {
      switch (error.status) {
        case 404:
          return 'User not found';
        default:
          return 'There was an error with your request, try again';
      }
    } else if (error instanceof Error) {
      return error.message;
    }
    return 'There was an error with your request, try again';
  }

  const Content = repositories.length > 0
    ? <div className={styles.Repository__card_container}>
      {
        repositories.map((repo, index) => <div key={index} className={styles.Repository__card_item}>
          <Card title={repo.name}>
            <RepositoryCardContent repository={repo} />
          </Card>
        </div>)
      }
    </div>
    : <div className={styles.Repository__container}>
      <h1 className={error ? styles.Repository__container__error : undefined}>
        {error ? getError(error) : 'Please insert a Github Username'}
      </h1>
    </div>

  return (
    <div className={styles.Repository}>
      <div className={styles.Repository__search_container}>
        <SearchInput
          onSubmit={fetchRepositories}
          inputProps={{ placeholder: 'Search by user' }}
          buttonProps={{ disabled: loading }}
        />
      </div>
      {
        loading
          ? <Loader />
          : Content
      }
    </div>
  );
}

export default RepositoryComponent;
