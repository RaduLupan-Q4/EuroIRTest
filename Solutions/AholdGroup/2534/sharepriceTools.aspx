<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
    <link rel="stylesheet" href="ir.client.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("ir.client.css")).Ticks.ToString()%>" />
</head>
<body>
    <div class="tools-container">
        <h2 class="allTools">Share price</h2>
        <iframe class="iframe chart" src="chart.aspx" frameborder="0"></iframe>
        <iframe class="iframe miniquote" src="miniquote.aspx" frameborder="0"></iframe>

        <div class="left">
            <h2 class="allTools">Orders</h2>
            <iframe class="iframe orders" src="orders.aspx" frameborder="0"></iframe>
            <h2 class="allTools">Share Info</h2>
            <iframe class="iframe profile" src="profile.aspx" frameborder="0"></iframe>    
        </div>

        <div class="right">
            <h2 class="allTools">Trades</h2>
            <iframe class="iframe trades" src="trades.aspx" frameborder="0"></iframe>
        </div>

        <div class="clear"></div>
        <h2 class="allTools">Investment Calculator</h2>
        <iframe class="iframe calc" src="calc.aspx" frameborder="0"></iframe>
        <h2 class="allTools">Historical Lookup</h2>
        <iframe class="iframe lookup" src="lookup.aspx" frameborder="0"></iframe>
    </div>
     
</body>
</html>