 var clientStyleOverwrite = new function ()
{
    this.chart_ColourMain = '#919191'; //0284AA
    this.chart_ColourBackground = '#F9F9F9';
    this.chart_ColourBorder = '#E5E5E5';
    this.amountOfDecimals = 2;
    this.amountOfTrades = 10;
    this.formatDate = 'DD-MMM-YYYY';
    this.formatTime = 'HH:mm';
    this.formatDateTime = 'DD-MMM-YYYY HH:mm';
}
var clientRNSFilters = [
    { name: 'Acquisition', categories: 'ACQ' },
    { name: 'Annual Financial Report', categories: 'ACS' },
    { name: 'AGM Statement', categories: 'AGM' },
    { name: 'RE Agreement', categories: 'AGR' },
    { name: 'Change of Adviser', categories: 'APP' },
    { name: 'Directorate Change', categories: 'BOA' },
    { name: 'Disposal', categories: 'DIS' },
    { name: 'Holding(s) in Company', categories: 'HOL' },
    { name: 'Miscellaneous', categories: 'MSC' }
];
