<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>

<%= site.newHeader("IRChart") %>

<script type="text/javascript">
    var activeModules = ['IRQuote', 'IRChartHTML'];
</script>


<%--<div class="ToolMenu IRChangeListing"></div>--%>

<div class="IRChartOuter">
    
    <div class="IRChartColour"></div>

    <div class="IRChartHeader">
        <%--<div class="IRChartClientName"><span class="ajaxLoader">Loading...</span></div>--%>
        <%--<div class="IRChartCompareListNavigation"></div>--%>
        <div class="IRChartCurrency">&nbsp;</div>
    </div>

    

    <div class="IRChartHTMLPlaceholder">
        <span class="ajaxLoader">Loading</span>
    </div>

   <%-- {{{showChartChangePeriod 'y1'}}}--%>

    <div class="chartNavBarRange">
        <div class="chartChangePeriod">
            <div id="d1">1 d</div>
            <div id="d5">5 d</div>
            <div id="m3">3 m</div>
            <div id="m6">6 m</div>
            <div id="y1" class="activePeriod">1 y</div>
            <div id="y2">2 y</div>
            <div id="y5">5 y</div>
            <div id="max">Max</div>
        </div>
    </div>
</div>



<%= site.newFooter("IRChart") %>