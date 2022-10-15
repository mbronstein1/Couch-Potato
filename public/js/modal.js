// This is the element where event delegation on the cards will occur for search results and my collection
const movieContainerEl = $('#movie-container');
// The modal element from HTML
const modalEl = $('#movie-modal')

// Initialize the modal for JavaScript
UIkit.modal(modalEl);

// This hides the modal when you load the page
UIkit.modal(modalEl).hide();

// Click event for the modal
movieContainerEl.on('click', '.movie-card', function (e) {
    // Displayed the modal
    UIkit.modal(modalEl).show();
    // Path to the target card element
    target = $(e)[0].currentTarget

    // Send the movie title
    const movieTitle = $(target).attr('data-title');
    $('#modal-title').text("");
    $('#modal-title').text(movieTitle);

    // Send the release year
    const releaseYear = $(target).attr('data-release');
    $('#modal-release-date').text("");
    $('#modal-release-date').text(releaseYear);

    // Send the movie poster url
    const moviePosterUrl = $(target).attr('data-img');
    $('#movie-poster').attr("src", moviePosterUrl);

    // Send the overview text
    const overviewText = $(target).attr('data-overview');
    $('#overview-text-container').text("");
    $('#overview-text-container').text(overviewText);

    // Send the genre text
    const genreText = $(target).attr('data-genre');
    $('#genre-container').text("");
    $('#genre-container').text(genreText);

    // Send the director text
    const directorText = $(target).attr('data-director');
    $('#director-container').text("");
    $('#director-container').text(directorText);

    // Send the four provided cast members
    const castText1 = $(target).attr('data-cast-1');
    const castText2 = $(target).attr('data-cast-2');
    const castText3 = $(target).attr('data-cast-3');
    const castText4 = $(target).attr('data-cast-4');
    $('#cast-container').text("");
    $('#cast-container-1').text(castText1);
    $('#cast-container-2').text(castText2);
    $('#cast-container-3').text(castText3);
    $('#cast-container-4').text(castText4);

    // Send the runtime text
    const runtimeText = $(target).attr('data-runtime');
    $('#runtime-container').text("");
    $('#runtime-container').text(runtimeText);

    // Send the IMDB rating
    const rating = $(target).attr('data-rating');
    $('#rating-container').text("");
    $('#rating-container').text(rating);
})
