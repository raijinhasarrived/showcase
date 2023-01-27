import { Routes, Route } from 'react-router-dom';
import { CharacterPage } from '../components/character/CharacterPage';
import { HomePage, CardsPage, SliderPage } from '../pages';

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cards" element={<CardsPage />} />
      <Route path="/slider" element={<SliderPage />} />
      <Route path="/character/:id" element={<CharacterPage />} />
    </Routes>
  );
};
