import { Link } from 'react-router-dom';

import styles from './Home.module.scss';

export const HomePage = () => {
  return (
    <div className={`${styles.home} font-ran`}>
      <Link to="/filter">
        <div className={styles.links}>Filter/Paganation</div>
      </Link>
      <Link to="/cards">
        <div className={styles.links}>Cards</div>
      </Link>
      <Link to="/slider">
        <div className={styles.links}>Slider</div>
      </Link>
    </div>
  );
};
