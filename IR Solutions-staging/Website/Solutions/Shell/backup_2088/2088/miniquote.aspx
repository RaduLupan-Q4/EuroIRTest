<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" type=""text/css"" href=""http://fonts.googleapis.com/css?family=Open+Sans:300,300italic,400,400italic,600,700""/>";
%>
<%= site.header("IRQuote") %>
<script type="text/javascript">
    var activeModules = ['IRQuoteMulti'];
    var activeFeatures = [];
</script>

<div class="IRQuoteModule"></div>

<script id="IRQuoteMultiTableTemplate" type="text/x-handlebars-template">
    
    <table class="miniquote" style="width: 100%; min-width: 150px;">
        
        {{#stocks}}

        <tr id="{{instrumentID}}">
            <td class="exchangeCity">
                {{{getExchangeCity exchangeName}}}
            </td>
            <td class="symbol">
                {{symbol}}
            </td>
            <td class="lastAndCurrency">
                {{currency}} {{decimals last}} {{currency}}
            </td>
        </tr>

        {{/stocks}}

    </table>

</script>

<%= site.footer("IRQuote") %>

<script type="text/javascript">

    $(function ()
    {
        var miniquoteSet = false;
        function prepareToolMiniquote() {

            if (!miniquoteSet) {
                
                if (typeof ($('#1000162').html()) != 'undefined') {

                    var lastCity;

                    $('.miniquote #1000162 .exchangeCity').html('&nbsp;');
                    $('.miniquote #1000160 .exchangeCity').html('&nbsp;');
                    $('.miniquote #1000164 .exchangeCity').html('&nbsp;');

                    //$('.exchangeCity').each(function () {

                    //    if ($(this)[0].innerText == "Euronext") {
                    //        $(this).html('Amsterdam');
                    //    }
                    //    if (lastCity == $(this)[0].innerText) {
                    //        $(this).html('');
                    //    }
                    //    lastCity = $(this)[0].innerText;
                    //});

                    $('.lastAndCurrency').each(function () {

                        $(this).html($(this).html().replace(" USD", "").replace("USD ", "$").replace(" EUR", "").replace("EUR ", "€").replace(" GBp", "p").replace(" GBp", "p").replace("p ", ""));


                        //$(this)[0].innerText = $(this)[0].innerText.replace(" USD", "").replace("USD ", "$").replace(" EUR", "").replace("EUR ", "€").replace(" GBp", "p").replace("GBp ", "");
                    });

                    $('#1000162 td.IRElement0, #1000160 td.IRElement6, #1000164 td.IRElement12').css('position', 'relative').css('top', '10px');

                    $('#1000160 td').css('paddingTop', '10px');
                    $('#1000162 td').css('paddingTop', '10px');
                    $('#1000164 td').css('paddingTop', '10px');


                    $('#1000162 td.symbol').html('<a href="http://www.shell.com/global/aboutshell/investor/share-price-information/share-price-summary/amsterdam-rdsa.html">' + $('#1000162 td.symbol').html() + '</a>'); // ams a
                    $('#1000163 td.symbol').html('<a href="http://www.shell.com/global/aboutshell/investor/share-price-information/share-price-summary/amsterdam-rdsb.html">' + $('#1000163 td.symbol').html() + '</a>'); // ams b

                    $('#1000160 td.symbol').html('<a href="http://www.shell.com/global/aboutshell/investor/share-price-information/share-price-summary/london-rdsa.html">' + $('#1000160 td.symbol').html() + '</a>'); // LSE a
                    $('#1000161 td.symbol').html('<a href="http://www.shell.com/global/aboutshell/investor/share-price-information/share-price-summary/london-rdsb.html">' + $('#1000161 td.symbol').html() + '</a>'); // LSE b

                    $('#1000164 td.symbol').html('<a href="http://www.shell.com/global/aboutshell/investor/share-price-information/share-price-summary/newyork-rdsa.html">' + $('#1000164 td.symbol').html() + '</a>'); // NYSE a
                    $('#1000165 td.symbol').html('<a href="http://www.shell.com/global/aboutshell/investor/share-price-information/share-price-summary/newyork-rdsb.html">' + $('#1000165 td.symbol').html() + '</a>'); // NYSE b

                    miniquoteSet = true;
                }
                

               
            }
            
        }

        setInterval(function () {
            prepareToolMiniquote();
        }, 100);

    });

</script>