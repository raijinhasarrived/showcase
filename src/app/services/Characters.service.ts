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

const getCharacters = async (page: number) => {
  const response = await apiClient.get<Result<Character>>(`/character/?page=${page}`);
  return response.data;
};

const getOne = async (id: string) => {
  const response = await apiClient.get<Character>(`/character/${id}`);
  return response.data;
};

const getHuman = async () => {
  const response = await apiClient.get<Result<Character>>('/character/?species=human');
  return response.data;
};

const getAlien = async () => {
  const response = await apiClient.get<Result<Character>>('/character/?species=alien');
  return response.data;
};

const getFemale = async () => {
  const response = await apiClient.get<Result<Character>>(`/character/?gender=female`);
  return response.data;
};

const getDead = async () => {
  const response = await apiClient.get<Result<Character>>(`/character/?status=dead`);
  return response.data;
};

export const CharactersService = {
  getAll,
  getOne,
  getCharacters,
  getHuman,
  getAlien,
  getDead,
  getFemale,
};
