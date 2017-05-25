var clientStyleOverwrite = new function ()
{
    this.chart_ColourMain = '#000'; //0284AA
    this.chart_ColourBackground = '#f3f4f5';
    this.chart_ColourBorder = '#E5E5E5';
    this.amountOfDecimals = 2;
    this.amountOfTrades = 100;
    this.formatDate = 'DD MMM YYYY';
    this.formatTime = 'HH:mm';
    this.formatDateTime = 'DD MMM YYYY HH:mm';
    this.amountOfNewsPerPage = 10; // 20 er default
}
var clientRNSFilters = [
    { name: 'Acquisition and Alliances', categories: 'ACQ;CNT' },
    { name: 'Annual Financial Report', categories: 'ACS' },
    { name: 'AGM Statement', categories: 'AGM' },
    { name: 'RE Agreement', categories: 'AGR' },
    { name: 'Change of Adviser', categories: 'APP' },
    { name: 'Directorate Change', categories: 'BOA;MSC' },
    { name: 'Disposal', categories: 'DIS' },
    { name: 'Holding(s) in Company', categories: 'HOL' },
    { name: 'Miscellaneous', categories: 'MSC' }
];