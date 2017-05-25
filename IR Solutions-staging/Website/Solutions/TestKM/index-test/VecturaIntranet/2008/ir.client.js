/*<%remove*/
/*remove%>*/
var clientStyleOverwrite = {
    chart_DrawMode: 'area',
    chart_DrawModeMiniquote: 'line',
    amountOfDecimals: 2,
    formatDate: 'DD-MM-YYYY',
    formatTime: 'HH:mm',
    formatDateTime: 'DD-MM-YYYY HH:mm',
    lookup_ChartYAxisInsideOutside: 'outside',
    calc_ChartYAxisInsideOutside: 'outside',
    miniquote_ChartYAxisInsideOutside: 'outside',
    chart_DefaultPeriodSelected: 'y1',
    chart_settingsHighLow: true,
    amountOfNewsPerPage: 10,
    chartCurrencyPlus: ['GBP', 'USD', 'EUR', 'DKK', 'AUD', 'BGN',  'IDR', 'JPN', 'KRW', 'LVL', 'MYR', 'NOK', 'NZD', 'PHP', 'PLN', 'RON', 'RUB', 'SEK', 'SGD', 'THB', 'TRY', 'ZAR']
};

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