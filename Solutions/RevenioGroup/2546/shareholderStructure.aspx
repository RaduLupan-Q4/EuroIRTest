<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>
<%= site.newHeader("IRCustomModule") %>

<script type="text/javascript">
    var activeModules = ['IRCustomModule'];
</script>

<% 
    string language = "en";
    language = Request["language"];

    if (language == "" || language == "undefined")
    {
        language = "en";
    }
%>

<div class="wrapper">
    <div id="IRDataShareholderStructure"></div>
</div>


<%--<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>--%>
<%--<script type="text/javascript">

     

    var shareholderStructureTranslations = [
["Ownership structure according to percentage of shares", "Omistajarakenne osakemäärän mukaan"],
["Show date", "Näytä tilanne"],
["Corporations", "Yritykset"],
["Financial and insurance corporations", "Rahoitus- ja vakuutuslaitokset"],
["Households", "Kotitaloudet"],
["Public sector", "Julkisyhteisöt"],
["Foreign countries and nominee registered", "Ulkomaat ja hallintarekisteröidyt"],
["Distribution by number of shares", "Omistusmääräjakauma"],
["Number of shares", "Osakkeiden määrä"],
["Owners", "Omistajia"],
["Shares", "Osakkeita"],
["Total", "Yhteensä"],
["Change, pcs", "Muutos, kpl"],
["% of owners", "%"],
["% of shares", "%"],
["Ownership structure", "Omistajarakenne"]
    ];

    function checkIRshareholderStructureTranslations(str) {

        console.log(str);
        if ("<%= language %>" != "en") {
            console.log(str);

            if (typeof (shareholderStructureTranslations) != "undefined") {
                $.each(shareholderStructureTranslations, function () {
                    console.log(str);
                    if (this[0].toString() == str) {
                        str = this[1];
                    }
                });
            }
        } else {

        }
        return str;
    }



    // Finnish translations
    //




</script>--%>

