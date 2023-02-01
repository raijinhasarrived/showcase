import { Icons } from '../../assets/Icons';
import styles from './Footer.module.scss';

export const Footer = () => {
  const tools = Icons;
  return (
    <footer className={`${styles.footer}`}>
      <div className="flex gap-3 px-3 ">
        {tools.map((tool, index) => (
          <a className="flex" href={tool.link} key={index} target="_blank">
            <img
              className="grayscale-0 sm:grayscale hover:grayscale-0"
              src={tool.icon}
              alt="icon"
              width={20}
              height={20}
              key={index}
            />
          </a>
        ))}
      </div>
      <div></div>
    </footer>
  );
};
