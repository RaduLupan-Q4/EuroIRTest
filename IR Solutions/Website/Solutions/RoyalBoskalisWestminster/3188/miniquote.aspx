<%@ page language="C#" autoeventwireup="true" %>

<%@ import namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Open+Sans"" type=""text/css"" />";
    //site.appendCustomCSSFont += @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Droid+Serif"" type=""text/css"" />";
%>

<meta charset="UTF-8">

<%= site.newHeader("IRMiniquote") %>


<script type="text/javascript">
    var activeModules = ['IRMiniquote'];
</script>

<div class="IRMiniquoteModule"><span class="ajaxLoader">Loading</span></div>

<script id="IRMiniquoteModuleTemplate" type="text/x-handlebars-template">
        <div class="miniquoteDetailsWrapper">
        	<div class="Data share">{{headers/t_share_price}}</div>
            <div class="Data share-price"><span class="arrow-right"></span>{{stocks/name}} (AEX)</div> 
            <div class="Data last"> &euro; {{decimals stocks/last}}</div>
        </div>         
</script>


<%= site.newFooter("IRMiniquote") %>

