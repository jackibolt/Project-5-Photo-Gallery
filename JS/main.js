
lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true,
  'albumLabel': '',
})

// function live_search() {

$('.search').keyup(function({

  // Declare variables
  const input = $('#search_input').val();
  const input_value = input.toLowerCase();
  console.log(input_value);


}));
//
//
// $('#search-button').click(live_search(){
//   const search = $('#search').val();
//   console.log(search.toLowerCase());
// });
// Loop through all list items, and hide those who don't match the search query
// for (i = 0; i < $title.length; i++) {
//     $img = $title[i].getAttribute("data-title")[0];
//     if ($img.innerHTML.toLowerCase().indexOf($filter) > -1) {
//         $img[i].style.display = "";
//     } else {
//         $img[i].style.display = "none";
//     }
// }
//
//
// $('#search_input').on('keyup', myFunction());
