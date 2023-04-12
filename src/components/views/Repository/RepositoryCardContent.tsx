import styles from './Repository.module.scss';
import { Repository } from '../../../types/Repository';
import RepositoryLanguages from './RepositoryLanguages';

function RepositoryCardContent({ repository }: { repository: Repository }) {
  const languages = repository.languages ? Object.keys(repository.languages) : [];

  return (
    <div className={styles.CardContent}>
      <span className={styles.CardContent__description}>{repository.description}</span>
      <div className={styles.CardContent__lang_container}>
        <span>Language:</span>
        <span>{repository.stargazers_count || 0}<span>☆</span></span>
      </div>
      <RepositoryLanguages languages={languages} />
    </div>
  );
}

export default RepositoryCardContent;
