<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Fira+Sans:400,300,500,700"" type=""text/css"" />";
    //site.appendCustomCSSFont += @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Droid+Serif"" type=""text/css"" />";
%>
<%= site.newHeader("IRMiniquote") %>

<script type="text/javascript">
    var activeModules = ['IRMiniquote'];
</script>

<div class="IRMiniquoteModule"><span class="ajaxLoader">Loading</span></div>

<script id="IRMiniquoteModuleTemplate" type="text/x-handlebars-template">
    <div class="miniquoteTableWrapper miniquoteTableWrapper2">
    <div class="IRMiniQuoteQuoteModule table-look responsive">
        <div class="miniquoteDetailsWrapper">
           
            <div class="stock-name">
                <div class="data-name block">
                  
                    <div class="updated">{{headers/t_date}}: {{showDateWithFormat timestamp 'DD.MM.YYYY HH:mm'}}</div>
                </div>
                <div class="data-price block">
                    <div class="Data data-last">{{decimals stocks/last}} {{stocks/currency}}</div>
                </div>
                <div class="block data-change">
                    <div class="change Header">{{headers/t_change}} <span class="{{showArrow stocks/changePercent}}"></span>{{decimals stocks/change}}p </div>
                </div>

            </div>
           
        </div>
        
    </div>
        </div>
   
</script>
<div class="miniquoteDisclaimer miniquoteDisclaimer2">
    <%= site.newFooter("IRQuote") %>
</div>
<script>

</script>


