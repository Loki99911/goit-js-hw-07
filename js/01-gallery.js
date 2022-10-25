import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galeryEl = document.querySelector(".gallery");

function createGaleryItems(items) {
  return items
    .map(
      (item) => `
<div class="gallery__item">
  <a class="gallery__link" href=${item.original}>
    <img
      class="gallery__image"
      src=${item.preview}
      data-source=${item.original}
      alt=${item.description}
    />
  </a>
</div>`
    )
    .join("\n");
}

galeryEl.insertAdjacentHTML("beforeend", createGaleryItems(galleryItems));

const onModalCall = (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  openModal(event.target.dataset.source);

};

galeryEl.addEventListener("click", onModalCall);

function openModal(sourse) {
  const instance = basicLightbox.create(`
    <img src=${sourse} width="800" height="600">
`);

  instance.show();

  const basicLightboxDiv = document.querySelector(".basicLightbox");

  function closeHandler() { 
    instance.close();
    document.removeEventListener("keydown", onKeyClick);
    basicLightboxDiv.removeEventListener("click", closeHandler);
  }

  function onKeyClick(event) {
      console.dir(event.code);
    if (event.code === "Escape") {
      closeHandler();
      }
  }

  document.addEventListener("keydown", onKeyClick);
  basicLightboxDiv.addEventListener("click", closeHandler);
}

// console.log(galleryItems);


//----------------------------------------
  // function onKeyClick(event) {
  //     console.dir(event.code);
  //   if (event.code === "Escape") {
  //     document.removeEventListener("keydown", onKeyClick);
  //       instance.close();
  //     }
  // }
  // document.addEventListener("keydown", onKeyClick);
  // НЕ ЗНАЮ КАК СНЯТЬ :((((
  //   document.removeEventListener("keydown", (event) => {
  //     console.dir(event.code);
  //     if (event.code === "Escape") {
  //       instance.close();
  //     }
  //   });