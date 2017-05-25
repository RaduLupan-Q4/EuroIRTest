var clientStyleOverwrite = new function ()
{
    this.chart_ColourMain = '#e66817';
    this.chart_DefaultPeriodSelected = 'd1';
    this.miniquoteChartDefaultPeriode = 'd1';
    this.chart_ColourBackground = '#fff';
    this.chart_ColourBorder = '#EEEEEE';
    this.chart_ColourVolumeBars = '#5c5c5b';
    this.chart_CustomTooltipUseFullOHLCV = true;
    this.amountOfDecimals = 2;
    this.amountOfTrades = 100;
    this.formatDate = 'DD MMM YYYY';
    this.formatTime = "HH:mm:ss";
    this.formatDateTime = "DD MMM YYYY HH:mm";
    this.lookup_ChartYAxisInsideOutside = 'outside';
    this.calc_ChartYAxisInsideOutside = 'outside';
    this.miniquote_ChartYAxisInsideOutside = 'outside';
    this.amountOfNewsPerPage = 8; // 20 er default
    this.chartCurrencyPlus = ['EUR', 'GBP', 'USD', 'DKK', 'AUD', 'BGN', 'CAD', 'CHF', 'CNY', 'CZK', 'EEK', 'HKD', 'HRK', 'HUF', 'IDR', 'JPN', 'KRW', 'MYR', 'NOK', 'NZD', 'PHP', 'PLN', 'RON', 'RUB', 'SEK', 'SGD', 'THB', 'TRY', 'ZAR'];
}

var clientRNSFilters = [
    { name: 'Acquisition and Realisations', categories: 'ACQ' },
    { name: 'Reports and Accounts', categories: 'ACS;DIS' },
    { name: 'Monthly Net Asset Value (NAV)', categories: 'NAV' },
    { name: 'Event Notes', categories: 'NOA;NOE;RAG;REG;AGM;EGM' },
    { name: 'Results and Trading Statements', categories: 'FR;IR;QRF;QRT;NOR' },
    { name: 'Director Dealings', categories: 'RDN;RDS;POS' },
    { name: 'Board / Management', categories: 'BOA;APP' },
    { name: 'Dividends', categories: 'DIV' },
    { name: 'Other Shareholder Documents', categories: 'ODP;PDI' },
    { name: 'Half Yearly Report', categories: 'IR' }
];
