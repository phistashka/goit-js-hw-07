import { galleryItems } from './gallery-items.js';
// Change code below this line
const  galleryContainer = document.querySelector('.gallery');
const itemsMarkup = createGalleryItemsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', itemsMarkup);

// rendered items
function createGalleryItemsMarkup(items) {
    return items.map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      
      alt="${description}"
    />
  </a>
</div>`
  }).join('');
    }

  // Ініціалізація SimpleLightbox
  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });