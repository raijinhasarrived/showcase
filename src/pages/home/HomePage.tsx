import { Link } from 'react-router-dom';

import styles from './Home.module.scss';

import icon from '../../assets/r&m.svg';

export const HomePage = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className="uppercase text-white font-ran text-3xl">Rick & Morty</h2>
      <div className={`${styles.home} font-ran`}>
        <Link to="/filter">
          <div className={styles.links}>
            <span>Sort &</span>
            <span>Pagination</span>
          </div>
        </Link>
        <Link to="/cards">
          <div className={styles.links}>Cards</div>
        </Link>
        <Link to="/search">
          <div className={styles.links}>Search</div>
        </Link>
        <Link to="/slider">
          <div className={styles.links}>Slider</div>
        </Link>
      </div>
    </div>
  );
};
