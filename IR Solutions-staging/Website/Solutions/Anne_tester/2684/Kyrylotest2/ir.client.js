var clientStyleOverwrite = new function ()
{
    this.chart_ColourMain = '#b96060';
    this.chart_ColourBackground = '#F7F9FB';
    this.amountOfDecimals = 2;
    this.amountOfTrades = 100;
    this.formatDate = 'YYYY-MM-DD';
    this.formatTime = "HH:mm";
    this.formatDateTime = "YYYY-MM-DD HH:mm";
    this.amountOfNewsPerPage = 10; // 20 er default
//    this.lookup_ChartYAxisInsideOutside = 'outside';
//    this.calc_ChartYAxisInsideOutside = 'outside';
//    this.miniquote_ChartYAxisInsideOutside = 'outside';
    this.chart_ColourVolumeBars = '#b96060';
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
]

//Global var
var resultLastPrice;
var resultSharePrice;
//var marketCapValue;
var format;




$(document).ready(function(){
    
   $.getJSON("http://ir.euroinvestor.com/ServiceEngine/api/json/reply/RequestClosePriceBundle_OHLC?apiVersion=1&lcid=2057&solutionID=2684&customerKey=anne_tester&numberOfYears=10&instrumentTypes=Listing", function(result){
       //console.log(result.data[0].data[0].date);
        
        $.each(result.data[0].data, function(key, field){
            //console.log(field.date);
            
            //Find the close price for share price---------------------
            if (field.date == '2015-12-31T00:00:00.0000000Z') {
                //console.log(this.closePrice);
                $("#sharePrice").append(this.closePrice);
                
            };
            
//            Find change % since 2015 DEC 31
//            console.log(field.date);
//            if (field.date >= '2015-12-31T00:00:00.0000000Z' ) {
//                console.log(this.closePrice);                
//
//            }
            
            
        }); //End $each
       
       //Find last close price----------------------------------------
       var resultLastPrice = globalRawStockData[0].last;
       //Find last Share Price
       var resultSharePrice = $('#sharePrice').text();
       //console.log(resultLastPrice);
       //console.log(resultSharePrice);
       
       var percentVal = (resultLastPrice - resultSharePrice) * (100 / resultSharePrice);
       //Round value after comma
       var newPercentVal = Math.round(percentVal).toFixed();
       $('#changeInPercent').append(newPercentVal);
       //console.log(percentVal);
       
       
       
    });// End getJSON
    
    
    
    $(document).ajaxStop(function(){
    var marketCapValue = Math.round(parseInt($("#marketHB").text().replace(/,/g,'')) / 1000000);
        marketCapValue = marketCapValue.toLocaleString(); // separate with comma
        //console.log(marketCapValue);
        $('#marketHB').html(marketCapValue);    
});
    
        
    
    
});//End Document Ready





