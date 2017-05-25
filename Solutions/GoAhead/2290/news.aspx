<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" type=""text/css"" href=""http://fonts.googleapis.com/css?family=Open+Sans:300,300italic,400,400italic,600,700""/><link rel=""stylesheet"" type=""text/css"" href=""fonts.css""/>";
%>
 
<%= site.newHeader("IRChart") %>

<link rel="stylesheet" href="inc/jquery-ui.css" />
<link rel="stylesheet" href="inc/ir.news.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("inc/ir.news.css")).Ticks.ToString()%>" />

<script type="text/javascript">
    var activeModules = ['IRCustomModule'];
    var activeDataRequests = [
        'requestStockData',
        'requestClosePriceListingData',
        'requestNews'
    ];
</script>

<div class="IRCustomModule">
    
    <div class="IRNewsControls"></div>
	<div class="newsNavbarWrapper">
		<ul class="newsTabs">
			<li class="newsTabActive" id="newsTab_all">All</li>
			<li class="" id="newsTab_bytype">By type</li>
			<li class="" id="newsTab_bysearch">By Search Result</li>
		</ul>
	</div>
	<div class="newsTypeWrapper_Outer">
		<div class="newsTypeWrapper">

		</div>
	</div>
    <div class="IRNewsEntries"></div>
    <div class="IRNewsPagination"></div>

</div>


<script id="IRNewsControlsTemplate" type="text/x-handlebars-template">
    
    <div class="IRNewsControlElement">
        <input type="text" placeholder="Keyword" class="searchText" />
    </div>
    <div class="IRNewsControlElement">
        <input class="IRCalendarFrom datepicker datepickerInput" type="text" placeholder="From" /><%--<span class="IRNewsCalendar calendarFrom"></span>--%>
    </div>
    <div class="IRNewsControlElement">
        <input class="IRCalendarTo datepicker datepickerInput" type="text" placeholder="To" /><%--<span class="IRNewsCalendar calendarTo"></span>--%>
    </div>
    
    <div class="IRNewsControlElement">
        <div class="IRNewsControlsButton">Search</div>
    </div>

    <div class="IRClearFloat"></div>

    <div class="IRNewsControlElement IRNewsControlElement_yearSelects">
        <div class="IRNewsSelectedYear"><div class="IRNewsSelectedYear_Title"></div><div class="IRNewsSelectedYear_NoReleases">Total: <span></span> releases</div></div>
        <div class="IRNewsYearSelects"></div>
    </div>

</script>

<script id="IRNewsEntriesTemplate" type="text/x-handlebars-template">
    <div class="IRNewsTableHeader"><div class="IRNewsTableHeader_th IRNewsTableHeader_th_left">Release</div><div class="IRNewsTableHeader_th IRNewsTableHeader_th_right">Share price change %</div></div>
    {{#each data}}
        <div class="IRDataGroup year{{showDateWithFormat timestamp 'YYYY'}}" id="{{storyID}}">
            <div class="IRDataGroupLeft">
                <div class="IRData IRTimestamp">{{showDate timestamp}} <span class="IRData IRCategory" category="{{ShowCategoryCustom categories}}">{{ShowCategoryCustom categories}}</span></div>
                <div class="IRData IRHeadline" id="{{showDateWithFormat timestamp 'YYYY-MM-DD'}}" >{{headline}}</div>
            </div>
            <div class="IRDataGroupRight">
                <div class="IRData IRChange">{{decimals changePct}}%</div>
            </div>
            <div class="IRClearFloat"></div>
        </div>
    {{/each}}

</script>

<%= site.newFooter("IRChart") %>

<script type="text/javascript" src="inc/jquery-ui.js"></script>
<script type="text/javascript" src="inc/ir.news.js?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("inc/ir.news.js")).Ticks.ToString()%>"></script>