import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import { CharactersService } from '../../app/services/Characters.service';
import { BackLink } from '../navigation/BackLink';
import { HomeLink } from '../navigation/HomeLink';
import { SkeletonOne } from '../skeleton/SkeletonOne';

import styles from './CharacterSingle.module.scss';

export const CharacterPage = () => {
  const { id } = useParams<{ id: string }>();
  const { isLoading, data: character } = useQuery('one character', () => {
    isLoading ? <SkeletonOne /> : '';

    return CharactersService.getOne(id as string);
  });

  return (
    <div className="bg-zinc-800 h-screen flex justify-center">
      <BackLink />
      <HomeLink />
      {isLoading ? (
        <SkeletonOne />
      ) : (
        <div className={styles.wrapper}>
          <div className={styles.border}>
            <img
              className="max-w-[300px] max-h-[300px] rounded-full"
              src={character?.image}
              alt=""
            />
          </div>

          <div className="flex flex-col items-start justify-center">
            <h2 className="tracking-widest">Name: {character?.name}</h2>
            <h2 className="tracking-widest">Origin: {character?.origin.name}</h2>
            <h2 className="tracking-widest">Race: {character?.species}</h2>
            <h2 className="tracking-widest">Location: {character?.location.name}</h2>
            <h2 className="tracking-widest">Status: {character?.status}</h2>
            <h2 className="tracking-widest">Gender: {character?.gender}</h2>
          </div>
        </div>
      )}
    </div>
  );
};
