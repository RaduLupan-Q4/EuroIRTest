
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html dir="lrt">
<head>
<title>IR Solutions, Euroinvestor</title>
<link rel="stylesheet" type="text/css" media="screen" href="/inc/css/ir.normalize.css?v=635960691510356812" />
<link rel="stylesheet" type="text/css" media="screen" href="/inc/css/ir.style.css?v=635967557026390061" />

<link rel="stylesheet" type="text/css" media="screen" href="/includes/css/libs/jquery-ui1-11-1_smoothness.css?v=635810169525468128" />
<link rel="stylesheet" type="text/css" media="screen" href="ir.client.css?v=635951182367739418" />
</head>
<body>



<script type="text/javascript">
    var activeModules = ["IRCalc"];
</script>

<div class="IRCalcModule">
    <div class="IRChartColour"></div>
    <span class="ajaxLoader">Loading</span>
</div>

<script id="IRCalcTemplate" type="text/x-handlebars-template">

    <div class="IRChartCalcPlaceholder"></div>

    <form id="calc-form">
        <div class="formDivider">
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
        </div>
        <div class="formDivider">
            <div class="input-row">
                <label class="input-label invested-label">{{t_invested}}: </label>
                <div class="input-wrapper wide-input radio">
                    <input type="radio" name="invested" value="amount" id="amount-radio" checked="checked" />
                    <label for="amount-radio">{{t_amount}}</label>
                    <input type="radio" name="invested" value="shares" id="shares-radio" />
                    <label for="shares-radio">{{t_shares}}</label>
                </div>
            </div>
            <div class="input-row">
                <label class="input-label amount-invested-label">{{t_amount_invested}}:</label>
                <div class="input-wrapper">
                    <span id="currency-symbol"></span>
                    <input type="text" id="amount-invested" class="wide-input" step="any" min="0" />
                </div>
            </div>
            <div class="input-row">
                <div class="input-wrapper calculateButton">
                    <input type="submit" value="{{t_calculate}}" id="calculate-button" />
                </div>
            </div>
        </div>
    </form>
    <div class="divideLine"></div>

    <section id="result-section" style="display:none">
        <table class="IRToolCalcResultsTable table-look horizontal responsive-flip">
                <tr>
                    <th class="Header column-first buy-price">{{t_buy_price}}</th>
                    <th class="Header est-shares">{{t_est_number_of_shares}}</th>
                    <th class="Header sell-price">{{t_sell_price}}</th>
                    <th class="Header value-now">{{t_value_now}}</th>
                    <th class="Header column-last yield">{{t_yield}}</th>
                </tr>
                <tr class="row-1">
                    <td class="Data column-first buy-price-cell">-</td>
                    <td class="Data est-shares-cell">-</td>
                    <td class="Data sell-price-cell">-</td>
                    <td class="Data value-now-cell">-</td>
                    <td class="Data column-last yield-cell">-</td>
                </tr>
        </table>
        <table class="IRToolCalcResultsTable table-look vertical responsive-flip">
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
	
	<script type="text/javascript">
		$('#calculate-button').click(function(){
			$('#result-section').css('display','block');
		});
		setInterval(function(){
		
		
			try {
				if($('.from-label').text()=='From:')
				{
					$('.from-label').html('Period from:')
				}
			}
			catch(err) {
			}
		
		},200);
		//HAX
		
	</script>		
</script>
<script type="text/javascript">

function buildCalcTool(data, template) {
    debugStep("buildCalcTool");
    //$(".IRCalcModule").html(template(data));
    initializeCalc(data); 
}
</script>
<div class="disclaimer disclaimer-IRCalc">
<span class="disclaimer-copyright">Copyright &copy; 1997-2016 <a href="http://www.euroinvestor.com/ir/">Euroinvestor</a> </span><span class="disclaimer-dataSource">and our data suppliers. </span><span class="disclaimer-delayed">Data delayed by 15-20 min.</span><span class="disclaimer-terms"> <a href="http://ir.euroinvestor.com/disclaimer/terms_conditions.aspx">See Terms of use</a></span></div>
<script type="text/javascript" src="/includes/js/libs/jquery2-1-4.min.js?v=635808478220682775"></script>
<script type="text/javascript" src="ir.client.js?v=635959658833201996"></script>
<script type="text/javascript" src="/inc/scripts/core/ir.util.js?v=635968504877007019"></script>
<script type="text/javascript" src="/inc/scripts/bootstrap/3_2_0/bootstrap.min.js?v=635949262459230899"></script>
<script type="text/javascript" src="/includes/js/libs/handlebars1-3-0.min.js?v=635808478214120447"></script>
<script type="text/javascript" src="/includes/js/libs/moment2-7-0.min.js?v=635808478220995253"></script>
<script type="text/javascript" src="/includes/js/libs/moment-timezone0-3-1.min.js?v=635808478220995253"></script>
<script type="text/javascript" src="/inc/scripts/moment/moment-timezone-with-data-2010-2020.min.js?v=635808478211933009"></script>
<script type="text/javascript" src="/inc/scripts/browserSupport/respond.min.js?v=635949262458400720"></script>
<script type="text/javascript" src="/inc/scripts/ir.reset.js?v=635949262455751490"></script>
<script type="text/javascript" src="/inc/scripts/core/ir.behaviour.js?v=635967556395748123"></script>
<script type="text/javascript" src="/inc/scripts/core/ir.util.data.js?v=635968491419031291"></script>
<script type="text/javascript" src="/includes/js/libs/highstock-2-0-4.js?v=635808478220057902"></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.7.0/underscore-min.js"/></script>
<script type="text/javascript" src="//code.jquery.com/ui/1.11.1/jquery-ui.js"></script>
<script type="text/javascript" src="/inc/scripts/core/ir.tool.calc.js?v=635968499602353225"></script>
<script type="text/javascript" src="/inc/scripts/core/ir.util.draw.js?v=635968491924713093"></script>
</body>
</html>
