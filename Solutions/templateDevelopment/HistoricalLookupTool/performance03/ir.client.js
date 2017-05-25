var clientStyleOverwrite = new function ()
{
    this.chart_ColourMain = '#000'; //0284AA
    this.chart_ColourBackground = '#f1f1f1';
    this.chart_ColourBorder = '#E5E5E5';
    this.amountOfDecimals = 2;
    this.amountOfTrades = 5;
    this.formatDate = 'DD MMM YYYY';
    this.formatTime = 'HH:mm:ss';
    this.formatDateTime = 'DD MMM YYYY HH:mm';
    this.amountOfNewsPerPage = 10; // 20 er default
}
var clientRNSFilters = [
    { name: 'Company Announcement - General', categories: 'AGR;NRA;APM;PME;MSC;STA' },
    { name: 'Mergers, Acquisitions and Disposals', categories: 'ACQ;MER;DIS' },
    { name: 'Results and Trading Reports', categories: 'TST;IR;RAG;ACS;FR;AGM' },
    { name: 'Dividends', categories: 'DIV' },
    { name: 'Executive Changes', categories: 'BOA;APP' },
    { name: 'Directors Dealings', categories: 'RDS' },
    { name: 'Advance Notice of Results', categories: 'NOR' },
    { name: 'Transactions in Own Shares ', categories: 'POS' },
    { name: 'Holding(s) in Company', categories: 'HOL' }
];

