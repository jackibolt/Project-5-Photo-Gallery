
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

      //Image Variable
    const $img = $('a img');
    console.log($img);

      //Filter
    if ($caption.includes($input_value)){
      $img.style.display = '';
      console.log('yes');
    } else {
      $img.css("display","none")
      console.log('no');
    }
  });

});
