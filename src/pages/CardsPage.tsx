import { BackLink } from '../components/navigation/BackLink';
import { Cards } from '../components/Cards';
import { Frame } from '../layout/frame/Frame';

export const CardsPage = () => {
  return (
    <div className="bg-zinc-800  h-full w-full flex items-center justify-center">
      <BackLink />
      <Frame position="left" />
      <Frame position="right" />
      <Cards />
    </div>
  );
};
