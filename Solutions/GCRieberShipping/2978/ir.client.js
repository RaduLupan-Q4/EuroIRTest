var clientStyleOverwrite = new function () 
{
    this.chart_ColourMain = '#018E8F';
    this.chart_ColourBackground = '#fff';
    this.chart_ColourBorder = '#EEEEEE';
    this.amountOfDecimals = 2;
    this.amountOfTrades = 100;
    this.formatDate = 'DD/MM/YYYY';
    this.formatTime = "HH:mm:ss";
    this.formatDateTime = "DD/MM/YYYY HH:mm";
    this.chart_CustomTooltipUseFullOHLCV = true;
    this.amountOfNewsPerPage = 10; // 20 er default
    this.lookup_ChartYAxisInsideOutside = 'outside';
    this.calc_ChartYAxisInsideOutside = 'outside';
    this.miniquote_ChartYAxisInsideOutside = 'outside';
    this.chart_Colours = [null, '#7FFF00', '#03C03C', '#0F52BA', '#00BFFF', '#556B2F', '#000000', '#C1D6D6','#FF0000', '#779ECB', '#915C83', '#91877D', '#FF00DC', '#967117', '#9932CC', '#00FF90', '#A4C639', '#B2EC5D', '#CBA135', '#CD9575', '#91877D', '#967117', '#FF8C00', '#779ECB', '#A4C639']; //Comparison colours - remember styling in client.css as well (check CNH solution)
    this.chart_ColourPie = ['#2bc4b6', '#003e5c', '#7fc0d4', '#585852', '#0082A9', '#8085e9', '#f15c80', '#e4d354', '#2b908f', '#f45b5b'];
    this.chartCurrencyPlus = ['EUR', 'GBP', 'USD', 'DKK', 'AUD', 'BGN', 'CAD', 'CHF', 'CNY', 'CZK', 'EEK', 'HKD', 'HRK', 'HUF', 'IDR', 'JPN', 'KRW', 'MYR', 'NOK', 'NZD', 'PHP', 'PLN', 'RON', 'RUB', 'SEK', 'SGD', 'THB', 'TRY', 'ZAR'];

}


var clientNasdaqOMXNordicFilters_EN = [{ name: 'All News', categories: 'allRNSnews' }, { name: 'Company Announcement', categories: 'Company Announcement;Articles of associat;Articles of association' }, { name: 'Insiders dealing', categories: 'Insiders dealing;Managers\' transactions' }, { name: 'Financial Calendar', categories: 'Financial Calendar' }, { name: 'Annual General Meeting', categories: 'Decisions of annual;Notice to convene an;Articles of associat;Decisions of annual general meeting' }, { name: 'Financial Reports', categories: 'Half Year financial;Annual report/ annua;Annual report/ annual accounts;Half Year financial report' }];
var clientNasdaqOMXNordicFilters_DA = [{ name: 'Alle Nyheder', categories: 'allRNSnews' }, { name: 'Selskabsmeddelelse', categories: 'Selskabsmeddelelse;Selskabsmeddelelser' }, { name: 'Insideres handler', categories: 'Insideres handler;Ledende medarbejderes transaktioner' }, { name: 'Finanskalender', categories: 'Finanskalender' }, { name: 'Generalforsamling', categories: 'Referat fra generalf;Indkaldelse til gene;Selskabsvedtægter' }, { name: 'Finansielle rapporter', categories: 'Halvårsrapport;Årsrapport' }];

