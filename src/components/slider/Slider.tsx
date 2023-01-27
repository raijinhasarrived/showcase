import { useState, useEffect, FC } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { fadeInNew, zoomIn, fadeIn } from '../../utils/motion.js';

import { TypingText } from '../text/CustomText';

import styles from './Slider.module.scss';

interface SliderProps {
  objects: Character[] | undefined;
}

export const Slider: FC<SliderProps> = ({ objects }) => {
  const [index, setIndex] = useState(0);
  const [animationState, setAnimationState] = useState('hidden');

  useEffect(() => {
    setAnimationState('show');
  }, [index]);

  const handleNext = () => {
    setAnimationState('hidden');
    setTimeout(() => {
      if (objects !== undefined) {
        const newObjects = [...objects];
        const nextIndex = index === newObjects.length - 1 ? 0 : index + 1;
        setIndex(nextIndex);
        setAnimationState('show');
      }
    }, 1000);
  };

  const handlePrev = () => {
    setAnimationState('hidden');
    setTimeout(() => {
      if (objects !== undefined) {
        if (index === 0) {
          setIndex(objects.length - 1);
        } else {
          setIndex(index - 1);
        }
        setAnimationState('show');
      }
    }, 1000);
  };

  const currentObject = objects !== undefined ? objects[index] : (objects as unknown as Character);

  return (
    <div className={styles.slider}>
      <AnimatePresence>
        <motion.div
          initial={animationState}
          animate={animationState}
          exit={{ opacity: 0, transition: { delay: 1, duration: 1 } }}
          transition={{ duration: 1.5, opacity: { duration: 1 }, ease: [0.6, 0.05, -0.01, 0.9] }}
          className="flex flex-col justify-center sm:flex-row md:flex-row lg:flex-row xl:flex-row gap-4">
          <motion.div
            variants={fadeInNew}
            className=" bg-neutral-900 shadow-lg shadow-black rounded-md p-2">
            <TypingText title={currentObject.name} textStyles={''} />
            <motion.div className="mt-[8px] flex flex-col" variants={fadeInNew}>
              <p className={`font-bold w-[300px] `}>Location: {currentObject.location.name}</p>
              <p className={`font-bold w-[300px] `}>Status: {currentObject.status}</p>
              <p className={`font-bold w-[300px] `}>Race: {currentObject.species}</p>
            </motion.div>
          </motion.div>
          <motion.img
            variants={zoomIn(0.4, 1)}
            className="w-[400px] h-[400px] rounded-md sm:mt-0 mt-3 shadow-xl shadow-black"
            src={currentObject.image}
            alt={currentObject.name}
          />
        </motion.div>
      </AnimatePresence>
      <div className={styles.nav}>
        <button onClick={handlePrev}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <button className="uppercase tracking-widest" onClick={handleNext}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
    </div>
  );
};
