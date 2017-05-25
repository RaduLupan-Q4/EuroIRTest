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
<table class="IRTradesTable table-look table-look-horizontal responsive-horizontal" id="scroll-table">
    <thead>
        <tr>
            <th class="column-first">Price</th>
            <th>Quantity</th>
            <th>Bid</th>
            <th>Ask</th>
            <th class="time-desktop">Buyer/Seller</th>
            <th class="last" style="text-align: right;">Updated
                <div class="img">
                    <img style="text-align: center; padding-left: 5px; height: 12px;" src="../1854/images/stopwatch.png" alt="" />
                </div>
            </th>
        </tr>
    </thead>
    <tbody style="width: 100%;">
        <tr>
            <td style="display: none;"></td>
            <td style="display: none;"></td>
            <td style="display: none;"></td>
            <td style="display: none;"></td>
            <td style="display: none;"></td>
            <td colspan="6" style="text-align: center; font-weight: bold; background: whitesmoke; color: #555;">21 January 15</td>
        </tr>
        <tr>
            <td class="increase">326.00<img src="../1854/images/arrow_up.png"></td>
            <td>12</td>
            <td>325.50</td>
            <%-- <td> <div data-toggle="tooltip" data-original-title="Seller: POH">Tooltip test</div></td>--%>
            <td>
                <span class="show-tooltip" data-toggle="tooltip" data-original-title="Seller: POH">Tooltip 1</span>
            </td>
            <td class="time-desktop"></td>
            <td class="column-last">11:28</td>
        </tr>
        <tr>
            <td class="decrease">325.50<img src="../1854/images/arrow_down.png"></td>
            <td>11</td>
            <td>325.00</td>
            <td>
                <span class="show-tooltip" data-toggle="tooltip" data-original-title="Seller: HBC">Tooltip 2</span>
            </td>
            <td class="time-desktop"></td>
            <td class="column-last">11:27</td>
        </tr>
        <tr>
            <td>326.00</td>
            <td>10</td>
            <td>325.50</td>
            <td><span class="show-tooltip" data-toggle="tooltip" data-original-title="Seller: POH">Tooltip 3</span></td>
            <td class="time-desktop">CAR/POH</td>
            <td class="column-last">11:26</td>
        </tr>
        <tr>
            <td>326.00</td>
            <td>10</td>
            <td>325.50</td>
            <td>326.20</td>
            <td class="time-desktop">CAR/POH</td>
            <td class="column-last ">11:24</td>
        </tr>
        <tr>
            <td style="display: none;"></td>
            <td style="display: none;"></td>
            <td style="display: none;"></td>
            <td style="display: none;"></td>
            <td style="display: none;"></td>
            <td colspan="6" style="text-align: center; color: #555; font-weight: bold; background: whitesmoke;">20 January 15</td>
        </tr>
        <tr>
            <td class="increase">326.00<img src="../1854/images/arrow_up.png"></td>
            <td>14</td>
            <td>325.50</td>
            <td>326.10</td>
            <td class="time-desktop"></td>
            <td class="column-last" title="CAR/POH">14:23</td>
        </tr>
        <tr>
            <td class="decrease">325.50<img src="../1854/images/arrow_down.png"></td>
            <td>15</td>
            <td>326.00</td>
            <td><span class="show-tooltip" data-toggle="tooltip" data-original-title="Seller: HBC">Tooltip 4</span></td>
            <td class="time-desktop">CAR/POH</td>
            <td class="column-last" title="CAR/POH">14:22</td>
        </tr>
        <tr>
            <td class="increase">326.00<img src="../1854/images/arrow_up.png"></td>
            <td>14</td>
            <td>326.50</td>
            <td>326.10</td>
            <td class="time-desktop"></td>
            <td class="column-last">14:21</td>
        </tr>
        <tr>
            <td style="display: none;"></td>
            <td style="display: none;"></td>
            <td style="display: none;"></td>
            <td style="display: none;"></td>
            <td style="display: none;"></td>
            <td colspan="6" style="text-align: center; font-weight: bold; color: #555; background: whitesmoke;">19 January 15</td>
        </tr>
        <tr>
            <td>325.50</td>
            <td>14</td>
            <td>325.00</td>
            <td>326.20</td>
            <td class="time-desktop">CAR/POH</td>
            <td class="column-last" title="CAR/POH">12:23</td>
        </tr>
        <tr>
            <td class="increase">326.00<img src="../1854/images/arrow_up.png"></td>
            <td>14</td>
            <td>325.50</td>
            <td>326.10</td>
            <td class="time-desktop"></td>
            <td class="column-last">12:22</td>
        </tr>
        <tr>
            <td class="decrease">325.50<img src="../1854/images/arrow_down.png"></td>
            <td>15</td>
            <td>326.00</td>
            <td>326.20</td>
            <td class="time-desktop"></td>
            <td class="column-last">12:21</td>
        </tr>
        <tr>
            <td class="increase">326.00<img src="../1854/images/arrow_up.png"></td>
            <td>14</td>
            <td>326.50</td>
            <td>326.10</td>
            <td class="time-desktop">CAR/POH</td>
            <td class="column-last" title="CAR/POH">12:20</td>
        </tr>
        <tr>
            <td>325.50</td>
            <td>14</td>
            <td>325.00</td>
            <td>326.20</td>
            <td class="time-desktop"></td>
            <td class="column-last ">12:18</td>
        </tr>
        <tr>
            <td class="increase">326.00<img src="../1854/images/arrow_up.png"></td>
            <td>14</td>
            <td>325.50</td>
            <td>326.10</td>
            <td class="time-desktop">CAR/POH</td>
            <td class="column-last" title="CAR/POH">12:15</td>
        </tr>
        <tr>
            <td class="decrease">325.50<img src="../1854/images/arrow_down.png"></td>
            <td>15</td>
            <td>326.00</td>
            <td>326.20</td>
            <td class="time-desktop"></td>
            <td class="column-last">12:14</td>
        </tr>
        <tr>
            <td class="increase">326.00<img src="../1854/images/arrow_up.png"></td>
            <td>14</td>
            <td>326.50</td>
            <td>326.10</td>
            <td class="time-desktop"></td>
            <td class="column-last">12:12</td>
        </tr>
        <tr>
            <td>325.50</td>
            <td>14</td>
            <td>325.00</td>
            <td title="Seller: POH">326.20</td>
            <td class="time-desktop">CAR/POH</td>
            <td class="column-last">12:11</td>
        </tr>
        <tr>
            <td class="increase">326.00<img src="../1854/images/arrow_up.png"></td>
            <td>14</td>
            <td>325.50</td>
            <td>326.10</td>
            <td class="time-desktop"></td>
            <td class="column-last">12:06</td>
        </tr>
        <tr>
            <td style="display: none;"></td>
            <td style="display: none;"></td>
            <td style="display: none;"></td>
            <td style="display: none;"></td>
            <td style="display: none;"></td>
            <td colspan="6" style="text-align: center; font-weight: bold; color: #555; background: whitesmoke;">18 January 15</td>
        </tr>
        <tr>
            <td>325.50</td>
            <td>14</td>
            <td>325.00</td>
            <td>326.20</td>
            <td class="time-desktop"></td>
            <td class="column-last">11:05</td>
        </tr>
        <tr>
            <td class="increase">326.00<img src="../1854/images/arrow_up.png"></td>
            <td>14</td>
            <td>325.50</td>
            <td>326.10</td>
            <td class="time-desktop"></td>
            <td class="column-last">11:02</td>
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
        });

    });

</script>

<%--<script type="text/javascript">
    $(document).ready(function ()
    {
        $('[data-toggle="tooltip"]').tooltip({
            placement: 'auto'
        });
        
        $('[data-toggle="tooltip"]').on('shown.bs.tooltip', function ()
        {
            setTimeout(function ()
            {
                $(this).tooltip('hide');
            }, 1000);


            //$('.tooltip').css('left', '');
            //var left = $('.tooltip').css('left');
            //left = left.replace('px', '');
            //left = left - 100;
            //$('.tooltip').css('left', ''+left+'px');
        })

    });
</script>--%>

<script type="text/javascript">

    $('.show-tooltip').mouseenter(function () {
        if ($(window).width() < 572) {
            var that = $(this)
            that.tooltip('show');
            setTimeout(function () {
                that.tooltip('hide');
            }, 2000);
        }
        $('.show-tooltip').mouseleave(function () {
            $(this).tooltip('hide');
        });
    });

</script>