<%--<h2>Shareholder Structure</h2>--%>
<script id="IRDataTemplate" type="text/x-handlebars-template">

    <div class="showdatewrapper" style="float: left; width: 100%;">
        <div class="selecteddate" style="float: left; width: 100px;">May 31, 2016</div>
        <div class="selectOptionsWrapper" style="float: right;">
            <label> {{headers/t_show_date}} :</label>
            {{{selectPeriod}}}
           <%-- <select class="showDate">
                <option value="">May 31, 2016</option>
                 <option value="">Jul 31, 2015</option>
                    <option value="">Jun 30, 2015</option>
                    <option value="">May 31, 2015</option>
                    <option value="">Apr 30, 2015</option>
            </select>--%>
        </div>
    </div>


    <p class="sectors">{{headers/t_ownership_structure_according_to_percentage_of_shares}}</p>
    <div id="containerDesktop" style="min-width: 310px; height: 400px; max-width: 100%; margin: 0 auto"></div>
    <div id="containerMobile" style="min-width: 310px; height: 400px; max-width: 100%; margin: 0 auto"></div>


    <div style="margin-top: 80px;"></div>
    <p class="sectors">{{headers/t_ownership_structure}} </p>
    <span class="updatedHeader">{{headers/t_last_updated}} : {{data/structureInfo/lastUpdated}}</span>

    <table class="IRShareholderStructureModule groupSector table-look horizontal responsive">
        <tr>
            <th class="sectorColor"></th>
            <th class="Header column-first sector"></th>
            <th class="Header shareholderSize" style="width: 20%;">{{headers/t_votes}}</th>
            <th class="Header shareSize" style="border-right: 0; width: 12%;">%</th>
            <th class="Header shareSizeChange" style="border-right: 0; width: 20%;">{{headers/t_change_pcs}}</th>
            <th class="Header shareSizePercent" style="width: 12%;">%</th>
        </tr>
        {{#data}}
            
            {{#each structureInfo}}
                {{#each this}}
                <!-- Note: 'total' and 'KAIKKI YHTEENSÄ' has to match calculateTotal handlebar in ir.behaviour.js file -->
                {{#if_eq this 'total'}}
                {{#if_eq this 'KAIKKI YHTEENSÄ'}}

                <tr class="row{{@index}}">

                    <td class="sectorColor" {{sectorColor @index}}></td>
                    <td class="Data column-first sector">{{sector}}</td>
                    <td class="Data shareholderSize">{{toLocal votes}}</td>
                    <td class="Data shareSize">{{decimalNoRoundUp votesPercent '1'}}</td>
                    <td class="Data shareSizeChange">{{{formatNumberColor change}}}</td>
                    <td class="Data shareSizePercent">{{{formatNumberColor changePercent '%'}}}</td>
                </tr>
                {{/if_eq}}
                {{/if_eq}}

                {{/each}}
            {{/each}}
            <tr>               
                <td class="Data sectorColor"></td>
                <td class="Data column-first total shareAmount">{{../headers/t_total}}</td>
                <td class="Data total shareholderSize">{{calculateTotal structureInfo 'votes'}}</td>
                <td class="Data total shareSize"><%--{{calculateTotal structureInfo 'votesPercent'}} --%>100</td>
                <td class="Data shareSizeChange"><b>{{calculateTotal structureInfo 'change'}}</b></td>
                <td class="Data total shareSizePercent"><b>{{calculateTotal structureInfo 'changePercent'}}</b></td>
            </tr>
        {{/data}}
    </table>


    <br />
    <br />
    <p class="sectors">
        {{headers/t_distribution_by_number_of_shares}} 
    </p>
    <span class="updatedHeader">{{headers/t_last_updated}} : {{data/distributionInfo/lastUpdated}}</span>
    <table class="IRShareholderStructureModule shareholder table-look horizontal responsive">
        <tr>
            <th class="Header column-first shareAmount">{{headers/t_number_of_shares}}</th>
            <th class="Header shareholderSize" style="border-right: 0; text-align: right; width: 20%;">{{headers/t_owners}}</th>
            <th class="Header shareholderSizePercent">{{headers/t_pct_of_owners}}</th>
            <th class="Header shareHolderSizeProgressbar" style="width: 12%; text-align: right; padding-right: 2%;">%</th>
            <th class="Header shareSize" style="border-right: 0; width: 20%;">{{headers/t_shares}}</th>
            <th class="Header shareSizePercent" style="width: 12%;">%</th>
        </tr>
        {{#data}}
        {{#each distributionInfo}}
                {{#each this}}
        <tr>
            <td class="Data column-first shareAmount">{{getNumberOfSharesRange lower upper}}</td>
            <td class="Data shareholderSize">{{toLocal owners}}</td>
            <td class="Data shareholderSizePercent">{{getPercent ../this owners 'owners'}}</td>
            <td class="shareHolderSizeProgressbar order-depth-bar-left">{{getPercent ../this owners 'owners'}}</td>
            <td class="Data shareSize">{{toLocal shares}}</td>
            <td class="Data shareSizePercent">{{getPercent ../this shares 'shares'}}</td>
        </tr>
            {{/each}}
        {{/each}}
        <tr>
            <td class="Data column-first total shareAmount">{{headers/t_total}}</td> 
            <td class="Data total  shareholderSize">{{calculateTotal distributionInfo 'owners'}}</td>
            <td class="Data total shareholderSizePercent">100.0</td>
            <td class="Data total shareHolderSizeProgressbar">100</td>
            <td class="Data total totalShareSize desktop">{{calculateTotal distributionInfo 'shares'}}</td>
            <td class="Data total totalShareSizePercent desktop">100.0</td>
        </tr>
        {{/data}}
    </table>

</script>


<%= site.newFooter("IRCustomModule") %>
<script src="http://code.highcharts.com/highcharts.js"></script>
<script src="http://code.highcharts.com/modules/exporting.js"></script>
<link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>
<link rel="stylesheet" href="shareholderstructure.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("shareholderstructure.css")).Ticks.ToString()%>" />

<script type="text/javascript" src="includes_shareholderStructure/js/ir.behaviour.js?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("includes_shareholderStructure/js/ir.behaviour.js")).Ticks.ToString()%>"></script>




<script type="text/javascript">

    // setTimeout(function () {
    //shareAmountBarWidth = 100;
    //highestAmountOrPercentSize = 0;

    //  $('.IRShareholderStructureModule tr').each(function () {
    //var shareholderSize = parseInt($(this).find('.shareholderSize').attr('shareholderSize'));
    //var shareholderSizePercent = parseInt($(this).find('.shareholderSizePercent').attr('shareholderSizePercent'));
    // if (parseFloat(shareholderSize) > parseFloat(highestAmountOrPercentSize)) {
    //   highestAmountOrPercentSize = shareholderSize;

    //}
    //if (parseFloat(shareholderSizePercent) > parseFloat(highestAmountOrPercentSize)) {
    //    highestAmountOrPercentSize = shareholderSizePercent;
    //}
    //});

    //var widthPerAmountPercent = shareAmountBarWidth / highestAmountOrPercentSize;

    //$('.IRShareholderStructureModule tr').each(function () {
    //    //var shareholderSize = parseInt($(this).find('.shareholderSize').attr('shareholderSize'));
    //    var shareholderSizePercent = parseInt($(this).find('.shareholderSizePercent').attr('shareholderSizePercent'));
    //    $(this).find('.order-depth-bar-left div div.progress-bar').css('width', Math.ceil(shareholderSizePercent * widthPerAmountPercent) + '%');
    //    //$(this).find('.orderDepthBarRight div div.progress-bar').css('width', Math.ceil(shareholderSizePercent * widthPerAmountPercent) + '%');

    //});


    // Pie Chart
    //  $(function () {


    //    // Radialize the colors
    //    Highcharts.getOptions().colors = Highcharts.map(Highcharts.getOptions().colors, function (color) {
    //        return {
    //            radialGradient: {
    //                cx: 0.5,
    //                cy: 0.3,
    //                r: 0.7
    //            },
    //            stops: [
    //                [0, color],
    //                [1, Highcharts.Color(color).brighten(-0.3).get('rgb')] // darken
    //            ]
    //        };
    //    });

    //    // Build the chart
    //    $('#containerDesktop').highcharts({
    //        chart: {
    //            plotBackgroundColor: null,
    //            plotBorderWidth: null,
    //            plotShadow: false,
    //            type: 'pie'
    //        },
    //        title: {
    //            text: ''
    //        },
    //        credits: {
    //            enabled: false
    //        },
    //        tooltip: {
    //            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    //        },
    //        exporting: {
    //            enabled: false
    //        },
    //        plotOptions: {
    //            pie: {
    //                allowPointSelect: true,
    //                cursor: 'pointer',
    //                dataLabels: {
    //                    enabled: true,
    //                    format: ' {point.percentage:.1f} %',
    //                    style: {
    //                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
    //                    },
    //                    connectorColor: 'silver'
    //                }
    //            }
    //        },
    //        series: [{
    //            name: "Shareholders",
    //            data: [
    //                { name: "Households", y: 59 },
    //                {
    //                    name: "Public sector",
    //                    y: 4,
    //                    sliced: true,
    //                    selected: true
    //                },
    //                { name: "Corporations", y: 21 },
    //                { name: "Financial and insurance corporations", y: 9 },

    //                { name: "Foreign countries and nominee registered", y: 7 }

    //            ]
    //        }]
    //    });
    //    // Build the chart
    //    $('#containerMobile').highcharts({
    //        chart: {
    //            plotBackgroundColor: null,
    //            plotBorderWidth: null,
    //            plotShadow: false,
    //            type: 'pie'
    //        },
    //        title: {
    //            text: ''
    //        },
    //        credits: {
    //            enabled: false
    //        },
    //        tooltip: {
    //            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    //        },
    //        exporting: {
    //            enabled: false
    //        },
    //        plotOptions: {
    //            pie: {
    //                allowPointSelect: true,
    //                cursor: 'pointer',
    //                dataLabels: {
    //                    enabled: false,
    //                    format: '{point.percentage:.1f} %',
    //                    style: {
    //                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
    //                    },
    //                    connectorColor: 'silver'
    //                }
    //            }
    //        },
    //        series: [{
    //            name: "Shareholders",
    //            data: [
    //                { name: "Households", y: 59 },
    //                {
    //                    name: "Public sector",
    //                    y: 4,
    //                    sliced: true,
    //                    selected: true
    //                },
    //                { name: "Corporations", y: 21 },
    //                { name: "Financial and insurance corporations", y: 9 },

    //                { name: "Foreign countries and nominee registered", y: 7 }

    //            ]
    //        }]
    //    });
    //});





    // }, 300);

</script>




