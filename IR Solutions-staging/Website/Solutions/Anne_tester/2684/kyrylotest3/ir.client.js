var clientStyleOverwrite = new function ()
{
    this.chart_ColourMain = '#63a13a';
    this.chart_ColourBackground = '#F7F9FB';
    this.amountOfDecimals = 2;
    this.amountOfTrades = 100;
    this.formatDate = 'DD/MM/YYYY';
    this.formatTime = "HH:mm";
    this.formatDateTime = "DD/MM/YYYY HH:mm";
    this.amountOfNewsPerPage = 10; // 20 er default
    this.lookup_ChartYAxisInsideOutside = 'outside';
    this.calc_ChartYAxisInsideOutside = 'outside';
    this.miniquote_ChartYAxisInsideOutside = 'outside';
    this.chart_ColourVolumeBars = '#b4d2b1';
    this.chart_DrawMode = "area";
    //this.manualTimeOffset = 10;
    this.amountOfNewsHeadlines = 3;
}

var clientRNSFilters = [
    { name: 'Acquisition and Realisations', categories: 'ACQ' },
    { name: 'Reports and Accounts', categories: 'ACS;DIS' },
    { name: 'Monthly Net Asset Value (NAV)', categories: 'NAV' },
    { name: 'Event Notes', categories: 'NOA;NOE;RAG;REG;AGM;EGM' },
    { name: 'Results and Trading Statements', categories: 'FR;IR;QRF;QRT;NOR' },
    { name: 'Director Dealings', categories: 'RDN;RDS;POS' },
    { name: 'Board / Management', categories: 'BOA;APP' },
    { name: 'Dividends', categories: 'DIV' },
    { name: 'Other Shareholder Documents', categories: 'ODP;PDI' },
    { name: 'Half Yearly Report', categories: 'IR' }
];



$(document).ready(function(){
    //After text input show/hide Email
    $('.enterInformationEmail').keyup(function(){
      if($('.enterInformationEmail').val() == ''){
          $(this).parent().parent().find('.inputTextTitle').show();
         
      }else{
         $(this).parent().parent().find('.inputTextTitle').hide();
      }
    $(document).on('blur', '.enterInformationEmail', function(){
        if(!$(this).val().length){
            $(this).parent().parent().find('.inputTextTitle').show();
        }
    });    
 });
    //After text input show/hide First Name
    $('.enterInformationFirstName').keyup(function(){
      if($('.enterInformationFirstName').val() == ''){
         $(this).parent().parent().find('.inputTextTitle').show();
      }else{
         $(this).parent().parent().find('.inputTextTitle').hide();
      }
    $(document).on('blur', '.enterInformationFirstName', function(){
        if(!$(this).val().length){
            $(this).parent().parent().find('.inputTextTitle').show();
        }
    });    
 });
    //After text input show/hide Lastname
    $('.enterInformationLastName').keyup(function(){
      if($('.enterInformationLastName').val() == ''){
         $(this).parent().parent().find('.inputTextTitle').show();
      }else{
         $(this).parent().parent().find('.inputTextTitle').hide();
      }
    $(document).on('blur', '.enterInformationLastName', function(){
        if(!$(this).val().length){
            $(this).parent().parent().find('.inputTextTitle').show();
        }
    });    
 });
    
    //After text input show/hide Email for unsubscribe
    $('.unsubscribeEmail').keyup(function(){
      if($('.unsubscribeEmail').val() == ''){
         $('.blockInner .inputTextTitle').show();
      }else{
         $('.blockInner .inputTextTitle').hide();
      }    
 });
    
});//End Document Ready


