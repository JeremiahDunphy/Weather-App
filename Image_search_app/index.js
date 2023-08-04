const apiKey = "VSaoHmwi-eeF8VKSLnU-fu3leKA_av4TQg9F7y87WPg"
const formEl = document.querySelector("form");
const inputUserData = document.getElementById("search__input")
const searchResultsEl = document.querySelector(".search__results")
const showMore = document.getElementById("show__more-button")
let page = 1;

let inputData = "";


async function  searchImages() {
inputData = inputUserData.value;
const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${apiKey}`
console.log(url);
  const responce = await fetch(url);
    const data = await responce.json()
    
    if (page === 1) {
        searchResultsEl.innerHTML = "";
      }


    const results = data.results;
    
results.map((result)=> {
    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("search__result");
    const image = document.createElement("img");
    image.src = result.urls.small;
    image.alt = result.alt_description;
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target ="_blank";
    imageLink.textContent = result.alt_description;
    imageWrapper.appendChild(image);
    imageWrapper.appendChild(imageLink);
    searchResultsEl.appendChild(imageWrapper);

}); 

page++
    
        if(page > 1) {
            showMore.style.display = "block";
}
}



formEl.addEventListener("submit", (event)=> {
    event.preventDefault();
    page = 1;
searchImages()
})







