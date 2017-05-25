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
            <th class="last" style="text-align: right;">Updated
                <div class="img">
                    <img style="text-align: center; padding-left: 5px; height: 12px;" src="../1854/images/stopwatch.png" alt="" /></div>
            </th>
        </tr>
    </thead>
    <tbody>
        <tr class="trmobileview">
            <td style="display: none;"></td>
            <td style="display: none;"></td>
            <td style="display: none;"></td>
            <td style="display: none;"></td>
            <td class="column-last time-desktop"></td>
            <td colspan="5" style="text-align: center; font-weight: bold; background: whitesmoke;">21 January 15</td>
        </tr>
        <tr>
            <td class="increase">326.00<img src="../1854/images/arrow_up.png"></td>
            <td>12</td>
            <td>325.50</td>
            <td>326.10</td>
            <td class="column-last time-desktop">21. January 2015 11:28</td>
            <td class="column-last time-mobile">11:28</td>
        </tr>
        <tr>
            <td class="decrease">325.50<img id="higher" src="../1854/images/arrow_down.png"></td>
            <td>11</td>
            <td>325.00</td>
            <td>326.20</td>
            <td class="column-last time-desktop">21 January 2015 11:27</td>
            <td class="column-last time-mobile">11:27</td>
        </tr>
        <tr>
            <td>326.00</td>
            <td>10</td>
            <td>325.50</td>
            <td>326.10</td>
            <td class="column-last time-desktop">21 January 2015 11:26</td>
            <td class="column-last time-mobile">11:26</td>
        </tr>
        <tr>
            <td>326.00</td>
            <td>10</td>
            <td>325.50</td>
            <td>326.20</td>
            <td class="column-last time-desktop">21 January 2015 11:24</td>
            <td class="column-last time-mobile">11:24</td>
        </tr>
        <tr>
            <td class="tdmobileview" colspan="5" style="text-align: center; color: #555; font-weight: bold; background: whitesmoke;">20 January 15</td>
        </tr>
        <tr>
            <td class="increase">326.00<img src="../1854/images/arrow_up.png"></td>
            <td>14</td>
            <td>325.50</td>
            <td>326.10</td>
            <td class="column-last time-desktop">20 January 2015 14:23</td>
            <td class="column-last time-mobile">14:23</td>
        </tr>
        <tr>
            <td class="decrease">325.50<img src="../1854/images/arrow_down.png"></td>
            <td>15</td>
            <td>326.00</td>
            <td>326.20</td>
            <td class="column-last time-desktop">20 January 2015 14:22</td>
            <td class="column-last time-mobile">14:22</td>
        </tr>
        <tr>
            <td class="increase">326.00<img src="../1854/images/arrow_up.png"></td>
            <td>14</td>
            <td>326.50</td>
            <td>326.10</td>
            <td class="column-last time-desktop">20 January 2015 14:21</td>
            <td class="column-last time-mobile">14:21</td>
        </tr>
        <tr>
            <td class="tdmobileview" colspan="5" style="text-align: center; font-weight: bold; color: #555; background: whitesmoke;">19 January 15</td>
        </tr>
        <tr>
            <td>325.50</td>
            <td>14</td>
            <td>325.00</td>
            <td>326.20</td>
            <td class="column-last time-desktop">19 January 2015 12:22</td>
            <td class="column-last time-mobile">12:23</td>
        </tr>
        <tr>
            <td class="increase">326.00<img src="../1854/images/arrow_up.png"></td>
            <td>14</td>
            <td>325.50</td>
            <td>326.10</td>
            <td class="column-last time-desktop">19 January 2015 12:19</td>
            <td class="column-last time-mobile">12:22</td>
        </tr>
        <tr>
            <td class="decrease">325.50<img src="../1854/images/arrow_down.png"></td>
            <td>15</td>
            <td>326.00</td>
            <td>326.20</td>
            <td class="column-last time-desktop">20 January 2015 11:18</td>
            <td class="column-last time-mobile">12:21</td>
        </tr>
        <tr>
            <td class="increase">326.00<img src="../1854/images/arrow_up.png"></td>
            <td>14</td>
            <td>326.50</td>
            <td>326.10</td>
            <td class="column-last time-desktop">20 January 2015 11:17</td>
            <td class="column-last time-mobile">12:20</td>
        </tr>
        <tr>
            <td>325.50</td>
            <td>14</td>
            <td>325.00</td>
            <td>326.20</td>
            <td class="column-last time-desktop">20 January 2015 11:16</td>
            <td class="column-last time-mobile">12:18</td>
        </tr>
        <tr>
            <td class="increase">326.00<img src="../1854/images/arrow_up.png"></td>
            <td>14</td>
            <td>325.50</td>
            <td>326.10</td>
            <td class="column-last time-desktop">20 January 2015 11:15</td>
            <td class="column-last time-mobile">12:15</td>
        </tr>
        <tr>
            <td class="decrease">325.50<img src="../1854/images/arrow_down.png"></td>
            <td>15</td>
            <td>326.00</td>
            <td>326.20</td>
            <td class="column-last time-desktop">20 January 2015 11:14</td>
            <td class="column-last time-mobile">12:14</td>
        </tr>
        <tr>
            <td class="increase">326.00<img src="../1854/images/arrow_up.png"></td>
            <td>14</td>
            <td>326.50</td>
            <td>326.10</td>
            <td class="column-last time-desktop">20 January 2015 11:13</td>
            <td class="column-last time-mobile">12:12</td>
        </tr>
        <tr>
            <td>325.50</td>
            <td>14</td>
            <td>325.00</td>
            <td>326.20</td>
            <td class="column-last time-desktop">20 January 2015 11:12</td>
            <td class="column-last time-mobile">12:11</td>
        </tr>
        <tr>
            <td class="increase">326.00<img src="../1854/images/arrow_up.png"></td>
            <td>14</td>
            <td>325.50</td>
            <td>326.10</td>
            <td class="column-last time-desktop">20 January 2015 11:11</td>
            <td class="column-last time-mobile">12:06</td>
        </tr>
        <tr>
            <td class="tdmobileview" colspan="5" style="text-align: center; font-weight: bold; background: whitesmoke;">18 January 15</td>
        </tr>
        <tr>
            <td>325.50</td>
            <td>14</td>
            <td>325.00</td>
            <td>326.20</td>
            <td class="column-last time-desktop">18 January 2015 11:08</td>
            <td class="column-last time-mobile">11:05</td>
        </tr>
        <tr>
            <td class="increase">326.00<img src="../1854/images/arrow_up.png"></td>
            <td>14</td>
            <td>325.50</td>
            <td>326.10</td>
            <td class="column-last time-desktop">18 January 2015 11:07</td>
            <td class="column-last time-mobile">11:02</td>
        </tr>
    </tbody>
</table>




<%--<script type="text/javascript">
    $('.tdorders').each(function (i, n) {
        if ($(n).text() < 0) $(n).css('color', 'red');
    });
</script>--%>



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
