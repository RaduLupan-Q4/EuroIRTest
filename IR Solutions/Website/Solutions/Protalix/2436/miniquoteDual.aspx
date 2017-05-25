<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" type=""text/css"" href=""//fonts.googleapis.com/css?family=Source+Sans+Pro:400,300,600""/>";    
%>
<%= site.newHeader("IRMiniquote") %>

<script type="text/javascript">
    var activeModules = ['IRMiniquote'];
</script>

<div class="IRMiniquoteModule"><span class="ajaxLoader">Loading</span></div>

<script id="IRMiniquoteModuleTemplate" type="text/x-handlebars-template">
    <div class="IRMiniQuoteQuoteModule table-look responsive">
           <div class="quotebox left">
            <div class="title down">
                <span class="name">{{stocks/exchangeName}}</span>
                <span class="last">
                    <strong class="currency">{{stocks/currency}}</strong>
                    {{decimals stocks/last}}
                    <span class="{{showArrow stocks/change}}"></span> 
                </span>
            </div>
            <table>
                <tbody>
                    <tr>
                        <th>{{headers/t_change}}</th>
                        <th>{{headers/t_volume}}</th>
                        <th>{{headers/t_exchange}}</th>
                    </tr>
                    <tr class="shareInfoWrapper">
                        <td class="down">{{decimals stocks/change}} ({{decimals stocks/changePercent}}%) </td>
                        <td>{{toLocal stocks/volume}}</td>
                        <td class="name">{{stocks/exchangeName}}</td>
                    </tr>
                </tbody>
            </table>
            <div class="time">As of {{showTime timestamp}} on {{showDateWithFormat timestamp 'DD MMM, YYYY'}}</div>
            <div class="description">{{headers/t_data_is_at_least_15_min_delayed}}</div>
            <div class="description">Closing price ~10 minutes after close; See disclaimer in 
            <a href="//ir.redhillbio.com/stockquote.cfm">Stock Information</a> page.
            </div>
        </div>
    </div>
    <iframe class="quotebox right" src="miniquote2.aspx?listing=1"></iframe>
</script>


<%= site.newFooter("IRMiniquote") %>