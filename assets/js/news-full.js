$(document).ready(function(){
    var currentImageIndex = 0;
    var images = [
        "assets/media/news/image/news 1/godawaya.jpg",
        "assets/media/news/image/news 1/3.jpg",
        "assets/media/news/image/news 1/maritime.jpg",
        "assets/media/news/image/news 1/2.jpg",
        "assets/media/news/image/news 1/4.jpg"
    ];
    function showNextImage() {
        $('#news_1 img').attr('src', images[currentImageIndex]);
        currentImageIndex = (currentImageIndex + 1) % images.length;
    }
    showNextImage();

    var slideshowInterval = setInterval(showNextImage, 3000); 

    $('#news_1').click(function(){
        clearInterval(slideshowInterval); 
        $('#content > div').hide(); 
        $('#news1').show(); 
        $('html, body').animate({
            scrollTop: $('#content').offset().top 
        }, 1000);
    });
});
    $(document).ready(function(){
    var currentImageIndex = 0;
    var images = [
        "assets/media/news/image/news 2/largest_incription.jpg",
        "assets/media/news/image/news 2/largest-inscription-min.png",
        "assets/media/news/image/news 2/Sri-Lankas-largest-inscription.jpeg",
        "assets/media/news/image/news 2/5.jpg",
        "assets/media/news/image/news 2/4.jpg"
    ];
    function showNextImage() {
        $('#news_2 img').attr('src', images[currentImageIndex]);
        currentImageIndex = (currentImageIndex + 1) % images.length;
    }
    showNextImage();

    var slideshowInterval = setInterval(showNextImage, 4000); 

    $('#news_2').click(function(){
        clearInterval(slideshowInterval); 
        $('#content > div').hide(); 
        $('#news2').show(); 
        $('html, body').animate({
            scrollTop: $('#content').offset().top 
        }, 1000);
    });
});      
$(document).ready(function(){
    var currentImageIndex = 0;
    var images = [
        "assets/media/news/image/news 4/3.jpg",
        "assets/media/news/image/news 4/4.jpg",
        "assets/media/news/image/news 4/2.jpg"
    ];
    function showNextImage() {
        $('#news_4 img').attr('src', images[currentImageIndex]);
        currentImageIndex = (currentImageIndex + 1) % images.length;
    }
    showNextImage();

    var slideshowInterval = setInterval(showNextImage, 3500); 

    $('#news_4').click(function(){
        clearInterval(slideshowInterval); 
        $('#content > div').hide(); 
        $('#news4').show(); 
        $('html, body').animate({
            scrollTop: $('#content').offset().top 
        }, 1000);
    });
});
$(document).ready(function(){
    var currentImageIndex = 0;
    var images = [
        "assets/media/news/image/news 5/5.jpg",
        "assets/media/news/image/news 5/1.jpg",
        "assets/media/news/image/news 5/3.jpg",
        "assets/media/news/image/news 5/0.webp",
        "assets/media/news/image/news 5/4.jpg"
    ];
    function showNextImage() {
        $('#news_5 img').attr('src', images[currentImageIndex]);
        currentImageIndex = (currentImageIndex + 1) % images.length;
    }
    showNextImage();

    var slideshowInterval = setInterval(showNextImage, 4500); 

    $('#news_5').click(function(){
        clearInterval(slideshowInterval); 
        $('#content > div').hide(); 
        $('#news5').show(); 
        $('html, body').animate({
            scrollTop: $('#content').offset().top 
        }, 1000);
    });
});
$(document).ready(function(){
        $('#news_3').click(function(){
            $('#content > div').hide();
            $('#news3').show();
            $('html, body').animate({
                scrollTop: $('#content').offset().top
            }, 1000);
        });
        $('#news_6').click(function(){
            $('#content > div').hide();
            $('#news6').show();
            $('html, body').animate({
                scrollTop: $('#content').offset().top
            }, 1000);
        });
        $('#news_7').click(function(){
            $('#content > div').hide();
            $('#news7').show();
            $('html, body').animate({
                scrollTop: $('#content').offset().top
            }, 1000);
        });
        $('#news_8').click(function(){
            $('#content > div').hide();
            $('#news8').show();
            $('html, body').animate({
                scrollTop: $('#content').offset().top
            }, 1000);
        });
        $('#news_9').click(function(){
            $('#content > div').hide();
            $('#news9').show();
            $('html, body').animate({
                scrollTop: $('#content').offset().top
            }, 1000);

        });
        $('#news_10').click(function(){
            $('#content > div').hide();
            $('#news10').show();
            $('html, body').animate({
                scrollTop: $('#content').offset().top
            }, 1000);
        });
        $('#news_11').click(function(){
            $('#content > div').hide();
            $('#news11').show();
            $('html, body').animate({
                scrollTop: $('#content').offset().top
            }, 1000);
        });
        $('#news_12').click(function(){
            $('#content > div').hide();
            $('#news12').show();
            $('html, body').animate({
                scrollTop: $('#content').offset().top
            }, 1000);
        });
        $('#news_13').click(function(){
            $('#content > div').hide();
            $('#news13').show();
            $('html, body').animate({
                scrollTop: $('#content').offset().top
            }, 1000);
        });
        $('#news_14').click(function(){
            $('#content > div').hide();
            $('#news14').show();
            $('html, body').animate({
                scrollTop: $('#content').offset().top
            }, 1000);
        });
    });

    function nextLine(){
        var msg="Oops! "+ '<br>' +"My Custom Error 404-Page not found";
        alert(msg);
    }

   var slideIndex = 1;
    showDivs(slideIndex);
    
    function plusDivs(n) {
      showDivs(slideIndex += n);
    }
    
    function showDivs(n) {
      var i;
      var x = document.getElementsByClassName("news11_img");
      if (n > x.length) {slideIndex = 1}
      if (n < 1) {slideIndex = x.length}
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
      }
      x[slideIndex-1].style.display = "block";  
    }