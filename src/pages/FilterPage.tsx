import React from 'react';
import { Filter } from '../components/filter/Filter';
import { BackLink } from '../components/navigation/BackLink';

export const FilterPage = () => {
  return (
    <div>
      <BackLink />

      <Filter />
    </div>
  );
};
