﻿var clientStyleOverwrite = new function ()
{
    this.chart_ColourMain = '#0096c6'; //0096c6
    this.chart_ColourBackground = '#FFFFFF';
    this.chart_ColourBorder = '#E5E5E5';
    this.amountOfDecimals = 2;
    this.formatDate = 'DD/MMM/YYYY';
    this.formatTime = 'HH:mm';
    this.formatDateTime = 'DD/MM/YYYY HH:mm';
    this.chart_ColourVolumeBars = '#767575';
    this.chart_CustomTooltipUseFullOHLCV = true;
    this.amountOfHistoricalYears = 1;
    this.lookup_ChartYAxisInsideOutside = 'outside';
    this.calc_ChartYAxisInsideOutside = 'outside';

    this.chart_DefaultPeriodSelected = 'd1';
}

var clientRNSFilters = [
    { name: 'Acquisition and Disposals', categories: 'ACQ;DIS' },
    { name: 'Board and Management changes', categories: 'BOA;APP' },
    { name: 'Directors/PDMR shareholding', categories: 'DSH;MSC' },
    { name: 'Dividends', categories: 'DIV' },
    { name: 'General', categories: 'LIS;AIM;PAA;ARI;BRC;BLR;CAR;CAN;CRO;CNR;NOV;EFN;COS;CMC;CAS;CON;RDN;DSP;TAB;EOD;FON;IOD;IOE;LOI;SEN;MER;NAV;NAR;NRA;OFB;ODP;OFF;OLA;ORE;OTT;OUP;NOT;PFU;PME;PNM;PRL;PDI;AGR;SAL;CNT;JVE;RAP;REA;RES;RSP;REN;REP;RTE;RTT;SOA;APM;SSD;STA;STR;POT;OFD;STC;SPC;SRS;SPM;SUS;TEN;TSM;TST;POS;TRS' },
    { name: 'Holding(s) in company', categories: 'HOL;MMH' },
    { name: 'Results and Reports', categories: 'FR;IR;QRF;QRT;NOR;ACS;TST;MSC;IR;RAG;REG;ROI;ROM;RTE;SYR' },
    { name: 'Monthly Net Asset Value (NAV)', categories: 'NAV' },
    { name: 'Shareholder Meetings', categories: 'NOA;NOE;REG;AGM;EGM;ROM' }
];