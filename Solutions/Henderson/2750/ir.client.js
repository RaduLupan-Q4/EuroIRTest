var clientStyleOverwrite = new function ()
{
    this.chart_ColourMain = '#b2bb1c';
    this.chart_ColourBackground = '#fff';
    this.chart_ColourBorder = '#EEEEEE';
    this.amountOfDecimals = 2;
    this.amountOfTrades = 100;
    this.formatDate = 'DD/MM/YYYY';
    this.formatTime = "HH:mm:ss";
    this.formatDateTime = "DD/MM/YYYY HH:mm";
    this.amountOfNewsPerPage = 15;
    this.lookup_ChartYAxisInsideOutside = 'outside';
    this.calc_ChartYAxisInsideOutside = 'outside';
    this.miniquote_ChartYAxisInsideOutside = 'outside';
    this.amountOfNewsHeadlines = 3;
}

var clientRNSFilters = [
    { name: 'Inside information', categories: 'ACQ;ACS;ARI;CIR;DIS;DIV;EGM;FR;IMS;IOD;IOE;IR;JVE;MER;NOA;NOE;PDI;POS;ORF;QRT;RAP;REA;RSP;TST'},
    { name: 'Results and Trading Statements', categories: 'TST;QRF;QRT;FR;IR;IMS' },
    { name: 'Report and Accounts', categories: 'IR;;ACS;' },
    { name: 'Acquisitions / disposals', categories: 'ACQ;DIS;MER;PNM' },
    { name: 'AGM and other meetings', categories: 'AGM;NOA;RAG;ROM;NOE;REG' },
    { name: 'Share buyback', categories: 'POS;CAS;' },
    { name: 'Dividend', categories: 'DIV' },
    { name: 'Director shareholdings', categories: 'RDN;RDS;DSH' },
    { name: 'Holding(s) in Company', categories: 'HOL;MMH' }
];