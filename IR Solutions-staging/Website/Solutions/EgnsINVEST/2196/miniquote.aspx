<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<%  IRSite site = new IRSite();
%>
<%= site.newHeader("IRMiniquote") %>

<script type="text/javascript">
    var activeModules = ["IRMiniquote"];
</script>

<div class="IRMiniquoteModule">
    <span class="ajaxLoader">Loading</span>
</div>

<script id="IRMiniquoteModuleTemplate" type="text/x-handlebars-template">
    <table class="IRMiniquoteChart table-look horizontal">
        <tr>
            <td>
                <table class="last-table">
                    <tr>
                        <td class="IRToolQuoteTableItem Data last ">{{decimals stocks/last}} {{stocks/showCurrency}}</td>
                    </tr>
                    <tr>
                        <td class="changePercent">(<span>{{decimals stocks/changePercent}} %</span>)</td>
                        
                    </tr>
                </table>
            </td>
               </tr>
                    <tr>
            <td>
                <table>
                    <tr>
                        <td class="column-first volume">{{headers/t_volume}}</td>
                        <td class="column-last volume">{{stocks/volume}}</td>
                    </tr>
                    <tr>
                        <td class="column-first high">{{headers/t_high}}</td>
                        <td class="column-last high">{{decimals stocks/high}}</td>
                    </tr>
                    <tr>
                        <td class="column-first low">{{headers/t_low}}</td>
                        <td class="column-last low">{{decimals stocks/low}}</td>
                    </tr>
                </table>

            </td>
        </tr>
    </table>

</script>
<div class="disclaimer-miniquote">
<%= site.newFooter("IRMiniquoteChart") %>
    </div>