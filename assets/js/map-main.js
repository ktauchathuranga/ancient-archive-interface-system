$(document).ready(function () {
    var isClicked = false;
    var clickedSection = null;

    var lom = '<a href="post.html#lom" target="_blank">Letter of Madavalagiri</a>';
    var pcpg = '<a href="post.html#pcpg" target="_blank">Panakaduwa Copper plate grant</a>';
    var galpotha = '<a href="post.html#galpotha" target="_blank">Galpotha</a>';
    var rotov = '<a href="post.html#rotov" target="_blank">Ruins of temple of Vijayarama</a>';
    var kai = '<a href="post.html#kai" target="_blank">Kushtharajagala Avalokiteswara Idol</a>';
    var rojam = '<a href="post.html#rojam" target="_blank">Ruins of Jaffna Archaeological Museum</a>';
    var yudaganava = '<a href="post.html#yudaganava" target="_blank">Yudaganawa</a>';
    var tokash = '<a href="post.html#tokash" target="_blank">Temple of Kashyapa</a>';
    var tokurd = '<a href="post.html#tokurd" target="_blank">Temple of Kurudumale</a>';

    var links = {
        "Ampara": [/*to be added*/],
        "Anuradhapura": [tokash],
        "Badulla": [/*to be added*/],
        "Batticaloa": [/*to be added*/],
        "Colombo": [pcpg],
        "Galle": [/*to be added*/],
        "Gampaha": [/*to be added*/],
        "Hambantota": [/*to be added*/],
        "Jaffna": [rojam],
        "Kalutara": [/*to be added*/],
        "Kandy": [/*to be added*/ ],
        "Kegalle": [/*to be added*/],
        "Kilinochchi": [/*to be added*/],
        "Kurunegala": [/*to be added*/],
        "Mannar": [/*to be added*/],
        "Matale": [/*to be added*/],
        "Matara": [kai],
        "Monaragala": [lom, yudaganava],
        "Mullaitivu": [/*to be added*/],
        "Nuwara Eliya": [/*to be added*/],
        "Polonnaruwa": [galpotha, rotov],
        "Puttalam": [/*to be added*/],
        "Ratnapura": [/*to be added*/],
        "Trincomalee": [/*to be added*/],
        "Vavuniya": [/*to be added*/]
    };
    

    $('path').click(function () {
        var currentSection = this;

        $(currentSection).toggleClass('hovered');

        if (clickedSection && clickedSection !== currentSection) {
            $(clickedSection).css('fill', '').removeClass('hovered');
        }

        var title = $(currentSection).attr('title');
        $('#tooltip').text(title).show();

        if (links[title]) {
            var linkHtml = '<ul>';
            links[title].forEach(function(link) {
                linkHtml += '<li>' + link + '</li>';
            });
            linkHtml += '</ul>';
            $('#boxlink').html(linkHtml);
        } else {
            $('#boxlink').html("Currently we dont have post from here! :(");
        }

        if (clickedSection === currentSection) {
            isClicked = !isClicked;
        } else {
            isClicked = true;
            clickedSection = currentSection;
        }

        if (!isClicked) {
            $('path').not(currentSection).css('fill', '').removeClass('hovered');
            clickedSection = null;
        }
    });

    $('path').hover(function () {
        if (!isClicked) {
            var title = $(this).attr('title');
            $('#tooltip').text(title).show();
    
            if (links[title] && links[title].length > 0) {
                var linkHtml = '<ul>';
                links[title].forEach(function(link) {
                    linkHtml += '<li>' + link + '</li>';
                });
                linkHtml += '</ul>';
                $('#boxlink').html(linkHtml);
            } else {
                $('#boxlink').html("Currently we don't have a post from here! :(");
            }
    
            $(this).css('fill', '#4a488e');
        }
    }, function () {
        if (!$(this).hasClass('hovered') && !isClicked) {
            $(this).css('fill', '');
            $('#tooltip', "#boxlink").hide();
        }
    });
    

    $('#map').mouseleave(function () {
        if (!isClicked) {
            $('#tooltip').html("Hover your mouse over the map.<br>Click to stop the current state.<br>Click again to resume.").show();
            $('#boxlink').empty();
        }
    });
});
