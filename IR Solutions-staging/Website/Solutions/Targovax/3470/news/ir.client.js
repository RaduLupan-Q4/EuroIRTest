var clientStyleOverwrite = new function () {
    this.chart_ColourMain = '#b2bb1c';
    this.chart_ColourBackground = '#fff';
    this.chart_ColourBorder = '#EEEEEE';
    this.amountOfDecimals = 2;
    this.amountOfTrades = 100;
    this.formatDate = 'DD/MM/YYYY';
    this.formatTime = "HH:mm:ss";
    this.formatDateTime = "DD/MM/YYYY HH:mm";
    this.amountOfNewsPerPage = 10; // 20 er default
}

//var clientRNSFilters = [
//    { name: 'Inside information', categories: 'AIU' },
//    { name: 'Results and Trading Statements', categories: 'TST;QRF;QRT;FR;SYR;MSC' },
//    { name: 'Report and Accounts', categories: 'IR;DRL;ACS;NAR' },
//    { name: 'Acquisitions / disposals', categories: 'ACQ;DIS;RDS' },
//    { name: 'AGM and other meetings', categories: 'AGM;NOA;RAG;ROM' },
//    { name: 'Share buyback', categories: 'POS;CAS;RDS;SPM' },
//    { name: 'Dividend', categories: 'DIV' },
//    { name: 'Director shareholdings', categories: 'RDN;RDS;DSH;BOA' },
//    { name: 'Update of securities', categories: 'CON;TVR' },
//    { name: 'Holding(s) in Company', categories: 'HOL;MMH;RDS;DSH' }
//];

var clientRNSFilters = [
    { name: 'Acquisitions and alliances', categories: 'MSC;ACQ;RDS' },
    { name: 'AGM and other meetings', categories: 'AGM;RAG;REG;MSC' },
    { name: 'Board Changes', categories: 'BOA' },
    { name: 'Capital structure', categories: 'TVR;RDS;LIS;POS' },
    { name: 'Director/PDMR shareholding', categories: 'RDS' },
    { name: 'Disposals', categories: 'DIS;MSC' },
    { name: 'Holding(s) in company', categories: 'HOL' },
    { name: 'Inside information', categories: 'AIU' },
    { name: 'Results', categories: 'IR;BLR;IMS;DIV;ACS;FR' },
    { name: 'Share buybacks', categories: 'POS' },
    { name: 'Trading updates', categories: 'AGM;IMS;RDS;MSC;MER' },
    { name: 'Voting rights', categories: 'TVR' }

];