<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<%  IRSite site = new IRSite();%>
<%= site.newHeader("IRMiniquoteChart") %>


<script type="text/javascript">
    var activeModules = ["IRMiniquoteChart"];
</script>

<div class="table-wrapper">
    <table class="IRMiniquoteChart table-look horizontal">
        <tr>
            <th class="HeaderTase">TASE</th>
            <th class="HeaderNasdaq">Nasdaq</th>
        </tr>
    </table>
</div>

<div class="IRMiniquoteChartPlaceholder" id="removeGraph"></div>

<div class="IRMiniquoteChartModule">
    <span class="ajaxLoader">Loading</span>
</div>

<script id="IRMiniquoteChartModuleTemplate" type="text/x-handlebars-template">

    <div class="table-wrapper" id="tableInfo">
        <div class="divideLine"></div>
        <table class="IRMiniquoteChart table-look horizontal">
            <tr class="showLastPrice">
                <td class="Header">{{headers/t_last}}</td>
                <td class="Data"><span style="font-weight: bold;">{{decimals stocks/last}}</span> {{showCurrency}} </td>
            </tr>
            <tr> 
                <td class="Header change">{{headers/t_change}}</td>
                <td class="Data change {{formatColour stocks/change}}">{{decimals stocks/change}} <span class="{{showArrow stocks/change}}"></span></td>
            </tr>
            <tr>
                <td class="Header change">% {{headers/t_change}}</td>
                <td class="Data change {{formatColour stocks/change}}">({{decimals stocks/changePercent}}%) <span class="{{showArrow stocks/change}}"></span></td>
            </tr>
            <tr>
                <td class="Header">{{headers/t_volume}}</td>
                <td class="Data ">{{decimals stocks/volume}} </td>
            </tr>
            <tr>
                <td class="Header Timestamp">{{headers/t_updated}}</td>
                <td class="Data Timestamp">{{showDateTime stocks/timestamp}}</td>
            </tr>
        </table>

    </div>

</script>
<div class="table-wrapper">
    <table class="IRMiniquoteChart table-look horizontal">
        <tr>
            <th class="customGraph customHeader"><span class="img">Dynamic Graph</span></th>
            <th class="customData customHeader"><span class="img">Information</span></th>
        </tr>
    </table>
</div>

<%= site.newFooter("IRMiniquoteChart") %>

<script type="text/javascript">

    $(function() {
    var graph = true;
    var listing = getUrlParameter('listing');


    setInterval(function () {
        //  alert(listing);
        if (listing == "1") {
            $("#selectExchange").val("TEL");
            $("th:contains('Nasdaq')").addClass('passiveExchange');

        } else {
            $("#selectExchange").val("Nasdaq");
            $("th:contains('TASE')").addClass('passiveExchange');
        }

        if (graph) {
            $("th:contains('Information')").addClass('passiveExchange');
            $("#tableInfo").addClass('displayNone');
        } else {
            $("th:contains('Dynamic Graph')").addClass('passiveExchange');
            $("#removeGraph").addClass('displayNone');
        }


    }, 200);

    $(".customData").on("click", function () {

        $("#tableInfo").removeClass('displayNone');
        $("th:contains('Information')").removeClass('passiveExchange');
        graph = false;
        $("th:contains('Dynamic Graph')").addClass('passiveExchange');
        $("#removeGraph").addClass('displayNone');

    });
    $(".customGraph").on("click", function () {

        $("#removeGraph").removeClass('displayNone');
        $("th:contains('Dynamic Graph')").removeClass('passiveExchange');
        graph = true;
        $("th:contains('Information')").addClass('passiveExchange');
        $("#tableInfo").addClass('displayNone');

    });

    $(".HeaderNasdaq").on("click", function () {
        window.location.replace("http://ir.euroinvestor.com/Solutions/TowerJazz/2246/miniquoteChart.aspx?listing=0");
    });
    $(".HeaderTase").on("click", function () {
        window.location.replace("http://ir.euroinvestor.com/Solutions/TowerJazz/2246/miniquoteChart.aspx?listing=1");
    });
    });
    var getUrlParameter = function getUrlParameter(sParam) {
        var sPageURL = decodeURIComponent(window.location.search.substring(1)),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;

        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : sParameterName[1];
            }
        }
    };
</script>
