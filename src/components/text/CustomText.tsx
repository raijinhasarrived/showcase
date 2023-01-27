import { textContainer, textVariant2 } from '../../utils/motion.js';

import { motion } from 'framer-motion';
import { FC } from 'react';

interface TextProps {
  title: string;
  textStyles: string;
}

export const TypingText: FC<TextProps> = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    className={` uppercase tracking-widest font-ran text-2xl ${textStyles}`}>
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === '' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText: FC<TextProps> = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-bold w-[300px] text-white ${textStyles}`}>
    {title}
  </motion.h2>
);
