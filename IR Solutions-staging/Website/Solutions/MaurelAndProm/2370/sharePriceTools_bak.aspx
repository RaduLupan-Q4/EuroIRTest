﻿<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite(); 
%>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
<script type="text/javascript" src="http://minitabs.googlecode.com/files/jquery.minitabs.js"></script>
<link rel="stylesheet" type="text/css" href="ir.client.css">

<h2><b>Chart</b></h2>
<iframe src="chart.aspx" allowtransparency="true" style="width: 100%; height: 700px; border: none;"></iframe>

<h2><b>Lookup</b></h2>
<iframe src="lookup.aspx" style="width: 100%; height: 700px; border: none;"></iframe>
