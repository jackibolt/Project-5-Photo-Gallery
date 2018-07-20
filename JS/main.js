
lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true,
  'albumLabel': '',
});

// SEARCH BAR

const $img_list = $('.list a');
const $search = $('#search_input');

const filter = function (){
      //Search Input variable
      //'this' will call the target of the filter function ($search), at the bottom.
    const $input = this.value.toLowerCase();
    console.log($input);

    $img_list.each(function(index, a){
        //Caption variables
      const $attr = $(a).attr('data-title'); //get attr
      const $caption = $attr.toLowerCase(); //return lowercase
      console.log($caption);

      if ($caption.includes($input)){
          // Display matching results
        a.parentElement.style.display = "block";
        console.log('yes');

      } else {         // Hide non-matching results
        a.parentElement.style.display = "none";
        console.log('no');
      }
    });
};

$search.on('keyup', filter);
