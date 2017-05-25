 <%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>

<%= site.newHeader("IRChart") %>

<script type="text/javascript">
    var activeModules = ['IRQuote'];
</script>
<style>
.unsubscribe-wrapper, .register-wrapper, .sharePriceAlert-wrapper {
	width:100%;
	/*border:1px solid Green;*/
}
.unsubscribe-wrapper, .sharePriceAlert-wrapper {
    position:relative;
}
.unsubscribe-wrapper p{
	margin-bottom:10px;
}
.unsubscribe-box, .register-box {
	width:100%;
}
.inputLabel {
	width:200px;
	display:inline-block;
	font-size:16px;
}
.inputLabel_thresshold {
	width:174px;
}
.register-box input {
	display:inline-block;
}
.alertType-box {
	position:relative;
	margin-left:26px;
	margin-bottom:16px;
}
.alertTypeCheckbox {
	position:absolute;
	top:-2px;
	left:-28px;
}
.alertTypeSubCheckboxAll {
	margin-bottom:10px;
}
.alertTypeSubLabel {
	position:relative;
    display:block;
	margin-left:20px;
	margin-top:5px;
}
.alertTypeLabel {
	font-weight:bold;
	font-size:16px;
}
.alertTypeSubCheckbox {
	position:absolute;
	left:-20px;
}
input[type=text] {
	height:25px;
	line-height:25px;
	margin-top:5px;
	margin-bottom:5px;
	padding-left: 10px;
	padding-right: 10px;
	min-width:300px;
}
input.inlineInputText {
	height:15px;
	line-height:15px;
	width:30px;
	min-width:0px;
}
input[type=button] {
	padding-right: 10px;
	padding-left: 10px;
	cursor:pointer;
}
input[type=checkbox] {
	height:15px;
	cursor:pointer;
}
h2 {
	font-size:18px;
	padding-left:0px;
	padding-top:8px;
	padding-bottom:8px;
	margin-top:10px;
	margin-bottom:20px;
	font-weight:bold;
	border-bottom:1px solid rgb(230,230,230);
}
h3 {
	font-size:16px;
	margin-top:20px;
	margin-bottom:15px;
}
p {
	font-size:16px;
}
@media (max-width: 600px) {
  
input[type=text] {
    width:95%;
  }
}

/* Hebrew corrections */ 
html[dir=rtl] .alertType-box {
	margin-left:0;
	margin-right:26px;
}
html[dir=rtl] .alertTypeSubLabel {
	margin-left:0;
	margin-right:20px;
}
html[dir=rtl] .alertTypeCheckbox {
	left:auto;
	right:-28px;
}
html[dir=rtl] .alertTypeSubCheckbox {
	left:auto;
	right:-20px;
}
.body_blur {
  filter: blur(1px);
  -webkit-filter: blur(1px);
  -moz-filter: blur(1px);
  -o-filter: blur(1px);
  -ms-filter: blur(1px);
  filter: url(#blur);
  filter: progid: DXImageTransform.Microsoft.Blur(PixelRadius='1');
}
.body_unblur {
  filter: blur(0px);
  -webkit-filter: blur(0px);
  -moz-filter: blur(0px);
  -o-filter: blur(0px);
  -ms-filter: blur(0px);
  filter: url(#blur);
  filter: progid: DXImageTransform.Microsoft.Blur(PixelRadius='0');
}
    .dialogueBox {
        border:1px solid #ccc;
        width:100%;
        max-width:400px;
        margin:0px;
        padding:10px;
        padding-top:15px;
        padding-bottom:15px;
        background-color:#fff;
        z-index: 1000;
        position:absolute;
        left:30px;

        -webkit-box-shadow: 0px 0px 10px 4px rgba(204,204,204,1);
        -moz-box-shadow: 0px 0px 10px 4px rgba(204,204,204,1);
        box-shadow: 0px 0px 10px 4px rgba(204,204,204,1);
    }
    .dialogueBox h3 {
        margin:0px;
        padding:0px;
    }
    #dialogueBox_register {
        bottom:40px;
        padding-left:60px;
    }
    #dialogueBox_unsubscribe {
        top:0px;
    }
    .transparantOverlay {
        position: fixed;
        top: 0px;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: White;
        opacity: 0.7;
        z-index: 900;
    }
    .closeBox {
        width: 30px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        display: block;
        color: #fff;
        font-weight: bold;
        border-radius: 15px;
        background-color: #333;
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
        position:absolute;
        top:-15px;
        right:0px;
        cursor:pointer;
    }
    .verificationImage {
        position:absolute;
        left:10px;
        top:18px;
        width:40px;
        height:47px
    }
    .unsubscribeConfirmEmail{
        text-decoration:underline;
    }

