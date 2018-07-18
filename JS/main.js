
lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true,
  'albumLabel': '',
})

// function live_search() {

$('.search').keyup(function(){
  console.log(event.target);

      //Image-box Variable
    const $thumbnail = $('.list a');

    $thumbnail.each(function(index, element){
      console.log(event.target);
        //Search Input variables
      const $input = $('#search_input').val(); //get input
      const $input_value = $input.toLowerCase(); //return lowercase
      console.log($input_value)

        //Caption variables
      const $attr = $(element).attr('data-title'); //get attr
      const $caption = $attr.toLowerCase(); //return lowercase
      console.log($caption);

        //Image Variable
      const $img = $('.image');
      // console.log($img);

        Filter
      if ($caption.includes($input_value)){
          // Display matching results
        $img.style.display = "";
        console.log('yes');

      } else {         // Hide non-matching results
        $img.style.display = "none";
        console.log('no');
      }
    });

});
