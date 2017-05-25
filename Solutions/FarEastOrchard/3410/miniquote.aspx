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
    <div class="miniquoteTableWrapper">
    <div class="IRMiniQuoteQuoteModule table-look responsive">
        <div class="miniquoteDetailsWrapper">
            <div class="headerBlock">
                <span>Far East Orchard (FEOR/O10)</span>
            </div>
            <div class="stock-name">
                <%--<div class="data-name block">
                    <div class="Header symbol">{{headers/t_symbol}}</div>
                    <div class="Data">{{stocks/symbol}}</div>
                </div>--%>
                <div class="data-price block">
                    <div class="Latest Header">{{headers/t_latest}}</div>
                    <div class="Data data-last {{formatColour stocks/change}}">{{decimals stocks/last}} ({{stocks/currency}})</div>
                </div>
                <div class="block data-change">
                    <div class="change Header">{{headers/t_change}}</div>
                    <div class="Data block {{formatColour stocks/change}}"><span class="{{showArrow stocks/change}}"></span> {{decimals stocks/change}}</div>
                </div>

            </div>
           
        </div>
        
    </div>
        </div>
     <div class="block data-update">
                <div class="updated">{{headers/t_updated}}: {{showDate stocks/timestamp}} {{showTime time}} GMT+8</div>
                
            </div>
</script>
<div class="miniquoteDisclaimer">
    <%= site.newFooter("IRQuote") %>
</div>
<script>

</script>


