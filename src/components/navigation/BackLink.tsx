import { FC } from 'react';
import { Link } from 'react-router-dom';

interface LinkProps {
  link: string;
}

export const BackLink: FC<LinkProps> = ({ link }) => {
  return (
    <Link
      to={`${link}`}
      className="text-white absolute top-2 left-1 hover:text-lime-400 rounded-md bg-neutral-900 p-3  z-50">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
        />
      </svg>
    </Link>
  );
};
