var clientStyleOverwrite = new function ()
{
    this.chart_ColourMain = '#c5d200';
    this.chart_ColourBackground = '#fff';
    this.chart_ColourBorder = '#EEEEEE';
    this.chart_DrawMode = 'line';
    this.amountOfDecimals = 2;
    this.amountOfTrades = 100;
    this.formatDate = 'DD/MM/YYYY';
    this.formatTime = "HH:mm:ss";
    this.formatDateTime = "DD/MM/YYYY HH:mm";
    this.amountOfNewsPerPage = 10; // 20 er default
    this.amountOfHistoricalYears = 99;
    this.lookup_ChartYAxisInsideOutside = 'outside';
    this.calc_ChartYAxisInsideOutside = 'outside';
    this.miniquote_ChartYAxisInsideOutside = 'outside';
    this.chart_ColourPie = ['#BFE0E9', '#0082A9', '#003E5C', '#DEDED8', '#818180', '#2BC4B6'];
    this.chart_Colours = [null, '#a0c8f0', '#892da0', '#ff90a3', '#ff3c14', '#556B2F', '#FF0000', '#779ECB', '#915C83', '#91877D', '#FF00DC', '#967117', '#9932CC', '#00FF90', '#A4C639', '#B2EC5D', '#CBA135', '#CD9575', '#91877D', '#967117', '#FF8C00', '#779ECB', '#A4C639'];
    this.chart_CustomTooltipUseFullOHLCV = true;


    this.chart_ignoreNewsStoriesWithHeadline = ['Transactions under Novozymes’ stock buyback program'];
}



var clientNasdaqOMXNordicFilters_EN = [{ name: 'All News', categories: 'allRNSnews' }, { name: 'Annual Financial Report', categories: 'Annual Financial Report' }, { name: 'Annual report/ annual accounts', categories: 'Annual report/ annual accounts' }, { name: 'Changes board/management/auditors', categories: 'Changes board/management/auditors' }, { name: 'Changes in companys own shares', categories: 'Changes in companys own shares' }, { name: 'Company Announcement', categories: 'Company Announcement' }, { name: 'Decisions of general meeting', categories: 'Decisions of general meeting' }, { name: 'Financial Calendar', categories: 'Financial Calendar' }, { name: 'Financial Statement Release', categories: 'Financial Statement Release' }, { name: 'Half Year financial report', categories: 'Half Year financial report' }, { name: 'Major shareholder announcements', categories: 'Major shareholder announcements' }, { name: 'Managers Transactions', categories: 'Managers Transactions' }, { name: 'Notice to general meeting', categories: 'Notice to general meeting' }, { name: 'Quarterly report', categories: 'Quarterly report' }, { name: 'Total number of voting rights and capital', categories: 'Total number of voting rights and capital' }];

var clientNasdaqOMXNordicFilters_DA = [{ name: 'Alle Nyheder', categories: 'allRNSnews' }, { name: 'Antal stemmerettigheder og kapital', categories: 'Antal stemmerettigheder og kapital' }, { name: 'Erhvervelse eller afhændelse af egne aktier', categories: 'Erhvervelse eller afhændelse af egne aktier' }, { name: 'Finanskalender', categories: 'Finanskalender' }, { name: 'Forløb af generalforsamling', categories: 'Forløb af generalforsamling' }, { name: 'Halvårsrapport', categories: 'Halvårsrapport' }, { name: 'Indkaldelse til generalforsamling', categories: 'Indkaldelse til generalforsamling' }, { name: 'Kvartalsrapport', categories: 'Kvartalsrapport' }, { name: 'Ledende medarbejderes transaktioner', categories: 'Ledende medarbejderes transaktioner' }, { name: 'Selskabsmeddelelse', categories: 'Selskabsmeddelelse' }, { name: 'Storaktionærmeddelelser', categories: 'Storaktionærmeddelelser' }, { name: 'Ændring ledelse/revision', categories: 'Ændring ledelse/revision' }, { name: 'Årsrapport', categories: 'Årsrapport' }, { name: 'Årsregnskabsmeddelelse', categories: 'Årsregnskabsmeddelelse' }];

