<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>
<%= site.newHeader("IROrders") %>

<script type="text/javascript">
    var activeModules = [''];
</script>

<h2>Shareholder Structure</h2>

<p> Distribution of shares per shareholder.</p>

<table class="IRShareholderStructureChartModule table-look">
    <tr class="chartNumberOfShares">
        <th class="">1 - 10</th>
        <td class="order-depth-bar-left">
            <div class="progress">
                <div class="progress-bar progress-bar-amount" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 4.41%"></div>
            </div>
        </td>
    </tr>

    <tr>
        <th>11 - 100</th>
        <td class="order-depth-bar-left">
            <div class="progress">
                <div class="progress-bar progress-bar-amount" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 34.88%"></div>
            </div>
        </td>
    </tr>
    <tr>
        <th>101 - 1,000</th>
        <td class="order-depth-bar-left">
            <div class="progress">
                <div class="progress-bar progress-bar-amount" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 45.53%"></div>
            </div>
        </td>
    </tr>
    <tr><th>1,001 - 10,000</th>
        <td class="order-depth-bar-left">
            <div class="progress">
                <div class="progress-bar progress-bar-amount" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 13.31%"></div>
            </div>
        </td>
    </tr>
    <tr><th>10,001 - 100,000</th>
        <td class="order-depth-bar-left">
            <div class="progress">
                <div class="progress-bar progress-bar-amount" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 1.65%"></div>
            </div>
        </td>
    </tr>
    <tr><th>100,000 +</th>
        <td class="order-depth-bar-left">
            <div class="progress">
                <div class="progress-bar progress-bar-amount" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 0.23%"></div>
            </div>
        </td>
    </tr>
</table>
<div class="clear" style="clear: both;"></div>
<table class="IRShareholderStructureModule table-look horizontal responsive">
    <tr>
        <th class="Header column-first shareAmount"><span class="desktop">Number of</span> shares</th>
        <th class="Header shareholderSize">Shareholder</th>
        <th class="Header shareholderSizePercent">% <span class="desktop">of owners</span></th>
        <th class="Header shareSize">Shares</th>
        <th class="Header shareSizePercent">% of Shares</th>
    </tr>
    <tr>
        <td class="Data column-first shareholderSize">1 - 10</td>
        <td class="Data shareholderSize">2,424</td>
        <td class="Data shareholderSizePercent">4,41</td>
        <td class="Data shareSize">16,073</td>
        <td class="Data shareSizePercent">0,00</td>
    </tr>
    <tr>
        <td class="Data column-first shareAmout">11 - 100</td>
        <td class="Data shareholderSize">19,190</td>
        <td class="Data shareholderSizePercent">34,88</td>
        <td class="Data shareSize">1.070,846</td>
        <td class="Data shareSizePercent">0,20</td>
    </tr>
    <tr>
        <td class="Data column-first shareAmout">101 - 1,000</td>
        <td class="Data shareholderSize">25,050</td>
        <td class="Data shareholderSizePercent">45,53</td>
        <td class="Data shareSize">9,516,896</td>
        <td class="Data shareSizePercent">1,81</td>

    </tr>
    <tr>
        <td class="Data column-first shareAmout">1,001 - 10,000</td>
        <td class="Data shareholderSize">7,320</td>
        <td class="Data shareholderSizePercent">13,31</td>
        <td class="Data shareSize">20,761,594</td>
        <td class="Data shareSizePercent">3,95</td>
    </tr>
    <tr>
        <td class="Data column-first shareAmout">10,001 - 100,000</td>
        <td class="Data shareholderSize">905</td>
        <td class="Data shareholderSizePercent">1,65</td>
        <td class="Data shareSize">23,640,475</td>
        <td class="Data shareSizePercent">4,5</td>
    </tr>
    <tr>
        <td class="Data column-first shareAmout">100,000 +</td>
        <td class="Data shareholderSize">125</td>
        <td class="Data shareholderSizePercent">0,23</td>
        <td class="Data shareSize">470,346,700</td>
        <td class="Data shareSizePercent">89,52</td>
    </tr>
    <tr>
        <td class="Data column-first total">TOTAL</td>
        <td class="Data total">55,014</td>
        <td class="Data total">100</td>
        <td class="Data total desktop">525,352,584</td>
        <td class="Data total desktop">99,99</td>
    </tr>
</table>


<%= site.newFooter("IROrders") %>
<link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>
<link rel="stylesheet" type="text/css" href="orders.css">



<script type="text/javascript">

    setTimeout(function () {
        shareAmountBarWidth = 100;
        highestAmountOrPercentSize = 0;

        $('.IRShareholderStructureModule tr').each(function () {
            var shareholderSize = parseInt($(this).find('.shareholderSize').attr('shareholderSize'));
            var shareholderSizePercent = parseInt($(this).find('.shareholderSizePercent').attr('shareholderSizePercent'));
            if (parseFloat(shareholderSize) > parseFloat(highestAmountOrPercentSize)) {
                highestAmountOrPercentSize = shareholderSize;

            }
            if (parseFloat(shareholderSizePercent) > parseFloat(highestAmountOrPercentSize)) {
                highestAmountOrPercentSize = shareholderSizePercent;
            }
        });

        var widthPerAmountPercent = shareAmountBarWidth / highestAmountOrPercentSize;

        $('.IRToolQuoteTable tr').each(function () {
            var shareholderSize = parseInt($(this).find('.shareholderSize').attr('shareholderSize'));
            var shareholderSizePercent = parseInt($(this).find('.shareholderSizePercent').attr('shareholderSizePercent'));
            $(this).find('.orderDepthBarLeft div div.progress-bar').css('width', Math.ceil(shareholderSize * widthPerAmountPercent) + '%');
            $(this).find('.orderDepthBarRight div div.progress-bar').css('width', Math.ceil(shareholderSizePercent * widthPerAmountPercent) + '%');

        });

    }, 300);

</script>


