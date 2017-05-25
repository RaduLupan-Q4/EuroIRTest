﻿<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>
<%= site.header("IROrders") %>
<script type="text/javascript">
    document.write([
        "\<script src='",
        ("https:" == document.location.protocol) ? "https://" : "http://",
        "ajax.googleapis.com/ajax/libs/jquery/1.2.6/jquery.min.js' type='text/javascript'>\<\/script>"
    ].join(''));
</script>

<script type="text/javascript">
    var activeModules = ['IRQuote'];
</script>
<h1>Latest Share Trades</h1>
<h2>Trades</h2>

<table class="IRTradesTable table-look trades-horizontal responsive-horizontal" id="scroll-table"> 
    <tr>
        <th class=><div class="img"><img style="float:left; display: inline; padding-right: 5px; height: 12px;" src="../1854/images/stopwatch.png" alt=""/></div>Updated</th>
        <th>Last</th>
        <th>Volume</th>
        <th>Buyer/Seller</th>
    <tr>
        <td>20.01.2015 11:08</td>
        <td class="decrease">326.00<img id=lower src="../1854/images/arrow_down.png"></td>
        <td>4</td>
        <td></td>
    </tr>
    <tr>
        <td>20.01.2015 11:07</td>
        <td>326.50</td>
        <td>1</td>
        <td>CAR/POH</td>
    </tr>
    <tr>
        <td>20.01.2015 11:06</td>
        <td class="decrease">326.50<img id=lower src="../1854/images/arrow_down.png"></td>
        <td>4</td>
        <td>CAR/POH</td>
    </tr>
     <tr>
        <td>20.01.2015 11:05</td>
        <td>327.00</td>
        <td>0</td>
        <td></td>
    </tr>
    <tr>
        <td>20.01.2015 11:04</td>
        <td class="increase">327.00<img id=higher src="../1854/images/arrow_up.png"></td>
        <td>0</td>
        <td></td>
    </tr>
    <tr>
        <td>20.01.2015 11:03</td>
        <td class="increase">326.50<img id=higher src="../1854/images/arrow_up.png"></td>
        <td>21</td>
        <td>CAR/POH</td>
    </tr>
    <tr>
        <td>20.01.2015 11:02</td>
        <td>326.00</td>
        <td>150</td>
        <td></td>
    </tr>
    <tr>
        <td>20.01.2015 11:01</td>
        <td class="increase">326.00<img id=higher src="../1854/images/arrow_up.png"></td>
        <td>441</td>
        <td></td>
    </tr>
    <tr>
        <td>20.01.2015 11:00</td>
        <td class="decrease">325.50<img id=lower src="../1854/images/arrow_down.png"></td>
        <td>414</td>
        <td></td>
    </tr>
    <tr>
        <td>20.01.2015 10:59</td>
        <td>326.00</td>
        <td>150</td>
        <td></td>
    </tr>
    <tr>
        <td>20.01.2015 10:58</td>
        <td class="increase">326.00<img id=higher src="../1854/images/arrow_up.png"></td>
        <td>441</td>
        <td></td>
    </tr>
    <tr>
        <td>20.01.2015 10:57</td>
        <td class="decrease">325.50<img id=lower src="../1854/images/arrow_down.png"></td>
        <td>414</td>
        <td></td>
    </tr>
     <tr>
        <td>20.01.2015 10:56</td>
        <td>326.00</td>
        <td>150</td>
        <td></td>
    </tr>
    <tr>
        <td>20.01.2015 10:55</td>
        <td>326.00</td>
        <td>441</td>
        <td></td>
    </tr>
    <tr>
        <td>20.01.2015 10:54</td>
        <td>326.00</td>
        <td>414</td>
        <td></td>
    </tr>
</table>

<div class="input-wrapper download-button latest-trades">
    <input type="submit" value="Download Today's Trades" id="lookup-button" style="margin-left: 5px;">
 </div>

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