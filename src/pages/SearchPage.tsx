import { useRef, useState } from 'react';
import { useQuery } from 'react-query';
import { CharactersService } from '../app/services/Characters.service';
import { Card } from '../components/Card/Card';
import { BackLink } from '../components/navigation/BackLink';
import { Search } from '../components/search/Search';

export const SearchPage = () => {
  return (
    <div>
      <BackLink />
      <Search />
    </div>
  );
};
