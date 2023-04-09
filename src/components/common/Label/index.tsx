import LabelType from './Label';
import styles from './Label.module.scss';

const Label = ({ children, color }: LabelType) => {
  let style;
  if (color) {
    style = {
      borderColor: color,
      backgroundColor: color,
    }
  }

  return (
    <span className={styles.Label} style={style}>
      {children}
    </span>
  );
}

export default Label;
