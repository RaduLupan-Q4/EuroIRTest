<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();  %>

    <%= site.header("IRChart") %>


<script type="text/javascript">
    var activeModules = ['IRQuote'];
</script>


<div class="IRQuoteHorizontalModule"></div>
<div class="IRQuoteVerticalModule"></div>


<script id="IRQuoteTableHorizontalTemplate" type="text/x-handlebars-template">

<!-- Profile -->
<div class="profile-wrapper" style="width: 100%">

    <h2>Eden Research (EDEN)</h2>
    <b>Sector:</b> Pharmaceuticals & Biotechnology<br>
    <b>{{headers/t_share}} {{headers/t_price}}:</b> {{decimals stocks/last}}p<br>
    <b>{{headers/t_change}} {{headers/t_today}}:</b>  <span class="formatColour"> {{decimals stocks/change}}</span>
    <br>
    <b>{{headers/t_market_cap}}:</b> £{{showMarketCapM stocks/marketCap}}m<br>
    <div class="table-wrapper">
        <div class="company-listing-data">
            <h2>Company Listing Data</h2>
            <table class="IRTable table-look company-listing-data horizontal responsive">
                <tr>
                    <th class="Header epic top">EPIC</th>
                    <td class="Data epic top"><b>EDEN</b></td>
                </tr>
                <tr>
                    <th class="Header sector">Sector</th>
                    <td class="Data sector">Pharmaceuticals &amp; Biotechnology</td>
                </tr>
                <tr>
                    <th class="Header sedol">SEDOL</th>
                    <td class="Data sedol">0164694</td>
                </tr>
                <tr>
                    <th class="Header isin">ISIN</th>
                    <td class="Data isin">GB0001646941</td>
                </tr>
                <tr>
                    <th class="Header market-sector">Market Sector</th>
                    <td class="Data market-sector">AIM</td>
                </tr>
                <tr>
                    <th class="Header market-segment">Market Segment</th>
                    <td class="Data market-segment">ASQ1</td>
                </tr>
                <tr>
                    <th class="Header country">Country of register</th>
                    <td class="Data country">Great Britain</td>
                </tr>
                <tr>
                    <th class="Header currency">{{headers/t_currency}}</th>
                    <td class="Data currency">British Pence</td>
                </tr>
                <tr>
                    <th class="Header market-cap">{{headers/t_market_cap}}m</th>
                    <td class="Data market-cap"> £{{showMarketCapM stocks/marketCap}}</td>
                </tr>
                <tr>
                    <th class="Header nms">NMS</th>
                    <td class="Data nms">10,000</td>
                </tr>
                <tr>
                    <th class="Header shares-issued">Shares in issue</th>
                    <td class="Data shares-issued">{{toLocal stocks/shareMillions}}m</td>
                </tr>
                <tr>
                    <th class="Header date-listed">Date Listed</th>
                    <td class="Data date-listed">n/a</td>
                </tr>
            </table>
        </div>
        <div class="price-data">
            <h2>{{headers/t_price}} Data</h2>
            <table class="IRTable table-look price-data horizontal responsive">
                <tbody>
                    <tr>
                        <th class="Header currency top">{{headers/t_currency}}</th>
                        <td class="Data currency top">{{stocks/currency}}</td>
                    </tr>

                    <tr>
                        <th class="Header price">{{headers/t_last}} {{headers/t_price}}</th>
                        <td class="Data price">{{decimals stocks/last}}p</td>
                    </tr>
                    <tr>
                        <th class="Header change">{{headers/t_change}} {{headers/t_today}}</th>
                        <td class="Data change formatColour">{{decimals stocks/change}}</td>
                    </tr>
                    <tr>
                        <th class="Header volume">{{headers/t_volume}}</th>
                        <td class="Data volume">{{toLocal stocks/volume}}</td>
                    </tr>
                    <tr>
                        <th class="Header prev-close">{{headers/t_prev_close}} </th>
                        <td class="Data prev-close">{{decimals stocks/prevClose}}p</td>
                    </tr>
                    <tr>
                        <th class="Header shares-issued">Shares Issued</th>
                        <td class="Data shares-issued">{{toLocal stocks/shareMillions}}m</td>
                    </tr>
                    <tr>
                        <th class="Header market-cap">{{headers/t_market_cap}}</th>
                        <td class="Data market-cap">£{{showMarketCapM stocks/marketCap}}m</td>
                    </tr>
                    <tr>
                        <th class="Header year-end">Year End</th>
                        <td class="Data year-end">-</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
</script> 
<script id="IRQuoteTableVerticalTemplate" type="text/x-handlebars-template">

