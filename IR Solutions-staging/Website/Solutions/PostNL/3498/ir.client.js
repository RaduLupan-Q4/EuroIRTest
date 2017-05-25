var clientStyleOverwrite = new function ()
{
    this.chart_ColourMain = '#ED8C00';
    this.chart_ColourBackground = '#fff';
    this.chart_ColourBorder = '#EEEEEE';
    this.amountOfDecimals = 2;
    this.amountOfTrades = 100;
    this.formatDate = 'DD MMMM YYYY';
    this.formatTime = "HH:mm:ss";
    this.formatDateTime = "DD/MM/YYYY HH:mm";
    this.chart_CustomTooltipUseFullOHLCV = true;
    this.amountOfNewsPerPage = 10; // 20 er default
    this.lookup_ChartYAxisInsideOutside = 'outside';
    this.calc_ChartYAxisInsideOutside = 'outside';
    this.miniquote_ChartYAxisInsideOutside = 'outside';
    //this.flipDecimalAndThousandSeparators = true;
    this.chart_DrawMode = 'line';
    this.miniquoteChartDefaultPeriode = 'd1';
    this.chart_Colours = [null, '#00BFFF', '#556B2F', '#96EAFF', '#000000', '#C1D6D6', '#FF0000', '#779ECB', '#915C83', '#91877D', '#FF00DC', '#967117', '#9932CC', '#00FF90', '#A4C639', '#B2EC5D', '#CBA135', '#CD9575', '#91877D', '#967117', '#FF8C00', '#779ECB', '#A4C639']; //Comparison colours - remember styling in client.css as well (check CNH solution)
}


var clientNasdaqOMXNordicFilters_EN = [{ name: 'All News', categories: 'allRNSnews' }, { name: 'Company Announcement', categories: 'Company Announcement' }, { name: 'Insiders dealing', categories: 'Insiders dealing' }, { name: 'Financial Calendar', categories: 'Financial Calendar' }, { name: 'Decisions of annual', categories: 'Decisions of annual' }, { name: 'Notice to general meeting', categories: 'Notice to convene an' }, { name: 'Articles of association', categories: 'Articles of associat' }];
var clientNasdaqOMXNordicFilters_DA = [{ name: 'Alle Nyheder', categories: 'allRNSnews' }, { name: 'Selskabsmeddelelse', categories: 'Selskabsmeddelelse' }, { name: 'Insideres handler', categories: 'Insideres handler' }, { name: 'Finanskalender', categories: 'Finanskalender' }, { name: 'Referat fra generalforsamling', categories: 'Referat fra generalf' }, { name: 'Indkaldelse til generalforsamling', categories: 'Indkaldelse til gene' }, { name: 'Selskabsvedtægter', categories: 'Selskabsvedtægter' }];



