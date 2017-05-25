var clientStyleOverwrite = new function () {
    this.chart_ColourMain = '#140757';
    this.chart_ColourBackground = '#FFF';
    this.chart_ColourBorder = '#eeeeee';
    this.chart_ColourVolumeBars = '#ed1c24';
    this.amountOfDecimals = 2;
    this.formatDate = 'DD-MM-YYYY';
    this.formatTime = 'HH:mm';
    this.formatDateTime = 'DD-MM-YYYY HH:mm';


    //this.lookup_ChartYAxisInsideOutside = 'outside';

    //this.calc_ChartYAxisInsideOutside = 'outside';

    this.miniquote_ChartYAxisInsideOutside = 'outside';
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
