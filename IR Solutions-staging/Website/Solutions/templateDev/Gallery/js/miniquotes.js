// external js: isotope.pkgd.js

$(document).ready(function () {
    // init Isotope
    var $grid = $('.grid').isotope({
        itemSelector: '.isotopeElement',
        masonry: {
            columnWidth: 30,
            gutter: 10
        }
    });

    // store filter for each group
    var filters = {};

    $('.buttonGroupEncapsulator').on('click', '.buttonSelector', function () {
        var $this = $(this);
        // get group key
        var $buttonGroup = $this.parents('.buttonGroup');
        var filterGroup = $buttonGroup.attr('data-filter-group');
        // set filter for group
        filters[filterGroup] = $this.attr('data-filter');
        // combine filters
        var filterValue = concatValues(filters);
        // set filter for Isotope
        $grid.isotope({ filter: filterValue });
        $buttonGroup.find('.buttonSelector').removeClass('buttonSelector_active');
        $this.addClass('buttonSelector_active');
    });
    $('.buttonFullScreen').click(function () {
        window.open("Miniquotes.aspx", "Full Screen", "fullscreen=yes,width=1200, height=1000");
    });
});

// flatten object by concatting values
function concatValues(obj) {
    var value = '';
    for (var prop in obj) {
        value += obj[prop];
    }
    return value;
}