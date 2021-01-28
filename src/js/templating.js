import itemsTemplate from '../templates/gallery-items.hbs';
import menu from '../menu.json';

const markup = itemsTemplate(menu);
const galleryList = document.querySelector('.js-menu');

galleryList.insertAdjacentHTML('beforeend', markup);
