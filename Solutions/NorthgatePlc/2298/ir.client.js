var clientStyleOverwrite = new function ()
{
    this.chart_ColourMain = '#00b259';
    this.chart_ColourBackground = '#F5F5F5';
    this.chart_ColourBorder = '#EEEEEE';
    this.formatDate = 'DD-MM-YYYY';
    this.formatTime = "HH:mm";
    this.formatDateTime = "DD-MM-YYYY HH:mm";
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