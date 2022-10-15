const hamburger = document.getElementById('hamburger');
const navUl = document.getElementById('nav-ul');
const genreSearchFormEl = document.getElementById('genre-search-form');
const genreInputEl = document.getElementById('genre-input');
const movieNameSearchFormEl = document.getElementById('movie-search-form');
const movieNameInputEl = document.getElementById('movie-name-input');
const collectionBtn = document.getElementById('add-to-collection-btn');


//hamburger functionality
hamburger.addEventListener('click', () => {
  navUl.classList.toggle('show');
})

//search functionality
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
    window.location.replace(`/browse/${genreInputVal}`)
  }
};

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
    window.location.replace(`/search/${movieNameInputVal}`)
  }
}

const saveToCollection = async (e) => {
  e.preventDefault();
  const movie_id = e.target.getAttribute('data-id')
  console.log(movie_id)
  const response = await fetch('/api/users/collection', {
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
}


collectionBtn.addEventListener('click', saveToCollection)
movieNameSearchFormEl.addEventListener('submit', renderMovieResultsPage)
genreSearchFormEl.addEventListener('submit', renderGenreResultsPage)