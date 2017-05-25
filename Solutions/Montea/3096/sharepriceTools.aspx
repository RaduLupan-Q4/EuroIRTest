<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="Infrastructure.Providers" %>

<%
        var listing = Request.QueryString["listing"];

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

</head>

<body>
    <div class="tools-container">
        <h2 class="allTools">Share Price</h2>
        <iframe class="iframe chart" src="chart.aspx?listing=<%= listing %>" frameborder="0"></iframe>
        <iframe class="iframe chart2" src="chart2.aspx?listing=<%= listing %>" frameborder="0"></iframe>

        <h2 class="allTools">Benchmark</h2>
        <iframe class="iframe performance" src="performance.aspx?listing=<%= listing %>" frameborder="0"></iframe>

        <div class="left">
            <h2 class="allTools">Orders</h2>
            <iframe class="iframe orders" src="orders.aspx?listing=<%= listing %>" frameborder="0"></iframe>
            <h2 class="allTools">Share Info</h2>
            <iframe class="iframe profile" src="profile.aspx?listing=<%= listing %>" frameborder="0"></iframe>
        </div>

        <div class="right">
            <h2 class="allTools">Trades</h2>
            <iframe class="iframe trades" src="trades.aspx?listing=<%= listing %>" frameborder="0" scrolling="no"></iframe>
        </div>

        <div class="clear"></div>
        <h2 class="allTools">Investment Calculator</h2>
        <iframe class="iframe calc" src="calc.aspx?listing=<%= listing %>" frameborder="0"></iframe>

        <h2 class="allTools">Historical Lookup</h2>
        <iframe class="iframe lookup" src="lookup.aspx?listing=<%= listing %>" frameborder="0"></iframe>
    </div>

</body>
</html>
