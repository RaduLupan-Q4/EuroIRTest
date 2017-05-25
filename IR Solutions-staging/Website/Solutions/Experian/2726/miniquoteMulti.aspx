<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""https://fonts.googleapis.com/css?family=Roboto:400,700,300"" type=""text/css"" />";
%>
<%= site.header("IRQuote") %>

<script type="text/javascript">
    var activeModules = ['IRQuoteMulti'];
</script>

<div class="IRQuoteModule">
    <span class="ajaxLoader">Loading</span>
</div>

<script id="IRQuoteMultiTableTemplate" type="text/x-handlebars-template">
    <table class="IRQuoteModule table-look horizontal responsive">
        <tr>
            <th class="Header symbol column-first">{{headers/t_symbol}}</th>
            <th class="Header currency">{{headers/t_currency}}</th>
            <th class="Header last">{{headers/t_last}}</th>
            <th class="Header change">{{headers/t_change}}</th>
            <th class="Header bid">{{headers/t_bid}}</th>
            <th class="Header ask">{{headers/t_ask}}</th>
            <th class="Header high">{{headers/t_high}}</th>
            <th class="Header low">{{headers/t_low}}</th>
            <th class="Header volume">{{headers/t_volume}}</th>
            <th class="Header timestamp column-last">{{headers/t_updated}}</th>
        </tr>
        <tr>
            <td class="Data symbol column-first">{{stocks.0/symbol}}</td>
            <td class="Data currency">{{stocks.0/currency}}</td>
            <td class="Data last">{{thousands stocks.0/last}}</td>
            <td class="Data change {{formatColour stocks.0/change}}"><span class="{{showArrow stocks.0/change}}"></span><span>{{decimals stocks.0/change}} ({{decimals stocks.0/changePercent}}%)</span></td>
            <td class="Data bid">{{thousands stocks.0/bid}}</td>
            <td class="Data ask">{{thousands stocks.0/ask}}</td>
            <td class="Data high">{{thousands stocks.0/high}}</td>
            <td class="Data low">{{thousands stocks.0/low}}</td>
            <td class="Data volume">{{toLocal stocks.0/volume}}</td>
            <td class="Data timestamp column-last">{{showDateWithFormat stocks.0/timestamp 'DD MMM HH:mm'}} GMT</td>
            
        </tr>
        <tr>
            <td class="Data symbol column-first">{{stocks.1/symbol}}</td>
            <td class="Data currency">{{stocks.1/currency}}</td>
            <td class="Data last">{{thousands stocks.1/last}}</td>
            <td class="Data change {{formatColour stocks.1/change}}"><span class="{{showArrow stocks.1/change}}"></span><span>{{decimals stocks.1/change}} ({{decimals stocks.1/changePercent}}%)</span></td>
            <td class="Data bid">{{thousands stocks.1/bid}}</td>
            <td class="Data ask">{{thousands stocks.1/ask}}</td>
            <td class="Data high">{{thousands stocks.1/high}}</td>
            <td class="Data low">{{thousands stocks.1/low}}</td>
            <td class="Data volume">{{toLocal stocks.1/volume}}</td>
            <td class="Data timestamp column-last">{{showDateWithFormat stocks.1/timestamp 'DD MMM HH:mm'}} EST</td>
        </tr>
    </table>
</script>

<%= site.footer("IRQuote") %>

<script type="text/javascript">
	Number.prototype.round = function (places) {
   return +(Math.round(this + "e+" + places) + "e-" + places);
}; 

    Handlebars.registerHelper('thousands', function (number) {
   var sepaNumb = "-";
   try {
       if (typeof (number) == 'number') {
           if (/^./.test(number)) {
               number = number.round(2).toFixed(2);
               var h = number.toString().split(".");
               sepaNumb = h[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '.' + h[1];
           } else {
               sepaNumb = number.round(2).toFixed(2);
           }
       }
   }
   catch (err) {
       debugError(err);
   }
   return sepaNumb;
});

</script>
