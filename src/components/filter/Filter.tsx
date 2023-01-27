import { useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { CharactersService } from '../../app/services/Characters.service';
import { Card } from '../Card/Card';

import styles from './Filter.module.scss';

export const Filter = () => {
  const [currentTab, setCurrentTab] = useState('ALL');

  const handleTabClick = async (tab: string) => {
    setCurrentTab(tab);
  };

  const { isLoading, error, data } = useQuery(
    currentTab,
    async () => {
      switch (currentTab) {
        case 'ALL':
          return await CharactersService.getAll();
        case 'Human':
          return await CharactersService.getHuman();
        case 'Dead':
          return await CharactersService.getDead();
        case 'Female':
          return await CharactersService.getFemale();
        default:
          throw new Error(`Invalid tab: ${currentTab}`);
      }
    },
    {
      // you can add here any other options
      // like refetchInterval: 5000
    },
  );

  if (isLoading) return <p className="h-screen">Loading</p>;
  if (error) return <p className="h-screen">Something went wrong</p>;
  return (
    <div className={styles.filter}>
      <div className={styles.tabs}>
        <button onClick={() => handleTabClick('ALL')}>All</button>
        <button onClick={() => handleTabClick('Human')}>Human</button>
        <button onClick={() => handleTabClick('Dead')}>Dead</button>
        <button onClick={() => handleTabClick('Female')}>Female</button>
      </div>
      <div className={styles.cards}>
        {data?.results.map((item: Character) => (
          <Link to={`/character/${item.id}`} key={item.id}>
            <Card persona={item} key={item.id} />
          </Link>
        ))}
      </div>
    </div>
  );
};
