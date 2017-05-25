<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fast.fonts.net/cssapi/c8776784-5d75-432d-ae59-d50b8bc58a15.css"" type=""text/css"" />";
    site.appendCustomCSSFont += @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Open+Sans:400,300,700"" type=""text/css"" />";
    site.appendCustomCSSFont += @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Oswald"" type=""text/css"" />";

    string ignoreCustomCSS = "";

    if (!string.IsNullOrEmpty(Request.QueryString["ignoreCustomCSS"]))
    {
        if (Request.QueryString["ignoreCustomCSS"].ToString() == "true")
        {
            ignoreCustomCSS = "?ignoreCustomCSS=true";
            site.appendCustomCSSURL = "";
        }
    }
%>

<%= site.newHeader("IRQuote") %>
<%--<meta name="viewport" content="width=device-width, initial-scale=1.0"/>--%>
<script type="text/javascript">
    var activeModules = ['IRQuote'];
</script>

<div class="IRQuoteModule"></div>

<%= site.newFooter("IRQuote") %>


<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">
     <table class="IRQuoteModule IRDetailedSharePrice table-look horizontal responsive">
            {{#headers}}
            <tr>
                <th class="Header column-first symbol">{{t_symbol}}</th>
                <th class="Header last">{{t_last}}</th>
                <th class="Header change">{{t_change}}</th>
                <th class="Header bid">{{t_bid}}</th>
                <%--<th class="Header mid">{{t_mid}}</th>--%>
                <th class="Header ask">{{t_ask}}</th>
                <th class="Header volume">{{t_volume}}</th>
                <%--<th class="Header high">{{t_high}}</th>
                <th class="Header low">{{t_low}}</th>
                <th class="Header column-last date">{{t_date}}</th>--%>
                <th class="Header column-last time">{{t_updated}}</th>
            </tr>
        {{/headers}}
        {{#stocks}}
            <tr>
                <td class="Data column-first symbol">{{symbol}}</td>
                <td class="Data last">{{decimals last}} {{showCurrency}}</td>
                <td class="Data change {{formatColour stocks/change}}">{{decimals stocks/change}} ({{decimals stocks/changePercent}}%) <span class="{{showArrow stocks/change}}"></span></td>
                <%--<td class="Data change"><span class="{{showArrow stocks/change}}"></span> {{decimals change}}</td>--%>
                <td class="Data bid">{{decimals bid}}</td>
                <%--<td class="Data mid">{{decimals mid}}</td>--%>
                <td class="Data ask">{{decimals ask}}</td>
                <td class="Data volume">{{toLocal volume}}</td>
                <%--<td class="Data high">{{decimals high}}</td>
                <td class="Data low">{{decimals low}}</td>
                <td class="Data column-last date">{{showDate timestamp}}</td>--%>
                <td class="Data column-last time">{{showDateTime timestamp}}</td>
            </tr>
        {{/stocks}}
    </table>
</script>