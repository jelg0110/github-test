import styles from './Repository.module.scss';
import Label from '../../common/Label';
import { Repository } from '../../../types/Repository';
import GITHUB_COLORS from '../../../consts/GithubColors';

function RepositoryCardContent({ repository }: { repository: Repository }) {
  const languages = repository.languages ? Object.keys(repository.languages) : [];

  return (
    <div className={styles.CardContent}>
      <span className={styles.CardContent__description}>{repository.description}</span>
      <div className={styles.CardContent__lang_container}>
        <span>Language:</span>
        <span>{repository.stargazers_count || 0}<span>☆</span></span>
      </div>
      <div className={styles.CardContent__labels_container}>
        {
          languages.length > 0
            ? languages.map((lang, index) => {
              return <Label key={index} color={GITHUB_COLORS[lang]?.color}>
                {lang || 'No language detected'}
              </Label>
            })
            : <Label>No language detected</Label>
        }
      </div>
    </div>
  );
}

export default RepositoryCardContent;
