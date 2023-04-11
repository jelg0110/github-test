import styles from './Card.module.scss';
import CardType from './Card';

const Card = ({ title, children }: CardType) => {
  return (
    <div className={styles.Card}>
      {
        title && <>
          <div className={styles.Card__title}>
            {title}
          </div>
          <hr />
        </>
      }
      <div className={styles.Card__content}>
        {children}
      </div>
    </div>
  );
}

export default Card;
