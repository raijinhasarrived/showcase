import axios from 'axios';
import { AxiosRequestConfig } from 'axios';
import { useParams } from 'react-router-dom';

const API_URL = 'https://rickandmortyapi.com/api';

axios.defaults.baseURL = API_URL;

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-type': 'application/json',
  },
});

// export const CharactersService = {
//   async getAll() {
//     return axios.get('/character');
//   },
// };

const getAll = async () => {
  const response = await apiClient.get<Result<Character>>('/character');

  return response.data;
};

const getCharacters = async () => {
  const response = await apiClient.get<Character[]>('/character');
  return response.data;
};

const getOne = async (id: string) => {
  const response = await apiClient.get<Character>(`/character/${id}`);
  return response.data;
};
export const CharactersService = {
  getAll,
  getOne,
  getCharacters,
};
