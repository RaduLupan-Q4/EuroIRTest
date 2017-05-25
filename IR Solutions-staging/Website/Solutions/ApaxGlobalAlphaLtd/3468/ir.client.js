var clientStyleOverwrite = new function ()
{
    this.chart_ColourMain = '#ffa000';
    this.chart_ColourBackground = '#fff';
    this.chart_ColourBorder = '#EEEEEE';
    this.amountOfDecimals = 2;
    this.amountOfTrades = 100;
    this.formatDate = 'DD MMM YYYY';
    this.formatTime = "HH:mm:ss";
    this.formatDateTime = "DD MMM YYYY HH:mm";
    this.lookup_ChartYAxisInsideOutside = 'outside';
    this.calc_ChartYAxisInsideOutside = 'outside';
    this.miniquote_ChartYAxisInsideOutside = 'outside';
    this.amountOfNewsPerPage = 5; // 20 er default
    this.chart_CustomTooltipUseFullOHLCV = true;
}

var clientRNSFilters = [
    { name: 'Acquisition and Disposals', categories: 'ACQ' },
    { name: 'Company Announcement - General', categories: 'ACQ;LIS;AIM;PAA;ARI;BRC;BLR;CAR;CAN;CRO;CNR;NOV;EFN;COS;CMC;CAS;CON;RDN;DSP;TAB;EOD;FON;IOD;IOE;LOI;SEN;MER;NAV;NAR;NRA;OFB;ODP;OFF;OLA;ORE;OTT;OUP;NOT;PFU;PME;PNM;PRL;PDI;AGR;SAL;CNT;JVE;RAP;REA;RES;RSP;REN;REP;RTE;RTT;SOA;APM;SSD;STA;STR;POT;OFD;STC;SPC;SRS;SPM;SUS;TEN;TSM;TST;POS;TRS' },
    { name: 'Mergers', categories: 'MER; PNM' },
    { name: 'Results and Trading Reports', categories: 'FR;IR;QRF;QRT;NOR;ACS;TST;MSC;IR;RAG;REG;ROI;ROM;RTE;SYR' },
    { name: 'Executive Changes', categories: 'APP;CAN;COS;BOA;EXC' },
    { name: 'Director Dealings', categories: 'RDN;RDS;POS;MSC' },
    { name: 'Advance Notice of Results', categories: 'NOR' },
    { name: 'Transaction in Own Shares', categories: 'POS' },
    { name: 'Holding(s) in Company', categories: 'HOL;RDS;DSH' },
];
