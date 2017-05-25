<%@ Page Language="C#" AutoEventWireup="true" CodeFile="emailAlerts.aspx.cs" Inherits="_Default" %>

<%@ OutputCache VaryByParam="*" Duration="1" %>

<% 
    // Settings
    string activeClient = "TDC A/S";
    int solutionID = 2444;
    int instrumentID = 275952;
    bool showLoginToUnsubscribe = true;
    bool showEuroInvestorDisclaimer = false;

    string[] RNSFilters = { "Acquisitions and alliances", "AGM and other meetings", "Board Changes", "Capital structure", "Director/PDMR shareholding", "Disposals", "Holding(s) in company", "Results", "Share buybacks", "Trading updates", "Voting rights" };
    string[] RNSFiltersGroup = { "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k" };

    //string linkToPrivacyStatement = "http://www.smith-nephew.com/privacy-statement/";
    //string privacyStatement = @"By pressing “Register” I confirm that I have read, understood and agree with the <a target=""_blank"" class=""cleanLink"" href=""" + linkToPrivacyStatement + @""">Privacy Statement</a> on this website";
    string privacyStatement = @""; // Overwrite with a custom privacy statement.

    string titleRequiredField = "* denotes required field";
    string titleReleasesA = "Stock Exchange Announcement Alerts";
    string titleReleasesB = "";
    string titleReleasesC = "If you would like to be contacted, please tick this box.";
    //
    string titleFirstName = "First name";
    string titleLastName = "Surname";
    string titleCompany = "Company";
    string titleCountry = "Country";
    string titleOccupation = "Occupation";
    string titleProfession = "Profession";
    string titleEmailAdress = "Email address";

    SQL q = new SQL();
    q.getLastPrice(instrumentID);
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Email Alerts</title>
    <link rel="stylesheet" href="//ir.euroinvestor.com/tools/EmailAlertsWithPush/inc/generic.css" />
    <link rel="stylesheet" href="//fast.fonts.net/cssapi/facd9127-6235-432e-b41d-50c0308c5c3a.css" />
    <link rel="stylesheet" href="style.css" />

    <link rel="stylesheet" href="inc/emailAlerts.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("inc/emailAlerts.css")).Ticks.ToString()%>" />
