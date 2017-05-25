var clientStyleOverwrite = new function () {
    this.chart_ColourMain = '#737373'; //0284AA
    this.chart_ColourBackground = '#F9F9F9';
    this.chart_ColourBorder = '#E5E5E5';
    this.amountOfDecimals = 2;
    this.amountOfTrades = 100;
    this.formatDate = 'DD-MMM-YYYY';
    this.formatTime = 'HH:mm';
    this.formatDateTime = 'DD-MMM-YYYY HH:mm';
    this.amountOfNewsPerPage = 10; // 20 er default
}
var clientRNSFilters = [
    { name: 'Acquisition and Realisations', categories: 'ACQ' },
    { name: 'Reports and Accounts', categories: 'ACS' },
    { name: 'Monthly Net Asset Value (NAV)', categories: 'NAV' },
    { name: 'Event Notes', categories: 'NOA;NOE;RAG;REG;AGM;EGM' },
    { name: 'Results and Trading Statements', categories: 'FR;IR;QRF;QRT;NOR' },
    { name: 'Director Dealings', categories: 'RDN;RDS;POS' },
    { name: 'Board / Management', categories: 'BOA;APP' },
    { name: 'Dividends', categories: 'DIV' },
    { name: 'Other Shareholder Documents', categories: 'ODP;PDI' }
];
