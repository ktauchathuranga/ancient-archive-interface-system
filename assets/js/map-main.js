$(document).ready(function () {
    var isClicked = false;
    var clickedSection = null;

    $('path').click(function () {
        var currentSection = this;

        $(currentSection).toggleClass('hovered');

        if (clickedSection && clickedSection !== currentSection) {
            $(clickedSection).css('fill', '').removeClass('hovered');
        }

        var title = $(currentSection).attr('title');
        $('#tooltip').text(title).show();

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
            $(this).css('fill', 'red');
        }
    }, function () {
        if (!$(this).hasClass('hovered') && !isClicked) {
            $(this).css('fill', '');
            $('#tooltip').hide();
        }
    });

    $('#map').mouseleave(function () {
        if (!isClicked) {
            $('#tooltip').text("Hoveer your mouse over the map.\nClick to stop the current state.\nClick again to resume.").show();
        }
    });
});
