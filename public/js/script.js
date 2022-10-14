const hamburger = document.getElementById('hamburger');
const navUl = document.getElementById('nav-ul');
const genreSearchFormEl = document.getElementById('genre-search-form');
const genreInputEl = document.getElementById('genre-input');
const movieNameSearchFormEl = document.getElementById('movie-search-form');
const movieNameInputEl = document.getElementById('movie-name-input');


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
    errMessage.textContent = "Please select a genre";
    movieNameSearchFormEl.appendChild(errMessage);
  } else {
    const response = await fetch(`/search/`, {
      method: 'POST',
      body: JSON.stringify({
        title: movieNameInputVal
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      alert(`${response.status}: ${response.message}`)
    }
  }
}


movieNameSearchFormEl.addEventListener('submit', renderMovieResultsPage)
genreSearchFormEl.addEventListener('submit', renderGenreResultsPage)