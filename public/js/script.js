const hamburger = document.getElementById('hamburger');
const navUl = document.getElementById('nav-ul');
const genreSearchFormEl = document.getElementById('genre-search-form');
const genreInputEl = document.getElementById('genre-input');
const movieNameSearchFormEl = document.getElementById('movie-search-form');
const movieNameInputEl = document.getElementById('movie-name-input');
const addCollectionBtn = document.getElementById('add-to-collection-btn');
const removeCollectionBtn = document.getElementById('remove-from-collection-btn');
const resultsTextEl = document.getElementById('results-text');
const modalRedirectBtn = document.getElementById('modal-redirect-btn');

//hamburger functionality
hamburger.addEventListener('click', () => {
  navUl.classList.toggle('show');
})

//search functionality for genre
const renderGenreResultsPage = (e) => {
  e.preventDefault();
  const genreInputVal = genreInputEl.value;
  if (genreInputVal === "") {
    genreSearchFormEl.removeChild(genreSearchFormEl.lastChild)
    let errMessage = document.createElement("p");
    errMessage.classList.add('uk-text-danger')
    errMessage.textContent = "Please select a genre";
    genreSearchFormEl.appendChild(errMessage);
  } else {
    window.location.replace(`/browse/${genreInputVal}`);
    appendResultHeader();
  }
};

//search functionality for movie name
const renderMovieResultsPage = async (e) => {
  e.preventDefault();
  const movieNameInputVal = movieNameInputEl.value;
  if (movieNameInputVal === "") {
    movieNameSearchFormEl.removeChild(movieNameSearchFormEl.lastChild)
    let errMessage = document.createElement("p");
    errMessage.classList.add('uk-text-danger')
    errMessage.textContent = "Please select a movie";
    movieNameSearchFormEl.appendChild(errMessage);
  } else {
    window.location.replace(`/search/${movieNameInputVal}`);
    appendResultHeader();
  }
}

//Save a movie to collection
const saveToCollection = async (e) => {
  e.preventDefault();
  const movie_id = e.target.getAttribute('data-id')
  console.log(movie_id)
  const response = await fetch('/api/collection', {
    method: 'POST',
    body: JSON.stringify({
      movie_id
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    e.target.setAttribute('disabled', '');
    e.target.textContent = "Saved to your collection"
  }
};

//Remove a movie from collection
const removeFromCollection = async (e) => {
  e.preventDefault();
  const movie_id = e.target.getAttribute('data-id');
  const response = await fetch(`/api/collection/${movie_id}`, {
    method: 'DELETE'
  });

  if(response.ok) {
    window.location.replace('/collection');
  }
};

//Append search result type to page
const appendResultHeader = () => {
  const resultString = window.location.pathname.split("/")[2];
  // if (resultString.includes("%20")) {
  //   resultString.replace(/%20/g, " ");
    console.log(resultString)
    // const resultHeader = document.createElement = ("h2");
    // resultHeader.textContent = (`Search results for ${resultString}`);
    // resultsTextEl.appendChild(resultHeader)
  // } else {
  //   const resultHeader = document.createElement = ("h2");
  //   resultHeader.textContent = (`Search results for ${resultString}`);
  //   resultsTextEl.appendChild(resultHeader)
  // }
// }
}

//Only loading event listener if id exists on the screen
if (addCollectionBtn) {
  addCollectionBtn.addEventListener('click', saveToCollection);
};

if (removeCollectionBtn) {
  removeCollectionBtn.addEventListener('click', removeFromCollection)
};

if(movieNameSearchFormEl) {
  movieNameSearchFormEl.addEventListener('submit', renderMovieResultsPage);
};

if(genreSearchFormEl) {
  genreSearchFormEl.addEventListener('submit', renderGenreResultsPage);
};

//Redirect to login page
if(modalRedirectBtn) {
  modalRedirectBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.replace('/login')
  })
};