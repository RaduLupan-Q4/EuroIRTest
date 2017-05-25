/**
 * Created by Mediapark on 3/5/2015.
 */
$(document).ready(function() {
    open_dropdown_select();
    add_active_on_input_focus();
    show_content_personal();
    add_active_on_show_content_personal();
    open_search();
    add_active_on_outocomplete_input();
    bookmark_active();
    close_lightbox();
    open_side_menu();

    var $submenu = $('.submenu');
	var $mainmenu = $('.mainmenu');
	$submenu.hide();
	$submenu.on('click','li', function() {
		$submenu.siblings().find('li').removeClass('chosen');
		$(this).addClass('chosen');
	});
	$mainmenu.on('click', 'li', function() {
		$(this).next('.submenu').slideToggle().siblings('.submenu').slideUp();
	});
	$mainmenu.children('li:last-child').on('click', function() {
		$mainmenu.fadeOut().delay(500).fadeIn();
	});

    function goToByScroll(id){
             // Reove "link" from the ID
           id = id.replace("link", "");
             // Scroll
           $('html,body').animate({
               scrollTop: $("#"+id).offset().top-20},
               'slow');
       }

       $(".side-tools-menu > ul > li > a").click(function(e) {
             // Prevent a page reload when a link is pressed
           e.preventDefault();
             // Call the scroll function
           goToByScroll($(this).attr("id"));
       });

       $('#nav-icon3').click(function(){
		$(this).toggleClass('open');
	});
});

function open_dropdown_select() {
    $(".fake-dropdown").click(function() {
        $(this).toggleClass("active");
    });
}

function add_active_on_input_focus() {
    $(".input").focus(function() {
        $(this).parent().addClass("active");

    }).blur(function() {
        $(this).parent().removeClass("active");
    })
};

function show_content_personal() {
    $(".tabs li .us").on('click', function() {
        var that = this;
        var data_class = $(that).data('class');
        $('.pers[style*="display: block"]').hide();
        $('.pers[data-class="'+data_class+'"]').show();
    });
}
function add_active_on_show_content_personal() {
    $(".tabs li .us").on('click', function() {
        $(".tabs li").removeClass("active");
        $(this).parent().addClass("active");
    });
}
function add_active_on_outocomplete_input() {
    $(".autocomplete").on('click', function() {
        $(this).addClass("active");
    });
}
function bookmark_active() {
    $(".bookmark").on('click', function() {
        $(this).toggleClass("active");
    });
}
function open_search() {
    $(".search-show .icon").on('click', function() {
        $(this).parent().toggleClass("open");
    });
}
function close_lightbox() {
    $(".close-lb-btn").on('click', function() {
        $(".lightbox").removeClass("show");
    });
}
function open_side_menu() {
    $("#nav-icon3").on('click', function() {
        $(".side-tools-menu").toggleClass("open");
    });
}
