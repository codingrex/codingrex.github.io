
$(document).ready(function() {
    $('.publication-mousecell').mouseover(function() {
        $(this).find('video').css('display', 'inline-block');
        $(this).find('img').css('display', 'none');
    });
    $('.publication-mousecell').mouseout(function() {
        $(this).find('video').css('display', 'none');
        $(this).find('img').css('display', 'inline-block');
    });
    $('.publication-mousecell2').mouseover(function() {
        $(this).find('#vid_front').css('display', 'none');
        $(this).find('#vid_back').css('display', 'inline-block');
    });
    $('.publication-mousecell2').mouseout(function() {
        $(this).find('#vid_front').css('display', 'inline-block');
        $(this).find('#vid_back').css('display', 'none');
    });
})
