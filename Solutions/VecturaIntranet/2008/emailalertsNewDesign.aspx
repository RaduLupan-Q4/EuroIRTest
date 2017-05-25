﻿<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ OutputCache VaryByParam="*" Duration="1" %>

<% 
    // Settings
    string activeClient = "VecturaIntranet";
    int solutionID = 2008;
    int instrumentID = 460968;
    bool showLoginToUnsubscribe = true;
    bool showEuroInvestorDisclaimer = false;

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
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Email Alerts</title>
    <link rel="stylesheet" href="http://ir1.euroinvestor.com/ir/tools/EmailAlertsWithPush/inc/generic.css" />
    <link rel="stylesheet" href="inc/emailAlertsNewDesign.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("inc/emailAlertsNewDesign.css")).Ticks.ToString()%>" />
</head>
<body style="font-size: 16px;">

    <div class="content">

        <div class="pageRegister">

            <%
                if (showLoginToUnsubscribe)
                {
            %>




            <div class="subPageLoginConfirm pageVerification_placedAtSubmitbutton">
                <form action="emailAlerts.aspx">
                    <h3 style="font-weight: bold;">Unsubscribe</h3>
                    Please confirm that you want to unsubscribe: <span class="emailToConfirm"></span>
                    <div class="closeBox goToHome">X</div>
                    <br />
                    <div class="blockInner">
                        <div class="inputText">
                            <input class="formLoginConfirm buttonStyle clearInput" type="submit" value="Unsubscribe" style="margin-left: 0;" />
                        </div>
                    </div>
                    <div style="clear: both;"></div>

                </form>

                <div class="pageVerification pageVerification_top">
                    <div class="blockNoBorder noTopMargin">
                        <h2 class="removeHeight">Verification...
                        </h2>
                        <p>
                        </p>
                    </div>
                    <div class="block block_addPadding">
                        <p class="bold">
                        </p>
                    </div>
                </div>
            </div>

            <%
                }
            %>

            <div class="divideLine"></div>
            <div class="register-wrapper">
                <div class="divideLine"></div>
                <h2 class="header">Register</h2>
                <p>
                    Please follow the instructions below to automatically receive alerts about significant changes.<br />
                    Enter your email address and a little information about yourself, and then click on the <strong>Register</strong> button below (*indicates a required field).
                </p>
                <%--<p style="height:10px; line-height:10px; font-size:12px;"><br /> * indicates a required field</p>--%>
            </div>
            <div class="divider"></div>

            <form action="emailAlerts.aspx">

                <input type="hidden" class="checkboxRelease ReleasesA" value="checked" id="ReleasesA" />

                <div class="blockOuter">

                    <div class="blockInner">
                        <div class="inputTextTitle">
                            <%= titleEmailAdress %>* :
                        </div>
                        <div class="inputText">
                            <input tabindex="2" class="informationInput enterInformationEmail" name="enterInformationEmail" type="text" value="" id="enterInformationEmail" />
                        </div>
                    </div>

                    <div class="blockInner">
                        <div class="inputTextTitle">
                            <%= titleFirstName %>* :
                        </div>
                        <div class="inputText">
                            <input tabindex="3" class="informationInput enterInformationFirstName" name="enterInformationFirstName" type="text" value="" id="enterInformationFirstName" />
                        </div>
                    </div>

                    <div class="blockInner">
                        <div class="inputTextTitle">
                            <%= titleLastName %>* :
                        </div>
                        <div class="inputText">
                            <input tabindex="4" class="informationInput enterInformationLastName" name="enterInformationLastName" type="text" value="" id="enterInformationLastName" />
                        </div>
                    </div>

                    <div class="blockInner">
                        <div class="inputTextTitle">
                            <%= titleCompany %>:
                        </div>
                        <div class="inputText">
                            <input tabindex="5" class="informationInput enterInformationCompany" name="enterInformationCompany" type="text" value="" id="enterInformationCompany" />
                        </div>
                    </div>

                    <div class="blockInner">
                        <div class="inputTextTitle">
                            <%= titleCountry %>:
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
                <div class="alert-wrapper">


                    <!--<div class="divider"></div> -->

                    <div class="blockOuter indent">
                    </div>
                </div>

                <div style="clear: both;"></div>


                <p class="disclaimerHighlight">
                    <%= privacyStatement %>
                </p>


                <input type="hidden" name="activeClient" class="activeClient" value="<%= activeClient %>" />
                <input type="hidden" name="solutionID" class="solutionID" value="<%= solutionID %>" />
                <input type="hidden" name="instrumentID" class="instrumentID" value="<%= instrumentID %>" />
                <input type="hidden" name="companyAnnoucementLanguage" value="English" class="companyAnnoucementLanguage" id="companyAnnoucementLanguage" />


                <div class="blockNoBorder pageVerification_placedAtSubmitbutton">
                    <input type="button" tabindex="9" class="formRegister buttonStyle clearInput alertTypeSubmitBox" value="Register" />
                    <div class="pageVerification pageVerification_bottom">
                        <div class="blockNoBorder noTopMargin">
                            <h2 class="removeHeight">Success
                            </h2>
                            <p>
                            </p>
                        </div>
                        <div class="closeBox goToHome">X</div>
                        <div class="block block_addPadding">
                            <p class="bold">
                            </p>
                        </div>
                    </div>

                </div>


            </form>
            <div class="login-wrapper subPageLogin" style="float: left; width: 100%; margin-top: 20px;">
                <h2 class="header">Unsubscribe</h2>
                <form action="emailAlerts.aspx" style="float: left; width: 100%; clear: both;">

                    <p class="unsubscribe-text">
                        <%--  If you have already subscribed, enter your email address here, and login to edit your preferences.<br />--%>
                        If you would like to unsubscribe, please enter your email address below and press the <strong>Unsubscribe</strong> button.
                    </p>
                    <br />

                    <div class="input-wrapper unsubscribeEmailWrapper">
                        <span class="inputTextTitle"><%= titleEmailAdress %>:</span><input tabindex="1" class="informationInput enterInformationLoginEmail" name="enterInformationLoginEmail" type="email" value="" />

                        <input class=" formLogin buttonStyle clearInput formUnsubscribe" type="button" value="Unsubscribe" />
                    </div>
                </form>
            </div>
        </div>


       <%-- <div class="pageUnsubscribe">

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

                        <input class="formUnsubscribeInTool buttonStyle clearInput" type="submit" value="Unsubscribe" />
                        <a class="cleanLink goToHome">Back</a>
                    </div>

                </div>

            </form>

        </div>--%>

        <div class="divider"></div>
        <%
            if (showEuroInvestorDisclaimer)
            {
                Server.Execute("~/Disclaimers/emailAlertsDisclaimer.aspx");
            }
        %>
    </div>

    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
    <%--<script type="text/javascript" src="http://ir1.euroinvestor.com/ir/tools/EmailAlertsWithPush/inc/generic_mobileOverlayFix.js"></script>
     <script type="text/javascript" src="http://ir.euroinvestor.com/Tools/EmailAlertsWithPush/Inc/genericIR_mobileOverlayFix.js"></script>--%>
    <script type="text/javascript" src="customMobileOverlayFixNewDesign.js"></script>
    <script type="text/javascript" src="overlay.js"></script>
    <div class="semiTransparantOverlay hidden"></div>
</body>
</html>

<script type="text/javascript">


    var customXApplied = false;

    function prepareCustomX() {
        if (!customXApplied) {
            if (typeof ($('.pageVerification')) != 'undefined') {
                $('.pageVerification_top').off('click').on('click', '.goToHome', function () {
                    $('.semiTransparantOverlay ,#dialogueBox_unsubscribe').css('display', 'none');
                });
                customXApplied = true;
            }
        }
    }
    $(function () {
        setInterval(function () {
            prepareCustomX();
        }, 200);
    });


</script>
