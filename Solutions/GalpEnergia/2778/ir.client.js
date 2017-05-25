var clientStyleOverwrite = new function () {
    this.chart_ColourMain = '#F37020';
    this.chart_ColourBackground = '#ffffff';
    this.chart_ColourBorder = '#E5E5E5';
    this.chart_ColourVolumeBars = "#d8aea6";
    this.amountOfDecimals = 3;
    this.amountOfTrades = 100;
    this.formatDate = 'DD-MM-YYYY';
    this.formatTime = 'HH:mm';
    this.formatDateTime = 'DD-MM-YYYY HH:mm';
    this.amountOfNewsPerPage = 10; // 20 er default
    this.setCustomExchangeTimezone = ['Euronext Lisbon'];
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
