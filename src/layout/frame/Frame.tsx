import React from 'react';
import styles from './Frame.module.scss';

import Tilt from 'react-parallax-tilt';

interface FrameProps {
  position: 'left' | 'right';
}

export const Frame = (props: FrameProps) => {
  return (
    <div
      className={`${styles.frame} ${
        props.position === 'left' ? 'left-0' : `right-0 ${styles.reflect}`
      }`}>
      <Tilt>
        <div className="h-8 w-full bg-zinc-900"></div>
      </Tilt>
      <div className="h-20 w-12"></div>
      <div className="h-16 w-10"></div>
      <div className="h-20 w-14"></div>
      <div className="h-14 w-full"></div>
      <div className="h-20 w-10"></div>
      <div className="h-24 w-14"></div>
      <div className="h-16 w-8"></div>
      <div className="h-14 w-10"></div>
      <div className="h-40 w-14"></div>
      <div className="h-24 w-14"></div>
      <div className="h-14 w-full"></div>
      <div className="h-14 w-16"></div>
      <div className="h-12 w-20"></div>
      <div className="h-24 w-14"></div>
      <div className="h-10 w-16"></div>
      <div className="h-40 w-full"></div>
      <div className="h-8 w-full"></div>
      <div className="h-20 w-12"></div>
      <div className="h-8 w-full"></div>
      <div className="md:flex sm:hidden lg:flex xl:hidden h-[300px] w-10"></div>
      <div className="md:flex sm:hidden lg:flex xl:hidden h-20 w-12"></div>
      <div className="md:flex sm:hidden lg:flex xl:flex h-8 w-full"></div>
      <div className="md:flex sm:hidden lg:flex xl:hidden h-[300px] w-10"></div>
      <div className="md:hidden sm:hidden lg:hidden xl:hidden h-20 w-8"></div>
      <div className="md:hidden sm:hidden lg:hidden h-24 w-10"></div>
      <div className="md:flex sm:hidden lg:hidden h-40 w-6"></div>
      <div className="md:flex sm:hidden lg:hidden h-24 w-8"></div>
      <div className="md:hidden sm:hidden lg:hidden h-[300px] w-10"></div>
      <div className="md:flex sm:hidden lg:hidden h-20 w-8"></div>
      <div className="md:flex sm:hidden lg:hidden h-24 w-10"></div>
      <div className="md:hidden sm:hidden lg:hidden h-40 w-6"></div>
      <div className="md:flex sm:hidden lg:hidden h-24 w-8"></div>
      <div className="md:hidden sm:hidden lg:hidden h-[300px] w-10"></div>
      <div className="md:flex sm:hidden lg:hidden h-20 w-8"></div>
      <div className="md:flex sm:hidden lg:hidden h-24 w-10"></div>
      <div className="md:flex sm:hidden lg:hidden h-40 w-6"></div>
      <div className="md:hidden sm:hidden lg:hidden h-24 w-8"></div>
      <div className="md:hidden sm:hidden lg:hidden h-[300px] w-10"></div>
      <div className="md:hidden sm:hidden lg:hidden h-20 w-8"></div>
      <div className="md:hidden sm:hidden lg:hidden h-24 w-10"></div>
      <div className="md:hidden sm:hidden lg:hidden h-40 w-6"></div>
      <div className="md:hidden sm:hidden lg:hidden h-24 w-8"></div>
      <div className="md:hidden sm:hidden lg:hidden h-[300px] w-10"></div>
      <div className="md:hidden sm:hidden lg:hidden h-20 w-8"></div>
      <div className="md:hidden sm:hidden lg:hidden h-24 w-10"></div>
      <div className="md:hidden sm:hidden lg:hidden h-40 w-6"></div>
      <div className="md:hidden sm:hidden lg:hidden h-24 w-8"></div>
      <div className="md:hidden sm:hidden lg:hidden h-[300px] w-10"></div>
      <div className="md:hidden sm:hideen lg:hidden h-20 w-8"></div>
      <div className="md:hidden sm:hideen lg:hidden h-24 w-10"></div>
      <div className="md:hidden sm:hideen lg:hidden h-40 w-6"></div>
      <div className="md:hidden sm:hideen lg:hidden h-24 w-8"></div>
      <div className="md:hidden sm:hideen lg:hidden h-24 w-12"></div>
    </div>
  );
};
