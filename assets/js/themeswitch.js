$(document).ready(function() {
    // Attach click event to the checkbox inside the #themeSwitch label
    $("#themeSwitch input").on("click", function() {
      // Toggle the body's background color and text color
      $("body").toggleClass("dark-mode");
    });

    // Check the current state of the checkbox and apply dark mode if it's checked
    if ($("#themeSwitch input").prop("checked")) {
      $("body").addClass("dark-mode");
    }
  });
