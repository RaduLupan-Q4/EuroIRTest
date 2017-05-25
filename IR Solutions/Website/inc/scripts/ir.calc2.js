// Move to ir.util.js

var calcTransformedData = [];
var calcData = [];
function initCalc()
{
    debugStep("initCalc()");
    
    calcData = globalClosePriceListingData[0].data[globalActiveListingIndex].data;
    
    $("#from-datepicker").datepicker({ showOn: "button", buttonImage: "http://ir.euroinvestor.com/inc/images/icons/calendar.png", buttonImageOnly: true, onSelect: datePickerChangeHandler(), defaultDate: fromDate, maxDate: new Date() });
    $("#to-datepicker").datepicker({ showOn: "button", buttonImage: "http://ir.euroinvestor.com/inc/images/icons/calendar.png", buttonImageOnly: true, onSelect: datePickerChangeHandler(), defaultDate: toDate, maxDate: new Date() });
    
    $("#from-datepicker").datepicker();

    //$(function ()
    //{
    //    $("#from-datepicker").datepicker("option", "minDate", new Date(calcData[0].date));
    //    $("#to-datepicker").datepicker("option", "minDate", new Date(calcData[0].date));
    //});

    

}

function datePickerChangeHandler()
{
    var fromDate = $("#from-datepicker").datepicker("getDate"),
        toDate = $("#to-datepicker").datepicker("getDate");

    if (toDate < fromDate) swapDatepickerDates();

    setFromDateSelects($("#from-datepicker").datepicker("getDate"));
    setToDateSelects($("#to-datepicker").datepicker("getDate"));
}