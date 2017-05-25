<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
      site.appendCustomCSSFont = @"<link rel=""stylesheet"" type=""text/css"" href=""//fonts.googleapis.com/css?family=Fira+Sans:400,500,700,300""/>";
%>
<%= site.newHeader("IRLookup") %>


 <script type="text/javascript">
        var activeModules = ["IRLookup"];
    </script>

    <div class="IRLookupModule">
        <div class="IRChartColour"></div>
        <span class="ajaxLoader">Loading</span>
    </div>



    <script id="IRLookupTemplate" type="text/x-handlebars-template">
        <div class="IRChartLookupPlaceholder" style="display:none"></div>
		
		<form id="lookup-table-form">
			<div>
				<label>From</label>
				<input class="js-from" value="<%=DateTime.Now.AddYears(-1).ToString("dd-MM-yyyy")%>" id="datepicker-from" type="text" style="">
			</div>
			<div>
				<label>To</label>
				<input class="js-to" value="<%=DateTime.Now.ToString("dd-MM-yyyy")%>" id="datepicker-to" type="text">
			</div>
			<div>
			<div class="submit" style="">Search</div>
			</div>
		</form>
		<iframe src="about:blank" class="lookup-table" id="lookupIframe"></iframe>
    </script>

    <script id="IRLookupTableTemplate" type="text/x-handlebars-template">
        <table class="IRLookupResultsTable table-look table-look2 horizontal responsive">
            <tr>
                <th class="Header column-first date">{{headers/t_date}}</th>
                <th class="Header volume">{{headers/t_volume}}</th>
                <th class="Header closeprice">{{headers/t_share_price}}</th>
                <th class="Header change">{{headers/t_change}}</th>
                <th class="Header column-last changePercentage">{{headers/t_change}} %</th>
                <%--<th class="Header column-last volume">{{headers/t_volume}}</th>--%>
            </tr>
            {{#each closePrices}}
            <tr>
                <td class="Data column-first date">{{date}}</td>
                <td class="Data volume">{{volume}}</td>
                <td class="Data closeprice" closeprice="{{decimal closePrice 2}}">{{decimal closePrice 2}}</td>
                <td class="Data change"></td>
                <td class="Data column-last changePercentage"></td>
            </tr>
            {{/each}}
        </table>
</script>


<%= site.newFooter("IRLookup") %>

 <script type="text/javascript">

        $(function() {
			setInterval(function(){
				var hasExecuted=false;
				var allRows=$('table.IRLookupResultsTable tr');
				if(allRows.length>0 && hasExecuted==false){
					hasExecuted=true;
					for(count=0;count<(allRows.length-1);count++)
					{
						var row_closePrice_this=parseFloat($(allRows[count]).find('td.closeprice').attr('closeprice'));
						var row_closePrice_next=parseFloat($(allRows[count+1]).find('td.closeprice').attr('closeprice'));
						var change=row_closePrice_this-row_closePrice_next;
						
						$(allRows[count]).find('td.change').text(change.toFixed(1));
						$(allRows[count]).find('td.changePercentage').text((Math.round(change / row_closePrice_next * 100 * 100) / 100).toFixed(2)); //+"%"
						if(change>=0)
						{
							$(allRows[count]).find('td.changePercentage').addClass('formatColourPos');
							$(allRows[count]).find('td.change').addClass('formatColourPos');
						} else {
							$(allRows[count]).find('td.changePercentage').addClass('formatColourNeg');
							$(allRows[count]).find('td.change').addClass('formatColourNeg');
						
						}
					}
					$(allRows[allRows.length-1]).find('td.change').text(0.0);
					$(allRows[allRows.length-1]).find('td.changePercentage').text(0.0);
					$(allRows[allRows.length-1]).find('td.change').addClass('formatColourPos');
					$(allRows[allRows.length-1]).find('td.change').addClass('formatColourNeg');
				}
			},50);
        });
</script>
<script>
</script>


<link rel="stylesheet" href="lookup.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("lookup.css")).Ticks.ToString()%>" />