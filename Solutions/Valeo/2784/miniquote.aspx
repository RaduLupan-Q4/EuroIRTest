<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Roboto:300,400,700' rel='stylesheet' type='text/css"" type=""text/css"" />";
%>
<%= site.newHeader("IRMiniquote") %>

<script type="text/javascript">
    var activeModules = ['IRMiniquote'];
</script>
  
<div class="IRMiniquoteModule"><span class="ajaxLoader">Loading</span></div>

<script id="IRMiniquoteModuleTemplate" type="text/x-handlebars-template">
    <div class="IRMiniQuoteQuoteModule">
        <div class="miniquoteDetailsWrapper">
              
            <div class="timestamp">
                 {{showDateWithFormat stocks/datetimestamp 'MMM DD, YYYY | HH:mm:ss'}}
            </div>
            <div class="miniquoteImage"><svg id="Calque_1" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 39.47" width="70" height="70"><rect class="cls-1" x="5.24" y="25.01" width="7" height="9.63" rx="0.6" ry="0.6"></rect><rect class="cls-1" x="15.43" y="22.09" width="7" height="12.55" rx="0.6" ry="0.6"></rect><rect class="cls-1" x="25.61" y="16.03" width="7" height="18.61" rx="0.6" ry="0.6"></rect><path class="cls-1" d="M330.57,453.45H294.92l-.08-.08v-30.1a1.43,1.43,0,1,0-2.85,0v30.1a2.93,2.93,0,0,0,2.93,2.93h35.64a1.43,1.43,0,0,0,0-2.85Z" transform="translate(-291.99 -416.83)"></path><path class="cls-1" d="M310.47,436.12a24,24,0,0,0,7.13-5,25.58,25.58,0,0,0,4.85-7.13l.68,4.33,3.31-.52-1.73-10.93s-7.58,3-10.66,4.28l1.32,3.08c1.33-.57,2.65-1.06,4-1.56a22.15,22.15,0,0,1-4.17,6.12,21.35,21.35,0,0,1-9.26,5.5,26.34,26.34,0,0,1-7.41,1.09c-.47,0-.84,0-1.08,0h-.18v3.36c.3,0,.73,0,1.26,0A29,29,0,0,0,310.47,436.12Z" transform="translate(-291.99 -416.83)"></path></svg></div>
            <div class="lastPrice">
               &euro;{{decimals stocks/last}}
            </div>
            <div class="changePercent">
                {{stocks/currency}} {{decimals stocks/changePercent}}%
            </div>

        </div>
    </div>
</script>

<%= site.newFooter("IRMiniquote") %>

