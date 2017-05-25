$(function() {
    // Thresshold
    var thresshold = 90;
    // Todo 1: Hvert tool vi har skal have deres egen thresshold.
    // Todo 2: Hvert sprog skal have en faktor der ganges på thresshold for at siksre at vores tools ikke wordwrapper.

    var targetTableClass = 'responsive-horizontal';
    var columnAmount = $('.' + targetTableClass).find('th[importance]').length; //getColumnAmount();
    var prevremoveAmountColumns = 0;
    var removeAmountColumns = 0;
    var coloumnArr = new Array(columnAmount);
    var importanceArr = Array(columnAmount);
    setColumnAmount(columnAmount);
    setImportanceArr();
    setInterval(updateWidth, 100);

    /*
    function getColumnAmount() {
        var i = 0;
        $('.' + targetTableClass).find('th[importance]').each(function() {
            i++;
        });
        return i;
    }
    */

    function setColumnAmount(columnAmount) {
        var max = columnAmount * 100;
        for (i = 0; i < columnAmount; i++) {
            coloumnArr[i] = max;
            max = max - thresshold;
        }
    }

    function setImportanceArr() {
        $('.' + targetTableClass).find('th[importance]').each(function(index) {
            importanceArr[index] = parseInt($(this).attr('importance'));
        });
    }

    function updateWidth() {
        var targetTableWidth = $('.' + targetTableClass).width();

        for (i = 0; i < coloumnArr.length; i++) {
            removeAmountColumns = coloumnArr.length - 1;
            if (targetTableWidth > coloumnArr[i]) {
                removeAmountColumns = i;
                break;
            }
        }

        if (prevremoveAmountColumns != removeAmountColumns) {
            var sortedImportanceArr = Array();
            sortedImportanceArr = importanceArr.slice(0).sort(function(a, b) { return a - b; });
            var columnBoolAddOrRemArr = Array();
            for (count = 0; count < importanceArr.length; count++) {
                columnBoolAddOrRemArr[count] = 0;
            }
            for (count2 = 0; count2 < removeAmountColumns; count2++) {
                columnBoolAddOrRemArr[jQuery.inArray(sortedImportanceArr[count2], importanceArr)] = 1;
            }
            var columnToRemOrAdd = jQuery.inArray(sortedImportanceArr[removeAmountColumns - 1], importanceArr);
            for (count3 = 0; count3 < columnBoolAddOrRemArr.length; count3++) {
                if (columnBoolAddOrRemArr[count3] == 0) {
                    $('.' + targetTableClass).find("tr").each(function() {
                        if ($(this).find("th").attr('class') != "quote-header") {
                            $(this).find("th:eq(" + count3 + ")").css('display', 'table-cell');
                            $(this).find("td:eq(" + count3 + ")").css('display', 'table-cell');
                        }
                    });
                } else {
                    $('.' + targetTableClass).find("tr").each(function() {
                        if ($(this).find("th").attr('class') != "quote-header" && $(this).attr('class') != "quote-footer") {
                            $(this).find("th:eq(" + count3 + ")").css('display', 'none');
                            $(this).find("td:eq(" + count3 + ")").css('display', 'none');
                        }
                    });
                }
            }
            prevremoveAmountColumns = removeAmountColumns;
        }
    }
});