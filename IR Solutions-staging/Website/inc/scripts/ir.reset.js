/*
    Apply default attributes to tags to prevent repetitive tasks.
*/

$(function () {
    $("a").addClass("link-target");
    $("iframe").attr({frameborder: 0, scrolling: "no", allowTransparency: true});
});

/*
$(function() {
    //$("h1").remove();
    setTag("a", "link-target");
    setAttribute("iframe", "frameborder", "0");
    setAttribute("iframe", "scrolling", "no");
    setAttribute("iframe", "allowTransparency", "true");
});

function setTag(tag, setClass) {
    $(tag).each(function() {
        $(this).addClass(setClass);
    });
}

function setAttribute(tag, attribute, value) {
    $(tag).each(function() {
        $(this).attr(attribute, value);
    });
}
*/