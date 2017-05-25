/*
    Apply custom behaviour
*/
$(function ()
{
    $(".link-target").click(function() {
        $(this).attr('target', '_blank');
    });
});

function formatColour()
{
    $('.formatColour').each(function ()
    {
        $(this).removeClass("formatColour");
        try
        {
            if (parseFloat($(this).html()) > 0) {
                $(this).addClass("formatColourPos");
            } 
            if (parseFloat($(this).html()) < 0) {
                $(this).addClass("formatColourNeg");
            }
        }
        catch(e) {

        }
    });
}


Handlebars.registerHelper('toLocal', function (number)
{
    return formatLocal(number);
});
Handlebars.registerHelper('decimals', function (number)
{
    return formatDecimal(number);
});
Handlebars.registerHelper('showArrow', function (number)
{
    var addClass = "";
    var value = Number(number);
    if (value > 0) {
        addClass = "formatArrowPos";
    } else if (value == 0) {
        addClass = "formatArrowDef";
    }
    else {
        addClass = "formatArrowNeg";
    }
    return addClass;    
});
Handlebars.registerHelper('showDateTime', function (timestamp)
{
    return moment(timestamp).format(clientStyle.formatDateTime);
});
Handlebars.registerHelper('showDate', function (timestamp)
{
    return moment(timestamp).format(clientStyle.formatDate);
});
Handlebars.registerHelper('showTime', function (timestamp)
{
    return moment(timestamp).format(clientStyle.formatTime);
});
Handlebars.registerHelper('showCurrency', function ()
{
    return globalActiveCurrency;
});
Handlebars.registerHelper('showMarketCapM', function (number)
{
    return formatDecimal(number / 1000000000);
});


Date.prototype.addHours = function (hours)
{
    this.setHours(this.getHours() + hours);
    return this;
};

Date.prototype.addMinutes = function (minutes)
{
    this.setMinutes(this.getMinutes() + minutes);
    return this;
};


