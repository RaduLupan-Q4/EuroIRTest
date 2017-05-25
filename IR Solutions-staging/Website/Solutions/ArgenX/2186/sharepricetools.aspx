<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>

<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
<script type="text/javascript" src="http://minitabs.googlecode.com/files/jquery.minitabs.js"></script>
<link rel="stylesheet" type="text/css" href="ir.client.css">
<h2>Latest Trade Info</h2>
<iframe src="chart.aspx" allowtransparency="true" style="width: 100%; height: 870px; border: none;"></iframe>
<h2>Performance Comparison</h2>
<iframe src="performance.aspx" style="width: 100%; height: 255px; border: none;"></iframe>
<!--
	<h2>Lastest Stock Quotes</h2>
	<iframe scrolling="no" src="lookup.aspx?mode=list&from=<%=DateTime.Now.AddDays(-30).ToString("yyyy-MM-dd")%>&to=<%=DateTime.Now.AddDays(1).ToString("yyyy-MM-dd")%>&frequency=Daily" style="margin-bottom:30px;width: 100%; height: 490px; border: none;"></iframe>
-->
<h2>Historical Lookup</h2>
<iframe src="lookup.aspx" style="width: 100%; height: 700px; border: none;"></iframe>






