var clientStyleOverwrite = new function () {
    this.chart_ColourMain = '#7ac142';
    this.chart_ColourBackground = '#fff';
    this.chart_ColourBorder = '';
    this.amountOfDecimals = 2;
    this.formatDate = 'DD/MM/YYYY';
    this.formatTime = 'HH:mm';
    this.formatDateTime = 'DD/MM/YYYY HH:mm';
    this.chart_ColourVolumeBars = '#515054';
    this.chart_DrawMode = 'line';
    this.chart_CustomTooltipUseFullOHLCV = true;
    this.amountOfNewsPerPage = 10; // 20 er default
    this.lookup_ChartYAxisInsideOutside = 'outside';
    this.calc_ChartYAxisInsideOutside = 'outside';
    this.miniquote_ChartYAxisInsideOutside = 'outside';
    this.chartCurrencyPlus = ['EUR', 'GBP', 'USD', 'DKK', 'AUD', 'BGN', 'CAD', 'CHF', 'CNY', 'CZK', 'EEK', 'HKD', 'HRK', 'HUF', 'IDR', 'JPN', 'KRW', 'MYR', 'NOK', 'NZD', 'PHP', 'PLN', 'RON', 'RUB', 'SEK', 'SGD', 'THB', 'TRY', 'ZAR'];
    this.chart_Colours = [null, '#7FFF00', '#FFC300', '#0F52BA', '#00BFFF', '#96EAFF', '#000000', '#C1D6D6', '#556B2F', '#FF0000', '#779ECB', '#915C83', '#91877D', '#FF00DC', '#967117', '#9932CC', '#00FF90', '#A4C639', '#B2EC5D', '#CBA135', '#CD9575', '#91877D', '#967117', '#FF8C00', '#779ECB', '#A4C639']; //Comparison colours - remember styling in client.css as well (check CNH solution)
};

var clientRNSFilters = [
    { name: 'Acquisitions and alliances', categories: 'MSC;ACQ;RDS' },
    { name: 'AGM and other meetings', categories: 'AGM;RAG;REG;MSC' },
    { name: 'Board Changes', categories: 'BOA' },
    { name: 'Capital structure', categories: 'TVR;RDS;LIS;POS' },
    { name: 'Director/PDMR shareholding', categories: 'RDS' },
    { name: 'Disposals', categories: 'DIS;MSC' },
    { name: 'Holding(s) in company', categories: 'HOL' },
    { name: 'Inside information', categories: 'AIU' },
    { name: 'Results', categories: 'IR;BLR;IMS;DIV;ACS;FR' },
    { name: 'Share buybacks', categories: 'POS' },
    { name: 'Trading updates', categories: 'AGM;IMS;RDS;MSC;MER' },
    { name: 'Voting rights', categories: 'TVR' }

];