function formatDecimalDecimal1000_fixed(number) {
    try {
        if (typeof (number) == 'number') {
			number = number.round(clientStyle.amountOfDecimals).toFixed(clientStyle.amountOfDecimals);
			var decimalSplit = number.toString().split(".");
			var leftPart = decimalSplit[0].replace(/\B(?=(\d{3})+(?!\d))/g, clientLocaleParameters.decimalSeparator1000);
			var delimiter = clientLocaleParameters.decimalSeparator;
			var rightPart = decimalSplit[1].replace('.', clientLocaleParameters.decimalSeparator);
			return leftPart + delimiter + rightPart;
        } else {
            return "-";
        }
    }
    catch (err) {
        return "-";
    }
}function formatDecimalDecimal1000_fixed_noDecimals(number) {
    try {
        if (typeof (number) == 'number') {
			number = number.round(0).toFixed(0);
			var decimalSplit = number.toString().split(".");
			var leftPart = decimalSplit[0].replace(/\B(?=(\d{3})+(?!\d))/g, clientLocaleParameters.decimalSeparator1000);
			var delimiter = clientLocaleParameters.decimalSeparator;
			return leftPart;
        } else {
            return "-";
        }
    }
    catch (err) {
        return "-";
    }
}

Handlebars.registerHelper('thousandSeperatorAndTwoDecimals', function (number) {
    return formatDecimalDecimal1000_fixed(number );
});
Handlebars.registerHelper('thousandSeperatorAndNoDecimals', function (number) {
    return formatDecimalDecimal1000_fixed_noDecimals(number );
});