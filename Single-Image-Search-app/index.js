const apiKey = "VSaoHmwi-eeF8VKSLnU-fu3leKA_av4TQg9F7y87WPg";
const userSearchInput = document.querySelector(".User__text");
const ReplaceImage = document.querySelector("img");
const button = document.querySelector(".show__new");
const form = document.querySelector("form");
const figcaption = document.querySelector(".description");

document.addEventListener("submit", async (event) => {
  event.preventDefault();
  await showPicture();
});
document.addEventListener("submit", async (event) => {
  event.preventDefault();
  await showPicture();
});

async function showPicture() {
  const response = await fetch(
    `https://api.unsplash.com/photos/random?client_id=${apiKey}&query=${userSearchInput.value}`
  );
  const data = await response.json();

  //alt description
  var Description = data.alt_description;
  console.log(Description);

  //photo URL
  const photoUrl = data.urls.small;
  console.log(photoUrl);

  //replace Photo
  ReplaceImage.src = photoUrl;

  //alt description

  //update figcaption
  figcaption.innerHTML = Description;
}

//show new image button
let currentItem = 0;
showNew.addEventListener("submit", async (event) => {
  event.preventDefault();
  const data = await fetchData();
  if (currentItem < data.length) {
    const item = data[currentItem];
    const Description = item.alt_description;
    const photoUrl = item.url.small;
    ReplaceImage = photoUrl;
    figcaption.innerHTML = Description;
    currentItem++;
  }
});
