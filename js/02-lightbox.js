import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galeryEl = document.querySelector(".gallery");

function createGaleryItems(items) {
  return items
    .map(
      (item) => `
        <a class="gallery__item" href="${item.original}">
            <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
        </a>`
    )
    .join("\n");
}

galeryEl.insertAdjacentHTML("beforeend", createGaleryItems(galleryItems));

var lightbox = new SimpleLightbox(".gallery a", {
  captionsData:"alt",
  captionDelay: 250,
});


// console.log(galleryItems);
