<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>
<%= site.header("IRChart") %>


    <table class="IRToolQuoteTable table-look table-look-horizontal quote quote-horizonta responsive-horizontal">
            <tr>
                <th importance="95" class="IRToolQuoteTableItem Header column-first">{{t_symbol}}</th>
                <th importance="90" class="IRToolQuoteTableItem Header">{{t_last}}</th>
                <th importance="85" class="IRToolQuoteTableItem Header">{{t_bid}}</th>
                <th importance="80" class="IRToolQuoteTableItem Header">{{t_ask}}</th>
                <th importance="75" class="IRToolQuoteTableItem Header">{{t_change}}</th>
                <th importance="70" class="IRToolQuoteTableItem Header">{{t_high}}</th>
                <th importance="65" class="IRToolQuoteTableItem Header">{{t_low}}</th>
                <th importance="60" class="IRToolQuoteTableItem Header column-last">{{t_timestamp}}</th>
            </tr>
            <tr>
                <td class="IRToolQuoteTableItem Data Symbol column-first">{{symbol}}</td>
                <td class="IRToolQuoteTableItem Data">{{last}}</td>
                <td class="IRToolQuoteTableItem Data">{{bid}}</td>
                <td class="IRToolQuoteTableItem Data">{{ask}}</td>
                <td class="IRToolQuoteTableItem Data">{{change}}</td>
                <td class="IRToolQuoteTableItem Data">{{high}}</td>
                <td class="IRToolQuoteTableItem Data">{{low}}</td>
                <td class="IRToolQuoteTableItem Data Timestamp column-last">{{timestamp}}</td>
            </tr>
    </table>
