<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Open+Sans:400,300,700,600' rel='stylesheet' type='text/css"" type=""text/css"" />";
%>
<%= site.newHeader("IRLookup") %>

<script type="text/javascript">
    var activeModules = ["IRLookup"];
</script>

<div class="IRLookupModule IRInsidersModule">
    <div class="IRChartColour"></div>
    <%= site.toolElement("loading") %>
</div>

<script id="IRLookupTemplate" type="text/x-handlebars-template">
    <form id="lookup-form" style="margin-top: 10px;" method="POST">

        <div class="input-row">
            <%--<label for="from-datepicker" class="input-label from-label">{{t_from}}:</label>--%>
            <div class="input-wrapper">
                {{{datepicker 'from'}}}
            <input type="text" id="from" name="from" value="From date"> 
            </div>
        </div>

        <div class="input-row">
            <%--<label for="to-datepicker" class="input-label to-label">{{t_to}}: </label>--%>
            <div class="input-wrapper">
               {{{datepicker 'to'}}}
                <input type="text" id="to" name="to" value="To date">
            </div>
        </div>

        <div class="submitButton">
            <input type="submit" value="{{t_submit}}" id="submit-button" />
        </div>
    </form>
</script>



<div style="clear: both;"></div>
<table class="IRInsiderListTool table-look responsive">
    <tr class="IRHeaderGroup">
        <th class="Header column-first date">Date</th>
        <th class="Header name">Name</th>
        <th class="Header position">Position</th>
        <th class="Header instrument">Instrument</th>
        <th class="Header quantity"><span class="desktop">Quantity</span><span class="mobile">Qty</span></th>
        <th class="IRHeader column-last transaction">Transaction</th>
    </tr>
    <tr>
        <td class="Data column-first date">14 Aug 2015</td>
        <td class="Data name"><a href="#">Boustedt Claes</a></td>
        <td class="Data position">Board member</td>
        <td class="Data instrument">Share</td>
        <td class="Data quantity">10.000</td>
        <td class="Data column-last transaction">Purchase</td>
    </tr>
    <tr>
        <td class="Data column-first date">06 Aug 2015</td>
        <td class="Data name"><a href="#">Wahlborg Björn</a></td>
        <td class="Data position">Other position</td>
        <td class="Data instrument">Share</td>
        <td class="Data quantity">-1.000</td>
        <td class="Data column-last transaction">Sale</td>
    </tr>
    <tr>
        <td class="Data column-first date">08 Jun 2015</td>
        <td class="Data name"><a href="#">Faxander Olof</a></td>
        <td class="Data position">Board member</td>
        <td class="Data instrument">Share</td>
        <td class="Data quantity">11.488</td>
        <td class="Data column-last transaction">Purchase</td>
    </tr>
    <tr>
        <td class="Data column-first date">08 Jun 2015</td>
        <td class="Data name"><a href="#">Altan Pär</a></td>
        <td class="Data position">Other position</td>
        <td class="Data instrument">Share</td>
        <td class="Data quantity">1.101</td>
        <td class="Data column-last transaction">Purchase</td>
    </tr>
    <tr>
        <td class="Data column-first date">08 Jun 2015</td>
        <td class="Data name"><a href="#">Backman Mats</a></td>
        <td class="Data position">Other position</td>
        <td class="Data instrument">Share</td>
        <td class="Data quantity">4.206</td>
        <td class="Data column-last transaction">Purchase</td>
    </tr>
    <tr>
        <td class="Data column-first date">08 Jun 2015</td>
        <td class="Data name"><a href="#">Taylor Andrew</a></td>
        <td class="Data position">Other position</td>
        <td class="Data instrument">Share</td>
        <td class="Data quantity">2.373</td>
        <td class="Data column-last transaction">Purchase</td>
    </tr>
</table>




<div style="clear: both;"></div>
<div class="IRNewsTableFooter">
    <div class="IRNewsPagination"></div>
</div>



<%= site.newFooter("IRLookup") %>

<link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">
<script src="//code.jquery.com/jquery-1.10.2.js"></script>
<script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
<link rel="stylesheet" href="/resources/demos/style.css">


<link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>

<link rel="stylesheet" href="insiders.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("insiders.css")).Ticks.ToString()%>" />

<script type="text/javascript">
    setTimeout(function () {
        $(function () {
            $("#from").datepicker({
                defaultDate: "+1w",
                changeMonth: true,
                changeYear: true,
                numberOfMonths: 1,
                buttonText: "Select date",
                showOtherMonths: true,
                selectOtherMonths: true,
                onClose: function (selectedDate) {
                    $("#to").datepicker("option", "minDate", selectedDate);
                }

            });
            $("#to").datepicker({
                defaultDate: "+0d",
                changeMonth: true,
                changeYear: true,
                numberOfMonths: 1,
                buttonText: "Select date",
                showOtherMonths: true,
                selectOtherMonths: true,
                onClose: function (selectedDate) {
                    $("#from").datepicker("option", "maxDate", selectedDate);
                }

            });


        });
    }, 550);
</script>
