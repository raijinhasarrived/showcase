import { FC } from 'react';

import Tilt from 'react-parallax-tilt';

import styles from './Card.module.scss';

interface CardProps {
  persona: Character;
}

export const Card: FC<CardProps> = ({ persona }) => {
  return (
    <Tilt gyroscope={true}>
      <div className={`group ${styles.card}`}>
        <div
          className={`${styles.content} font-ran text-2xl tracking-wide group-hover:bg-gradient-to-r  from-amber-500 to-cyan-500`}>
          <img
            className="group-hover:grayscale-0 rounded-t-md grayscale-0  sm:grayscale  active:grayscale-0 max-w-[280px]"
            src={persona.image}
            alt={persona.name}
          />
          <h4>{persona.name}</h4>
          <div className="flex gap-2">
            <p>{persona.gender}</p>
            <p>{persona.species}</p>
            <p>{persona.status}</p>
          </div>
        </div>
      </div>
    </Tilt>
  );
};
