var clientStyleOverwrite = new function ()
{
    this.chart_ColourMain = '#019ada';
    this.chart_ColourBackground = '#fff';
    this.chart_ColourBorder = '#EEEEEE';
    this.amountOfDecimals = 2;
    this.amountOfTrades = 100;
    this.formatDate = 'DD/MM/YYYY';
    this.formatTime = "HH:mm";
    this.formatDateTime = "DD/MM/YYYY HH:mm";
    this.amountOfNewsPerPage = 10; // 20 er default
    this.lookup_ChartYAxisInsideOutside = 'outside';
    this.calc_ChartYAxisInsideOutside = 'outside';
    this.miniquote_ChartYAxisInsideOutside = 'outside';
    this.amountOfNewsHeadlines = 5;
}

var clientNasdaqOMXNordicFilters_EN = [{ name: 'All News', categories: 'allRNSnews' }, { name: 'Company Announcement', categories: 'Company Announcement' }, { name: 'Financial Calendar', categories: 'Financial Calendar' }, { name: 'Annual General Meeting', categories: 'Decisions of annual;Notice to convene an;Articles of associat' }, { name: 'Interim Reports', categories: 'Interim report' }, { name: 'Managers Transactions', categories: "Managers' transactions" }];
var clientNasdaqOMXNordicFilters_FI = [{ name: 'Kaikki', categories: 'allRNSnews' }, { name: 'P&ouml;rssitiedote', categories: 'P&ouml;rssitiedote' }, { name: 'Tulosjulkistamisajankohdat', categories: 'Tulosjulkistamisajankohdat' }, { name: 'Varsinaisen yhti&ouml;kokouksen p&auml;&auml;t&ouml;kset', categories: 'Varsinaisen yhti&ouml;kokouksen p&auml;&auml;t&ouml;kset;Indkaldelse til gene;Selskabsvedtægter' }, { name: 'Osavuosikatsaus', categories: 'Osavuosikatsaus' }, { name: 'Johtohenkilöiden liiketoimet', categories :"Managers' transactions"}];

var factsheetTranslations = [
    ["Development in share price", "Kurssikehitys "],
    ["Financial highlights", "Vuoden Pääkohdat"],
    ["Market value", "Osakekannan markkina-arvo"],
    ["Ownership structure according to percentage of shares", "Omistajarakenne osakemäärän mukaan"],
    ["Share data", "Share data"],
    ["Corporations", "Yritykset"],
    ["Financial and insurance corporations", "Rahoitus- ja vakuutuslaitokset"],
    ["Households", "Kotitaloudet"],
    ["Public sector", "Julkisyhteisöt"],
    ["Foreign countries and nominee registered", "Ulkomaat ja hallintarekisteröidut"],
    ["About Revenio Group", "Revenio Group"],
    ["Revenio is a Finnish, globally operating health technology corporation whose worldwide success is based on a strongly patented intraocular pressure measurement technology.  The Revenio Group consists of Icare Finland Oy, Revenio Research Oy and Oscare Medical Oy, in which Revenio holds a 53% interest.The common denominators of Revenio's business operations include screening, follow-up and the global need to make cost savings through preventive health care. Revenio seeks vigorous growth in health technology. Revenio aims at developing even more efficient and easily adopted methods for the early-stage detection of diseases with significance for public health. The focus of Revenio's screening technology is on the early detection of glaucoma, osteoporosis, skin cancer and asthma, and the monitoring of these during the treatment process.", "Revenio on kansainvälisillä markkinoilla toimiva suomalainen terveysteknologiakonserni, jonka maailmanlaajuinen menestys perustuu vahvasti patentoituun silmänpaineen mittausteknologiaan. Revenio-konserniin kuuluvat Icare Finland Oy, Revenio Research Oy sekä 53 %:sti omistettu Oscare Medical Oy. Revenion liiketoimintojen yhteisenä nimittäjänä on seulonta, seuranta ja maailmanlaajuinen tarve terveydenhuollon kustannussäästöihin ennaltaehkäisevän terveydenhuollon kautta. Revenio tavoittelee terveysteknologiassa voimakasta kasvua. Revenion tavoitteena on  kehittää entistä tehokkaampia ja helposti käyttöönotettavia menetelmiä tunnistaa kansanterveydellisesti merkittäviä sairauksia jo niiden alkuvaiheessa. Revenion seulontateknologioiden fokuksessa ovat glaukooman, osteoporoosin, ihosyövän ja astman tunnistaminen ja niiden hoitoprosessin aikainen mittaaminen."],
    ["In 2015, the Revenio Group's net sales totaled MEUR 20.3, with its operating margin for continuing operations standing at 28.4%. Revenio Group Corporation is listed on Nasdaq Helsinki.", "Revenio-konsernin liikevaihto vuonna 2015 oli 20,3 miljoonaa euroa, liikevoiton ollessa 28,4 % jatkuvista toiminnoista. Revenio Group Oyj on listattu Nasdaq Helsinki Oyj:ssä."],
    ["Net sales, TEUR", "Liikevaihto TEUR"],
    ["Operating profit, TEUR", "Liikevoitto  TEUR"],
    ["Operating profit, %", "Liikevoitto %"],
    ["Profit before taxes, TEUR", "Tulos ennen veroja TEUR"],
    ["Profit before taxes, %", "Tulos ennen veroja %"],
    ["Net profit for financial period, TEUR", "Tilikauden tulos TEUR"],
    ["Net profit, %", "Tilikauden tulos %"],
    ["Return on equity, %", "Oman pääoman tuotto %"],
    ["Return on investment, %", "Sijoitetun pääoman tuotto %"],
    ["Equity ratio, %", "Omavaraisuusaste %"],
    ["Net leveraging, %", "Nettovelkaantumisaste %"],
    ["Earnings per share, continuing operations, EUR", "Tulos/osake jatkuvat toiminnot EUR"],
    ["Dividend per share, EUR", "Osakekohtainen osinko EUR"],
    ["Market capitalization at end of period, MEUR", "Osakekannan markkina-arvo tilikauden lopussa MEUR"],
    ["Turnover, number of shares", "Osakevaihto kpl"],
    ["Turnover, %", "Osakevaihto %"],
    ["Download the Factsheet", "Lataa factsheet"]
];


