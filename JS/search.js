// Search Bar

// $('#search-button').click(function(){
//   const search = $('#search').val();
//   console.log(search.toLowerCase());
// });
//



      // Declare variables
      // var input, filter, list, title, img
      const $input = $('#search_input');
      const $filter = $input.value.toLowerCase();
      const $list = $(".list");
      const $title = $list.getAttribute("data-title");

  function myFunction() {
      // Loop through all list items, and hide those who don't match the search query
      for (i = 0; i < $title.length; i++) {
          $img = $title[i].getAttribute("data-title")[0];
          if ($img.innerHTML.toLowerCase().indexOf($filter) > -1) {
              $img[i].style.display = "";
          } else {
              $img[i].style.display = "none";
          }
      }
  }

$input.on('keyup', myFunction());
