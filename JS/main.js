
lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true,
  'albumLabel': '',
})

// function live_search() {

$('.search').keyup(function(){

    //Image-box Variable
  const $thumbnail = $('.list a');

  $thumbnail.each(function(index, element){

      //Input variables
    const $input = $('#search_input').val();
    const $input_value = $input.toLowerCase();
    console.log($input_value)

      //Caption variables
    const $attr = $(element).attr('data-title');
    const $caption = $attr.toLowerCase();
    console.log($caption);

      //Filter
    if ($caption.includes($input_value)){
      // a.style.display = '';
      console.log('yes');
    } else {
      // a.style.display = 'none';
      console.log('no');
    }
  });

});
