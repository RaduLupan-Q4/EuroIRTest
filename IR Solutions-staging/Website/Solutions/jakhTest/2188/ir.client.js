var clientStyleOverwrite = new function ()
{
    this.chart_ColourMain = '#ff0000'; //Not used anymore. User ir.client.css IRChartColour instead
    this.chart_ColourBackground = '#fff'; //this changes the bar underneath the chart  
    this.chart_ColourBorder = '#eeeeee';
    this.amountOfDecimals = 2;
    this.formatDate = 'DD-MMM-YYYY';
    this.formatTime = 'HH:MM';
    this.formatDateTime = 'DD-MMM-YYYY HH:MM'


    this.amountOfNewsPerPage = 5; //for news.aspx 

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