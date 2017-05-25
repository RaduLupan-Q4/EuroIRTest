<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>

<%= site.newHeader("IRChart") %> 

<style type="text/css">
    body .container {
        height: 3800px;
        background-image: url(images/ChartDemo.png);
        background-repeat: no-repeat;
        width: 1055px;
        margin: auto;

    }
    .container iframe {
        height: 870px;
        width: 855px;
        position: relative;
        top: 470px;
        left: 181px;
    }
</style>
<div class="container">
    <iframe src="chart.aspx"></iframe>
</div>

