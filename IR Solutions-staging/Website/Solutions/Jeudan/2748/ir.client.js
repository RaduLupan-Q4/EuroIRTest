var clientStyleOverwrite = new function ()
{
    this.chart_ColourMain = '#2bc4b6';
    this.chart_ColourBackground = '#fff';
    this.chart_ColourBorder = '#EEEEEE';
    this.amountOfDecimals = 2;
    this.amountOfTrades = 100;
    this.formatDate = 'DD/MM/YYYY';
    this.formatTime = "HH:mm:ss";
    this.formatDateTime = "DD/MM/YYYY HH:mm";
    this.amountOfNewsPerPage = 10; // 20 er default
    this.lookup_ChartYAxisInsideOutside = 'outside';
    this.calc_ChartYAxisInsideOutside = 'outside';
    this.miniquote_ChartYAxisInsideOutside = 'outside';
    this.chart_DrawMode = 'line';
}


var clientNasdaqOMXNordicFilters_EN = [{ name: 'All News', categories: 'allRNSnews' }, { name: 'Company Announcement', categories: 'Company Announcement;Articles of associat;Articles of association' }, { name: 'Insiders dealing', categories: 'Insiders dealing;Managers transactions' }, { name: 'Financial Calendar', categories: 'Financial Calendar' }, { name: 'Annual General Meeting', categories: 'Decisions of annual;Notice to convene an;Articles of associat' }, { name: 'Financial Reports', categories: 'Half Year financial;Annual report/ annua;Annual report/ annual accounts;Half Year financial report' }];
var clientNasdaqOMXNordicFilters_DA = [{ name: 'Alle Nyheder', categories: 'allRNSnews' }, { name: 'Selskabsmeddelelse', categories: 'Selskabsmeddelelse;Selskabsmeddelelser' }, { name: 'Insideres handler', categories: 'Insideres handler;Ledende medarbejderes transaktioner' }, { name: 'Finanskalender', categories: 'Finanskalender' }, { name: 'Generalforsamling', categories: 'Referat fra generalf;Indkaldelse til gene;Selskabsvedtægter' }, { name: 'Finansielle rapporter', categories: 'Halvårsrapport;Årsrapport' }];



