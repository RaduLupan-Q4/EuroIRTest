<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<%  IRSite site = new IRSite();
    //site.disclaimerType = "RKD";
%>
<%= site.newHeader("IRMiniquoteChart") %>

<script type="text/javascript">
    var activeModules = ["IRMiniquoteChart"];
</script>

<div class="IRMiniquoteChartModule">
    <span class="ajaxLoader">Loading</span>
</div>

<script id="IRMiniquoteChartModuleTemplate" type="text/x-handlebars-template">
    <table class="IRMiniquoteChart table-look horizontal ">
        <tr>
            <td>
                <table class="last-table">
                    <tr>
                        <td class="IRToolQuoteTableItem Data">{{decimals stocks/last}} {{stocks/showCurrency}}</td>
                    </tr>
                    <tr>
                        <td class="changePercent">({{decimals stocks/changePercent}} %)</td>
                    </tr>
                </table>
            </td>
               </tr>
                    <tr>
            <td>
                <table>
                    <tr>
                        <td class="column-first">{{headers/t_volume}}</td>
                        <td class="column-last">{{stocks/volume}}</td>
                    </tr>
                    <tr>
                        <td class="column-first">{{headers/t_market_cap}}</td>
                        <td class="column-last">{{stocks/marketCap}} M</td>
                    </tr>
                    <tr>
                        <td class="column-first">{{headers/t_high}}</td>
                        <td class="column-last">{{decimals stocks/high}}</td>
                    </tr>
                    <tr>
                        <td class="column-first">{{headers/t_low}}</td>
                        <td class="column-last">{{decimals stocks/low}}</td>
                    </tr>
                </table>

            </td>
        </tr>
    </table>

    <div class="RKDDisclaimer">
        Quote data provided by © Thomson Reuters Limited. <a target="_Blank" href="http://media.corporate-ir.net/media_files/irol/17/176279/Terms_Conditions.html">See Terms of use</a>
    </div>

    <%--<div class="IRMiniquoteChartPlaceholder" dir="ltr"></div>--%>
</script>

<%= site.newFooter("IRMiniquoteChart") %>