import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryDiv = document.querySelector(".gallery");

const markup = galleryItems.reduce(
  (acc, { preview, original, description }) =>
    acc +
    `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`,
  ""
);
galleryDiv.insertAdjacentHTML("beforeend", markup);

const SimpleLightbox = window.SimpleLightbox;

const lightbox = new SimpleLightbox(".gallery__item", {
  captionsData: "alt",
  captionDelay: 250,
});
console.log(galleryItems);