<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<%  IRSite site = new IRSite();
%>
<%= site.newHeader("IRMiniquoteChart") %>


<% 
    string language = "en";
    string listing = "0";
    language = Request["language"];
    listing = Request["listing"];

    if (language != "es")
    {
        language = "en";
    }
    if (listing != "1")
    {
        listing = "0";
    }
%>

<script type="text/javascript">
    var activeModules = ["IRMiniquoteChart"];
</script>


<div class="IRMiniquoteChartModule">
    <span class="ajaxLoader">Loading</span>
</div>




<script id="IRMiniquoteChartModuleTemplate" type="text/x-handlebars-template">
    <div class="tickerTitle" >{{stocks/symbol}}</div>
    <div class="quoteWrapper" style="float: left; width: 67%">
        <div style="width: auto; height: 150px;" class="IRMiniquoteChartPlaceholder"></div>
    </div>
    <div class="miniquoteTableWrapper">
        <div style="float: left; width: 250px; margin-top: 15px; margin-left: 15px" class="table-wrapper">
            <table class="IRMiniquoteChart table-look horizontal">
                <tr>
                    <th class="miniquoteHeader">{{headers/t_last}}</th>
                    <td class="miniquoteData"><span class="{{showArrow stocks/change}}"></span>{{decimals stocks/last}} {{stocks/currency}}</td>
                </tr>
                <tr>
                    <th class="miniquoteHeader">{{headers/t_change}}</th>
                    <td class="miniquoteData">{{decimals stocks/change}} ({{decimals stocks/changePercent}} %)</td>
                </tr>
                <tr>
                    <th class="miniquoteHeader">{{headers/t_volume}}</th>
                    <td class="miniquoteData">{{decimals stocks/volume}} </td>
                </tr>
                <tr>
                    <th class="miniquoteHeader">{{headers/t_exchange}}</th>
                    <td class="miniquoteData exchangeName<%= listing %>">{{exchangeName stocks/exchangeName}}<%--{{stocks/exchangeName}}--%></td>
                </tr>

                <%--       <tr>
                <th class="miniquoteHeader">{{headers/t_updated}}</th>
                <td class="miniquoteData">{{decimals stocks/tradeTimestamp}} </td>
            </tr>--%>
            </table>
            <div class="chartLinkWrapper">
                <a target="_blank" href="/Solutions/GrupoSupervielle/2494/chart.aspx?listing=<%= listing %>&language=<%= language %>">{{headers/t_stock_chart}}</a>
            </div>
        </div>
    </div>
</script>



<%= site.newFooter("IRMiniquoteChart") %>,
<%--
<% 
    if(listing == "0") {
    %>
        <script type="text/javascript">
            var clientStyleOverwrite = new function () {
            this.chart_ColourMain = '#E30008'; //0284AA
            this.chart_ColourBackground = 'transparent';
            //this.chart_ColourBorder = '#E5E5E5';
            this.amountOfDecimals = 2;
            this.formatDate = 'DD-MMM-YYYY';
            this.formatTime = 'HH:mm';
            this.formatDateTime = 'DD-MM-YYYY HH:mm';
            this.chart_ColourVolumeBars = '#AAAAAA';
            //this.miniquoteChartDrawMode = 'line';
            //this.formatDate = 'DD-MMMM-YYYY';
            this.chart_DefaultPeriodSelected = 'd1';
            this.miniquoteChartDefaultPeriode = 'd1';
            this.lookup_ChartYAxisInsideOutside = 'outside';

            this.calc_ChartYAxisInsideOutside = 'outside';

            this.miniquote_ChartYAxisInsideOutside = 'outside';
            }
        </script>
    <%
    }

    if(listing == "1") {
    %>
        <script type="text/javascript">
            var clientStyleOverwrite = new function () {
            this.chart_ColourMain = '#E30008'; //0284AA
            this.chart_ColourBackground = 'transparent';
            //this.chart_ColourBorder = '#E5E5E5';
            this.amountOfDecimals = 2;
            this.formatDate = 'DD-MMM-YYYY';
            this.formatTime = 'HH:mm';
            this.formatDateTime = 'DD-MM-YYYY HH:mm';
            this.chart_ColourVolumeBars = '#AAAAAA';
            //this.miniquoteChartDrawMode = 'line';
            //this.formatDate = 'DD-MMMM-YYYY';
            this.chart_DefaultPeriodSelected = 'y1';
            this.miniquoteChartDefaultPeriode = 'y1';
            this.lookup_ChartYAxisInsideOutside = 'outside';

            this.calc_ChartYAxisInsideOutside = 'outside';

            this.miniquote_ChartYAxisInsideOutside = 'outside';
            }
        </script>
    <%
    }
    %>
--%>

<script>

    Handlebars.registerHelper('exchangeName', function (exchangeName) {

        if ("<%= language %>" == "es" && "<%= listing %>" == "1") {
            exchangeName = "Bolsa de Comercio de Buenos Aires";
            //$('.exchangeName1').html('Bolsa de Comercio de Buenos Aires');
        }       
        //return formatLocal(number);
        return exchangeName;
    });

   <%-- var customXApplied = false;
    function prepareCustomX() {
        if (!customXApplied) {

            if (typeof ($('.IRMiniquoteChartModule').html()) != 'undefined') {
                //
                //$('.exchangeName0').html('NYSE');
                if ("<%= language %>" == "es") {
                    $('.exchangeName1').html('Bolsa de Comercio de Buenos Aires');
                }
                customXApplied = true;
            }
        }
    }
    $(function () {
        setInterval(function () {
            prepareCustomX();
        }, 800);
    });--%>

</script>
