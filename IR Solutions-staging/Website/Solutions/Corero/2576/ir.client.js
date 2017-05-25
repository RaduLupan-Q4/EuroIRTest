var clientStyleOverwrite = new function () {
    this.chart_ColourMain = '#0F799A';
    this.chart_ColourBackground = '#FFF';
    this.chart_ColourBorder = '#eeeeee';
    this.amountOfDecimals = 2;
    this.formatDate = 'DD-MM-YYYY';
    this.formatTime = 'HH:mm';
    this.formatDateTime = 'DD-MM-YYYY HH:mm';
    this.news_limitByFromYear = 2011;
    //this.lookup_ChartYAxisInsideOutside = 'outside';

    //this.calc_ChartYAxisInsideOutside = 'outside';

    this.miniquote_ChartYAxisInsideOutside = 'outside';
}
var clientRNSFilters = [
    { name: 'Acquisition and Realisations', categories: 'ACQ;DIS' },
    { name: 'Reports and Accounts', categories: 'FR;ACS' },
    { name: 'Event Notes', categories: 'NOA;NOE;RAG;REG;AGM;EGM;ROM' },
    { name: 'Results and Trading Statements', categories: 'QRF;QRT;NOR;TST' },
    { name: 'Director Dealings', categories: 'RDN;RDS;POS' },
    { name: 'Board / Management', categories: 'BOA;APP' },
    { name: 'Contract Wins', categories: 'CNT'},
    { name: 'Half Yearly Report', categories: 'IR' },
    { name: 'Other Shareholder Documents', categories: 'ODP;PDI;HOL;CIR;IOE' },
];