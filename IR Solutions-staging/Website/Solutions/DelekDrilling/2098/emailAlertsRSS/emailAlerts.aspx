<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    string language = "en";
    int solutionID = 2098; // prod is 2098, dev is 10080
    int newsSourceID = 1021; // prod is 1021 dev is 1020
    int newsCategoryType = 13;
    if (!string.IsNullOrEmpty(Request.QueryString["language"]))
    {
        language = Request.QueryString["language"];
    }
%>


<%= site.newHeader("IREmailAlert") %>
<script type="text/javascript">
    var activeModules = ['IREmailAlert'];
</script>

<div class="IREmailAlertModule"></div>

<script id="IREmailAlertTemplate" type="text/x-handlebars-template">

    <h2>{{headers/t_register}}</h2>

    <input type="hidden" class="activeClient" value="delekdrillingrss" />
    <input type="hidden" class="language" value="<%= language %>" />
    <input type="hidden" class="solutionID" value="<%= solutionID %>" />
    <input type="hidden" class="newsSourceID" value="<%= newsSourceID %>" />
    <input type="hidden" class="newsCategoryType" value="<%= newsCategoryType %>" />


    <p class="">{{headers/t_description_contact_details}}</p>
    <br />
    <label class="inputLabel" for="registerEmailAddress">{{headers/t_email_address}}*</label>
    <input type="email" name="emailAdress" id="registerEmailAddress" class="requiredField" value=""><br>

    <label class="inputLabel" for="registerFirstName">{{headers/t_first_name}}*</label>
    <input type="text" name="registerFirstName" id="registerFirstName" class="registerFirstName requiredField" value=""><br>

    <label class="inputLabel" for="registerSurName">{{headers/t_surname}}*</label>
    <input type="text" name="registerSurName" id="registerSurName" class="registerSurName requiredField" value=""><br>

    <label class="inputLabel" for="registerCompany">{{headers/t_company}}*</label>
    <input type="text" name="registerCompany" id="registerCompany" class="registerCompany requiredField" value=""><br>

    <label class="inputLabel" for="registerCountry register-box">{{headers/t_country}}</label>
    <input type="text" name="registerCountry" id="registerCountry" value=""><br>

    <br />
    <div class="requiredfield">* {{headers/t_indicates_required_field}}</div>
    <div class="verificationLocal">
        <div class="InvalidInput_RegisterEmailAddress">
            {{headers/t_please_verify_all_required_fields}}
        </div>
        <div class="clearBoth"></div>
    </div>

    <h2>{{headers/t_email_notifications}}</h2>
    <div class="alertTypeWrapper">
        <span class="alertTypeLabel listingSettingsTrigger">Delek Drilling</span>
        <div class="listingSettings" id="1793250" style="display: block;">

            <h3>{{headers/t_share_price_information}}</h3>
            <div class="alertType-subbox">
                <input id="alertType_quoteByEmail" class="alertTypeCheckbox sharePriceSelect" type="checkbox" />
                <label for="alertType_quoteByEmail" class="alertTypeLabel ">{{headers/t_daily_open_share_price}}</label>
                <span class="sharePriceQuoteDailyOpenRule">{{headers/t_send_me_a_share_price_update_at_the_beginning_of_the_trading_day}}</span><br />
            </div>
            <div class="alertType-subbox">
                <input id="sharePriceQuoteWeeklyRule" class="alertTypeCheckbox sharePriceSelect" type="checkbox" />
                <label for="sharePriceQuoteWeeklyRule" class="sharePriceSelect sharePriceQuoteWeeklyRule alertTypeLabel">{{headers/t_weekly_share_price_summary}}</label><br />
            </div>
            <div class="alertType-subbox">
                <input id="sharePriceQuoteThresshold" class="alertTypeCheckbox sharePriceSelect sharePriceQuoteThressholdRuleTrigger" type="checkbox" />
                <label for="sharePriceQuoteThresshold" class="sharePriceSelect sharePriceQuoteThressholdRuleTrigger alertTypeLabel">{{headers/t_share_price_threshold}}</label><br />
                <div class="sharePriceQuoteThressholdRule" style="display: none;">
                    <p style="float: left; width: 100%;">{{headers/t_notify_me_when_the_share_price_crosses_the_following_thresholds}}</p>
                    <div class="thressholdWrapper">
                        <span class="inputLabel_thresshold">{{headers/t_low}}</span>
                        <input type="number" id="sharePriceQuoteThressholdRuleLow" />
                        ILA<br />
                    </div>
                    <div class="thressholdWrapper">
                        <span class="inputLabel_thresshold">{{headers/t_high}}</span>
                        <input type="number" id="sharePriceQuoteThressholdRuleHigh" />
                        ILA
                        <br />
                    </div>
                </div>
            </div>
            <div class="alertType-subbox">
                <input id="sharePriceQuotePercentage" class="alertTypeCheckbox sharePriceSelect sharePriceQuotePercentageRuleTrigger" type="checkbox" />
                <label for="sharePriceQuotePercentage" class="sharePriceSelect sharePriceQuotePercentageRuleTrigger alertTypeLabel">{{headers/t_percent_change_in_share_price}}</label>
                <br />
                <div class="sharePriceQuotePercentageRule" style="display: none;">
                    <span>{{headers/t_notify_me_when_the_share_price_changes_more_than_price_percent_in_one_day_part1}}</span><input type="number" id="sharePriceQuotePercentageRule" class="inlineInputText" />{{headers/t_notify_me_when_the_share_price_changes_more_than_price_percent_in_one_day_part2}}<br />
                </div>
            </div>

            <h3>{{headers/t_releases}}</h3>
            <div class="alertTypeWrapper">
                <input class="alertTypeSubCheckboxAll" type="checkbox">
                <span class="alertTypeHeaderLabel alertTypeLabelAllNews">{{headers/t_all_news_types}}</span>
                <div class="alertTypeWrapper">
                    <input id="MAT" class="rssFiltersSelect alertTypeLabel" type="checkbox" />
                    <span class="alertTypeCheckbox">{{headers/t_material_events}}</span><br />
                </div>
                <div class="alertTypeWrapper">
                    <input id="HOL" class="rssFiltersSelect alertTypeLabel" type="checkbox" />
                    <span class="alertTypeCheckbox">{{headers/t_holdings_of_principal_shareholders}}</span><br />
                </div>
                <div class="alertTypeWrapper">
                    <input id="QUA" class="rssFiltersSelect alertTypeLabel" type="checkbox" />
                    <span class="alertTypeCheckbox">{{headers/t_quarterly_and_annual_financial_reports}}</span><br />
                </div>
                <div class="alertTypeWrapper">
                    <input id="PRO" class="rssFiltersSelect alertTypeLabel" type="checkbox" />
                    <span class="alertTypeCheckbox">{{headers/t_prospectuses_and_shelf_offer_reports}}</span><br />
                </div>
                <div class="alertTypeWrapper">
                    <input id="GEN" class="rssFiltersSelect alertTypeLabel" type="checkbox" />
                    <span class="alertTypeCheckbox">{{headers/t_general_meetings}}</span><br />
                </div>
                <div class="alertTypeWrapper">
                    <input id="COR" class="rssFiltersSelect alertTypeLabel" type="checkbox" />
                    <span class="alertTypeCheckbox">{{headers/t_corporate_officers}}</span><br />
                </div>
                <div class="alertTypeWrapper">
                    <input id="MIS" class="rssFiltersSelect alertTypeLabel" type="checkbox" />
                    <span class="alertTypeCheckbox">{{headers/t_miscellaneous}}</span><br />
                </div>
            </div>

            <div class="divideLine"></div>
        </div>

    </div>
    
    <div class="buttonRegisterWrapper">

        <div class="verificationLocal">
            <div class="UserEmailExistAndIsActive">
                {{headers/t_email_already_subscribed_and_is_activated}}
                <div class="closeVerificationBoxAndClearInput">X</div>
            </div>
            <div class="UserEmailExistAndIsNotActived">
                {{headers/t_email_already_subscribed_but_not_yet_activated}}
                <div class="closeVerificationBoxAndClearInput">X</div>
            </div>
            <div class="UserCreated">
                {{headers/t_fantastic_almost_there}}
                {{headers/t_please_check_inbox}}
                <div class="closeVerificationBoxAndClearInput">X</div>
            </div>
            <div class="InvalidInput_SharePriceQuoteOrShareReleases">
                {{headers/t_please_verify_all_required_fields}}
                <div class="closeVerificationBox">X</div>
            </div>

            <div class="clearBoth"></div>
        </div>

        <div class="buttonRegister">{{headers/t_register}}</div>
    </div>

    <h2>{{headers/t_unsubscribe}}</h2>
    <div class="unsubscribe-wrapper">
        <p>{{headers/t_description_login}}</p>
        <div class="unsubscribe-box">
            <div class="inputLabel">{{headers/t_email_adress}}</div>
            <input class="unsubscribeEmail" type="text" />
        </div>
        <input class="alertTypeSubmitBox" id="alertTypeSubmitBox_unsubscribe" value="{{headers/t_unsubscribe}}" type="button" />
        <div class="dialogueBox" id="dialogueBox_unsubscribe" style="display: none;">
            <div class="closeVerificationBoxAndClearInput">X</div>
            <h3>{{headers/t_unsubscribe}}</h3>
            <p>{{headers/t_description_unsubscribe}}</p>
            <p class="unsubscribeConfirmEmail"></p>
            <input class="alertTypeSubmitBox" id="alertTypeSubmitBox_unsubscribeConfirm" value="{{headers/t_unsubscribe}}" type="button" />
        </div>

        <div class="verificationLocal">
            <div class="UserEmailUnsubscribed">
                {{headers/t_email_now_unsubscribed}}
                <div class="closeVerificationBoxAndClearInput">X</div>
            </div>
            <div class="UserEmailWasNotSubscribed">
                {{headers/t_email_does_not_exist}}
                <div class="closeVerificationBoxAndClearInput">X</div>
            </div>
            <div class="clearBoth"></div>
        </div>

    </div>

</script>


<%= site.newFooter("IREmailAlert") %>

<script type="text/javascript" src="inc/emailAlertsCustomRSS.js?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("inc/emailAlertsCustomRSS.js")).Ticks.ToString()%>"></script>
<link rel="stylesheet" href="../ir.client.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("../ir.client.css")).Ticks.ToString()%>" />
<link rel="stylesheet" href="inc/emailAlertsCustomRSS.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("inc/emailAlertsCustomRSS.css")).Ticks.ToString()%>" />
