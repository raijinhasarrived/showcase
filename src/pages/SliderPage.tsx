import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { CharactersService } from '../app/services/Characters.service';
import { BackLink } from '../components/navigation/BackLink';
import { Slider } from '../components/slider/Slider';
export const SliderPage = () => {
  const { isLoading, error, data } = useQuery('character list', async () => {
    return await CharactersService.getAll();
  });
  if (isLoading) return <p className="h-screen">Loading</p>;
  if (error) return <p className="h-screen">Something went wrong</p>;
  const objects = data?.results;
  console.log(objects);
  return (
    <div className="h-screen flex items-center justify-center">
      <BackLink />
      <Slider objects={objects} />
    </div>
  );
};
