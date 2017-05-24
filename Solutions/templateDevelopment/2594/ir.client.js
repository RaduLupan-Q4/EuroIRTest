var clientStyleOverwrite = new function ()
{
    this.chart_ColourMain = '#2bc4b6';
    this.chart_ColourBackground = '#fff';
    this.chart_ColourBorder = '#EEEEEE';
    this.amountOfDecimals = 2;
    this.amountOfTrades = 100;
    this.formatDate = 'DD-MM-YYYY';
    this.formatTime = "HH:mm:ss";
    this.formatDateTime = "DD-MM-YYYY HH:mm";
    this.amountOfNewsPerPage = 10; // 20 er default
    this.lookup_ChartYAxisInsideOutside = 'outside';
    this.calc_ChartYAxisInsideOutside = 'outside';
    this.miniquote_ChartYAxisInsideOutside = 'outside';
}


var clientNasdaqOMXNordicFilters_EN = [{ name: 'All News', categories: 'allRNSnews' }, { name: 'Company Announcement', categories: 'Company Announcement' }, { name: 'Insiders dealing', categories: 'Insiders dealing' }, { name: 'Financial Calendar', categories: 'Financial Calendar' }, { name: 'Annual General Meeting', categories: 'Decisions of annual;Notice to convene an;Articles of associat' }, { name: 'Financial Reports', categories: 'Half Year financial ;Annual report/ annua' }];
var clientNasdaqOMXNordicFilters_DA = [{ name: 'Alle Nyheder', categories: 'allRNSnews' }, { name: 'Selskabsmeddelelse', categories: 'Selskabsmeddelelse' }, { name: 'Insideres handler', categories: 'Insideres handler' }, { name: 'Finanskalender', categories: 'Finanskalender' }, { name: 'Generalforsamling', categories: 'Referat fra generalf;Indkaldelse til gene;Selskabsvedtægter' }, { name: 'Finansielle rapporter', categories: 'Halvårsrapport;Årsrapport' }];



