<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""http://fast.fonts.net/cssapi/01e0bdf2-65ce-4a4a-9d7a-25eb0880e7fe.css"" type=""text/css"" />";
%>

<%= site.newHeader("IRChart") %>
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<script type="text/javascript">
    var activeModules = ['IRQuote', 'IRChart'];
    var activeFeatures = ['IRChartCompare'];
</script>
<style>
    .IRChartCompanyName {
        display: none;
    }
</style>
<div class="compName">JCDecaux (Euronext Paris: DEC): FR0000077919</div>
<div class="IRQuoteModule"></div>
<div class="IRChartModule">
    <div class="IRChartColour"></div>
</div>

<br />

<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">
    <table class="IRQuoteModule table-look horizontal customResponsive">
        <tr>
            <th class="Header last">{{headers/t_last}}</th>
            <th class="Header change">{{headers/t_change}}(%)</th>
            <th class="Header volume column-last">{{headers/t_volume}}</th>
            <th class="Header volume column-last">{{headers/t_open}}</th>
            <th class="Header volume column-last">{{headers/t_high}}</th>
            <th class="Header volume column-last">{{headers/t_low}}</th>
            <th class="Header volume column-last">{{headers/t_prev_close}}</th>


            <%-- <th class="Header symbol">{{headers/t_symbol}}</th>
            <th class="Header bid">{{headers/t_bid}}</th>
            <th class="Header ask">{{headers/t_ask}}</th>--%>
        </tr>
        <tr>
            <td class="Data last">{{decimals stocks/last}}€</td>
            <td class="Data change {{formatColour stocks/change}}">{{decimals stocks/change}} ({{decimals stocks/changePercent}}%) <span class="{{showArrow stocks/change}}"></span></td>
            <td class="Data volume column-last">{{toLocal stocks/volume}}</td>
            <td class="Data volume column-last">{{decimals stocks/open}}</td>
            <td class="Data volume column-last">{{decimals stocks/high}}</td>
            <td class="Data volume column-last">{{decimals stocks/low}}</td>
            <td class="Data volume column-last">{{decimals stocks/prevClose}}</td>


            <%--<td class="Data symbol">{{stocks/symbol}}</td>
            <td class="Data bid">{{decimals stocks/bid}}</td>
            <td class="Data ask">{{decimals stocks/ask}}</td>--%>
        </tr>
    </table>
    <table class="IRQuoteModule table-look vertical customResponsive">
        <tr>
            <th class="Header last">{{headers/t_last}}</th>
        </tr>
        <tr>
            <td class="Data last">{{decimals stocks/last}}€</td>
        </tr>
        <tr>
            <th class="Header change">{{headers/t_change}}(%)</th>
        </tr>
        <tr>
            <td class="Data change {{formatColour stocks/change}}">{{decimals stocks/change}} ({{decimals stocks/changePercent}}%) <span class="{{showArrow stocks/change}}"></span></td>
        </tr>
        <tr>
            <th class="Header volume column-last">{{headers/t_volume}}</th>
        </tr>
        <tr>
            <td class="Data volume column-last">{{toLocal stocks/volume}}</td>
        </tr>
        <tr>
            <th class="Header volume column-last">{{headers/t_open}}</th>
        </tr>
        <tr>
            <td class="Data volume column-last">{{decimals stocks/open}}</td>
        </tr>
        <tr>
            <th class="Header volume column-last">{{headers/t_high}}</th>
        </tr>
        <tr>
            <td class="Data volume column-last">{{decimals stocks/high}}</td>
        </tr>
        <tr>
            <th class="Header volume column-last">{{headers/t_low}}</th>
        </tr>
        <tr>
            <td class="Data volume column-last">{{decimals stocks/low}}</td>
        </tr>
        <tr>
            <th class="Header volume column-last">{{headers/t_prev_close}}</th>
        </tr>
        <tr>
            <td class="Data volume column-last">{{decimals stocks/prevClose}}</td>
        </tr>
    </table>
    <div class="updated"><span>{{headers/t_updated}}: </span><span>{{showDateTime timestamp}}</span></div>
</script>


<script id="IRChartModuleTemplate" type="text/x-handlebars-template">

    <div class="IRChartNavigation">
        <%--{{{includeIRChartCompanyName}}}--%>
        <div class="selectWrapper" onclick="selectWrapperClickEvent()">
            <ul id="downloadOption">
                <li>{{headers/t_export}}</li>
                <div id="liWrapper" style="display: none">
                    <li class="downloadHistoricalDataHTML" onclick="downloadHtml()">HTML</li>
                    <li class="downloadHistoricalData" onclick="downloadExcelFile()">XLS</li>
                </div>
            </ul>
        </div>
        {{{includeIRChartNavigation}}}
        
    </div>

    <div class="IRChartPlaceholderArea">
        {{{includeIRChartDomSettings}}}
        {{{includeIRChartPlaceholder}}}
        {{{includeIRChartChangePeriod 'y1'}}}
         
    </div>

</script>


<div class="disclaimer disclaimer-IRChart disclaimerEN">
    <span class="disclaimer-copyright">Copyright &copy; 1997-2016 <a href="http://www.euroinvestor.com/ir/">Euroinvestor</a> </span>
    <span class="disclaimer-dataSource">and our data suppliers. </span>
    <span class="disclaimer-delayed">Data delayed by 15-20 min.</span>
    <span class="disclaimer-terms"><a href="http://ir.euroinvestor.com/disclaimer/terms_conditions.aspx">See Terms of use</a></span>
</div>

<div class="disclaimer disclaimer-IRChart disclaimerFR">
    <span class="disclaimer-copyright">Copyright &copy; 1997-2016 <a href="http://www.euroinvestor.com/ir/">Euroinvestor</a> </span>
    <span class="disclaimer-dataSource">and our data suppliers. </span>
    <span class="disclaimer-delayed">Données d’il y a 15-20 min.</span>
    <span class="disclaimer-terms"><a href="http://ir.euroinvestor.com/disclaimer/terms_conditions.aspx">Voir les modalités d'utilisation</a></span>
</div>

<%= site.newFooter("IRChart") %>
<script type="text/javascript" src="http://ir.euroinvestor.com/inc/scripts/jsv.js"></script>
<script type="text/javascript" src="ir.custom.js?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath(" ir.custom.js")).Ticks.ToString()%>"></script>
<script type="text/javascript">
    $(function () {

        function checkDeviceOrientation() {
            switch (window.orientation) {
                case -90:
                case 90:
                case 0:
                    location.reload();
                    break;
                default:
                    break;
            }
        }
        window.addEventListener('orientationchange', checkDeviceOrientation);

    });
</script>
