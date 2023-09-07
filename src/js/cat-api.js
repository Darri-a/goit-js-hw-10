import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_qi7hv3nsJx5J27CYSuNgEIn1uNA293czffxYe1SgxHKDDI2IuHIVx7kTP1se9vvC';

export const fetchBreeds = () => {
  return axios.get(`https://api.thecatapi.com/v1/breeds`);
};

export const fetchCatByBreed = breedId => {
  return axios.get(
    `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`
  );
};
