<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>
<%= site.newHeader("IRLookup") %>

<script type="text/javascript">
    var activeModules = ["IRLookup"];
</script>

<h1>Insiders</h1>
<h2>Boustedt Claes trades</h2>
<div style="clear: both;"></div>
<table class="IRInsiderTool table-look horizontal responsive">
    <tr class="IRHeaderGroup">
        <th class="Header column-first date">Date</th>
        <th class="Header name">Name</th>
        <th class="Header position">Position</th>
        <th class="Header instrument">Instrument</th>
        <th class="Header quantity">Quantity</th>
        <th class="IRHeader column-last transaction">Transaction</th>
    </tr>
    <tr>
        <td class="Data column-first date">14 Aug 2015</td>
        <td class="Data name"><a href="#">Boustedt Claes</a></td>
        <td class="Data position">Board member</td>
        <td class="Data instrument">Share</td>
        <td class="Data quantity">10000</td>
        <td class="Data column-last transaction">Purchase</td>
    </tr>

</table>
<table class="IRInsiderTool table-look vertical responsive">
    <tr class="IRHeaderGroup">
        <th class="Header date">Date</th>
        <td class="Data date">14 Aug 2015</td>
    </tr>
    <tr>
        <th class="Header name">Name</th>
        <td class="Data name"><a href="#">Boustedt Claes</a></td>
    </tr>
    <tr>
        <th class="Header position">Position</th>
        <td class="Data position">Board member</td>
    </tr>
    <tr>
        <th class="Header instrument">Instrument</th>
        <td class="Data instrument">Share</td>
    </tr>
    <tr>
        <th class="Header quantity">Quantity</th>
        <td class="Data quantity">10000</td>
    </tr>
    <tr>
        <th class="IRHeader transaction">Transaction</th>
        <td class="Data transaction">Purchase</td>
    </tr>


</table>



<div style="clear: both;"></div>
<div class="IRNewsTableFooter">
    <div class="IRNewsPagination"></div>
</div>



<%= site.newFooter("IRLookup") %>
<link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">
<script src="//code.jquery.com/jquery-1.10.2.js"></script>
<script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
<link rel="stylesheet" href="/resources/demos/style.css">


<link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>
<link rel="stylesheet" type="text/css" href="insiders.css">
