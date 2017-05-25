var clientStyleOverwrite = new function () {
    this.chart_ColourMain = '#00ADEF';
    this.chart_ColourBackground = '#fff';
    this.chart_ColourBorder = '#eeeeee';
    this.amountOfDecimals = 2;
    this.formatDate = 'DD-MM-YYYY';
    this.chart_ColourVolumeBars = '#2093D0';
    this.formatTime = 'HH:mm';
    this.formatDateTime = 'DD-MM-YYYY HH:mm';
    this.lookup_ChartYAxisInsideOutside = 'outside';
    this.calc_ChartYAxisInsideOutside = 'outside';
    this.miniquote_ChartYAxisInsideOutside = 'outside';
    this.amountOfNewsPerPage = 10;
}
var clientRNSFilters = [{ name: 'Acquisition', categories: 'ACQ' }, { name: 'Annual Financial Report', categories: 'ACS' }, { name: 'AGM Statement', categories: 'AGM' }, { name: 'RE Agreement', categories: 'AGR' }, { name: 'Change of Adviser', categories: 'APP' }, { name: 'Directorate Change', categories: 'BOA' }, { name: 'Disposal', categories: 'DIS' }, { name: 'Holding(s) in Company', categories: 'HOL' }, { name: 'Miscellaneous', categories: 'MSC' }];