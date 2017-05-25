<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>
<%= site.newHeader("IRCustomModule") %>
<%@ Import Namespace="Infrastructure.Providers" %>

<%
    var listing = Request.QueryString["listing"];
    var language = Request.QueryString["language"];

    if (language == null)
    {
        language = "en";
    }

    if (listing == null)
    {
        listing = "0";
    }
%>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title></title>
    <link rel="stylesheet" href="ir.client.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("ir.client.css")).Ticks.ToString()%>" />
    <script type="text/javascript">
        var activeModules = ['IRCustomModule'];
    </script>
</head>

<body>
    <div id="IRData"></div>

    <script id="IRDataTemplate" type="text/x-handlebars-template">
        {{#data}}
        <div class="tools-container">
            <h2 class="allTools">{{t_share_price}}</h2>
            <iframe class="iframe chart" src="chart.aspx?listing=<%= listing %>&language=<%= language %>" frameborder="0"></iframe>
            <iframe class="iframe chart2" src="chart2.aspx?listing=<%= listing %>&language=<%= language %>" frameborder="0"></iframe>

            <h2 class="allTools">{{t_benchmark}}</h2>
            <iframe class="iframe performance" src="performance.aspx?listing=<%= listing %>&language=<%= language %>" frameborder="0"></iframe>

            <div class="left">
                <h2 class="allTools">{{t_orders}}</h2>
                <iframe class="iframe orders" src="orders.aspx?listing=<%= listing %>&language=<%= language %>" frameborder="0"></iframe>
                <h2 class="allTools">{{t_share_info}}</h2>
                <iframe class="iframe profile" src="profile.aspx?listing=<%= listing %>&language=<%= language %>" frameborder="0"></iframe>
            </div>

            <div class="right">
                <h2 class="allTools">{{t_trades}}</h2>
                <iframe class="iframe trades" src="trades.aspx?listing=<%= listing %>&language=<%= language %>" frameborder="0" scrolling="no"></iframe>
            </div>

            <div class="clear"></div>
            <h2 class="allTools">{{t_investment_calculator}}</h2>
            <iframe class="iframe calc" src="calc.aspx?listing=<%= listing %>&language=<%= language %>" frameborder="0"></iframe>

            <h2 class="allTools">{{t_historical_lookup}}</h2>
            <iframe class="iframe lookup" src="lookup.aspx?listing=<%= listing %>&language=<%= language %>" frameborder="0"></iframe>
        </div>
        {{/data}}
    </script>

    <%= site.newFooter("IRCustomModule") %>


    <script>
        $.when(requestTranslationsData).done(function (data) {

            var source = $('#IRDataTemplate').html();
            var template = Handlebars.compile(source);
            $('#IRData').html(template(data));

        });
    </script>
</body>
</html>