</style>
<div class="IRQuoteModule"></div>

<div class="IRChartModule">
    <div class="IRChartColour"></div>
</div>

<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">

<h2>{{headers/t_register}}</h2>
<div class="register-wrapper">
	<p class="">{{headers/t_description_contact_details}}</p><br />
	<div class="register-box">
		<div class="inputLabel">{{headers/t_email_adress}}</div><input class="register_emailAddress" type="text" />
	</div>
	<div class="register-box">
		<div class="inputLabel">{{headers/t_first_name}}</div><input class="register_firstName" type="text" />
	</div>
	<div class="register-box">
		<div class="inputLabel">{{headers/t_surname}}</div><input class="register_surName" type="text" />
	</div>
	<div class="register-box">
		<div class="inputLabel">{{headers/t_company}}</div><input class="register_company" type="text" />
	</div>
	<div class="register-box">
		<div class="inputLabel">{{headers/t_country}}</div><input class="register_country" type="text" />
	</div>
</div>

<h2>{{headers/t_email_notifications}}</h2>
<div class="sharePriceAlert-wrapper">
	<h3>{{headers/t_share_price_information}}</h3>
	<div class="alertType-box">
		<input id="alertType_quoteByEmail" class="alertTypeCheckbox" type="checkbox" />
		<div class="alertType-subbox">
			<label for="alertType_quoteByEmail" class="alertTypeLabel">{{headers/t_daily_open_share_price}}</label>
			<div class="alertTypeDescription">{{headers/t_send_me_a_share_price_update_at_the_beginning_of_the_trading_day}}</div>
		</div>
	</div>
	<div class="alertType-box">
		<input id="alertType_weeklyStockSummary" class="alertTypeCheckbox" type="checkbox" />
		<div class="alertType-subbox">
			<label for="alertType_weeklyStockSummary" class="alertTypeLabel">{{headers/t_weekly_share_price_summary}}</label>
			<div class="alertTypeDescription">{{XXX}}</div>
		</div>
	</div>
	<div class="alertType-box">
		<input id="alertType_weeklyThresholdAlert" class="alertTypeCheckbox" type="checkbox" />
		<div class="alertType-subbox">
			<label for="alertType_weeklyThresholdAlert" class="alertTypeLabel">{{headers/t_share_price_threshold}}</label>
			<div class="alertTypeDescription">
				<p>{{headers/t_notify_me_when_the_share_price_crosses_the_following_thresholds}}
					<br />{{headers/t_current_share_price_is}} {{decimals stocks/last}} {{stocks/currency}}
				</p>
				<br />
				<div class="inputLabel inputLabel_thresshold">{{headers/t_low}}</div><input class="" type="text" placeholder="" />&nbsp;&nbsp;{{stocks/currency}}<br />
				<div class="inputLabel inputLabel_thresshold">{{headers/t_high}}</div><input class="" type="text" placeholder="" />&nbsp;&nbsp;{{stocks/currency}}
			</div>
		</div>
	</div>
	<div class="alertType-box">
		<input id="alertType_percentChangeAlert" class="alertTypeCheckbox" type="checkbox" />
		<div class="alertType-subbox">
			<label for="alertType_percentChangeAlert" class="alertTypeLabel">{{headers/t_percent_change_in_share_price}}</label>
			<div class="alertTypeDescription"><span>{{headers/t_notify_me_when_the_share_price_changes_more_than_price_percent_in_one_day_part1}}</span><input class="inlineInputText" type="text" placeholder="" /><span>{{headers/t_notify_me_when_the_share_price_changes_more_than_price_percent_in_one_day_part2}}</span></div>
		</div>
	</div>
	<h3>{{headers/t_releases}}</h3>
	<div class="alertType-box">
		<input id="alertType_allNewsTypes" class="alertTypeCheckbox" type="checkbox" />
		<div class="alertType-subbox">
			<label for="alertType_allNewsTypes" class="alertTypeLabel alertTypeSubCheckboxAll">{{headers/t_all_news_types}}</label>
				<label class="alertTypeLabel alertTypeSubLabel"><input class="alertTypeSubCheckbox alertType_" type="checkbox" />{{headers/t_material_events}}</label>
				<label class="alertTypeLabel alertTypeSubLabel"><input class="alertTypeSubCheckbox alertType_" type="checkbox" />{{headers/t_holdings_of_principal_shareholders}}</label>
				<label class="alertTypeLabel alertTypeSubLabel"><input class="alertTypeSubCheckbox alertType_" type="checkbox" />{{headers/t_quarterly_and_annual_financial_reports}}</label>
				<label class="alertTypeLabel alertTypeSubLabel"><input class="alertTypeSubCheckbox alertType_" type="checkbox" />{{headers/t_prospectuses_and_shelf_offer_reports}}</label>
				<label class="alertTypeLabel alertTypeSubLabel"><input class="alertTypeSubCheckbox alertType_" type="checkbox" />{{headers/t_general_meetings}}</label>
				<label class="alertTypeLabel alertTypeSubLabel"><input class="alertTypeSubCheckbox alertType_" type="checkbox" />{{headers/t_corporate_officers}}</label>
				<label class="alertTypeLabel alertTypeSubLabel"><input class="alertTypeSubCheckbox alertType_" type="checkbox" />{{headers/t_miscellaneous}}</label>
		</div>
	</div>
	<input class="alertTypeSubmitBox" id="alertTypeSubmitBox_register" value="{{headers/t_register}}" type="button" />
    <div class="dialogueBox" id="dialogueBox_register" style="display:none;">
        <h3>Fantastic, you are almost there!</h3>
        <p>Please check your inbox to confirm your email alert subscription</p>
        <img class="verificationImage" src="images/verification.png"/>
        <div class="closeBox">X</div>
    </div>
</div>
<h2>{{headers/t_login}}</h2>
<div class="unsubscribe-wrapper">
	<p>{{headers/t_description_login}}</p>
	<div class="unsubscribe-box">
		<div class="inputLabel">{{headers/t_email_adress}}</div><input class="unsubscribeEmail" type="text" />
	</div>
	<input class="alertTypeSubmitBox" id="alertTypeSubmitBox_unsubscribe" value="{{headers/t_login}}" type="button" />
    <div class="dialogueBox" id="dialogueBox_unsubscribe" style="display:none;">
        <h3>{{headers/t_unsubscribe}}</h3>
        <p>{{headers/t_description_unsubscribe}}</p>
        <p class="unsubscribeConfirmEmail">test@euroinvestor.com</p>
	    <input class="alertTypeSubmitBox" id="alertTypeSubmitBox_unsubscribeConfirm" value="{{headers/t_unsubscribe}}" type="button" />
        <div class="closeBox">X</div>
    </div>
</div>
</script>
<div class="transparantOverlay" style="display:none;"></div>
<%= site.newFooter("IRChart") %>
<script type="text/javascript" src="delek.js"></script>