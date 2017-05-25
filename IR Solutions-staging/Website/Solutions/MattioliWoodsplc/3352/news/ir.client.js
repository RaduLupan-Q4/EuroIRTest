var clientStyleOverwrite = new function () {
    this.chart_ColourMain = '#A70C68';
    this.chart_ColourBackground = '#fff';
    this.chart_ColourBorder = '#EEEEEE';
    this.amountOfDecimals = 2;
    this.amountOfTrades = 100;
    this.formatDate = 'DD MMM YYYY';
    this.formatTime = "HH:mm:ss";
    this.formatDateTime = "DD MMM YYYY HH:mm";
    this.lookup_ChartYAxisInsideOutside = 'outside';
    this.calc_ChartYAxisInsideOutside = 'outside';
    this.miniquote_ChartYAxisInsideOutside = 'outside';
    this.amountOfNewsPerPage = 8; // 20 er default
}

var clientRNSFilters = [{ name: 'Acquisition', categories: 'ACQ' }, { name: 'Annual Financial Report', categories: 'ACS' }, { name: 'AGM Statement', categories: 'AGM' }, { name: 'RE Agreement', categories: 'AGR' }, { name: 'Change of Adviser', categories: 'APP' }, { name: 'Directorate Change', categories: 'BOA' }, { name: 'Disposal', categories: 'DIS' }, { name: 'Holding(s) in Company', categories: 'HOL' }, { name: 'Miscellaneous', categories: 'MSC' }];

