import { useState, useEffect } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { fadeInNew, staggerContainer, textVariant, zoomIn } from '../../utils/motion';

import { TypingText } from '../text/CustomText';

import styles from './slider.module.scss';

export const Slider = ({ objects }) => {
  const [index, setIndex] = useState(0);
  const [animationState, setAnimationState] = useState('hidden');

  useEffect(() => {
    setAnimationState('show');
  }, [index]);

  const handleNext = () => {
    setAnimationState('hidden');
    setTimeout(() => {
      if (index === objects.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
      setAnimationState('show');
    }, 1000);
  };

  const handlePrev = () => {
    setAnimationState('hidden');
    setTimeout(() => {
      if (index === 0) {
        setIndex(objects.length - 1);
      } else {
        setIndex(index - 1);
      }
      setAnimationState('show');
    }, 1000);
  };

  const currentObject = objects[index];

  return (
    <div className={styles.slider}>
      <AnimatePresence>
        <motion.div
          initial={animationState}
          animate={animationState}
          exit={{ opacity: 0, duration: 1, transition: { delay: 1 } }}
          variants={staggerContainer}
          transition={{ duration: 1.5, opacity: { duration: 1 }, ease: [0.6, 0.05, -0.01, 0.9] }}
          className="flex flex-col justify-between sm:flex-row">
          <div>
            <TypingText title={currentObject.name} />
            <motion.p className={`mt-[8px] font-bold w-[300px] h-[72px]`} variants={fadeInNew}>
              {currentObject.description}
            </motion.p>
          </div>
          <motion.img
            variants={zoomIn(0.4, 1)}
            className="w-[400px] h-[400px] rounded-md sm:mt-0 mt-3"
            src={currentObject.img}
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
            className="w-8 h-8">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
            />
          </svg>
        </button>
        <button className="uppercase tracking-widest" onClick={handleNext}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
