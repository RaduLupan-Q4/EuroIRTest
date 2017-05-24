var clientStyleOverwrite = new function ()
{
    this.chart_ColourMain = '#DE076E'; //0284AA
    this.chart_ColourBackground = '#F9F9F9';
    this.chart_ColourBorder = '#E5E5E5';
    this.amountOfDecimals = 2;
    this.showCustomMarketCapM = 2;
    this.amountOfTrades = 1000;
    this.amountOfNewsPerPage = 20; // 20 er default
    this.formatDate = 'DD MMM YYYY';
    this.formatTime = 'HH:mm:ss';
    this.formatDateTime = 'DD MMM YYYY HH:mm';
    this.formatDateTimeYearOnly = 'YYYY';
    this.chart_DefaultPeriodSelected = 'm3';    //this.news_lockLCID = 2057;
    
    
    this.amountOfNewsHeadlines = 1;
}

//var clientRNSFilters = [{ name: 'Acquisition', categories: 'ACQ' }, { name: 'Annual Financial Report', categories: 'ACS' }, { name: 'AGM Statement', categories: 'AGM' }, { name: 'RE Agreement', categories: 'AGR' }, { name: 'Change of Adviser', categories: 'APP' }, { name: 'Directorate Change', categories: 'BOA' }, { name: 'Disposal', categories: 'DIS' }, { name: 'Holding(s) in Company', categories: 'HOL' }, { name: 'Miscellaneous', categories: 'MSC' }];

var clientNasdaqOMXNordicFilters_EN = [{ name: 'Reports', categories: 'Quarterly report;Half Year financial;Annual report/ annua;Half Year financial' }, { name: 'Company Announcement', categories: 'Company Announcement' }, { name: 'Insiders dealing', categories: 'Insiders dealing' }, { name: 'Financial Calendar', categories: 'Financial Calendar' }, { name: 'Decisions of annual', categories: 'Decisions of annual' }, { name: 'Notice to general meeting', categories: 'Notice to convene an' }, { name: 'Articles of association', categories: 'Articles of associat' }];
var clientNasdaqOMXNordicFilters_DA = [{ name: 'Raporter', categories: 'Kvartalsrapport;Halvårsrapport;Årsrapport;Halvårsrapport' }, { name: 'Selskabsmeddelelse', categories: 'Selskabsmeddelelse' }, { name: 'Insideres handler', categories: 'Insideres handler' }, { name: 'Finanskalender', categories: 'Finanskalender' }, { name: 'Referat fra generalforsamling', categories: 'Referat fra generalf' }, { name: 'Indkaldelse til generalforsamling', categories: 'Indkaldelse til gene' }, { name: 'Selskabsvedtægter', categories: 'Selskabsvedtægter' }];



