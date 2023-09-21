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

galleryList.insertAdjacentHTML('beforeEnd', markup);
galleryList.addEventListener('click', openGaleryClick);


function openGaleryClick(event) {
event.preventDefault();

    if (event.target === event.currentTarget) {
        return;
    }
  
    const imgDataset = event.target.dataset.source;
    const imgDescription = event.alt;

    const instance = basicLightbox.create (`
    <img src="${imgDataset}" alt="${imgDescription}"/>
    `,  { onClose: () => { document.removeEventListener('keydown', onEscKeydown); } })

    instance.show()

        document.addEventListener('keydown', onEscKeydown);

        function onEscKeydown(event) {
          if (event.code === 'Escape') {
            instance.close();
          }
}
}

console.log(galleryItems);

