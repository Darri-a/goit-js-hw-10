import { fetchBreeds, fetchCatByBreed } from './js/cat-api';

const catSelector = document.querySelector('.breed-select');
const catInfoElement = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');

const breeds = fetchBreeds()
  .then(response => {
    const data = response.data;
    let catsElements = '';

    data.forEach(element => {
      catsElements += `<option value=${element.id}>${element.name}</option>]`;
    });

    catSelector.innerHTML = catsElements;
    catSelector.hidden = false;
  })
  .catch(e => {
    catSelector.hidden = true;
    catInfoElement.hidden = false;
    error.hidden = false;
    loader.hidden = true;
  });

catSelector.addEventListener('change', event => {
  loader.hidden = false;
  catSelector.hidden = true;
  catInfoElement.hidden = true;
  error.hidden = true;

  fetchCatByBreed(event.target.value)
    .then(response => {
      const imgUrl = response.data[0]['url'];
      const catInfo = response.data[0]['breeds'][0];

      const text = `
            <h1>${catInfo.name}</h1>
            <img src="${imgUrl}" alt="" width="500">
            <p>${catInfo.description}</p>
            <p><b>Temperament:</b> </span>${catInfo.temperament}</p>`;

      catInfoElement.innerHTML = text;
      catInfoElement.hidden = false;
      loader.hidden = true;
      catSelector.hidden = false;
    })
    .catch(e => {
      catSelector.hidden = false;
      catInfoElement.hidden = false;
      error.hidden = false;
      loader.hidden = true;
    });
});
