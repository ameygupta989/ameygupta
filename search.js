//const charactersList = document.getElementById('charactersList');
//const searchBar = document.getElementById('searchBar');
//let hpCharacters = [];

//searchBar.addEventListener('keyup', (e) => {
    //const searchString = e.target.value.toLowerCase();

    //const filteredCharacters = hpCharacters.filter((character) => {
       // return (
         //   character.name.toLowerCase().includes(searchString) ||
          //  character.house.toLowerCase().includes(searchString)
        //);
    //});
    //displayCharacters(filteredCharacters);
//});

//const loadCharacters = async () => {
  //  try {
    //    const res = await fetch('https://hp-api.herokuapp.com/api/characters');
      //  hpCharacters = await res.json();
        ///displayCharacters(hpCharacters);
    //}/ catch (err) {
    //    console.error(err);
   // }
//};

//const displayCharacters = (characters) => {
  //  const htmlString = characters
    //    .map((character) => {
      //      return `
        ///    <li class="character">
           //   <h2>${character.name}</h2>
            //    <p>House: ${character.house}</p>
            //    <img src="${character.image}"></img>
            //<////li>
        //;
        //})
        //.join('');
    //charactersList.innerHTML = htmlString;
//};

//loadCharacters();

/**
 * @typedef {Object} InstantSearchOptions
 * @property {URL} searchUrl The URL which the search bar will query to retrieve results
 * @property {string} queryParam The name of the query parameter to be used in each request
 * @property {Function} responseParser Takes the response from the instant search and returns an array of results
 * @property {Function} templateFunction Takes an instant search result and produces the HTML for it
 */

const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");
const searchBox = document.querySelector(".search-box input");

const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");

  searchBox.value = "";
  filterList("");

  if (optionsContainer.classList.contains("active")) {
    searchBox.focus();
  }
});

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
  });
});

searchBox.addEventListener("keyup", function(e) {
  filterList(e.target.value);
});

const filterList = searchTerm => {
  searchTerm = searchTerm.toLowerCase();
  optionsList.forEach(option => {
    let label = option.firstElementChild.nextElementSibling.innerText.toLowerCase();
    if (label.indexOf(searchTerm) != -1) {
      option.style.display = "block";
    } else {
      option.style.display = "none";
    }
  });
};