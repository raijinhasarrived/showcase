import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { CharactersService } from '../app/services/Characters.service';

import { Card } from './Card/Card';

export const Cards = () => {
  const { isLoading, error, data } = useQuery('character list', async () => {
    return await CharactersService.getAll();
  });

  if (isLoading) return <p className="h-screen">Loading</p>;
  if (error) return <p className="h-screen">Something went wrong</p>;
  console.log(data?.results);

  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 p-5">
      {data?.results.map((persona, index) => (
        <Link to={`/character/${persona.id}`} key={persona.id}>
          <Card persona={persona} key={index} />
        </Link>
      ))}
    </div>
  );
};
