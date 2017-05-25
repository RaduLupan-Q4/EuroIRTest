var clientStyleOverwrite = new function () {
    this.chart_ColourMain = '#0b3251';
    this.chart_ColourBackground = '#ffffff';
    this.chart_ColourBorder = '#E5E5E5';
    this.amountOfDecimals = 2;
    this.amountOfTrades = 100;
    this.formatDate = 'DD-MMM-YYYY';
    this.formatTime = 'HH:mm';
    this.formatDateTime = 'DD-MMM-YYYY HH:mm';
    this.amountOfNewsPerPage = 10; // 20 er default
    this.chart_Colours = ['', '#D54B0A', '#03C03C', '#0F52BA', '#138808', '#3B444B', '#4B5320', '#507D2A', '#556B2F', '#FF0000', '#779ECB', '#915C83', '#91877D', '#FF00DC', '#967117', '#9932CC', '#00FF90', '#A4C639', '#B2EC5D', '#CBA135', '#CD9575', '#91877D', '#967117', '#FF8C00', '#779ECB', '#A4C639'];
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
