/**
 * Created by Mediapark on 3/5/2015.
 */
$(document).ready(function() {

    function goToByScroll(id) {
        // Reove "link" from the ID
        id = id.replace("link", "");
        // Scroll
        $('html,body').animate({
                scrollTop: $("#" + id).offset().top - 20
            },
            'slow');
    }

    $(document).on('click', ".side-tools-menu > ul > li > a", function(e) {
        // Prevent a page reload when a link is pressed
        e.preventDefault();
        // Call the scroll function
        goToByScroll($(this).attr("id"));
    });

    $(document).on('click', '#nav-icon3', function() {
        $(this).toggleClass('open');
        $('.side-tools-menu').toggleClass('open');
    });

    $(document).on('click', '.hamburger', function() {
      $(".mobile ul").slideToggle();
    });
});
