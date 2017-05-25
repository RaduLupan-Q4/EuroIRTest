var clientStyleOverwrite = new function ()
{
    this.chart_ColourMain = '#165fab';
    this.chart_ColourBackground = '#fff';
    this.chart_ColourBorder = '#EEEEEE';
    this.amountOfDecimals = 2;
    this.amountOfTrades = 100;
    this.formatDate = 'MM/DD/YYYY';
    this.formatTime = "HH:mm:ss";
    this.formatDateTime = "MM/DD/YYYY HH:mm";
    this.amountOfNewsPerPage = 10; // 20 er default
    this.lookup_ChartYAxisInsideOutside = 'outside';
    this.calc_ChartYAxisInsideOutside = 'outside';
    this.miniquote_ChartYAxisInsideOutside = 'outside';

    this.chart_Colours = [null, '#03C03C', '#3B444B', '#FF0000', '#138808', '#3B444B', '#4B5320', '#507D2A', '#556B2F', '#FF0000', '#779ECB', '#915C83', '#91877D', '#FF00DC', '#967117', '#9932CC', '#00FF90', '#A4C639', '#B2EC5D', '#CBA135', '#CD9575', '#91877D', '#967117', '#FF8C00', '#779ECB', '#A4C639'];
}


var clientNasdaqOMXNordicFilters_EN = [{ name: 'All News', categories: 'allRNSnews' }, { name: 'Company Announcement', categories: 'Company Announcement' }, { name: 'Insiders dealing', categories: 'Insiders dealing' }, { name: 'Financial Calendar', categories: 'Financial Calendar' }, { name: 'Annual General Meeting', categories: 'Decisions of annual;Notice to convene an;Articles of associat' }, { name: 'Financial Reports', categories: 'Half Year financial ;Annual report/ annua' }];
var clientNasdaqOMXNordicFilters_DA = [{ name: 'Alle Nyheder', categories: 'allRNSnews' }, { name: 'Selskabsmeddelelse', categories: 'Selskabsmeddelelse' }, { name: 'Insideres handler', categories: 'Insideres handler' }, { name: 'Finanskalender', categories: 'Finanskalender' }, { name: 'Generalforsamling', categories: 'Referat fra generalf;Indkaldelse til gene;Selskabsvedtægter' }, { name: 'Finansielle rapporter', categories: 'Halvårsrapport;Årsrapport' }];



