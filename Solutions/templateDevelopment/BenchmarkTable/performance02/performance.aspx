<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""https://fonts.googleapis.com/css?family=Roboto:400,700,300"" type=""text/css"" />";
%>
<%= site.newHeader("IRPerformance") %>
<script type="text/javascript">
    var activeModules = ['IRPerformance'];
</script>
<style>
#performanceTbl_0 td.Data {
	vertical-align:middle;
}
#performanceTbl_0 td.Data.highLow div {
}
#performanceTbl_0 td.Data.highLow p {
	line-height: 20px;
    height: 20px;
}
#shiftPerformanceTool {
	line-height: 20px;
    height: 24px;
}
</style>

<!--<div class="IRPerformanceModule"></div>-->
    <div class="performanceSelector">
        <h2 class="perHead">Performance table:</h2>
    </div>
<select id="shiftPerformanceTool" >
	<option selected="selected" value="performanceTbl_0">Share price development</option>
	<option value="performanceTbl_1">Share price development by years</option>
</select><br/><br/>

<table class="IRPerformanceModule_all table-look  " id="performanceTbl_0">
            <tbody><tr>
                <th class="Performance Header column-first name">Instrument</th>
                <th class="Performance Header months1">1M change %</th>
                <th class="Performance Header months3">3M change %</th>
                <th class="Performance Header monthsYTD">YTD change %</th>
                <th class="Performance Header 52Wchange">52W change %</th>
                <th class="Performance Header column-last highLow">52W high &amp; low</th>
            </tr>
        
        
            <tr>
                <td class="Performance Data column-first symbol">Go-Ahead Group</td>
                <td class="Performance Data months1 formatColourNeg">-14.25% </td>
                <td class="Performance Data months3 formatColourNeg">-17.55%</td>
                <td class="Performance Data monthsYTD formatColourNeg">-18.81%</td>
                <td class="Performance Data 52Wchange formatColourNeg">-9.56%</td>
                <td class="Performance Data highLow"><div><p>H: 2,758.00</p><p>L: 2,134.59</p></div></td>
            </tr>
        
 
    </tbody>
</table>
<table class="IRPerformanceModule_all table-look  " id="performanceTbl_1" style="display:none;">
        
            <tbody><tr>
                <th class="Performance Header column-first name">Instrument</th>
                <th class="Performance Header months1">2016</th>
                <th class="Performance Header months3">2015</th>
                <th class="Performance Header months3">2014</th>
                <th class="Performance Header months3">2013</th>
                <th class="Performance Header months3">2012</th>
            </tr>
        
        
            <tr>
                <td class="Performance Data column-first symbol">Go-Ahead Group</td>
                <td class="Performance Data months1 formatColourNeg">-18.81%</td>
                <td class="Performance Data months3 formatColourPos">8.54%</td>
                <td class="Performance Data monthsYTD formatColourPos">39.87%</td>
                <td class="Performance Data 52Wchange formatColourPos">37.45%</td>
                <td class="Performance Data formatColourNeg">-5.56%</td>
            </tr>
        
 
    </tbody></table>
<script id="IRPerformanceModuleTemplate" type="text/x-handlebars-template">
    

    <table class="IRPerformanceModule table-look horizontal responsive">
        {{#headers}}
            <tr>
                <th class="Performance Header column-first name">Instrument</th>
                <th class="Performance Header months1">1M change %</th>
                <th class="Performance Header months3">3M change %</th>
                <th class="Performance Header monthsYTD">YTD change %</th>
                <th class="Performance Header 52Wchange">52W change %</th>
                <th class="Performance Header column-last highLow">52W high & low</th>
            </tr>
        {{/headers}}
        {{#dataListings}}
            <tr>
                <td class="Performance Data column-first symbol">{{name}} Group</td>
                <td class="Performance Data formatColour months1">-14.25% </td>
                <td class="Performance Data formatColour months3">-17.55%</td>
                <td class="Performance Data formatColour monthsYTD">-18.81%</td>
                <td class="Performance Data formatColour 52Wchange">-9.56%</td>
                <td class="Performance Data formatColour column-last highLow"><div><p>H: 2,758.00</p><p>L: 2,134.59</p></div></td>
            </tr>
        {{/dataListings}}
 
    </table>
</script>

    <%= site.newFooter("IRPerformance") %>

<script type="text/javascript">
    $(function () {
		$('#shiftPerformanceTool').change(function(){
			$('.IRPerformanceModule_all').hide();
			$('#'+$(this).val()).show();
			
		});
	});
</script>
