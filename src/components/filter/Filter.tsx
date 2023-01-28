import { useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

import { CharactersService } from '../../app/services/Characters.service';

import { Card } from '../Card/Card';

import styles from './Filter.module.scss';

export const Filter = () => {
  const [currentTab, setCurrentTab] = useState('ALL');

  const [page, setPage] = useState(1);

  const handleTabClick = async (tab: string) => {
    setPage(1);
    setCurrentTab(tab);
  };

  const { isLoading, error, data, isPreviousData } = useQuery([currentTab, page], async () => {
    switch (currentTab) {
      case 'ALL':
        return await CharactersService.getCharacters(page);
      case 'Human':
        return await CharactersService.getHuman(page);
      case 'Alien':
        return await CharactersService.getAlien(page);
      case 'Dead':
        return await CharactersService.getDead(page);
      case 'Female':
        return await CharactersService.getFemale(page);
      default:
        throw new Error(`Invalid tab: ${currentTab}`);
    }
  });

  if (isLoading) return <p className="h-screen flex items-center justify-center">Loading</p>;

  if (error)
    return <p className="h-screen flex items-center justify-center">Something went wrong</p>;

  return (
    <div className={styles.filter}>
      <div className={styles.tabs}>
        <button onClick={() => handleTabClick('ALL')}>All</button>
        <select value={currentTab} onChange={(event) => handleTabClick(event.target.value)}>
          <option value="Human">Human</option>
          <option value="Alien">Alien</option>
        </select>
        <button onClick={() => handleTabClick('Dead')}>Dead</button>
        <button onClick={() => handleTabClick('Female')}>Female</button>
      </div>
      <div className={`${styles.pagination}`}>
        <button
          onClick={() => setPage((page) => Math.max(page - 1, 0))}
          disabled={data?.info.prev === null}>
          Prev
        </button>
        <button
          onClick={() => {
            if (!isPreviousData) {
              setPage((page) => page + 1);
            }
          }}
          disabled={data?.info.next === null}>
          Next
        </button>
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
