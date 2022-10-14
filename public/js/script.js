const hamburger = document.getElementById('hamburger');
const navUl = document.getElementById('nav-ul');
const genreSearchFormEl = document.getElementById('genre-search-form');
const genreInputEl = document.getElementById('genre-input');

//hamburger functionality
hamburger.addEventListener('click', () => {
  navUl.classList.toggle('show');  
})



//search functionality
// const renderResultsPage = (e) => {
//   e.preventDefault();
//   const genreInputVal = genreInputEl.value;
//   console.log(genreInputVal)
// }


// genreSearchFormEl.addEventListener('submit', renderResultsPage)