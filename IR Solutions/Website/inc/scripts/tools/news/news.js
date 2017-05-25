$(function() {
    var oldContent = null;
    $("#accordion").accordion({
        collapsible: true,
        active: true,
        icons: false,
        heightStyle: "content"
    });
    $('#accordion h2').click(function() {
        var content = $(this).html();
        $(this).html(content);
        $('.ui-accordion-header .directory').attr('src', '../../../inc/images/directory_plus.gif');
        $('.ui-state-active .directory').attr('src', '../../../inc/images/directory_minus.gif');
    });
    $('#accordion h3').mouseover(function() {
        $(this).css('cursor', 'pointer');
    });
    $(".button").click(function() {
        var id = $(this).attr('id');
        var content = formatText($('#content_' + id).html());
        $('#lightbox-content').html(content);
        $('#lightbox-panel').center(true);
        $("#lightbox").attr('style', 'position:fixed');
        $("#lightbox, #lightbox-panel").fadeIn(200);
    });
    $("a#close-panel").click(function() {
        $("#lightbox, #lightbox-panel").fadeOut(200, function() {
            setTimeout(updateSizeOfLightbox(), 300);
        });
    });
    $("#lightbox").click(function() {
        $("#lightbox, #lightbox-panel").fadeOut(200, function() {
            setTimeout(updateSizeOfLightbox(), 300);
        });
    });
    updateSizeOfLightbox();
});

function updateSizeOfLightbox() {
    $('#lightbox').css('height', ($(document).height() + 120) + 'px');
}

function formatText(text) {
    return text.replace(/\n\n/g, '<br />').replace(/\n/g, ' ').replaceAll('•', '<br />•').replaceAll('º', '&emsp;º').replace(/-{4,}/g, '<hr />');
}

String.prototype.replaceAll = function(str1, str2, ignore) {
    return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g, "\\$&"), (ignore ? "gi" : "g")), (typeof(str2) == "string") ? str2.replace(/\$/g, "$$$$") : str2);
};
jQuery.fn.center = function(parent) {
    if (parent) {
        parent = this.parent();
    } else {
        parent = window;
    }
    this.css({
        "position": "absolute",
        "top": 100 + $(parent).scrollTop() + "px",
        "left": ((($(parent).width() - this.outerWidth()) / 2) + $(parent).scrollLeft() + "px")
    });
    return this;
};