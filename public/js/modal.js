const movieContainerEl = $('#movie-conatiner');
const modalEl = $('#movie-modal')
const modalTitleEl = $('#modal-title')

UIkit.modal(modalEl).hide();

movieContainerEl.on('click', 'uk-card', function (e) {
    movieContainerEl.html("");
    UIkit.modal(modalEl).show();

    var target = e.target;

    const movieTitle = $(target).attr('data-title')
    modalTitleEl.text(movieTitle)



    // if ($(target).attr('data-img-url')) {
    //     var images = $(target).attr('data-img-url');
    //     var imageStore = $('<img>');
    //     imageStore.attr('src', images);
    //     $('#modalContent').append(imageStore);
    //   } else {
    //     var noImageText = $('<p>');
    //     noImageText.text("Sorry! This artwork has no image to display!")
    //     $('#modalContent').append(noImageText);
    //   }
    
    //   var modalUrl = $(target).attr('data-art-url');
    //   var modalUrlEl = $('<a>');
    //   modalUrlEl.attr('href', modalUrl);
    //   modalUrlEl.attr('target', '_blank');
    //   modalUrlEl.text("View more info here!");
    
    //   $('#modalContent').append(modalUrlEl)
    //   var modalHeader = $(target).attr('data-artworkName');
    //   $('#modalHeader').text(modalHeader);
})
