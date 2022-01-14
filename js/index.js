$(document).ready(function(){
    $('.next').on('click', function(){
        var currentImage = $('.active');
        var nextImage = currentImage.next();
    
        if(nextImage.length){
            currentImage.removeClass('active');
            nextImage.addClass('active')
        }
      
    });

    $('.prev').on('click', function(){
        var currentImage = $('.active');
        var prevImage = currentImage.prev();
    
        if(prevImage.length){
            currentImage.removeClass('active');
            prevImage.addClass('active');
        }
    });
})
