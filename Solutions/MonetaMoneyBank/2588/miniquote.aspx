<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>
<%= site.newHeader("IRMiniquote") %>

<script type="text/javascript">
    var activeModules = ['IRMiniquote'];
</script>
<style>
    body {
        cursor: pointer;
    }
</style>
<div class="IRMiniquoteModule"><span class="ajaxLoader">Loading</span></div>
<div class="delayed"></div>

<script id="IRMiniquoteModuleTemplate" type="text/x-handlebars-template">
    <%-- <h2>Share Price</h2>--%>
    <table class="IRMiniQuoteModule table-look responsive">

        <div class="Data currency column-first">
            <span class="lastPrice column-last">PSE</span>
            <span class="column-last headerTitle"><span class="stocksChange">{{decimals stocks/last}}</span><span class="{{showArrow stocks/change}}"></span><span class="Data change formatColour" style="text-align: right">({{decimals stocks/changePercent}}%)</span></span>
        </div>


        <%-- <div class="Data currency column-first"><span class="currency">{{stocks/currency}}</span><span class="lastPrice column-last">{{decimals stocks/last}}</span><span class="{{showArrow stocks/change}}"></span><span class="Data change formatColour headerTitle" style="text-align: right">({{decimals stocks/changePercent}}%)</span></div>
        

            <tr>
                <td class="Data change column-first">{{headers/t_change}}</td>
                <td class="column-last">{{decimals stocks/change}}<span class="Data change formatColour" style="text-align: right">({{decimals stocks/changePercent}}%)</span></td>
            </tr>
            <tr>
                <td class="Data change column-first">{{headers/t_volume}}</td>
                <td class="column-last" style="text-align: right">{{toLocal stocks/volume}}</td>
            </tr>
        <tr>
                <td class="Data exchange column-first">{{headers/t_exchange}}</td>
                <td class="column-last" style="text-align: right">{{stocks/exchangeName}}</td>
            </tr>--%>
    </table>
</script>

<div style="display: none;">
    <%= site.newFooter("IRMiniquote") %>
</div>




<script>


    

    $(function () {
        $('body').attr('onClick', 'href()');

        if (globalActiveLanguage == 'cs') {
            $('.delayed').text('Data jsou opožděna o 15-20 min.');
        } else {
            $('.delayed').text('Data delayed by 15-20 min.');
        }

    });


    function href() {
        window.open('https://investors.moneta.cz/shares');
    }
</script>
