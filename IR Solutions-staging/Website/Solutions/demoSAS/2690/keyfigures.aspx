<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<%
    IRSite site = new IRSite();
%>
<%= site.newHeader("IRCustomModule") %>

<link rel="stylesheet" type="text/css" href="includes_keyfigures/css/keyfigure.style.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("includes_keyfigures/css/keyfigure.style.css")).Ticks.ToString()%>" />
<script type="text/javascript">
    var activeModules = ['IRCustomModule'];
</script>


<div class="wrapper">
    <div class="chart-box">
    	<div id="clearAllBtn">Clear all</div>
        <div id="IRKeyFiguresChart" style="width: 100%;"></div>
    </div>

    <div class="table-box tabs">
        <div id="IRData"></div>
    </div>

    <script id="IRDataTemplate" type="text/x-handlebars-template">
        <div class="tabs">
            {{#tables}}
                <a href="javascript:void(0)" class="us" data-class="{{tableId}}">
                    <span>{{tableName}}</span>
                </a>
            {{/tables}}
        </div>
        <div class="btnNewerOlder">
            <div class="btnOuter">
                <div class="btnSeeNewer" style="display: none;">
                </div>
            </div>
            <div class="btnOuter">
                <div class="btnSeeOlder" style="display: none;">
                </div>
            </div>
            <span class="rangeText" style="float: right; display: none;">Range:&nbsp;</span>
        </div>
        {{#tables}}
        {{#if_eq workSheetName 'years'}}
        <div class="table-wrapper pers" data-class="{{tableId}}">
            <table class="table-look tablesaw tablesaw-swipe tablesaw-fix-persist" id="{{tableId}}" data-tablesaw-mode="swipe">
                <thead>
                <tr>
                    <th class="left tablesaw-cell-persist" scope="col" data-tablesaw-sortable-col="" data-tablesaw-sortable-default-col="" data-tablesaw-priority="persist">
                    </th>
                    {{{printTags '0' 'th' 'name' columnHeaders 99 'forward'}}}
                </tr>
                </thead>
                <tbody>
                {{#each rows}}
                <tr class="row">
                    <td class="tablesaw-cell-persist left" data-title="{{rowTitle}}">
                        <div class="chart-type view-click column" data-type="column"></div>
                        <div class="chart-type view-click line" data-type="line"></div>
                        <div class="chart-type view-click area" data-type="area"></div>
                        <span>{{rowTitle}}</span>
                    </td>
                    {{{printTags id 'td' 'cell' rowData 99 'forward' rowTitle}}}
                </tr>
                {{/each}}
                </tbody>
            </table>
        </div>
        {{/if_eq}}
        {{/tables}}


    </script>

    <div class="IRFactsheetDisclaimers">
        <p>Notes:</p>
        <p>
            (1) According to Danish tax legislation Zealand is eligible to receive DKK 5.8 million in cash relating to the tax loss of 2015.
        </p>
        <p>
            (2) Free cash flow is calculated as cash flow from operating activities less purchase of property, plant and equipment
        </p>
        <p>
            (3) Equity per share is calculated as shareholders equity divided by total number of shares less treasury shares
        </p>
        <p>
            (4) On May 20, 2015 Zealand initiated clinical Phase Ib development of ZP4207 for multiple-dose use, and on September 17, 2015
                ZP1848 was advanced into clinical Phase II development
        </p>
        <p>
            (5) End of July 2015, Sanofi filed lixisenatide for regulatory approval in the US, and the file was accepted for review by the FDA
               in September 2015. In December 2015, Sanofi filed LixiLan for regulaory approval in the US. The file was accepted for
               review by the FDA in February 2016.
        </p>

    </div>

</div>

<%= site.newFooter("IRCustomModule") %>
<script src="https://code.highcharts.com/highcharts.js"></script>
<script src="https://code.highcharts.com/modules/exporting.js"></script>
<script type="text/javascript" src="includes_keyfigures/js/tablesaw.js"></script>
<script type="text/javascript" src="includes_keyfigures/js/ir.behaviour.js?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("includes_keyfigures/js/ir.behaviour.js")).Ticks.ToString()%>"></script>
<script src="https://code.jquery.com/ui/1.12.0/jquery-ui.js"></script>
