var clientStyleOverwrite = new function () {
    this.chart_ColourBackground = '#F9F9F9';
    this.chart_ColourBorder = '#eeeeee';
    this.amountOfDecimals = 2;
    this.formatDate = 'DD-MM-YYYY';
    this.formatTime = 'HH:mm';
    this.formatDateTime = 'DD-MM-YYYY HH:mm';
	this.chart_DefaultPeriodSelected = '5d';
}
var clientRNSFilters = [
{ name: 'Acquisition', categories: 'ACQ' }, 
{ name: 'Annual Financial Report', categories: 'ACS;IR;MSC' }, 
{ name: 'AGM Statement', categories: 'AGM;RAG;NOA;FR' }, 
{ name: 'RE Agreement', categories: 'AGR' }, 
{ name: 'Change of Adviser', categories: 'APP' }, 
{ name: 'Directorate Change', categories: 'BOA;RDS' }, 
{ name: 'Disposal', categories: 'DIS' }, 
{ name: 'Holding(s) in Company', categories: 'HOL;RDS' }, 
{ name: 'Miscellaneous', categories: 'MSC' }];