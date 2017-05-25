var clientStyleOverwrite = new function ()
{
    this.chart_ColourMain = '#E3E0DC';
    this.chart_ColourBackground = '';
    this.chart_ColourBorder = '';
    this.amountOfDecimals = 2;
    this.formatDate = 'DD-MM-YYYY';
    this.formatTime = 'HH:mm';
    this.formatDateTime = 'DD-MM-YYYY HH:mm';
    this.chart_ColourVolumeBars = '#000000';
    this.chart_DrawMode = 'area';
    this.chartCurrencyPlus = ['AUD', 'BGN', 'CAD', 'CHF', 'CNY', 'CZK', 'EEK', 'HKD', 'HRK', 'HUF', 'IDR', 'JPN', 'KRW', 'LTL', 'LVL', 'MYR', 'NOK', 'NZD', 'PHP', 'PLN', 'RON', 'RUB', 'SEK', 'SGD', 'THB', 'TRY', 'ZAR'];
};

var clientRNSFilters = [{ name: 'Acquisition', categories: 'ACQ' },{ name: 'Annual Financial Report', categories: 'ACS' },{ name: 'AGM Statement', categories: 'AGM' },{ name: 'RE Agreement', categories: 'AGR' },{ name: 'Change of Adviser', categories: 'APP' },{ name: 'Directorate Change', categories: 'BOA' },{ name: 'Disposal', categories: 'DIS' },{ name: 'Holding(s) in Company', categories: 'HOL' },{ name: 'Miscellaneous', categories: 'MSC' }];