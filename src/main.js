import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions';

const form = document.querySelector('.form');
const input = document.querySelector('.form-input');
const buttonLoader = document.querySelector('.button-load');

let currentPage = 1;
let currentQuery = '';
let totalHits = 0;
const perPage = 15;

form.addEventListener('submit', async event => {
  event.preventDefault();
  const query = input.value.trim();
  if (!query) {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search query!',
      position: 'topRight',
    });
    return;
  }

  currentQuery = query;
  currentPage = 1;
  clearGallery();
  hideLoadMoreButton();
  showLoader();
  fetchIm(currentQuery, currentPage);
});

buttonLoader.addEventListener('click', async () => {
  currentPage += 1;
  showLoader();
  hideLoadMoreButton();
  await fetchIm(currentQuery, currentPage);
});

async function fetchIm(query, page) {
  try {
    const data = await getImagesByQuery(query, page);
    totalHits = data.totalHits;
    if (data.hits.length === 0) {
      iziToast.info({
        title: 'No results',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      return;
    }
    createGallery(data.hits);

    if (page > 1) {
      smoothScroll();
    }

    const maxPage = Math.ceil(totalHits / perPage);
    if (currentPage < maxPage) {
      showLoadMoreButton();
    } else if (totalHits > 0) {
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Ups.. Something went wrong',
      position: 'topRight',
    });
  } finally {
    hideLoader();
    if (page === 1) {
      form.reset();
    }
  }
}

function smoothScroll() {
  const galleryItem = document.querySelector('.gallery-item');
  if (galleryItem) {
    const cardHeight = galleryItem.getBoundingClientRect().height;
    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });
  }
}
