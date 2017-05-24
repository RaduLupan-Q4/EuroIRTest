var clientStyleOverwrite = new function ()
{
    this.chart_ColourMain = '#F14F11';
    this.chart_ColourBackground = '#fff';
    this.chart_ColourBorder = '#EEEEEE';
    this.amountOfDecimals = 2;
    this.amountOfTrades = 100;
    this.formatDate = 'DD MMM YYYY';
    this.formatTime = "HH:mm:ss";
    this.formatDateTime = "DD MMM YYYY HH:mm";
    this.amountOfNewsPerPage = 20; // 20 er default
    this.chart_ColourVolumeBars = '#a0a0a0';
    this.chart_CustomTooltipUseFullOHLCV = true;
    this.decimalSeparator1000 = ',';

}

var clientRNSFilters = [
    { name: 'Acquisitions and disposals', categories: 'ACQ;DIS;ACQ / DIS' },
    { name: 'Board and Management changes', categories: 'BOA;RDN' },
    { name: 'Directors/PDMR shareholding', categories: 'DSH;RDS;' },
    { name: 'Dividends', categories: 'DIV' },
    { name: 'Funding', categories: 'IOD;' },
    { name: 'General', categories: 'APP;LIS;AIM;PAA;ARI;BRC;BLR;CAR;CAN;CRO;CNR;NOV;EFN;COS;CMC;CAS;CON;DSP;TAB;EOD;FON;IOE;LOI;SEN;MER;NAV;NAR;NRA;OFB;ODP;OFF;OLA;ORE;OTT;OUP;NOT;PFU;PME;PNM;PRL;PDI;AGR;SAL;CNT;JVE;RAP;REA;RES;RSP;REN;REP;RTE;RTT;SOA;APM;SSD;STA;STR;POT;OFD;STC;SPC;SRS;SPM;SUS;TEN;TSM;POS;TRS' },
    { name: 'Holding(s) in company', categories: 'HOL;MMH' },
    { name: 'Results and reports', categories: 'FR;IR;TST;IMS;ACS' },
    { name: 'Shareholder Meetings', categories: 'NOA;NOE;RAG;REG;AGM;EGM;ROM' }
];
