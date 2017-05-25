<%@ page language="C#" autoeventwireup="true" %>

<%@ import namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    //site.appendCustomCSSFont = @"<link rel="stylesheet" href="//f.fontdeck.com/s/css/Gaw5TxJDiiEMYaqF8iLcIrFbPac/ir.euroinvestor.com/59507.css" type="text/css" />";
%>
<%= site.newHeader("IRMiniquote") %>

<script type="text/javascript">
    var activeModules = ['IRMiniquote'];
</script>

<div class="IRMiniquoteModule"><span class="ajaxLoader">Loading</span></div>

<script id="IRMiniquoteModuleTemplate" type="text/x-handlebars-template">
    <div class="IRMiniQuoteQuoteModule table-look responsive">
        <div class="title">Current Share Price</div>                 
        <div class="Data last">{{decimals stocks/last}}<span class="p">p</span></div>
        <div class="Data change">{{headers/t_change}}: (<span class="{{formatColour stocks/change}}">{{decimals stocks/change}}</span>)p at {{timeAmPm stocks/timestamp}} {{showDateWithFormat timestamp 'DD.MM.YYYY'}}</div>
        <div class="delayed">Data delayed by 15-20 min.</div>
    </div>
</script>

<%= site.newFooter("IRMiniquote") %>

<script type="text/javascript">
Handlebars.registerHelper('timeAmPm', function (timestamp) {
    return new moment.utc(timestamp).format('hh:mm a')
});
</script>