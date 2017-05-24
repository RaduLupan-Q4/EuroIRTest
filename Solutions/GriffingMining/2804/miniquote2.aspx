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
        <div class="miniquoteDetailsWrapper miniquote2wrapper">
              <div class="sectionUp">
                   <h2><span class="stock-symbol">LON: {{stocks/symbol}}</span></h2>
              </div>
              <div class="sectionCenter">   
                  <div class="Data change"></div> <div class="stockChange">{{decimals stocks/last}} {{stocks/currency}} ({{decimals stocks/changePercent}} %) <span  class="{{showArrow stocks/change}} arrowBottom"></span></div>
               </div>
               <div class="btn">
                   <div class="headVolume">{{headers/t_volume}} {{toLocal stocks/volume}} </div>
                   <div class="dataDelayed">{{headers/t_data_is_15_min_delayed}}</div>
               </div>
               <div class="trasnp"></div>
               
               <iframe src="../2806/miniquote2.aspx" scrolling="no"></iframe>
              
        </div>       
    </div>
</script>

<%= site.newFooter("IRMiniquote") %>

