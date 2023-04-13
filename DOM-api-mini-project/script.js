const root = document.getElementById("root");
const btn = document.getElementById("getImage");
function createItem(item) {
  // cart
  const cart = document.createElement("div");
  cart.classList.add("cart");
  // photo
  const photo = document.createElement("img");
  photo.scr = item.Url;
  // title
  const title = document.createElement("h3");
  title.innerHTML = item.title;
  cart.appendChild(photo);
  cart.appendChild(photo);
  root.appendChild(cart);
}
function displayImages(items) {
  items.forEach((item) => {
    createItem(item);
  });
  // console.log(photo);
}
btn.addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/album1/photos")
    .then((responce) => responce.json())
    .then((items) => {
      displayImages(items);
    });
});
