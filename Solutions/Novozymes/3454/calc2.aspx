<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %> 
<%  
    IRSite site = new IRSite();
    
    
%>



<%= site.newHeader("IRCalcNew") %> 

<link rel="stylesheet" type="text/css" media="screen" href="calc2.css?v=636142104013770000" />
 <meta name="viewport" content="width=device-width, initial-scale=1" />

<script type="text/javascript">
    var activeModules = ["IRCalcNew"]; 
    var activeFeatures = ["IRCalcTSR"];
</script>
<div class="IRCalcModule">
    <div class="IRChartColour"></div>
    <span class="ajaxLoader">Loading</span>
</div>

<script id="IRCalcTemplate" type="text/x-handlebars-template">

    <div class="IRChartCalcPlaceholder"></div>
    
    <form id="calc-form">
    <span>{{t_choose_investment}}</span>
    <div class="lineLeft"></div>
  

        <div class="input-row">
            <label for="from-datepicker" class="input-label from-label" style="float: left;">{{t_from}}:</label>
            <div class="input-wrapper">
                {{{datepicker 'from'}}}
                {{{selectFromDay}}}
                {{{selectFromMonth}}}
                {{{selectFromYear}}}
            </div>
        </div>
        <div class="input-row">
            <label for="to-datepicker" class="input-label to-label">{{t_to}}: </label>
            <div class="input-wrapper">
                {{{datepicker 'to'}}}
                {{{selectToDay}}}
                {{{selectToMonth}}}
                {{{selectToYear}}}
            </div>
        </div>
        <div class="input-row">
                <label class="input-label invested-label">{{t_invested}}: </label>
                <div class="input-wrapper wide-input radio">
                    <label for="amount-radio">
                    <input type="radio" name="invested" value="amount" id="amount-radio" checked="checked" />
                    {{t_amount}}</label>
                    <label for="shares-radio">
                    <input type="radio" name="invested" value="shares" id="shares-radio" />
                    {{t_shares}}</label>
                </div>
            </div>

        <div class="input-row">
            <label class="input-label invested-label">{{t_dividend}}: </label>
            <div class="input-wrapper" style="width: 150px; font-size: 14px;">
                <select id="dividend">
                    <option value="none">{{t_none}}</option>
                    <option value="cash">{{t_cash}}</option>
                    <option value="reinvest">{{t_reinvest}}</option>s
                </select>
            </div>
        </div>
        <div class="input-row">
            <label class="input-label amount-invested-label">{{t_amount_invested}}:</label>
            <div class="input-wrapper">
                <span id="currency-symbol"></span>
                <input type="text" id="amount-invested" step="any" min="0" />
            </div>
        </div>
        <div class="input-row" style="height:40px;">
            <div class="input-wrapper">
                <input type="submit" class="IRButton" value="{{t_calculate}}" id="calculate-button" />
            </div>
        </div>
    </form>
    <section id="result-section">
        
        
        <table class="IRToolCalcResultsTable table-look vertical responsive">
          <span>{{t_summary}}</span>
           <div class="lineRight"></div>
            <tr>
                <th class="Header buy-price">{{t_buy_price}}</th>
                <td class="Data buy-price-cell">-</td>
            </tr>
            <tr>
                <th class="Header est-shares">{{t_est_number_of_shares}}</th>
                <td class="Data est-shares-cell">-</td>
            </tr>
            <tr>
                <th class="Header sell-price">{{t_sell_price}}</th>
                <td class="Data sell-price-cell">-</td>
            </tr>
            <tr>
                <th class="Header value-now">{{t_value_now}}</th>
                <td class="Data value-now-cell">-</td>
            </tr>
            <tr>
                <th class="Header yield">{{t_yield}}</th>
                <td class="Data yield-cell">-</td>
            </tr>
        </table>
    </section>
</script>

