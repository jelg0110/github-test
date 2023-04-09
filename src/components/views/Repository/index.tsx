import styles from './Repository.module.scss';
import Card from '../../common/Card';
import SearchInput from '../../common/SearchInput';
import RepositoryCardContent from './RepositoryCardContent';

function Repository() {

  const fetchRepositories = (value: string) => {
    console.log(value);
  }

  return (
    <div className={styles.Repository}>
      <div className={styles.Repository__search_container}>
        <SearchInput onSubmit={fetchRepositories} />
      </div>
      <div className={styles.Repository__repositories}>
        <Card title="Title">
          <RepositoryCardContent />
        </Card>
      </div>
    </div>
  );
}

export default Repository;
