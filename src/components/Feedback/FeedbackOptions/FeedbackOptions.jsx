import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onleaveFeedback, options }) => {
  return (
    <div className={styles.containerBtn}>
      {options.map(item => (
        <button
          key={item}
          onClick={onleaveFeedback}
          className={`${styles.button} ${styles[item]}`}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onleaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad']))
    .isRequired,
};
