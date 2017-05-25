<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>
<%= site.newHeader("IROrders") %>


<script type="text/javascript">
    var activeModules = ['IRQuote'];
</script>

<h2>Order Depth</h2>
<table class="IROrders table-look table-look-horizontal responsive-horizontal">
    <tr>
        <th>Size</th>
        <th>Bid</th>
        <th style="width: 25%;"></th>
        <th>Ask</th>
        <th>Size</th>
    </tr>
    <tr>
        <td>100</td>
        <td>325.70</td>
        <td style="max-width: 391px; background-image: url('../1854/images/graphimage.png'); height: 100px; background-repeat: no-repeat; background-position: center;"></td>
        <td>326.50</td>
        <td>500</td>
    </tr>
</table>

<%= site.newFooter("IROrders") %>
