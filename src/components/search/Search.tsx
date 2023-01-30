import { useState, useRef } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

import { CharactersService } from '../../app/services/Characters.service';

import { Card } from '../Card/Card';

import styles from './Search.module.scss';

export const Search = () => {
  const [name, setName] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const { isLoading, error, data, refetch } = useQuery('character name', async () => {
    return await CharactersService.getByName(name);
  });

  const handleSubmitSearch = () => {
    setName(inputRef.current?.value || '');
    setTimeout(() => refetch(), 0);
  };

  if (isLoading) return <p className="h-screen">Loading</p>;
  if (error)
    return (
      <p className="flex justify-center items-center uppercase text-white tracking-widest h-screen">
        Something went wrong
      </p>
    );
  console.log(data?.results);

  return (
    <div className={styles.wrapper}>
      <div className={styles.search}>
        <input type="text" ref={inputRef} />
        <button type="submit" onClick={handleSubmitSearch}>
          Search
        </button>
      </div>

      {data?.results.map((person) => (
        <div key={person.id}>
          <Link to={`/character/${person.id}`} key={person.id}>
            <Card persona={person} key={person.id} />
          </Link>
        </div>
      ))}
    </div>
  );
};
