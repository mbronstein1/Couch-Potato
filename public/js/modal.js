const movieContainerEl = $('#movie-container');
const modalEl = $('#movie-modal')
const modalTitleEl = $('#modal-title')
UIkit.modal(modalEl);


UIkit.modal(modalEl).hide();

movieContainerEl.on('click', '.movie-card', function (e) {
    UIkit.modal(modalEl).show();
    target = $(e)[0].currentTarget

    const movieTitle = $(target).attr('data-title');
    modalTitleEl.text("");
    modalTitleEl.text(movieTitle);

    const releaseYear = $(target).attr('data-release');
    $('#modal-release-date').text("");
    $('#modal-release-date').text(releaseYear);

    const moviePosterUrl = $(target).attr('data-img');
    $('#movie-poster').attr("src", moviePosterUrl);

    const overviewText = $(target).attr('data-overview');
    $('#overview-text-container').text("");
    $('#overview-text-container').text(overviewText);

    const genreText = $(target).attr('data-genre');
    $('#genre-container').text("");
    $('#genre-container').text(genreText);

    const directorText = $(target).attr('data-director');
    $('#director-container').text("");
    $('#director-container').text(directorText);

    const castText1 = $(target).attr('data-cast-1');
    const castText2 = $(target).attr('data-cast-2');
    const castText3 = $(target).attr('data-cast-3');
    const castText4 = $(target).attr('data-cast-4');
    $('#cast-container').text("");
    $('#cast-container').text(castText1 + "add more cast!");

    const runtimeText = $(target).attr('data-runtime');
    $('#runtime-container').text("");
    $('#runtime-container').text(runtimeText);

    const rating = $(target).attr('data-rating');
    $('#rating-container').text("");
    $('#rating-container').text(rating);
})
