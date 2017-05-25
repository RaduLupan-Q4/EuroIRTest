<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>
<%= site.newHeader("IRLookup2") %>

<script type="text/javascript">
    var activeModules = ["IRLookup"];
</script>

<div class="IRLookupModule">
    <div class="IRChartColour"></div>
    <span class="ajaxLoader">Loading</span>
</div>



<script id="IRLookupTemplate" type="text/x-handlebars-template">

    <div class="tabs-container">

        <div id="container" class="tabs lookup">
            <ul>
                <li class="tabitem nyse current" data-listing="0"><span class="exchange-span first current-span"></span>NYSE</li>
                <li class="tabitem merval" data-listing="1"><span class="exchange-span second"></span>MERVAL</li>
            </ul>
        </div>
    </div>

    <div class="IRChartLookupPlaceholder" style="display: none"></div>

    <form id="lookup-table-form">
        <div class="from">
            <label>{{t_start_date}}</label>

            {{{selectFromDay}}}
				{{{selectFromMonth}}}
				{{{selectFromYear}}}
			

        </div>
        <div class="to">
            <label>{{t_end_date}}</label>
            {{{selectToDay}}}
				{{{selectToMonth}}}
				{{{selectToYear}}}
        </div>
        <div class="lookupSubmitButtonWrapper">
            <div class="submit" id="refreshiframe">{{t_look_up}}</div>
        </div>

    </form>
    <div class="iframeWrapper">
        <iframe src="about:blank" class="lookup-table" id="lookupIframe" scrolling="yes"></iframe>
    </div>
</script>

<script id="IRLookupTableTemplate" type="text/x-handlebars-template">
    <table class="IRLookupResultsTable table-look horizontal responsive">
        <tr>
            <th class="Header column-first date">{{headers/t_date}}</th>
            <th class="Header open">{{headers/t_open}}</th>
            <th class="Header high">{{headers/t_high}}</th>
            <th class="Header low">{{headers/t_low}}</th>
            <th class="Header">{{headers/t_close}}</th>
            <th class="Header column-last volume">{{headers/t_volume}}</th>
        </tr>
        {{#each closePrices}}
			<tr>
                <td class="Data column-first date">{{date}}</td>
                <td class="Data price">{{decimal openPrice 2}}</td>
                <td class="Data high">{{decimal high 2}}</td>
                <td class="Data low">{{decimal low 2}}</td>
                <td class="Data">{{decimal closePrice 2}}</td>
                <td class="Data column-last volume">{{toLocal volume}} <span class="volume-text"></span></td>
            </tr>
        {{/each}}
    </table>
</script>

<%= site.newFooter("IRLookup2") %>

<script type="text/javascript" src="informParentSite_3.js?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("informParentSite_3.js")).Ticks.ToString()%>"></script>


 <script type="text/javascript">

        var globalListing = 0;

        function updateTimeframe() {
            var lang = getParameterByName('language') ? '&language=' + getParameterByName('language') : '';
            var graphUrlTemplate = "lookup.aspx?mode=list&from=__FROM__&to=__TO__&frequency=Daily&listing=" + globalListing + lang;
            var fromYear = $('#from-year').val();
            var fromMonth = Number($('#from-month').val()) + 1;
            var fromDay = $('#from-day').val();
            var toYear = $('#to-year').val();
            var toMonth = Number($('#to-month').val()) + 1;
            var toDay = $('#to-day').val();

            fromMonth = ('0' + fromMonth).slice(-2);
            toMonth = ('0' + toMonth).slice(-2);
            fromDay = ('0' + fromDay).slice(-2);
            toDay = ('0' + toDay).slice(-2);

            var graphUrl = graphUrlTemplate.replace(/__FROM__/, (fromYear + '-' + fromMonth + '-' + fromDay)).replace(/__TO__/, (toYear + '-' + toMonth + '-' + toDay));

            $('#lookupIframe').attr('src', graphUrl);

        };


        function initializeLookupCustom() {
            if (getParameterByName("mode") !== "list")  {
                $('#lookup-table-form div.submit').click(function () {
                    updateTimeframe();
                });
                var load = setInterval(function () {
                    if(typeof($("#lookupIframe")) !== 'undefined') {
                        updateTimeframe();
                        clearInterval(load);
                    }
                }, 200);
            }
        };

        var customXApplied = false;
        function prepareCustomX() {
            if (!customXApplied) {
                if (typeof ($('.volume-text').html()) != '') {
                    if (getParameterByName('listing') == "0") {
                        var listen = setInterval(function () {
                            var text = $(".volume-text").first().text();
                            if (text !== "") clearInterval(listen);
                            else $('.volume-text').text("ADR");
                        }, 100);
                    }else if ((getParameterByName('listing') == "1") && (globalActiveLanguage == 'es')){ 
                        $('.volume-text').text("Acciones");
                    }else{
                        $('.volume-text').text("Shares");
                    }
                }
                customXApplied = true;
            }
        }


    function getParameterByName(key) { // Returns URL Parameter by the key
        var results = new RegExp('[\?&]' + key + '=([^&#]*)').exec(window.location.search);
        try {
            return results[1];
        }
        catch (err) {
            return 0;
        }
    }

    $(function () {
        $(document).on('click', '.tabs.lookup li', function () {
            globalListing = $(this).data('listing');
            updateTimeframe();
        });

        $(document).ajaxStop(function () {
            initializeLookupCustom();
        });
		setInterval(function () {
            if (getParameterByName("mode") === "list") {
                $('html, body').css({'overflow': 'auto', 'float': 'none', 'max-height': '520px'});
                $('.disclaimer-IRLookup2').css('display', 'none');
            } else {
                $("#lookupIframe").contents().find('.disclaimer').hide();
                var iframeH = $("#lookupIframe").contents().find('.IRLookupModule').height();
                if(iframeH > 520) $("#lookupIframe").height(520);
                else $("#lookupIframe").height(iframeH);
            }
        }, 200);
        setInterval(function () {
            prepareCustomX();
        }, 200);

        initializeLookupCustom();

        $(document).on('click', ".nyse", function () {
            $(".first").addClass('current-span');
            $(".second").removeClass('current-span');
            $(".nyse").addClass('current');
            $(".merval").removeClass('current');

            var listen = setInterval(function () {

                var text = $("#lookupIframe").contents().find(".volume-text").first().text();

                if (text !== "") {
                    clearInterval(listen);
                } else {
                    $("#lookupIframe").contents().find(".volume-text").text("ADR");
                }
            }, 100);
        });

        $(document).on('click', ".merval", function () {
            $(".first").removeClass('current-span');
            $(".second").addClass('current-span');
            $(".nyse").removeClass('current');
            $(".merval").addClass('current');
            var listen = setInterval(function () {

                var text = $("#lookupIframe").contents().find(".volume-text").first().text();

                if (text !== "") {
                    clearInterval(listen);
                } else {
                    $("#lookupIframe").contents().find(".volume-text").text("Shares");
                }
            },100);
        });

    });


</script>
