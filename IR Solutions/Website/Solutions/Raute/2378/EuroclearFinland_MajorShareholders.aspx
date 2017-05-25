<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" type=""text/css"" href=""http://fonts.googleapis.com/css?family=Open+Sans:300,300italic,400,400italic,600,700""/>";
    site.appendCustomCSSFont += @"<link rel=""stylesheet"" type=""text/css"" href=""http://fonts.googleapis.com/css?family=Raleway:400,100,200,300,500,600,700,800,900""/>";
%>
<%= site.newHeader("IRCustomModule") %>

<link rel="stylesheet" type="text/css" href="inc/tablesaw.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("inc/tablesaw.css")).Ticks.ToString()%>" />
<link rel="stylesheet" type="text/css" href="includes_shareholders/css/shareholders.style.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("includes_shareholders/css/shareholders.style.css")).Ticks.ToString()%>" />


<script type="text/javascript">
    var activeModules = ['IRCustomModule'];
</script>


<div class="wrapper">
    <div id="IRDataShareholders"></div>
</div>

<script id="IRDataTemplate" type="text/x-handlebars-template">  
    <div class="navbar-header">
        <div class="navbar-left">
            <span>{{headers/t_shareholders}}</span>
        </div>
        <div class="navbar-right">
            <span>{{headers/t_archive}}:</span>
            {{{selectPeriod}}}
            <span>{{headers/t_amount}}: </span>
            <select id="selectAmountOfShareholders" onchange="filterData(this.value)">
                    <option value="20">20</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select>
        </div>
            
               
        </div>
        
        <div class="table-wrapper">
            <table class="sortable table-look shareholders tablesaw" data-tablesaw-sortable>
                <tr>
                    <th class="Header column-first"></th>
                    <th class="Header shareholders" id="name">{{headers/t_shareholder}}</th>
                    <th class="Header" id="currentHolding"  data-sortable-numeric>{{headers/t_a_shares}}</th>
                    <th class="Header" data-sortable-numeric>{{headers/t_change}}</th>
                    <th class="Header" data-sortable-numeric>{{headers/t_k_shares}}</th>
                    <th class="Header" data-sortable-numeric>{{headers/t_change}}</th>
                    <th class="Header" data-sortable-numeric>{{headers/t_total}}</th>
                    <th class="Header" data-sortable-numeric>% {{headers/t_shares}}</th>
                    <th class="Header column-last" data-sortable-numeric>% {{headers/t_votes}}</th>
                </tr>
                {{#data}}
                    {{#each shareholderInfoRows}}
                    <tr>
                        <td class="Data column-first">{{rowID @index}}</td>
                        <td class="Data shareholders">{{shareholder}}</td>
                        {{#each holdings}}
                        <td class="Data">{{toLocal aShares}}</td>
                        <td class="Data">{{aChange}}</td>
                        <td class="Data">{{toLocal bShares}}</td>
                        <td class="Data">{{bChange}}</td>
                        <td class="Data">{{toLocal totShares}}</td>
                        <td class="Data">{{decimals sharesPct}}</td>
                        <td class="Data">{{decimals votesPct}}</td>
                        {{/each}}
                        <%--{{{holdings id}}}--%>
                    </tr>
                {{/each}}
                {{/data}}
            </table>
        </div>
        <div class="summary-wrapper">
            <div><b>{{headers/t_summary}}</b></div>
            <table class="table-look summary">
                <tr>
                    <td class="amountOfShareholders column-first"></td>
                    <td class="amountOfShareholders-total"></td>
                    <td class="amountOfShareholders-pct column-last"></td>
                </tr>
                <tr>
                    <td class="column-first"><b>{{headers/t_others}}</b></td>
                    <td class="others-total"></td>
                    <td class="others-pct column-last"></td>
                </tr>
                <tr>
                    <td class="column-first"><b>{{headers/t_total}}</b></td>
                    <td class="total"></td>
                    <td class="column-last">100 %</td>
                </tr>
            </table>
        </div>
    

        <form method="POST" id="excelform" action="/ServiceEngine/api/json/reply/RequestExcel" target="_blank">
            <input type="hidden" name="Title" value="Shareholders.xlsx" />
            <input type="hidden" id="CsvData" name="CsvData" value="" />
            <input type="hidden" name="apiversion" value="1" />
            <input type="hidden" name="InstrumentID" value="1000532" />
            <input type="hidden" name="lcid" value="2057" />
            <input type="hidden" name="customerKey" value="Raute" />
            <input type="hidden" name="solutionID" value="2378" />
            <div style="margin-top: 20px; font-weight: bold;">
                <input type="button" onclick="submittable()" value="Excel" style="background: none; border: none; background-image: url('images/ExcelIcon.png'); padding: none; width: 31px; background-repeat: no-repeat; height: 31;">&nbsp;&nbsp;{{headers/t_download_excel}}
            </div>


        </form>

    </script>

<%= site.newFooter("IRCustomModule") %>

<script type="text/javascript" src="includes_shareholders/js/ir.behaviour.js?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("includes_shareholders/js/ir.behaviour.js")).Ticks.ToString()%>"></script>
<script type="text/javascript" src="inc/tablesaw.js?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("inc/tablesaw.js")).Ticks.ToString()%>"></script>

<script>
    var customXApplied = false;

    function prepareCustomX() {
        if (!customXApplied) {
            if (typeof ($('.wrapper').html()) != 'undefined') {

                customXApplied = true;
            }
        }
    }
    $(function () {
        setInterval(function () {
            prepareCustomX();
        }, 200);
    });
</script>


<style>
    body {
        width: 100% !important;
    }
</style>
<!-- Add this to do responsive Tables-->
<%--<script type="text/javascript">
    $(document).ready(function () {
        function applyTableSaws() {
            $('table.tablesaw').each(function () {
                $(this).attr('data-tablesaw-minimap', '');
                $(this).attr('data-tablesaw-mode', 'swipe');
                //$(this).addClass('tablesaw');
                $(this).addClass('tablesaw-swipe');

                $(this).prepend('<thead></thead>')
                $(this).find('thead').append($(this).find("tr:eq(0)"));

                var counter = 0;
                $(this).find('thead th').each(function () {
                    $(this).attr('scope', 'col');
                    $(this).attr('data-tablesaw-sortable-col', '');
                    if (counter == 0) {
                        $(this).attr('data-tablesaw-priority', 'persist');
                    } else {
                        $(this).attr('data-tablesaw-priority', counter);
                    }
                    counter++;
                });
            });

            $(document).trigger("enhance.tablesaw");

        }
        setTimeout(function () { applyTableSaws(); }, 2000);
    });
</script>--%>