<!-- Profile -->
<div class="profile-wrapper" style="width: 100%">

    <h2>Eden Research (EDEN)</h2>
    <b>Sector:</b> Pharmaceuticals & Biotechnology<br>
    <b>{{headers/t_share}} {{headers/t_price}}:</b> {{decimals stocks/last}}p<br>
    <b>{{headers/t_change}} {{headers/t_today}}:</b> <span class="formatColour"> {{decimals stocks/change}}</span>
    <br>
    <b>{{headers/t_market_cap}}:</b> £{{showMarketCapM stocks/marketCap}}m<br>
    <div class="table-wrapper">
        <div class="company-listing-data">
            <h2>Company Listing Data</h2>
            <table class="IRTable table-look company-listing-data vertical responsive">
                 <tr>
                    <th class="Header epic top">EPIC</th>
                    <td class="Data epic top"><b>EDEN</b></td>
                </tr>
                <tr>
                    <th class="Header sector">Sector</th>
                    <td class="Data sector">Pharmaceuticals &amp; Biotechnology</td>
                </tr>
                <tr>
                    <th class="Header sedol">SEDOL</th>
                    <td class="Data sedol">0164694</td>
                </tr>
                <tr>
                    <th class="Header isin">ISIN</th>
                    <td class="Data isin">GB0001646941</td>
                </tr>
                <tr>
                    <th class="Header market-sector">Market Sector</th>
                    <td class="Data market-sector">AIM</td>
                </tr>
                <tr>
                    <th class="Header market-segment">Market Segment</th>
                    <td class="Data market-segment">ASQ1</td>
                </tr>
                <tr>
                    <th class="Header country">Country of register</th>
                    <td class="Data country">Great Britain</td>
                </tr>
                <tr>
                    <th class="Header currency">{{headers/t_currency}}</th>
                    <td class="Data currency">British Pence</td>
                </tr>
                <tr>
                    <th class="Header market-cap">{{headers/t_market_cap}}</th>
                    <td class="Data market-cap"> £{{showMarketCapM stocks/marketCap}}m</td>
                </tr>
                <tr>
                    <th class="Header nms">NMS</th>
                    <td class="Data nms">10,000</td>
                </tr>
                <tr>
                    <th class="Header shares-issued">Shares in issue</th>
                    <td class="Data shares-issued">{{toLocal stocks/shareMillions}}m</td>
                </tr>
                <tr>
                    <th class="Header date-listed">Date Listed</th>
                    <td class="Data date-listed">n/a</td>
                </tr>
            </table>
        </div>
        <div class="price-data">
            <h2>{{headers/t_price}} Data</h2>
            <table class="IRTable table-look price-data vertical responsive">
                <tbody>
                    <tr>
                        <th class="Header currency top">{{headers/t_currency}}</th>
                        <td class="Data currency top">{{stocks/currency}}</td>
                    </tr>

                    <tr>
                        <th class="Header price">{{headers/t_last}} {{headers/t_price}}</th>
                        <td class="Data price">{{decimals stocks/last}}p</td>
                    </tr>
                    <tr>
                        <th class="Header change">{{headers/t_change}} {{headers/t_today}}</th>
                        <td class="Data change formatColour">{{decimals stocks/change}}</td>
                    </tr>
                    <tr>
                        <th class="Header volume">{{headers/t_volume}}</th>
                        <td class="Data volume">{{toLocal stocks/volume}}</td>
                    </tr>
                    <tr>
                        <th class="Header prev-close">{{headers/t_prev_close}} </th>
                        <td class="Data prev-close">{{decimals stocks/prevClose}}p</td>
                    </tr>
                    <tr>
                        <th class="Header shares-issued">Shares Issued</th>
                        <td class="Data shares-issued">{{toLocal stocks/shareMillions}}</td>
                    </tr>
                    <tr>
                        <th class="Header market-cap">{{headers/t_market_cap}}</th>
                        <td class="Data market-cap">£{{showMarketCapM stocks/marketCap}}m</td>
                    </tr>
                    <tr>
                        <th class="Header year-end">Year End</th>
                        <td class="Data year-end">-</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
</script> 

<%= site.footer("IRChart") %>

<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
<script type="text/javascript" src="../tabs/js/jquery.minitabs.js"></script>
<script src="src/jquery.placeholder.min.js"></script>
<link rel="stylesheet" type="text/css" href="ir.client.css">
<link rel="stylesheet" type="text/css" href="investorcom.css">

<script type="text/javascript">
    $(document).ready(function () {
        setTimeout(function () {
        var currPrice = 0;
        var prevClose = 0;

        $('.price-data').each(function() {
            var currPrice = parseFloat($(this).find("td.price").html(), 10);
            var prevClose = parseFloat($(this).find("td.prev-close").html(), 10);
 
            if (currPrice > prevClose) {
                $("td.price").addClass("formatArrowPos");
            }

            else if (currPrice < prevClose) {
                $("td.price").addClass("formatArrowNeg");
            }
            else {
                //do nothing
            }
        });

            //Get current year - 1
        $('.price-data').each(function () {

            var dteNow = new Date();
            var intYear = dteNow.getFullYear() - 1;

            $("td.year-end").empty();
            $('td.year-end').append('31-Dec-' + intYear);
        });
        }, 100);
    });
</script>



