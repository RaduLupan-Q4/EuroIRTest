var clientStyleOverwrite = new function () {
    this.chart_ColourMain = '#35a9e1';
    this.chart_ColourBackground = '#fff';
    this.chart_ColourBorder = '';
    this.amountOfDecimals = 2;
    this.formatDate = 'DD/MM/YYYY';
    this.formatTime = 'HH:mm';
    this.formatDateTime = 'DD/MM/YYYY HH:mm';
    this.chart_ColourVolumeBars = '#0e6e98';
    this.chart_DrawMode = 'line';
    this.chart_CustomTooltipUseFullOHLCV = true;
    this.amountOfNewsPerPage = 10; // 20 er default
    this.lookup_ChartYAxisInsideOutside = 'outside';
    this.calc_ChartYAxisInsideOutside = 'outside';
    this.miniquote_ChartYAxisInsideOutside = 'outside';
    this.chartCurrencyPlus = ['EUR', 'GBP', 'USD', 'DKK', 'AUD', 'BGN', 'CAD', 'CHF', 'CNY', 'CZK', 'EEK', 'HKD', 'HRK', 'HUF', 'IDR', 'JPN', 'KRW', 'MYR', 'NOK', 'NZD', 'PHP', 'PLN', 'RON', 'RUB', 'SEK', 'SGD', 'THB', 'TRY', 'ZAR'];
    this.chart_Colours = [null, '#7FFF00', '#FFC300', '#0F52BA', '#00BFFF', '#96EAFF', '#000000', '#C1D6D6', '#556B2F', '#FF0000', '#779ECB', '#915C83', '#91877D', '#FF00DC', '#967117', '#9932CC', '#00FF90', '#A4C639', '#B2EC5D', '#CBA135', '#CD9575', '#91877D', '#967117', '#FF8C00', '#779ECB', '#A4C639']; //Comparison colours - remember styling in client.css as well (check CNH solution)
};




//RNS Filters
var clientRNSFilters = [
    { name: 'Inside information', categories: 'AIU' },
    { name: 'Results and Trading Statements', categories: 'TST;QRF;QRT;FR;SYR;MSC' },
    { name: 'Report and Accounts', categories: 'IR;DRL;ACS;NAR;' },
    { name: 'Acquisitions / disposals', categories: 'ACQ;DIS' },
    { name: 'AGM and other meetings', categories: 'AGM;NOA;RAG;ROM' },
    { name: 'Share buyback', categories: 'POS;CAS;RDS;SPM' },
    { name: 'Dividend', categories: 'DIV' },
    { name: 'Director shareholdings', categories: 'RDN;RDS;DSH;BOA' },
    { name: 'Update of securities', categories: 'CON;TVR' },
    { name: 'Holding(s) in Company', categories: 'HOL;MMH;RDS;DSH' }
];


