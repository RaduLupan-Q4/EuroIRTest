<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" type=""text/css"" href=""//fonts.googleapis.com/css?family=Source+Sans+Pro:400,300,600""/>";
%>
<%= site.newHeader("IRMiniquote") %>

<script type="text/javascript">
    var activeModules = ['IRMiniquote'];
</script>

<div class="IRMiniquoteModule"><span class="ajaxLoader">Loading</span></div>

<script id="IRMiniquoteModuleTemplate" type="text/x-handlebars-template">
    <div class="IRMiniQuoteQuoteModule table-look responsive">
        <div class="quotebox left">
            <div class="title">
                <span class="name formatColourBasedOnPercentageChange">{{stocks/exchangeName}}(ADS)</span>
                <span class="last">
                    <strong class="currency formatColourBasedOnPercentageChange">{{stocks/currency}}</strong>
                    <span class="formatColourBasedOnPercentageChange">{{decimals stocks/last}}</span>
                    <span class="{{showArrow stocks/change}}"></span>
                </span>
            </div>
            <table>
                <tbody>
                    <tr>
                        <th>{{headers/t_change}}</th>
                        <th>{{headers/t_volume}}</th>
                        <th>{{headers/t_exchange}}</th>
                    </tr>
                    <tr class="shareInfoWrapper">
                        <td class="formatColour">{{plusOrMinus stocks/change}} ({{plusOrMinus stocks/changePercent}}%) </td>
                        <td>{{toLocal stocks/volume}}</td>
                        <td class="name">{{stocks/exchangeName}}</td>
                    </tr>
                </tbody>
            </table>
            <div class="time">As of {{showDateWithFormat stocks/tradeTimestamp 'hh:mm A'}} ET on {{showDateWithFormat stocks/tradeTimestamp 'MMM D, YYYY'}}</div>
            <div class="description"><%--{{headers/t_data_is_at_least_15_min_delayed}}--%>Delayed at least 20 minutes.</div>
            <div class="description">
                Closing price ~10 minutes after close; See disclaimer in 
                <a target="_parent" href="http://ir.redhillbio.com/stockquote.cfm?exchange=NDAQ">Stock Information</a> page.
            </div>
        </div>
    </div>
    <iframe class="quotebox right" src="miniquote2.aspx?listing=1"></iframe>
</script>


<%= site.newFooter("IRMiniquote") %>


<script type="text/javascript">


    var customXApplied = false;
    function prepareCustomX() {
        //console.log('prepareCustomX');
        if (!customXApplied) {
            if (typeof ($('.formatColourBasedOnPercentageChange').html()) != 'undefined') {
                formatColourBasedOnPercentageChange = globalRawStockData[globalActiveListingIndex].changePercent;

                if (parseFloat(formatColourBasedOnPercentageChange) > 0) {
                    $(".formatColourBasedOnPercentageChange").addClass("formatColourPos");

                } else if (parseFloat(formatColourBasedOnPercentageChange) < 0) {
                    $(".formatColourBasedOnPercentageChange").addClass("formatColourNeg");
                } else {
                    return "";
                }

                customXApplied = true;
     
            }
      
        }
    }
    $(function () {
        setInterval(function () {
            prepareCustomX();
        }, 200);
    })


    Handlebars.registerHelper('plusOrMinus', function (number) {
        if (number > 0) {
            return '+' + formatDecimal(number);

        }else if (number < 0) {
            return formatDecimal(number);
        }
        return formatDecimal(number);
    });

</script>
