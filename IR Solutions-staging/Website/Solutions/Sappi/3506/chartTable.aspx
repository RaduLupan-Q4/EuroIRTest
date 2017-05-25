<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>

<%= site.newHeader("IRChart") %>

<script type="text/javascript">
    var activeModules = ['IRQuote'];
    //var activeFeatures = ['IRChartSettings', 'IRChartCompare', 'IRChartTA'];
</script>

<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">
    <div class="updated"><span>{{headers/t_updated}}: </span><span>{{showDateWithFormat stocks/timestamp 'DD/MM/YYYY HH:MM'}} {{showLocalTimeZoneShort}}</span></div>
    
    <table class="IRQuoteModule table-look horizontal responsive">
            <tr>
            	<th class="Header symbol column-first">{{headers/t_share}}</th>
                <th class="Header price-at">{{headers/t_last}}</th>
                <th class="Header high">{{headers/t_high}}</th>
                <th class="Header low">{{headers/t_low}}</th>
                <th class="Header change">(+/-)</th>
                <th class="Header change">(%)</th>

                <th class="Header bid">{{headers/t_open}}</th>
                <th class="Header volume column-last">{{headers/t_volume}}</th>
               
            </tr>
            <tr>
            	<td class="Data price-at column-first">{{stocks/symbol}}</td>
                <td class="Data price-at">{{decimals stocks/last}} {{stocks/currency}}</td>
                <td class="Data high">{{decimals stocks/high}}</td>
                <td class="Data low">{{decimals stocks/low}}</td>
                <td class="Data change {{formatColour stocks/change}}"><span class="{{showArrow stocks/change}}"></span> {{decimals stocks/change}}</td>
                <td class="Data change {{formatColour stocks/change}}"><span class="{{showArrow stocks/change}}"></span> {{decimals stocks/changePercent}}</td>
              
                <td class="Data bid">{{decimals stocks/open}}</td>
                <td class="Data volume column-last">{{toLocal stocks/volume}}</td>
                
            </tr>
    </table>
    

</script>

<div class="IRQuoteModule"></div>
<br />
<%--<div class="IRChartToolMenu"></div><br />
 
<div class="IRChartModule"></div>--%>

<script id="IRChartModuleTemplate" type="text/x-handlebars-template">
   
    <div class="IRChartNavigation">
        {{{includeIRChartCompanyName}}}
        <%--{{{includeIRChartNavigation}}}--%>
    </div>
    
    <div class="IRChartPlaceholderArea">
        <%--{{{includeIRChartDomSettings}}}--%>
        {{{includeIRChartPlaceholder}}}
        {{{includeIRChartChangePeriod 'y1'}}}
    </div>
    
</script>

<div>
    <%= site.newFooter("IRChart") %>
</div>
<%--<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
<script type="text/javascript">window.jQuery || document.write('<script src="/inc/scripts/jquery/jquery-1.8.2.min.js"><\/script>')</script>
<script type="text/javascript" src="http://cdnjs.cloudflare.com/ajax/libs/moment.js/2.7.0/moment.min.js"></script>
<script type="text/javascript" src="http://cdnjs.cloudflare.com/ajax/libs/moment-timezone/0.3.1/moment-timezone.min.js"></script>

<script type="text/javascript">

    var globalActiveExchangeName = 'Nasdaq OTC Foreign';
    var globalActiveExchangeTimeZone = '';

    $(function () {

        initMomentTimezone();

        console.log(new moment.tz(new moment.utc(), globalActiveExchangeTimeZone).format('YYYY-MM-DD HH:mm Z'));

        function initMomentTimezone() {
            /*
                Timezones
            */
            debugger;
            switch (globalActiveExchangeName) {
                case 'Nasdaq OTC Foreign':
                    moment.tz.add('America/New_York|EST EDT EWT EPT|50 40 40 40|01010101010101010101010101010101010101010101010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261t0 1nX0 11B0 1nX0 11B0 1qL0 1a10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 RB0 8x40 iv0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0');
                    globalActiveExchangeTimeZone = 'America/New_York';
                    globalActiveLocalTimeZone = 'Eastern Standard Time';
                    globalActiveLocalTimeZoneShort = 'EST';
                    break;
            }
        }

    });

</script>--%>

