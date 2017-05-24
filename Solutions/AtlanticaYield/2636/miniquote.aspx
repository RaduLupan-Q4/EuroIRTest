<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Open+Sans:400,300,700,600' rel='stylesheet' type='text/css"" type=""text/css"" />";
%>
<%= site.newHeader("IRMiniquote") %>

<script type="text/javascript">
    var activeModules = ['IRMiniquote'];
</script>

<div class="IRMiniquoteModule"><span class="ajaxLoader">Loading</span></div>

<script id="IRMiniquoteModuleTemplate" type="text/x-handlebars-template">
    <div class="IRMiniQuoteQuoteModule">
        <div class="miniquoteDetailsWrapper">
            <table class="mQuoteTable">
                <tr>
                    <td class="last" colspan="2">{{toLocal stocks/last}} <span class="{{showArrow stocks/change}}"></span></td>
                </tr>
                <tr>
                    <td class="first-col">{{headers/t_change}}</td>
                    <td class="last-col {{formatColour stocks/change}}">{{toLocal stocks/change}} ({{decimals stocks/changePercent}}%)</td>
                </tr>
                <tr>
                    <td class="first-col">{{headers/t_volume}}</td>
                    <td class="last-col">{{toLocal stocks/volume}}</td>
                </tr>
                <tr>
                    <td class="first-col">{{headers/t_exchange}} {{headers/t_name}}</td>
                    <td class="last-col">{{stocks/exchangeName}}</td>
                </tr>
                <tr>
                    <td colspan="2" class="delayed">Delayed ~15 minutes - <a href="http://ir.euroinvestor.com/disclaimer/terms_conditions.aspx" target="_parent">See terms</a></td>
                </tr>
            </table>
        </div>
    </div>
</script>

<%= site.newFooter("IRMiniquote") %>
<script type="text/javascript">
   Handlebars.registerHelper('decimals', function (number) {
       return reformatDecimal(number);
   });
   function reformatDecimal(number){
       try {
           if (typeof (number) == 'number') {
               return number.round(clientStyle.amountOfDecimals).toFixed(clientStyle.amountOfDecimals).replace('.', clientLocaleParameters.decimalSeparator) * -1;
           } else {
               return "-";
           }
       }
       catch (err) {
           return "-";
       }
   }
</script>
