// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-devourable").on("click", function(event) {
    var id = $(this).data("id");
    var newDevourable = $(this).data("newdevourable");

    var newDevourableState = {
      devoured: newDevourable
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourableState
    }).then(
      function() {
        console.log("changed devourable to", newDevourable);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#bu").val().trim(),
    // burger_devoured: 'false'
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  // $(".devour-burger").on("click", function(event) {
  //   var id = $(this).data("id");
  //
  //   // Send the DELETE request.
  //   $.ajax("/api/burgers/" + id, {
  //     type: "DELETE",
  //   }).then(
  //     function() {
  //       console.log("deleted burger", id);
  //       // Reload the page to get the updated list
  //       location.reload();
  //     }
  //   );
  // });
});
