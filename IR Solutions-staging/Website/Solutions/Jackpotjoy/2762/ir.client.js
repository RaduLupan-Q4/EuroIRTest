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
    this.chart_DefaultPeriodSelected = 'd1';
    this.chart_CustomTooltipUseFullOHLCV = true;
}

var clientRNSFilters = [
    { name: 'Acquisition', categories: 'ACQ' },
    { name: 'Board Changes', categories: 'BOA;APP' },
    { name: 'Disposals', categories: 'DIS' },
    { name: 'Inside Information', categories: 'TVR;NAV;LIS;AIM;PAA;ARI;BRC;BLR;CAR;CAN;CRO;CNR;NOV;EFN;COS;CMC;CAS;CON;RDN;DSP;TAB;EOD;FON;IOD;IOE;LOI;SEN;MER;NAV;NAR;NRA;OFB;ODP;OFF;OLA;ORE;OTT;OUP;NOT;PFU;PME;PNM;PRL;PDI;AGR;SAL;CNT;JVE;RAP;REA;RES;RSP;REN;REP;RTE;RTT;SOA;APM;SSD;STA;STR;POT;OFD;STC;SPC;SRS;SPM;SUS;TEN;TSM;TST;TRS' },
    { name: 'Trading Statements', categories: 'TST' },
    { name: 'AGM Information', categories: 'AGM;NOA' },
    { name: 'Directors Shareholdings', categories: 'DSH;MSC;NOA;NOE;REG;AGM;EGM;ROM' },
    { name: 'Holding(s) in company', categories: 'HOL;MMH' },
    { name: 'Results', categories: 'FR;IR;QRF;QRT;NOR;ACS;MSC;IR;RAG;REG;ROI;ROM;RTE;SYR' },
    { name: 'Transactions in own shares', categories: 'POS' }
];
