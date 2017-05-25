﻿<%@ Page Language="C#" AutoEventWireup="true" CodeFile="emailAlerts.aspx.cs" Inherits="_Default" %>

<%@ OutputCache VaryByParam="*" Duration="1" %>

<% 
    // Settings
    string activeClient = "";
    int solutionID = 10012;
    int instrumentID = 629357;
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
    <link rel="stylesheet" href="https://irssl.euroinvestor.com/ir/tools/EmailAlertsWithPush/inc/generic.css" />
    <link rel="stylesheet" href="https://fast.fonts.net/cssapi/facd9127-6235-432e-b41d-50c0308c5c3a.css" />
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="emailAlerts.css" />
</head>
<body>

    <div class="content">

        <div class="pageRegister">

            <%
                if (showLoginToUnsubscribe)
                {    
            %>

            <div class="subPageLogin">

                <h2 class="header">Login</h2>
                <p>
                    If you have already subscribed, enter your email address here, and login.<br />
                    If you would like to unsubscribe, please login and press the <b>unsubscribe</b> button
                </p>

                <form action="emailAlerts.aspx">

                    <br />
                    <b><%= titleEmailAdress %></b>
                    <input tabindex="1" class="informationInput enterInformationLoginEmail" name="enterInformationLoginEmail" type="email" value="" style="width: 230px; position: relative; margin-bottom: 15px; margin-right: 15px;" />

                    <input class="formLogin styledButton clearInput" style="position: relative; top: 0px; margin-bottom: 15px;" type="button" value="Login" />

                </form>

            </div>
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

            <%
                }    
            %>

            <div class="divideLine"></div>

            <h2 class="header">Your Contact Details</h2>
            <p>
                Please follow the instructions below to automatically receive alerts about stock exchange announcements.<br />
                If you would like to receive email alerts please complete the following and then press <b>Register.</b><br />
                (*indicates a required field).
            </p>

            <div class="divider"></div>

            <form action="emailAlerts.aspx">

                <%--<input type="hidden" class="checkboxRelease ReleasesA" value="checked" id="ReleasesA" />--%>

                <div class="blockOuter">

                    <div class="blockInner">
                        <div class="inputTextTitle">
                            <%= titleEmailAdress %> *
                        </div>
                        <div class="inputText">
                            <input tabindex="2" class="informationInput enterInformationEmailRNSFilter" name="enterInformationEmailRNSFilter" type="text" value="" id="enterInformationEmailRNSFilter" />
                        </div>
                    </div>

                    <div class="blockInner">
                        <div class="inputTextTitle">
                            <%= titleFirstName %> *
                        </div>
                        <div class="inputText">
                            <input tabindex="3" class="informationInput enterInformationFirstName" name="enterInformationFirstName" type="text" value="" id="enterInformationFirstName" />
                        </div>
                    </div>

                    <div class="blockInner">
                        <div class="inputTextTitle">
                            <%= titleLastName %> *
                        </div>
                        <div class="inputText">
                            <input tabindex="4" class="informationInput enterInformationLastName" name="enterInformationLastName" type="text" value="" id="enterInformationLastName" />
                        </div>
                    </div>

                    <div class="blockInner">
                        <div class="inputTextTitle">
                            <%= titleCompany %>
                        </div>
                        <div class="inputText">
                            <input tabindex="5" class="informationInput enterInformationCompany" name="enterInformationCompany" type="text" value="" id="enterInformationCompany" />
                        </div>
                    </div>

                    <div class="blockInner">
                        <div class="inputTextTitle">
                            <%= titleCountry %>
                        </div>
                        <div class="inputText">
                            <input tabindex="6" class="informationInput enterInformationCountry" name="enterInformationCountry" type="text" value="" id="enterInformationCountry" />
                        </div>
                    </div>

                    <div style="clear: both;"></div>

                    <div class="divider"></div>

                    <%--<p class="requiredField">
                        <%= titleRequiredField %> <span class="requiredFieldMSG"></span>
                    </p>--%>

                    <p class="requiredField">
                        <span class="requiredFieldMSG"></span>
                    </p>


                </div>

                <div style="clear: both;"></div>

                <div class="divideLine"></div>

                <h2 class="header" style="margin-bottom: 0px;">Releases</h2>
                <p>
                    Select the alerts you wish to receive.
                </p>

                <div class="divider"></div>

                <%= createFilterListItemsExperian() %>

                <div class="divider"></div>

                <div class="clearBoth"></div>

                <div class="blockOuter indent">
                    <%--<label>
                        <span class="checkboxOuter">
                            <input tabindex="7" type="checkbox" class="checkboxRelease ReleasesA" id="ReleasesA" />
                        </span>
                        <span class="checkBoxText"><%= titleReleasesA %>
                        </span>
                    </label>

                    <div class="divider"></div>--%>

                    <p>
                        From time to time we may use your registration details to provide you with additional information about us and our products and services which may be of interest to you.
                    </p>
                    <div class="divider"></div>

                    <label>
                        <span class="checkboxOuter">
                            <input tabindex="8" type="checkbox" class="checkboxRelease ReleasesC" id="ReleasesC" />
                        </span>
                        <span class="checkBoxText"><%= titleReleasesC %>
                        </span>
                    </label>

                </div>

                <div style="clear: both;"></div>
                
                <%--<p class="disclaimerHighlight">
                    <%= privacyStatement %>
                </p>--%>

                <div class="block">
                    <div class="divideLine"></div>
                    <h2 class="header" style="margin-bottom: 0px;">Share Price Information</h2>
                    <div>
                        <label>
                            <input type="checkbox" class="emailBOD" name="emailBOD" id="emailBOD" />Daily Open Share Price</label><br />
                        <span class="labelSubDesc">Send me a share price update at the beginning of the trading day.</span><br />
                    </div>
                    <br />
                    <div>
                        <label>
                            <input type="checkbox" class="emailEOD" name="emailEOD" id="emailEOD" />Daily Close Share Price</label><br />
                        <span class="labelSubDesc">Send me a share price update at the end of the trading day.</span><br />
                    </div>
                    <br />
                    <div>
                        <label>
                            <input type="checkbox" class="emailThreshold" name="emailThreshold" id="emailThreshold" />Share Price Threshold</label><br />
                        <span class="labelSubDesc">Notify me when the share price crosses the following thresholds.</span><br />
                        <span class="labelSubDesc">Current share price is <%= q.last.ToString("#,##0.00") %> GBp</span><br />
                        <br />

                        <span class="labelSubDesc highLowText">Low</span>
                        <input class="inputBoxHighLow inputTextField inputBoxLow" value="###.##" style="margin-left: 10px;" type="text" id="inputBoxLow" />
                        <span class="inputBoxHighLowCurrency">GBp</span>
                        <%--<span class="inputBoxHighLowInfo inputBoxLowInfo warning">Please select a value for Low.</span>--%>
                        <br />
                        <br />

                        <span class="labelSubDesc highLowText">High</span>
                        <input class="inputBoxHighLow inputTextField inputBoxHigh" value="###.##" style="margin-left: 10px;" type="text" id="inputBoxHigh" />
                        <span class="inputBoxHighLowCurrency">GBp</span>
                        <%--<span class="inputBoxHighLowInfo inputBoxHighInfo warning">Please select a value for High.</span>--%>
                        <br />

                    </div>
                    <br />

                    <div>
                        <label>
                            <input type="checkbox" class="emailChangePercentage" name="emailChangePercentage" id="emailChangePercentage" />Percent Change in Share Price</label><br />
                        <span class="labelSubDesc">Notify me when the share price changes more than
                    <input class="inputTextField inputBoxChangePercentage" type="text" value="#.##" id="inputBoxChangePercentage" />
                            % in one day.</span><br />
                        <%--<span class="inputBoxChangePercentageInfo warning">Please select a valid number.</span>--%>
                        <br />

                    </div>
                </div>

                <p class="requiredField">
                    <span class="requiredOptionsMSG"></span>
                </p>


                <div class="divider"></div>

                <div class="blockNoBorder">
                    <input type="button" tabindex="9" class="formRegister styledButton clearInput" value="Register" />
                    <a class="cleanLink formUnsubscribe unsubscribeNextToButton">Unsubscribe</a>
                </div>

                <input type="hidden" name="activeClient" class="activeClient" value="<%= activeClient %>" />
                <input type="hidden" name="solutionID" class="solutionID" value="<%= solutionID %>" />
                <input type="hidden" name="instrumentID" class="instrumentID" value="<%= instrumentID %>" />
                <input type="hidden" name="companyAnnoucementLanguage" value="English" class="companyAnnoucementLanguage" id="companyAnnoucementLanguage" />
                <input type="hidden" class="ReleaseRNSFilter" id="ReleaseRNSFilter" checked="checked" />

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
                            <%= titleEmailAdress %> *
                        </div>
                        <div class="inputText">
                            <input tabindex="1" class="inputTextField unsubscribeEmail" name="unsubscribeEmail" type="text" value="" />
                        </div>
                    </div>

                    <div class="divider"></div>

                    <div class="blockNoBorder">

                        <div class="divider"></div>
                        <div class="divider"></div>

                        <input class="formUnsubscribeInTool styledButton clearInput" type="submit" value="Unsubscribe" />
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

    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
    <%--<script type="text/javascript" src="https://irssl.euroinvestor.com/ir/tools/EmailAlertsWithPush/inc/generic.js"></script>--%>
    <script type="text/javascript" src="http://ir.euroinvestor.com/Tools/EmailAlertsWithPush/inc/genericIR.js"></script>
    <script type="text/javascript" src="checkbox.js"></script>
    <script type="text/javascript">
        $(function ()
        {

        });
    </script>
</body>
</html>
