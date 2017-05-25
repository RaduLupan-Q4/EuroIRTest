var clientStyleOverwrite = new function () {
    this.chart_ColourMain = '#013453';
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
    this.chart_DefaultPeriodSelected = 'd1';
    this.amountOfNewsHeadlines = 3;
}


var clientNasdaqOMXNordicFilters_EN = [{
    name: 'All News', categories: 'allRNSnews'
}, {
    name: 'Company Announcement', categories: 'R'
}, {
    name: 'Insiders\' dealing', categories: 'Insiders\' dealing'
}, {
    name: 'Financial Calendar', categories: 'Financial Calendar'
}, {
    name: 'Decisions of annual general meeting', categories: 'Decisions of annual general meeting'
}, {
    name: 'Notice to general meeting', categories: 'Notice to convene ext. general meeting'
}, {
    name: 'Articles of association', categories: 'Articles of association'
}];
var clientNasdaqOMXNordicFilters_SE = [{
    name: 'Alle Nyheder', categories: 'allRNSnews'
}, {
    name: 'Börsmeddelande', categories: 'R'
}, {
    name: 'Insynshandel', categories: 'Insynshandel'
}, {
    name: 'Finansiell kalender', categories: 'Finansiell kalender'
}, {
    name: 'Bolagsordning', categories: 'Bolagsordning'
}, {
    name: 'Selskabsvedtægter', categories: 'Selskabsvedtægter'
}];



