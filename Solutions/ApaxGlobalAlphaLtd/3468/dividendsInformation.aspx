<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    string language = Request.QueryString["language"];
    if (string.IsNullOrEmpty(language))
    {
        language = "en";
    }
%>
<%= site.newHeader("IRCustomModule") %>

<script type="text/javascript">
    var activeModules = ['IRCustomModule'];
</script>



<div class="IRCustomModule"></div>

<div id="IRData"></div>
<%--<div class="IRDividendsInformationWrapper">

    <div class="IRDividendsInformation"></div>

</div>--%>

<script id="IRDataTemplate" type="text/x-handlebars-template">

    <h4 class="horizontal-header Header">{{headers/t_dividend_information}}</h4>

    <table class="IRDividendInformation table-look responsive">
        <tr>
            <th class="Header dividend column-first">{{headers/t_dividend}}</th>
            <th class="Header dividend"><span>Ann-<br />ounced</span>{{headers/t_announced}}</th>
            <th class="Header dividend">{{headers/t_paid}}</th>
            <th class="Header dividend column-last">{{headers/t_value_per_share}}</th>
        </tr>
        {{#dividend}}{{#each data}}
        <tr>
            <td class="Data column-first">{{text}}</td>
            <td class="Data">{{showDateWithFormat declarationDate 'DD MMMM YYYY'}}</td>
            <td class="Data">{{showDateWithFormat paymentDate 'DD MMMM YYYY'}}</td>
            <td class="Data column-last">{{dividendValue}}p</td>
        </tr>
        {{/each}}{{/dividend}}         
    </table>
</script>

<div style="display: none;">
    <%= site.newFooter("IRCustomModule") %>
</div>
<link rel="stylesheet" href="includes_dividendsInformation/css/dividendData.style.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("includes_dividendsInformation/css/dividendData.style.css")).Ticks.ToString()%>" />


<script type="text/javascript">
    var solutionId = "3468";
    var lcid = 2057;
    var instrumentid = 27128332;

    //if (globalActiveLanguage == "da") {
    //    lcid = 1030;
    //}




    //setTimeout(function () {
    //Get JSON from calender feed
    $(function () {

        var today = Date.now();

        var convertedDate = moment(today).format("YYYY-MM-DD");

        $.getJSON(getServiceEngingeURL() + 'RequestDividendBundle?apiversion=' + clientApiVersion + '&lcid=2057&solutionID=' + clientSolutionID + '&customerKey=' + clientCustomerKeyRequired + '&numberOfYears=100&period=10', function (data) {
            var allData = data;
            allData.data = data;
            //console.log('data:' + data);
            allData.headers = translations;
            console.log(allData);
            //convertTimestamp(data);
            //allData.data = data.data.slice(0, 4);

            //if (allData.data[0].storyId == -1) {
            //    allData = null;
            //}

            var source = $('#IRDataTemplate').html();
            var template = Handlebars.compile(source);
            $('#IRData').html(template(allData));


        }); //getJSON



    }); //function

    //}, 200);



</script>

