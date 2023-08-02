$(document).ready(function () {
  // Add a click event handler for all images with the class 'img-fluid'
  $('.img-fluid').click(function () {
    var src = $(this).attr('src');
    var alt = $(this).attr('alt');

    // Set the source and alt attributes of the larger image in the overlay
    $('#image-overlay .large-image').attr('src', src).attr('alt', alt);

    // Display the overlay
    $('#image-overlay').fadeIn();
  });

  // Click event handler for closing the overlay when clicking on the close button
  $('#close-button').click(function () {
    $('#image-overlay').fadeOut();
  });

  // Click event handler for closing the overlay when clicking anywhere on the overlay
  $('#image-overlay').click(function (event) {
    if (event.target === this) {
      $(this).fadeOut();
    }
  });
});