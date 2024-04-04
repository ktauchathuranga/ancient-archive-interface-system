$(document).ready(function(){
    $('.btns11').click(function(){
        $('.s1p1').animate({
            height:'toggle'
        })
       
    })

    $('.btns22').click(function(){
        $('.s2p2').animate({
            height:'toggle'
        })
    })

    $('.btns33').click(function(){
        $('.s3p3').animate({
            height:'toggle'
        })
    })





    $('.btnst11').click(function(){
        $('.st1p1').animate({
            height:'toggle'
        })
    })
    $('.btnst22').click(function(){
        $('.st2p2').animate({
            height:'toggle'
        })
    })
    $('.btnst33').click(function(){
        $('.st3p3').animate({
            height:'toggle'
        })
    })





    $('.btnt11').click(function(){
        $('.t1p1').animate({
            height:'toggle'
        })
        
    })
    $('.btnt22').click(function(){
        $('.t2p2').animate({
            height:'toggle'
        })
  
        
    })

    $('.btnt33').click(function(){
        $('.t3p3').animate({
            height:'toggle'
        })

        
    })

    $("#choose").change(function() {
        // Get the selected value from the dropdown
        const selectedValue = $(this).val();
        // Show options based on the selected value
        if (selectedValue == "temple") {
            $('.temple').show();
            $('.sellipi').hide();
            $('.statue').hide();
        } else if (selectedValue == "sellipi") {
            $('.temple').hide();
            $('.sellipi').show();
            $('.statue').hide();
        } else if (selectedValue == "statue") {
            $('.temple').hide();
            $('.sellipi').hide();
            $('.statue').show();
        }
     else if (selectedValue == "all") {
        $('.temple').show();
        $('.sellipi').show();
        $('.statue').show();
    }
        
    });
    

});


    