<div class="disclaimer disclaimer-IRCalcNew">
<span class="disclaimer-copyright">Copyright &copy; 1997-2017 <a href="https://www.q4euroinvestor.com/">Q4 Euroinvestor</a> </span><span class="disclaimer-dataSource">and our data suppliers. </span><span class="disclaimer-delayed">Data delayed by 15-20 min.</span><span class="disclaimer-terms"> <a href="https://www.q4euroinvestor.com/MainDisclaimer/">See Terms of use</a></span></div>
<script type="text/javascript" src="/includes/js/libs/jquery1-8-3.min.js?v=636009821860334413"></script>
<script type="text/javascript" src="/includes/js/libs/jquery.slimscroll.min.js?v=636141226215377750"></script>
<script type="text/javascript" src="ir.client.js?v=636056490928750627"></script>
<script type="text/javascript" src="/inc/scripts/core/ir.util.js?v=636210314717319526"></script>
<script type="text/javascript" src="/inc/scripts/bootstrap/3_2_0/bootstrap.min.js?v=636009821849531301"></script>
<script type="text/javascript" src="/includes/js/libs/handlebars1-3-0.min.js?v=636009821859396460"></script>
<script type="text/javascript" src="/includes/js/libs/moment2-7-0.min.js?v=636009821861024858"></script>
<script type="text/javascript" src="/includes/js/libs/moment-timezone0-3-1.min.js?v=636009821861181170"></script>
<script type="text/javascript" src="/inc/scripts/moment/moment-timezone-with-data-2010-2020.min.js?v=636009821854860106"></script>
<script type="text/javascript" src="/inc/scripts/browserSupport/respond.min.js?v=636009821849687629"></script>
<script type="text/javascript" src="/inc/scripts/ir.reset.js?v=636009821848532894"></script>
<script type="text/javascript" src="/inc/scripts/core/ir.behaviour.js?v=636174936317969723"></script>
<script type="text/javascript" src="/inc/scripts/core/ir.util.data.js?v=636156751874044384"></script>
<script type="text/javascript" src="/includes/js/libs/highstock-2-0-4.js?v=636009821859709121"></script>
<script type="text/javascript" src="/inc/scripts/core/ir.tool.calc_new.js?v=636009821851855118"></script>
<script type="text/javascript" src="/inc/scripts/core/ir.util.draw.js?v=636210314709290484"></script>
</body>
</html>


<script type="text/javascript">
</script>


<script type="text/javascript">
var radioBtn = $("input[type=radio]");

$(document).ready(function(){
    addRadioBtn();
})
$( document ).ajaxStop(function() {
    addRadioBtn();
});
function addRadioBtn(){

    $("input[type=radio]").each(function(){
        var rb = $(this);
        rb.css('display', 'none');
        if(rb.is(':checked'))
            $('<span class="radioBtn checked"></span>').insertBefore(rb);
        else
            $('<span class="radioBtn"></span>').insertBefore(rb);
    })
    $(document).on('change', "input[type=radio]", function(){
        var n = $(this).attr('name');
        $("input[type=radio]").each(function(){
            ($(this).attr('name') == n ) ? $(this).prev().removeClass('checked') : 0;
        })
        $(this).is(':checked') ? $(this).prev().addClass('checked') : $(this).prev().removeClass('checked');
    })
}
    
    function thous(){
    var changeEl = ['.Data.value-now-cell', '.Data.est-shares-cell'];
    for (var i = 0; i < changeEl.length; i++){
        var tempNb = $(changeEl[i]).first().text() === '-' ? '' : $(changeEl[i]).first().text().replace(/\s/g, '').match(/[0-9.,]+/g)[0];
        if (tempNb.length > 0 && (tempNb.split(clientLocaleParameters.decimalSeparator).length - 1) <= 1 && (tempNb.split(clientLocaleParameters.decimalSeparator1000).length - 1) -1 === -1){
            var txt = $(changeEl[i]).first().text().replace(/\s/g, '').replace(tempNb, '');
            var nb = tempNb.split('.');
            if (typeof nb[1] === 'undefined') $(changeEl[i]).text(txt+" "+nb[0].replace(/\B(?=(\d{3})+(?!\d))/g, clientLocaleParameters.decimalSeparator1000));
            else $(changeEl[i]).text(txt+" "+nb[0].replace(/\B(?=(\d{3})+(?!\d))/g, clientLocaleParameters.decimalSeparator1000) + clientLocaleParameters.decimalSeparator + nb[1]);
        }
    }
}

setInterval(thous, 100);
</script>