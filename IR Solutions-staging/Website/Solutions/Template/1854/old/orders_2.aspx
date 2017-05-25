<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>
<%= site.header("IROrders") %>


<script type="text/javascript">
    var activeModules = ['IRQuote'];
</script>

<h2>Trades</h2>
<table class="IROrders table-look table-look-horizontal responsive-horizontal" id="scroll-table">
    <thead>
        <tr>
            <th class="column-first">Price</th>
            <th>Quantity</th>
            <th>Bid</th>
            <th>Ask</th>
            <th class="last">Updated
                <div class="img">
                    <img style="text-align: right; padding-left: 5px; height: 12px;" src="../1854/images/stopwatch.png" alt="" /></div>
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="increase">326.00<img src="../1854/images/arrow_up.png"></td>
            <td>12</td>
            <td>325.50</td>
            <td>326.10</td>
            <td class="column-last">20.01.2015 11:28</td>
        </tr>
        <tr>
            <td class="decrease">325.50<img id="higher" src="../1854/images/arrow_down.png"></td>
            <td>11</td>
            <td>325.00</td>
            <td>326.20</td>
            <td class="column-last">20.01.2015 11:27</td>
        </tr>
        <tr>
            <td>326.00</td>
            <td>10</td>
            <td>325.50</td>
            <td>326.10</td>
            <td class="column-last">20.01.2015 11:26</td>
        </tr>
        <tr>
            <td>326.00</td>
            <td>10</td>
            <td>325.50</td>
            <td>326.20</td>
            <td class="column-last">20.01.2015 11:24</td>
        </tr>
        <tr>
            <td class="increase">326.00<img src="../1854/images/arrow_up.png"></td>
            <td>14</td>
            <td>325.50</td>
            <td>326.10</td>
            <td class="column-last">20.01.2015 11:23</td>
        </tr>
        <tr>
            <td class="decrease">325.50<img src="../1854/images/arrow_down.png"></td>
            <td>15</td>
            <td>326.00</td>
            <td>326.20</td>
            <td class="column-last">20.01.2015 11:22</td>
        </tr>
        <tr>
            <td class="increase">326.00<img src="../1854/images/arrow_up.png"></td>
            <td>14</td>
            <td>326.50</td>
            <td>326.10</td>
            <td class="column-last">20.01.2015 11:21</td>
        </tr>
        <tr>
            <td>325.50</td>
            <td>14</td>
            <td>325.00</td>
            <td>326.20</td>
            <td class="column-last">20.01.2015 11:20</td>
        </tr>
        <tr>
            <td class="increase">326.00<img src="../1854/images/arrow_up.png"></td>
            <td>14</td>
            <td>325.50</td>
            <td>326.10</td>
            <td class="column-last">20.01.2015 11:19</td>
        </tr>
        <tr>
            <td class="decrease">325.50<img src="../1854/images/arrow_down.png"></td>
            <td>15</td>
            <td>326.00</td>
            <td>326.20</td>
            <td class="column-last">20.01.2015 11:18</td>
        </tr>
        <tr>
            <td class="increase">326.00<img src="../1854/images/arrow_up.png"></td>
            <td>14</td>
            <td>326.50</td>
            <td>326.10</td>
            <td class="column-last">20.01.2015 11:17</td>
        </tr>
        <tr>
            <td>325.50</td>
            <td>14</td>
            <td>325.00</td>
            <td>326.20</td>
            <td class="column-last">20.01.2015 11:16</td>
        </tr>
        <tr>
            <td class="increase">326.00<img src="../1854/images/arrow_up.png"></td>
            <td>14</td>
            <td>325.50</td>
            <td>326.10</td>
            <td class="column-last">20.01.2015 11:15</td>
        </tr>
        <tr>
            <td class="decrease">325.50<img src="../1854/images/arrow_down.png"></td>
            <td>15</td>
            <td>326.00</td>
            <td>326.20</td>
            <td class="column-last">20.01.2015 11:14</td>
        </tr>
        <tr>
            <td class="increase">326.00<img src="../1854/images/arrow_up.png"></td>
            <td>14</td>
            <td>326.50</td>
            <td>326.10</td>
            <td class="column-last">20.01.2015 11:13</td>
        </tr>
        <tr>
            <td>325.50</td>
            <td>14</td>
            <td>325.00</td>
            <td>326.20</td>
            <td class="column-last">20.01.2015 11:12</td>
        </tr>
        <tr>
            <td class="increase">326.00<img src="../1854/images/arrow_up.png"></td>
            <td>14</td>
            <td>325.50</td>
            <td>326.10</td>
            <td class="column-last">20.01.2015 11:11</td>
        </tr>
        <tr>
            <td class="decrease">325.50<img src="../1854/images/arrow_down.png"></td>
            <td>15</td>
            <td>326.00</td>
            <td>326.20</td>
            <td class="column-last">20.01.2015 11:10</td>
        </tr>
        <tr>
            <td class="increase">326.00<img src="../1854/images/arrow_up.png"></td>
            <td>14</td>
            <td>326.50</td>
            <td>326.10</td>
            <td class="column-last">20.01.2015 11:09</td>
        </tr>
        <tr>
            <td>325.50</td>
            <td>14</td>
            <td>325.00</td>
            <td>326.20</td>
            <td class="column-last">20.01.2015 11:08</td>
        </tr>
        <tr>
            <td class="increase">326.00<img src="../1854/images/arrow_up.png"></td>
            <td>14</td>
            <td>325.50</td>
            <td>326.10</td>
            <td class="column-last">20.01.2015 11:07</td>
        </tr>
        <tr>
            <td class="decrease">325.50<img src="../1854/images/arrow_down.png"></td>
            <td>15</td>
            <td>326.00</td>
            <td>326.20</td>
            <td class="column-last">20.01.2015 11:06</td>
        </tr>
        <tr>
            <td class="increase">326.00<img src="../1854/images/arrow_up.png"></td>
            <td>14</td>
            <td>326.50</td>
            <td>326.10</td>
            <td class="column-last">20.01.2015 11:05</td>
        </tr>
        <tr>
            <td>325.50</td>
            <td>14</td>
            <td>325.00</td>
            <td>326.20</td>
            <td class="column-last">20.01.2015 11:04</td>
        </tr>
        <tr>
            <td class="increase">326.00<img src="../1854/images/arrow_up.png"></td>
            <td>14</td>
            <td>325.50</td>
            <td>326.10</td>
            <td class="column-last">20.01.2015 11:03</td>
        </tr>
        <tr>
            <td class="decrease">325.50<img src="../1854/images/arrow_down.png"></td>
            <td>15</td>
            <td>326.00</td>
            <td>326.20</td>
            <td class="column-last">20.01.2015 11:02</td>
        </tr>
        <tr>
            <td class="increase">326.00<img src="../1854/images/arrow_up.png"></td>
            <td>14</td>
            <td>326.50</td>
            <td>326.10</td>
            <td class="column-last">20.01.2015 11:01</td>
        </tr>
        <tr>
            <td>325.50</td>
            <td>14</td>
            <td>325.00</td>
            <td>326.20</td>
            <td class="column-last">20.01.2015 11:00</td>
        </tr>
    </tbody>
</table>

<%= site.footer("IROrders") %>

<script type="text/javascript">

    $(document).ready(function () {
        $('#scroll-table').dataTable({
            "scrollY": "350px",
            "scrollCollapse": true,
            "bSort": false,
            "autoWidth": false,
            "paging": false,
            responsive: true
        });
    });

</script>
