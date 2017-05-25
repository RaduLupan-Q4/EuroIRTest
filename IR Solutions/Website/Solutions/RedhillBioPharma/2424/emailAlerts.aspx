<%@ Page Language="C#" AutoEventWireup="true" CodeFile="emailAlerts.aspx.cs" Inherits="_Default" %>

<%@ OutputCache VaryByParam="*" Duration="1" %>

<% 
    // Settings
    string activeClient = "Redhill BioPharma";
    int solutionID = 2424;
    int instrumentID = 13289309;
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
<body style="padding: 10px;">

    <div class="content">

        <div class="pageRegister">
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
                        <div class="filter-box group">
                            <h2 class="header">Stock Information</h2>
                            <div class="blockInner">
                                <div class="inputTextTitle">
                                    Email address *
                                </div>
                                <div class="inputText">
                                    <input tabindex="2" class="informationInput enterInformationEmailRNSFilter" name="enterInformationEmailRNSFilter" type="text" value="" id="enterInformationEmailRNSFilter" />
                                </div>
                            </div>
                            <div class="subGroup">
                                <p>
                                    Send me the closing stock price.
                                </p>
                                <label>
                                    <input type="checkbox" class="emailEOD" name="emailEOD" id="emailEOD" />Quote By Email
                                </label>
                            </div>

                            <div class="subGroup">
                                <p>
                                    Send me a stock update at the end of the week.
                                </p>
                                <label>
                                    <input type="checkbox" class="emailWeekly" name="emailWeekly" id="emailWeekly" />Weekly Stock Summary
                                </label>
                            </div>

                            <div class="subGroup">
                                <p>
                                    Alert me when the stock crosses the following price thresholds.
                                </p>
                                <label>
                                    <input type="checkbox" class="emailThreshold" name="emailThreshold" id="emailThreshold" />Stock Threshold Alert
                                </label>
                            </div>

                        </div>
                        <div class="filter-box group">
                            <div class="email-alert-subscription__box" id="eas6-box">
                                <div>
                                    <label class="forms__checkbox--label" for="eas6">
                                        Low:
                                        <input class="forms__checkbox--inline-input email-alert-subscription__label-right--space email-alert-subscription__bg-transparent" type="text" id="inputBoxLow">
                                    </label>
                                </div>
                                <div>
                                    <label class="forms__checkbox--label" for="eas6">
                                        High:
                                        <input class="forms__checkbox--inline-input email-alert-subscription__label-right--space email-alert-subscription__bg-transparent" type="text" id="inputBoxHigh">
                                    </label>
                                </div>
                                <div>
                                    <label class="forms__checkbox--label">Current price: <%= q.last.ToString("#,##0.00") %></label>
                                </div>
                                <p class="forms__errortext" id="eas6-error" style="display: none;">Please enter a high and low threshold price</p>
                            </div>
                        </div>
                        <div class="filter-box">

                            <div class="subGroup">
                                <p>
                                    Alert me when the stock crosses the following price thresholds.
                                </p>
                                <label>
                                    <input type="checkbox" class="emailChangePercentage" name="emailChangePercentage" id="emailChangePercentage" />Percent Change Alert
                                </label>
                            </div>

                            <div class="email-alert-subscription__box percentage" id="eas6-box">
                                <div>
                                    <label class="forms__checkbox--label" for="eas6">
                                        <span class="email-alert-subscription__label-right">
                                            <input class="inputTextField inputBoxChangePercentage" type="text" value="#.##" id="inputBoxChangePercentage" /></span>
                                    </label>
                                </div>
                                <div>
                                    <label class="forms__checkbox--label">% in one day.</label>
                                </div>
                                <p class="forms__errortext" id="eas6-error" style="display: none;">Please enter a high and low threshold price</p>
                            </div>
                        </div>
                    </div>
                    <div style="clear: both;"></div>

                    <div class="divider"></div>



                    <p class="requiredField">
                        <span class="requiredFieldMSG"></span>
                    </p>

                </div>
                <div style="clear: both;"></div>

                <div class="email-alert-subscription__box--last">
                    <button type="submit" id="eas-submit" class="formRegister button button--secondary">Continue</button>
                    <p><a href="javascript:void(0)" class="email-alert-subscription__email cleanLink formUnsubscribe unsubscribeNextToButton">Unsubscribe from Investor Relations email alerts.</a></p>
                </div>
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

            <input type="hidden" name="activeClient" class="activeClient" value="<%= activeClient %>" />
            <input type="hidden" name="solutionID" class="solutionID" value="<%= solutionID %>" />
            <input type="hidden" name="instrumentID" class="instrumentID" value="<%= instrumentID %>" />

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
    <%
            if (showEuroInvestorDisclaimer)
            {
                Server.Execute("~/Disclaimers/emailAlertsDisclaimer.aspx");
            } 
        %>
    </div>

    <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>

    <script type="text/javascript" src="//ir.euroinvestor.com/Tools/EmailAlertsWithPush/inc/genericIR.js"></script>
    <script type="text/javascript" src="checkbox.js"></script>
</body>
</html>
