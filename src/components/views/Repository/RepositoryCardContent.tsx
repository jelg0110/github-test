import styles from './Repository.module.scss';
import Label from '../../common/Label';

function RepositoryCardContent() {
  return (
    <div className={styles.CardContent}>
      <span className={styles.CardContent__description}>content</span>
      <span>Languages:</span>
      <div className={styles.CardContent__lang_container}>
        <Label color="red">Languages</Label>
        <Label color="red">Languages</Label>
      </div>
    </div>
  );
}

export default RepositoryCardContent;
