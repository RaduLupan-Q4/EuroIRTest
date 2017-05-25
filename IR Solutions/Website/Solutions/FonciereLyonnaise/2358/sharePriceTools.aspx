<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();


    string language = Request.QueryString["language"];
    if (string.IsNullOrEmpty(language))
    {
        language = "en";
    }

%>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
<script type="text/javascript" src="http://minitabs.googlecode.com/files/jquery.minitabs.js"></script>
<link rel="stylesheet" type="text/css" href="ir.client.css">
<style type="text/css">
    @media screen and (max-width: 580px) {

        .leftiFrame, .rightiFrame {
            float: none !important;
            width: 100% !important;
        }
    }
</style>

<iframe src="chart.aspx?language=<%= language %>" allowtransparency="true" style="width: 100%; height: 700px; border: none;"></iframe>
<br />
<br />
<iframe src="performance.aspx?language=<%= language %>" style="width: 100%; height: 300px; border: none;"></iframe>
<br />
<br />

<div style="float: left; width: 49%" class="leftiFrame">
    <iframe src="orders.aspx?language=<%= language %>" allowtransparency="true" style="width: 100%; height: 285px; border: none;"></iframe>


    <iframe src="profile.aspx?language=<%= language %>" allowtransparency="true" style="width: 100%; height: 220px; border: none;"></iframe>

</div>
<div style="float: right; width: 49%" class="rightiFrame">
    <iframe src="trades.aspx?language=<%= language %>" allowtransparency="true" style="width: 100%; height: 520px; border: none;"></iframe>
</div>

<br />
<br />
<iframe src="calc.aspx?language=<%= language %>" allowtransparency="true" style="width: 100%; height: 790px; border: none;"></iframe>

<br />
<br />
<iframe src="lookup.aspx?language=<%= language %>" allowtransparency="true" style="width: 100%; height: 700px; border: none;"></iframe>







