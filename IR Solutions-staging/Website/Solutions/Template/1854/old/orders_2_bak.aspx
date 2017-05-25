<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>
<%= site.header("IROrders") %>

<%--<script type="text/javascript" src="///cdn.datatables.net/scroller/1.2.2/js/dataTables.scroller.js"></script>
<script type="text/javascript" src="///cdn.datatables.net/scroller/1.2.2/js/dataTables.scroller.min.js"></script>--%>


<script type="text/javascript">
    var activeModules = ['IRQuote'];
</script>

<h2>Order Depth</h2>
<table class="IROrders table-look table-look-horizontal responsive-horizontal">
    <tr>
        <th>Size</th>
        <th>Bid</th>
        <th></th>
        <th>Ask</th>
        <th>Size</th>
    </tr>
    <tr>
        <td>103</td>
        <td>325.70</td>
        <td style="width: 351px; background-image: url('../1854/images/graphimage.png'); background-repeat: no-repeat; background-position: center;"></td>
        <td>326.50</td>
        <td>500</td>
    </tr>
    <tr>
        <td>102</td>
        <td>325.70</td>
        <td style="width: 351px; background-position: 50% 25%; background-image: url('../1854/images/graphimage.png'); background-repeat: no-repeat;"></td>
        <td>326.50</td>
        <td>10</td>
    </tr>
    <tr>
        <td>14</td>
        <td>325.70</td>
        <td style="width: 351px; background-position: 50% 75%; background-image: url('../1854/images/graphimage.png'); background-repeat: no-repeat;"></td>
        <td>326.50</td>
        <td>300</td>
    </tr>
    <tr>
        <td>100</td>
        <td>325.70</td>
        <td style="width: 351px; background-position: 50% 99%; background-image: url('../1854/images/graphimage.png'); background-repeat: no-repeat;"></td>
        <td>326.50</td>
        <td>300</td>
    </tr>
    <tr>
        <td>100</td>
        <td>325.70</td>
        <td style="width: 351px; background-position: 50% 25%; background-image: url('../1854/images/graphimage.png'); background-repeat: no-repeat;"></td>
        <td>326.50</td>
        <td>300</td>
    </tr>

</table>


<%= site.footer("IROrders") %>


<script type="text/javascript">

    $(document).ready(function () {
        $('#scroll-table').dataTable({
            "scrollY": "300px",
            "scrollCollapse": true,
            "paging": false
        });
    });

</script>
