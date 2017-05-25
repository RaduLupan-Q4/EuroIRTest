var clientStyleOverwrite = new function () {
    this.chart_ColourMain = '#cddcf2';
    this.chart_ColourBackground = '#fff';
    this.chart_ColourBorder = '#EEEEEE';
    this.amountOfDecimals = 2;
    this.amountOfTrades = 100;
    this.formatDate = 'DD/MM/YYYY';
    this.formatTime = "HH:mm:ss";
    this.formatDateTime = "DD/MM/YYYY HH:mm";
    this.amountOfNewsPerPage = 10; // 20 er default
    this.chart_DefaultPeriodSelected = '1d';
    this.lookup_ChartYAxisInsideOutside = 'outside';
    this.calc_ChartYAxisInsideOutside = 'outside';
    this.miniquote_ChartYAxisInsideOutside = 'outside';
}

var clientRNSFilters = [
    { name: 'Inside information', categories: 'AIU' },
    { name: 'Results and Trading Statements', categories: 'TST;QRF;QRT;FR;SYR;MSC' },
    { name: 'Report and Accounts', categories: 'IR;DRL;ACS;NAR;' },
    { name: 'Acquisitions / disposals', categories: 'ACQ;DIS' },
    { name: 'AGM and other meetings', categories: 'AGM;NOA;RAG;ROM' },
    { name: 'Share buyback', categories: 'POS;CAS;RDS;SPM' },
    { name: 'Dividend', categories: 'DIV' },
    { name: 'Director shareholdings', categories: 'RDN;RDS;DSH;BOA' },
    { name: 'Update of securities', categories: 'CON;TVR' },
    { name: 'Holding(s) in Company', categories: 'HOL;MMH;RDS;DSH' }
];

