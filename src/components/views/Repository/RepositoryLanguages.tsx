import styles from './Repository.module.scss';
import Label from '../../common/Label';
import GITHUB_COLORS from '../../../consts/GithubColors';

function RepositoryLanguages({ languages }: { languages: string[] }) {
  return (
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
  );
}

export default RepositoryLanguages;
