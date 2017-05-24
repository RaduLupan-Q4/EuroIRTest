<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>

<% string language = "en";
    language = Request["language"];

    if (language != "no")
    {
        language = "en";
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
 <script type="text/javascript">
    var activeModules = ['IRCustomModule'];
</script>    
    <div class="tools-container">
        <iframe class="iframe chart" src="chart.aspx?language=<%= language %>" frameborder="0"></iframe>

        <iframe class="iframe performance" src="performance.aspx?language=<%= language %>" frameborder="0"></iframe>

        <div class="left">
            <iframe class="iframe orders" src="orders.aspx?language=<%= language %>" frameborder="0"></iframe>
            <iframe class="iframe profile" src="profile.aspx?language=<%= language %>" frameborder="0"></iframe>
        </div>

        <div class="right">
            <iframe class="iframe trades" src="trades.aspx?language=<%= language %>" frameborder="0"></iframe>
        </div>

        <div class="clear"></div>
        <iframe class="iframe calc" src="calc.aspx?language=<%= language %>" frameborder="0"></iframe>

        <iframe class="iframe lookup" src="lookup.aspx?language=<%= language %>" frameborder="0"></iframe>
    </div>

</body>
</html>
