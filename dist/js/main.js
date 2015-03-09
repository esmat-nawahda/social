/*price range*/



//View image in gallery when clicked
$('body').on('click', '.gallery', function(e) {
    $('#galleryModal img').attr('src', $(this).attr('data-img-url'));
});    
    
    

