<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ OutputCache VaryByParam="*" Duration="1" %>

<% 
    // Settings
    string activeClient = "Henderson";
    int solutionID = 2750;
    int instrumentID = 1770365;
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

    //SQL q = new SQL();
    //q.getLastPrice(instrumentID);
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Email Alerts</title>
    <link rel="stylesheet" href="//ir.euroinvestor.com/tools/EmailAlertsWithPush/inc/generic.css" />
    <link rel="stylesheet" href="//fast.fonts.net/cssapi/facd9127-6235-432e-b41d-50c0308c5c3a.css" />
    <%--<link rel="stylesheet" href="style.css" />--%>

    <link rel="stylesheet" href="inc/emailAlerts.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("inc/emailAlerts.css")).Ticks.ToString()%>" />
</head>
<body>

    <div class="content">

        <div class="pageRegister">
            <div class="alerts-wraapper">
                <p>
                    You may automatically receive Henderson Group plc financial information by e-mail. To choose your options for e-mail notification, please enter your e-mail address below and click Submit. On the next page you will be able to choose from the following options:
                </p>
                <ul>
                    <li>Henderson Group plc Calendar Alert</li>
                    <li>Henderson Group plc regulatory news alert</li>
                </ul>
                <p>To change your e-mail options at any time, re-enter your e-mail address and click Submit, then adjust your form entries.</p>
            </div>

            <form action="emailAlerts.aspx">

                <input type="hidden" class="checkboxRelease ReleasesA" value="checked" id="ReleasesA" checked="checked" />
                
                <div class="blockOuter">
                    <div class="blockInner">
                        <div class="inputTextTitle">
                            <b>Enter your e-mail address here:</b>
                        </div>
                        <div class="inputText">
                            <input tabindex="2" class="informationInput enterInformationEmail" name="enterInformationEmail" type="text" value="" id="enterInformationEmail" />
                        </div>
                    </div>
                    <p class="requiredField">
                        <span class="requiredFieldMSG"></span>
                    </p>
                </div>

                <input type="hidden" name="activeClient" class="activeClient" value="<%= activeClient %>" />
                <input type="hidden" name="solutionID" class="solutionID" value="<%= solutionID %>" />
                <input type="hidden" name="instrumentID" class="instrumentID" value="<%= instrumentID %>" />
                <input type="hidden" name="companyAnnoucementLanguage" value="English" class="companyAnnoucementLanguage" id="companyAnnoucementLanguage" />

                <div class="blockNoBorder">
                    <input type="button" tabindex="9" class="formRegister buttonStyle clearInput" value="Submit" />
                </div>

            </form>
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
    </div>

    <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>

    <script type="text/javascript" src="//ir.euroinvestor.com/Tools/EmailAlertsWithPush/inc/genericIR.js"></script>
    <script type="text/javascript" src="checkbox.js"></script>

    <script type="text/javascript">
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
