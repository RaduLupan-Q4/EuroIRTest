<%@ page language="C#" autoeventwireup="true" %>

<%@ import namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Open+Sans"" type=""text/css"" />";
    //site.appendCustomCSSFont += @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Droid+Serif"" type=""text/css"" />";
%>
<%= site.newHeader("IRMiniquote") %>


<script type="text/javascript">
    var activeModules = ['IRMiniquote'];
</script>

<div class="IRMiniquoteModule"><span class="ajaxLoader">Loading</span></div>

<script id="IRMiniquoteModuleTemplate" type="text/x-handlebars-template">
  <div class="IRMiniQuoteQuoteModule table-look responsive">
        <div class="miniquoteDetailsWrapper">
            <div class="stock-name">
                <div class="data-name block">
                    <div>{{showExchangeShort}}</div>      
                </div>
                <div class="data-price block">
                    <div class="Latest">{{headers/t_current_price}}</div>
                    <div class="Data">{{thousands stocks/last}}</div>
                </div>
                <div class="data-price block">
                    <div class="Latest">{{headers/t_change}}</div>
                    <div class="Data {{formatColour stocks/change}}">{{decimals stocks/changePercent}}<span class="Latest">%</span></div>
                </div>
                <div class="data-price block">
                    <div class="Latest">{{headers/t_open_price}}</div>
                    <div class="Data">{{thousands stocks/open}}</div>
                </div>
                
            </div>
                     
        </div>
    </div>      
</script>


<%= site.newFooter("IRMiniquote") %>

<script type="text/javascript">
    Handlebars.registerHelper('thousands', function (number) {
   var sepaNumb = "-";
   try {
       if (typeof (number) == 'number') {
           if (/^./.test(number)) {
               number = number.round(clientStyle.amountOfDecimals).toFixed(clientStyle.amountOfDecimals);
               var h = number.toString().split(".");
               sepaNumb = h[0].replace(/\B(?=(\d{3})+(?!\d))/g, clientLocaleParameters.decimalSeparator1000) + clientLocaleParameters.decimalSeparator + h[1];
           } else {
               sepaNumb = number.round(clientStyle.amountOfDecimals).toFixed(clientStyle.amountOfDecimals).replace('.', clientLocaleParameters.decimalSeparator);
           }
       }
   }
   catch (err) {
       debugError(err);
   }
   return sepaNumb;
});

</script>