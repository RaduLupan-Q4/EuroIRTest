var dateComparisons = {
    SAME: "same",
    BEFORE: "before",
    AFTER: "after"
}

function compareDates(dateToTest, compareToDate) {
    var _dateToTest = new Date(dateToTest.getTime()).setHours(0, 0, 0, 0),
        _compareToDate = new Date(compareToDate.getTime()).setHours(0, 0, 0, 0);

    if (_dateToTest === _compareToDate) {
        return dateComparisons.SAME;
    }

    return (dateToTest < compareToDate) ? dateComparisons.BEFORE : dateComparisons.AFTER;
}

function getDaysInMonth(m, y) {
    var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if ((!(y % 4) && y % 100) || !(y % 400)) {
        daysInMonth[1] = 29;
    }
    return daysInMonth[--m];
}