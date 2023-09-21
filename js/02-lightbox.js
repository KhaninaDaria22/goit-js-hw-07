import { galleryItems } from './gallery-items.js';

// Change code below this line
const galleryList = document.querySelector(".gallery");

const markup = galleryItems.map(({ description, original, preview }) => {
    return `<li class="gallery__item js-product-item">
          <a class="gallery_link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </li>`
  }).join('');

  galleryList.insertAdjacentHTML("beforeEnd", markup);

const galerry = new SimpleLightbox('.gallery a', { captionData: 'alt' , captionDelay: 250 });

console.log(galerry);
