<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>

<% 
	IRSite site = new IRSite();
%>
<%= site.factsheetHeader() %>

<link href='https://fonts.googleapis.com/css?family=Fira+Sans:400,500,300' rel='stylesheet' type='text/css'>
<link rel="stylesheet" href="keyFiguresSmall.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("keyFiguresSmall.css")).Ticks.ToString()%>">
<script type="text/javascript" src="inc/iframeResizer.contentWindow.min.js"></script>

<script type="text/javascript">


    var activeModules = ['IRFactsheet'];
    var activeFeatures = ['ShareData', 'KeyFigures'];
</script>

<div class="IRFactsheetModule"></div>

<%= site.factsheetFooter() %>

<script id="IRFactsheetTemplate" type="text/x-handlebars-template">
    <body>
        <div class="keyfigures">
            <table class="table-look">
               
                				{{{includeFactsheetKeyFigureHighlightHeaders 'Factsheet' 'Financial Highlights' keyFigures}}}
                
              
                   
                    <tr class="borderTop">
                        <td class="firstCol first" style="font-weight: 400;">INCOME STATEMENT <span class="dkk-million">DKK MILLION</span></td>
                        <td class="first highlight"></td>
                        <td class="first"></td>
                        <td class="first"></td>
                        <td class="first"></td>
                        <td class="first"></td>
                    </tr>
                    {{{includeFactsheetKeyFigureHighlightData 'Factsheet' 'Income Statement, DKK Million' 'Revenue' keyFigures}}}

                    {{{includeFactsheetKeyFigureHighlightData 'Factsheet' 'Income Statement, DKK Million' 'Operating profit (EBIT)' keyFigures}}}
                    
                    {{{includeFactsheetKeyFigureHighlightData 'Factsheet' 'Income Statement, DKK Million' 'Profit for the period' keyFigures}}}

                    <tr class="borderBottom">
                       <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td class="firstCol" style="font-weight: 400;">BALANCE SHEET <span class="dkk-million">DKK MILLION</span></td>
                        <td class="highlight"></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td class="column-last"></td>
                    </tr>
                    {{{includeFactsheetKeyFigureHighlightData 'Factsheet' 'Balance Sheet, DKK Million' 'Net interest-bearing debt' keyFigures}}}
    
                    <tr class="borderBottom">
                       <td>&nbsp;</td>
                    </tr>
                    
                    <tr>
                        <td class="firstCol" style="font-weight: 400;">OTHER KEY FIGURES <span class="dkk-million">DKK MILLION</span></td>
                        <td class="highlight"></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td class="column-last"></td>
                    </tr>
                    {{{includeFactsheetKeyFigureHighlightData 'Factsheet' 'Other Key Figures, DKK Million' 'Free cash flow' keyFigures}}}

                    {{{includeFactsheetKeyFigureHighlightData 'Factsheet' 'Other Key Figures, DKK Million' 'Average number of employees' keyFigures}}}

            </table>
            <a href="http://www.demant.com/investor-relations/key-figures/" target="_parent" class="link btn">Read More</a>

        </div>
    </body>
</script>
<script type="text/javascript">
    Handlebars.registerHelper('includeFactsheetKeyFigureHighlightData', function (workSheetName, targetTable, targetRow, data) {
        //var amountOfYearsOrQuarters = data[0].columnHeaders.length -1;
        var amountOfYearsOrQuarters = 5;
        var ret = "";

        $.each(data, function () {
            if (this.workSheetName == workSheetName && this.tableName == targetTable) {

                $.each(this.rows, function () {

                    if (this.rowTitle.replace(/\s+/g, "_") === targetRow.replace(/\s+/g, "_")) {
                        ret += "<tr>";
                        ret += "<td class=\"rowHeader\">" + checkIRFactsheetTranslations(this.rowTitle) + "</td>";
                        var subData = this.rowData.reverse();
                        $.each(subData, function () {
                            if (amountOfYearsOrQuarters > 0) {
                                ret += "<td class=\"right " + workSheetName + "\">" + formatNumberWithLocalDelimiters(parseFloat(this)) + "</td>";
                            }
                            amountOfYearsOrQuarters--;
                        });
                        ret += "</tr>";
                    }
                });
            }
        });
        return ret;
    });
    Handlebars.registerHelper('includeFactsheetKeyFigureHighlightHeaders', function (workSheetName, targetTable, data) {
        //var amountOfYearsOrQuarters = data[0].columnHeaders.length - 1;
        var amountOfYearsOrQuarters = 5;
        var ret = "";
        //ret += "<table class=\"IRFactsheetKeyFigureHighlightTable\">";
        ret += "<tr>";
        ret += "<th></th>";
        if (data.length > 0) {
            $.each(data, function () {
                if (this.workSheetName == workSheetName && this.tableName == targetTable) {
                    var subData = this.columnHeaders.reverse();
                    $.each(subData, function () {
                        if (amountOfYearsOrQuarters > 0) {
                            ret += "<th class=\"right\">" + this + "</th>";
                        }
                        amountOfYearsOrQuarters--;
                    });
                }
            });
            ret += "</tr>";
        } else {
            ret = "No data available";
        }
        return ret;
    });
</script>
