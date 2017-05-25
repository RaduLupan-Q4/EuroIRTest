<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" type=""text/css"" href=""//fonts.googleapis.com/css?family=Fira+Sans:400,500,700,300""/>";
%>
<%= site.newHeader("IRCustomModule") %>


<script type="text/javascript">
    var activeModules = ["IRCustomModule"];
</script>

<%--<div class="IRLookupModule">
    <div class="IRChartColour"></div>
    <span class="ajaxLoader">Loading</span>
</div>--%>



<%--<script id="IRLookupTemplate" type="text/x-handlebars-template">--%>
<h2>latest key figures</h2>
<h3>DKK million</h3>
<table class="figures-table">
    <tr>
        <td class="Data comlum-first blankTD"></td>
        <td>2011</td>
        <td>2012</td>
        <td>2013</td>
        <td>2014</td>
        <td>2015</td>
    </tr>
    <tr>
        <th>Investment in property,  plant and equipment, net</th>
        <td>382</td>
        <td>310</td>
        <td>391</td>
        <td>354</td>
        <td>375</td>

    </tr>
    <tr>
        <th>Cash flow from operating activities (CFFO)</th>
        <td>1,381</td>
        <td>1,272</td>
        <td>1,282</td>
        <td>1,495</td>
        <td>1,592</td>
    </tr>
    <tr>
        <th>Free cash flow</th>
        <td>895</td>
        <td>782</td>
        <td>819</td>
        <td>1,044</td>
        <td>1,129</td>

    </tr>
    <tr>
        <th>Employees (average)</th>
        <td>7,392</td>
        <td>8,025</td>
        <td>9,063</td>
        <td>9,799</td>
        <td>10,803</td>
    </tr>
</table>
<a href="http://www.demant.com/investor-relations/key-figures/" target="_parent" class="link btn">Read More</a>

<%--<button type="submit" class="btn" onclick="window.location.href='keyfigureslarge.aspx'">Read More</button>--%>
<%--</script>--%>




<%= site.newFooter("IRCustomModule") %>

<script type="text/javascript" src="inc/iframeResizer.contentWindow.min.js"></script>

<%--<script type="text/javascript">
    function updateTimeframe() {
        var graphUrlTemplate = "lookup.aspx?mode=list&from=__FROM__&to=__TO__&frequency=Daily&listing=0";
        var fromSplitted = $("input.js-from").val().split('-');
        var toSplitted = $("input.js-to").val().split('-');

        var graphUrl = graphUrlTemplate.replace(/__FROM__/, (fromSplitted[2] + '-' + fromSplitted[1] + '-' + fromSplitted[0])).replace(/__TO__/, (toSplitted[2] + '-' + toSplitted[1] + '-' + toSplitted[0]));
        $('#lookupIframe').attr('src', graphUrl);
    }
    function initializeLookupCustom() {
        $('#lookup-table-form div.submit').click(function () {
            updateTimeframe();
        });
        if (getParameterByName("mode") === "list") {
            $('body').css('overflow-y', 'scroll');
            $('.disclaimer-IRLookup').css('display', 'none');
        } else {
            updateTimeframe();
        }
    }
    $(function () {
        var initiatedLookup = false;
        setInterval(function () {
            if (initiatedLookup == false) {
                try {
                    if ($('.IRChartLookupPlaceholder').html().length > 10 && initiatedLookup == false) { //If main Lookup handlebars loaded
                        initializeLookupCustom();
                        initiatedLookup = true;

                        $("#datepicker-from").datepicker({
                            dateFormat: "dd-mm-yy"
                        });
                        $("#datepicker-to").datepicker({
                            dateFormat: "dd-mm-yy"
                        });
                    }
                } catch (err) {
                }
                try {
                    if ($('.IRLookupResultsTable').html().length > 200) {//If main LookupList handlebars loaded
                        initializeLookupCustom();
                        initiatedLookup = true;
                    }
                }
                catch (err) {
                }
            }
        }, 200);
        setInterval(function () {
            $('iframe').each(function () {

                if ($(this).attr('scrolling') == 'no') {
                    $(this).attr('scrolling', 'yes');
                    $(this).attr("src", $(this).attr("src"));
                }
            });
        }, 2000);
        /**/
    });
</script>--%>



<link rel="stylesheet" href="keyFigures.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("keyFigures.css")).Ticks.ToString()%>" />
