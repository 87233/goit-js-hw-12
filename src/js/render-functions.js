import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const buttonLoad = document.querySelector('.button-load');
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      ({
        largeImageURL,
        webformatURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<li class="gallery-item">
          <a class="gallery-link" href="${largeImageURL}">
            <img
              class="gallery-image"
              src="${webformatURL}"
              alt="${tags}"
              width="360"
              height="200"
            />
          </a>
          <ul class="gallery-item-info">
            <li class="info-block"><h5>Likes</h5><p>${likes}</p></li>
            <li class="info-block"><h5>Views</h5><p>${views}</p></li>
            <li class="info-block"><h5>Comments</h5><p>${comments}</p></li>
            <li class="info-block"><h5>Downloads</h5><p>${downloads}</p></li>
          </ul>
        </li>`
    )
    .join('');

  gallery.innerHTML = markup;
  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.classList.remove('is-hidden');
}

export function hideLoader() {
  loader.classList.add('is-hidden');
}

export function showLoadMoreButton() {
  buttonLoad.classList.remove('is-hidden');
}

export function hideLoadMoreButton() {
  buttonLoad.classList.add('is-hidden');
}
