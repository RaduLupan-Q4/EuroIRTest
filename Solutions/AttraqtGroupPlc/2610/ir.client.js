var clientStyleOverwrite = new function () {
    this.chart_ColourMain = '#eee';
    this.chart_ColourBackground = '#FFF';
    this.chart_ColourBorder = '#fff';
    this.amountOfDecimals = 2;
    this.formatDate = 'DD-MM-YYYY';
    this.formatTime = 'HH:mm';
    this.formatDateTime = 'DD-MM-YYYY HH:mm';
    this.amountOfNewsPerPage = 10;
    this.lookup_ChartYAxisInsideOutside = 'outside';

    this.calc_ChartYAxisInsideOutside = 'outside';
}
var clientRNSFilters = [{ name: 'Acquisition', categories: 'ACQ' },{ name: 'Annual Financial Report', categories: 'ACS' },{ name: 'AGM Statement', categories: 'AGM' },{ name: 'RE Agreement', categories: 'AGR' },{ name: 'Change of Adviser', categories: 'APP' },{ name: 'Directorate Change', categories: 'BOA' },{ name: 'Disposal', categories: 'DIS' },{ name: 'Holding(s) in Company', categories: 'HOL' },{ name: 'Miscellaneous', categories: 'MSC' }];