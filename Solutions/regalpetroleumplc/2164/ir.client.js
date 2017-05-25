var clientStyleOverwrite = new function ()
{
    this.chart_ColourBackground = '#F9F9F9';
    this.chart_ColourBorder = '#eeeeee';
    this.amountOfDecimals = 2;
    this.formatDate = 'YYYY-MM-DD';
    this.formatTime = 'HH:mm';
    this.formatDateTime = 'YYYY-MM-DD HH:mm';
    this.amountOfNewsPerPage = 20;
}
var clientRNSFilters = [{ name: 'Acquisition', categories: 'ACQ' }, { name: 'Annual Financial Report', categories: 'ACS' }, { name: 'AGM Statement', categories: 'AGM' }, { name: 'RE Agreement', categories: 'AGR' }, { name: 'Change of Adviser', categories: 'APP' }, { name: 'Directorate Change', categories: 'BOA' }, { name: 'Disposal', categories: 'DIS' }, { name: 'Holding(s) in Company', categories: 'HOL' }, { name: 'Miscellaneous', categories: 'MSC' }];