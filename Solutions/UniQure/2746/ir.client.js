var clientStyleOverwrite = new function ()
{
    this.chart_ColourMain = '#f36f21';
    this.chart_ColourBackground = '#fff';
    this.chart_ColourBorder = '#EEEEEE';
    this.amountOfDecimals = 2;
    this.amountOfTrades = 100;
    this.formatDate = 'DD/MM/YYYY';
    this.formatTime = "HH:mm:ss";
    this.formatDateTime = "DD/MM/YYYY HH:mm";
    this.amountOfNewsPerPage = 10; // 20 er default
    this.amountOfNewsHeadlines = 3;
    this.lookup_ChartYAxisInsideOutside = 'outside';
    this.calc_ChartYAxisInsideOutside = 'outside';
    this.miniquote_ChartYAxisInsideOutside = 'outside';
    this.chart_ColourPie = ['#2bc4b6', '#003e5c', '#7fc0d4', '#585852', '#0082A9', '#8085e9', '#f15c80', '#e4d354', '#2b908f', '#f45b5b'];
     
}


var clientNasdaqOMXNordicFilters_EN = [{ name: 'All News', categories: 'allRNSnews' }, { name: 'Company Announcement', categories: 'Company Announcement;Articles of associat;Articles of association' }, { name: 'Insiders dealing', categories: 'Insiders dealing;Managers\' transactions' }, { name: 'Financial Calendar', categories: 'Financial Calendar' }, { name: 'Annual General Meeting', categories: 'Decisions of annual;Notice to convene an;Articles of associat;Decisions of annual general meeting' }, { name: 'Financial Reports', categories: 'Half Year financial;Annual report/ annua;Annual report/ annual accounts;Half Year financial report' }];
var clientNasdaqOMXNordicFilters_DA = [{ name: 'Alle Nyheder', categories: 'allRNSnews' }, { name: 'Selskabsmeddelelse', categories: 'Selskabsmeddelelse;Selskabsmeddelelser' }, { name: 'Insideres handler', categories: 'Insideres handler;Ledende medarbejderes transaktioner' }, { name: 'Finanskalender', categories: 'Finanskalender' }, { name: 'Generalforsamling', categories: 'Referat fra generalf;Indkaldelse til gene;Selskabsvedtægter' }, { name: 'Finansielle rapporter', categories: 'Halvårsrapport;Årsrapport' }];

