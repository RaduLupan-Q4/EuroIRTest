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
        <div class="miniquoteDetailsWrapper">
            <span class="Data symbol">SCOR SE</span><br />
            <span class="Data timestamp">{{showDateWithFormat stocks/timestam 'DD/MM/YYYY HH:mm'}}</span><br />
            <span class="Data last">{{decimals stocks/last}} {{stocks/currency}}</span> <br />
            <span class="Data changePct">{{decimals stocks/changePercent}}% <span class="{{showArrow stocks/change}}"></span> <br />
        </div>       
</script>


<%= site.newFooter("IRMiniquote") %>