</head>
<body>

    <div class="content">

        <div class="pageRegister">
            <header>
                <h2 class="deck__header">Stay updated on financial information</h2>
                <p class="deck__headertext">Subscribe to TDC’s latest published financial information.</p>
            </header>
            <div class="subPageLoginConfirm">

                <form action="emailAlerts.aspx">
                    Please confirm that you want to unsubscribe: <span class="emailToConfirm"></span>
                    <br />
                    <div class="blockInner">
                        <div class="inputText">
                            <input class="formLoginConfirm styledButton clearInput" type="submit" value="Unsubscribe" />
                        </div>
                    </div>
                    <div style="clear: both;"></div>

                </form>

            </div>

            <form action="emailAlerts.aspx">

                <div class="blockOuter">
                    <div class="blockInner">
                        <div class="inputTextTitle">
                            Full name *
                       
                        </div>
                        <div class="inputText">
                            <input tabindex="1" class="informationInput enterInformationFirstName" name="enterInformationFirstName" type="text" value="" id="enterInformationFirstName" placeholder="Enter full name" />
                            <p class="forms__errortext" id="fullname-error" style="display: none;">Please enter your name</p>
                        </div>
                        <div class="filter-box">
                            <h2 class="header">Press Releases</h2>
                            <div class="subGroup">
                                <div tabindex="3" id="ReleasesATrigger" class="checkbox checkboxRegulatory">General Releases</div>
                            </div>
                        </div>
                    </div>
                    <div class="blockInner">
                        <div class="inputTextTitle">
                            Email address *
                       
                        </div>
                        <div class="inputText">
                            <input tabindex="2" class="informationInput enterInformationEmail" name="enterInformationEmail" type="text" value="" id="enterInformationEmail" placeholder="Enter email" />
                            <p class="forms__errortext" id="email-error" style="display: none;">Please enter a valid email address</p>
                        </div>
                    </div>
                    <div style="clear: both;"></div>

                    <div class="divider"></div>
                    
                </div>
                <div class="filter-box">
                    <h2 class="header">Stock Information</h2>
                    <div class="subGroup">
                        <div id="emailEODtrigger" class="checkboxStock checkboxStockInfo"><strong>Daily Stock Summary.</strong></div>
                        <p class="email-alert-subscription__text">Send me a stock update at the end of the trading day.</p>
                    </div>
                    <div class="subGroup">
                        <div id="emailChangePercentagetrigger" class="checkboxStock checkboxStockInfo showHidePercentageChange"><strong>Percent Change Alert.</strong></div>
                    </div>

                    <div class="percentageChangeInput" style="display: none;">
                        <p class="email-alert-subscription__text" id="eas5-text" style="">Notify me about daily stock changes more than: <input class="forms__checkbox--inline-input email-alert-subscription__bg-transparent inputBoxChangePercentage" type="text" size="5" value="%" id="inputBoxChangePercentage" style="border: 2px solid #dbdcdb; width: 100px;">
                            <span class="forms__errortext" id="eas5-error" style="display: none;">Please enter a percentage</span>
                        </p>
                    </div>
                    

                </div>
                <div class="filter-box">
                    <div class="subGroup stockTresholdAlertWrapper">
                        <div id="emailThresholdtrigger" class="checkboxStock checkboxStockInfo showHideThreshold"><strong>Stock Threshold Alert.</strong></div>
                    </div>
                    <div class="email-alert-subscription__box" id="eas6-box" style="display: none;">
                        <div>
                            <p class="email-alert-subscription__text">Notify me when the stock crosses the following price thresholds:</p>
                            <label class="forms__checkbox--label email-alert-subscription__label--space-top" for="eas6">
                                Current Stock Price is <span class="email-alert-subscription__label-right"><strong><%= q.last.ToString("#,##0.00") %></strong></span>
                            </label>
                        </div>
                        <div>
                            <label class="forms__checkbox--label" for="eas6">
                                Low: <span class="email-alert-subscription__label-right">DKK<input class="forms__checkbox--inline-input email-alert-subscription__label-right--space email-alert-subscription__bg-transparent" type="number" size="5" id="inputBoxLow"></span>
                            </label>
                        </div>
                        <div>
                            <label class="forms__checkbox--label" for="eas6">
                                High: <span class="email-alert-subscription__label-right">DKK<input class="forms__checkbox--inline-input email-alert-subscription__label-right--space email-alert-subscription__bg-transparent" type="number" size="5" id="inputBoxHigh"></span>
                            </label>
                        </div>
                        <p class="forms__errortext" id="eas6-error" style="display: none;">Please enter a high and low threshold price</p>
                    </div>
                </div>
                <div style="clear: both;"></div>

                <div class="email-alert-subscription__box--last">
                    <!--<button type="submit" id="eas-submit" class="button button--secondary" style="opacity: 0.2;">Submit</button>-->

                     <p class="requiredField">
                        <span class="requiredFieldMSG"></span>
                    </p>

                    <input type="button" class="formRegister clearInput button button--secondary" value="Register" />

                    <p class="forms__errortext" id="checkbox-error" style="display: none;">Please select your subscription preferences</p>
                    <hr>
                    <p><a href="javascript:void(0)" class="email-alert-subscription__email cleanLink formUnsubscribe unsubscribeNextToButton">Unsubscribe from email alerts</a></p>
                </div>

                <input type="hidden" name="activeClient" class="activeClient" value="<%= activeClient %>" />
                <input type="hidden" name="solutionID" class="solutionID" value="<%= solutionID %>" />
                <input type="hidden" name="instrumentID" class="instrumentID" value="<%= instrumentID %>" />
                <input type="hidden" name="companyAnnoucementLanguage" value="English" class="companyAnnoucementLanguage" id="companyAnnoucementLanguage" />
                <input type="hidden" class="ReleaseRNSFilter" id="ReleaseRNSFilter" checked="checked" />


                <input type="checkbox" class="checkboxRelease ReleasesA hiddenCheckbox" id="ReleasesA" />
                <input type="checkbox" class="emailEOD hiddenCheckbox" name="emailEOD" id="emailEOD" />
                <input type="checkbox" class="emailChangePercentage hiddenCheckbox" name="emailChangePercentage" id="emailChangePercentage" />
                <input type="checkbox" class="emailThreshold hiddenCheckbox" name="emailThreshold" id="emailThreshold" />

            </form>
            <div style="clear: both;"></div>
        </div>

        <div class="pageVerification">
            <div class="blockNoBorder noTopMargin">
                <h2>Verification...
                </h2>
                <p>
                </p>
            </div>
            <div class="block">
                <p class="bold">
                </p>
            </div>
        </div>

        <div class="pageUnsubscribe">

            <form action="emailalerts.aspx">

                <input type="hidden" name="activeClient" class="activeClient" value="TDC A/S" />
                <input type="hidden" name="solutionID" class="solutionID" value="2444" />
                <input type="hidden" name="instrumentID" class="instrumentID" value="275952" />

                <div class="blockNoBorder">
                    <h2>Unsubscribe
                    </h2>
                    <p>
                        Please enter your email address to unsubscribe.
                   
                    </p>

                    <div class="divider"></div>

                    <div class="blockInner">
                        <div class="inputTextTitle">
                            Email address *
                       
                        </div>
                        <div class="inputText">
                            <input tabindex="1" class="inputTextField unsubscribeEmail" name="unsubscribeEmail" type="text" value="" />
                        </div>
                    </div>

                    <div style="clear: both;"></div>

                    <div class="blockNoBorder">

                        <input class="formUnsubscribeInTool button clearInput" type="submit" value="Unsubscribe" />
                        <a class="cleanLink goToHome">Back</a>
                    </div>

                </div>

            </form>

        </div>

        <div class="divider"></div>

    </div>

    <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>

    <script type="text/javascript" src="//ir.euroinvestor.com/Tools/EmailAlertsWithPush/inc/genericIR.js"></script>
    <script type="text/javascript" src="checkbox.js"></script>
    <script type="text/javascript">
        $(function () {

        });
    </script>
    <script>
        $(document).ready(function () {
            var fullnameError = 1;
            var emailError = 1;
            var errorCount = 0;
            var canClickSubmit = false;

            function checkErrorCount() {
                if (fullnameError === 0 && emailError === 0 && errorCount < 0) {

                    $('#eas-submit').css('opacity', '1');
                    return true;
                } else {
                    $('#eas-submit').css('opacity', '0.2');
                    return false;
                }
            };

            
            $('#enterInformationFirstName').blur(function () {
                if ($(this).val().indexOf(' ') === -1 && $(this).val().length < 5) {
                    fullnameError++;
                    $('#fullname-error').show();
                } else {
                    if ($('#fullname-error').is(':visible')) {
                        $('#fullname-error').hide();
                    }
                    fullnameError = 0;
                }
            });

            $('#enterInformationEmail').blur(function () {
                
                if ($(this).val().indexOf('@') === -1 && $(this).val().length < 5) {
                    emailError++;
                    $('#email-error').show();
                } else {
                    if ($('#email-error').is(':visible')) {
                        $('#email-error').hide();
                    }
                    emailError = 0;
                }
            });

            if (!canClickSubmit) {
                event.preventDefault();
                if ($('#fullname-error').is(':hidden') && fullnameError !== 0) {
                    //$('#fullname-error').show();
                }
                if ($('#email-error').is(':hidden') && emailError !== 0) {
                    //$('#email-error').show();
                }
                if ($('#checkbox-error').is(':hidden') && errorCount === 0) {
                    //$('#checkbox-error').show();
                }
            } else {
                checkErrorCount();
            }


            $('.checkboxStockInfo, .checkboxRegulatory').off().on('click', function () {
                
                var id = '#' + $(this).attr('id').replace('trigger', '').replace('Trigger', '');
                
                if ($(this).hasClass('checked')) {
                    $(this).removeClass('checked');
                    $(id).prop('checked', false);
                } else {
                    $(this).addClass('checked');
                    $(id).prop('checked', true);
                }

            });

            $('.showHideThreshold').on('click', function () {
                
                $('#eas6-box').toggle();
            });

            $('.showHidePercentageChange').on('click', function () {

                $('.percentageChangeInput').toggle();
            });

            

            
        });
    </script>
</body>
</html>
