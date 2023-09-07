import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_bI6i1FZDDqZWZQAifdArSBMHiWfe2KiHUvpjq68NKg8kVtgowlOgVLshRO76zzZ3';

export const fetchBreeds = () => {
  return axios.get(`https://api.thecatapi.com/v1/breeds`);
};

export const fetchCatByBreed = breedId => {
  return axios.get(
    `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`
  );
};
