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
    <h2>{{headers/t_share_price}}</h2>
    <div class="IRMiniQuoteQuoteModule table-look responsive">
        <div class="miniquoteDetailsWrapper">
                           
            <div class="Data last">{{decimals stocks/last}}
                <div class="Data change">{{decimals stocks/change}} <br> {{decimals stocks/changePercent}} % </div>
            </div>

            <div class="Data closeDate">{{showDateWithFormat timestamp 'DD MMMM YYYY'}} {{showTime time}} </div>
        </div>
    </div>
    <a href="http://ir.bezeq.co.il/phoenix.zhtml?c=159870&p=irol-stockquote" target='_blank'><span class="arrow-image"></a></span>
    <div class="bottom-div">
        <div class="chart-image"></div>
        <p>Data delayed 15 min. <a href="http://ir.euroinvestor.com/disclaimer/terms_conditions.aspx" target='_blank'>See terms</a></p>
    </div>
</script>

<%= site.newFooter("IRMiniquote") %>

 