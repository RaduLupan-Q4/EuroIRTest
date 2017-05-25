<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" type=""text/css"" href=""//fonts.googleapis.com/css?family=Open+Sans:300,300italic,400,400italic,600,700""/>";
    site.appendCustomCSSFont += @"<link rel=""Stylesheet"" href=""css/li-scroller.css"" />";
%>


<%= site.newHeader("IRPerformance")%>


<script type="text/javascript">
    var activeModules = ['IRPerformance'];
</script>

<div class="IRPerformanceModule"></div>

<script id="IRPerformanceModuleTemplate" type="text/x-handlebars-template">

    <ul id="ticker01">
        <li class="IRPerformanceModule table-look horizontal responsive ticker" style="float: left;">
            {{#dataListings}}<span class="Data column-first symbol"><b style="margin-left: 20px;">{{showDateTime tradeTimestamp}} {{showLocalTimeZoneShort}} {{name}}:</b>  {{decimals last}} {{currency}}</span>{{/dataListings}}
            <!--{{#dataIndices}}<span class="Data column-first symbol"><b style="margin-left: 20px;">{{showDate tradeTimestamp}} {{name}}:</b>   {{decimals last}} {{currency}}</span>{{/dataIndices}}-->
            {{#dataPeers}}<span class="Data column-first symbol"><b style="margin-left: 20px;">{{name}}:</b>  {{decimals last}} {{currency}}</span> {{/dataPeers}}
        </li>
    </ul>
</script>

<%= site.newFooter("IRPerformance") %>

<script type="text/javascript" src="inc/jquery.li-scroller.1.0.js"></script>


<script type="text/javascript">

    var scrollerEnabled = false;

    function prepareScroller() {
        if (!scrollerEnabled) {

            if (typeof ($('.ticker').html()) != 'undefined') {
                $("ul#ticker01").liScroll({ travelocity: 0.07 });

                scrollerEnabled = true;
            }
        }
    }
    $(function () {
        setInterval(function () {
            prepareScroller();
        }, 200);
    });

</script>



