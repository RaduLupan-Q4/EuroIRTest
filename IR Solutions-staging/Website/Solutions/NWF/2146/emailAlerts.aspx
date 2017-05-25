<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ OutputCache VaryByParam="*" Duration="1" %>

<% 
    // Settings
    string activeClient = "NWF";
    int solutionID = 2146;
    int instrumentID = 2389;
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
    string titleEmailAdress = "Email";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Email Alerts</title>
    <link rel="stylesheet" href="http://ir1.euroinvestor.com/ir/tools/EmailAlertsWithPush/inc/generic.css" />
    <link rel="stylesheet" href="http://fast.fonts.net/cssapi/6da7dd2e-d6b3-46dd-adcb-7276ef650f12.css" type="text/css" />
    <link rel="stylesheet" href="ir.client.css" type="text/css" />
</head>
<body style="font-size: 16px; overflow: hidden">

    <div class="content">

        <div class="pageRegister">



            <div class="register-wrapper">
                <div class="divideLine"></div>
                <%--<h2 class="header">Register</h2>--%>
                <p>
                    Please enter your details below if you wish to sign up to our mailing list.
                </p>
                <%--<p style="height:10px; line-height:10px; font-size:12px;"><br /> * indicates a required field</p>--%>
            </div>
            <div class="divider"></div>

            <form action="emailAlerts.aspx">

                <input type="hidden" class="checkboxRelease ReleasesA" value="checked" id="ReleasesA" />

                <div class="blockOuter">

                    <div class="blockInner">
                        <div class="inputTextTitle">
                            <%= titleEmailAdress %>: * 
                        </div>
                        <div class="inputText">
                            <input tabindex="2" class="informationInput enterInformationEmail" name="enterInformationEmail" type="text" value="" id="enterInformationEmail" />
                        </div>
                    </div>

                    <div class="blockInner">
                        <div class="inputTextTitle">
                            <%= titleFirstName %>: *
                        </div>
                        <div class="inputText">
                            <input tabindex="3" class="informationInput enterInformationFirstName" name="enterInformationFirstName" type="text" value="" id="enterInformationFirstName" />
                        </div>
                    </div>

                    <div class="blockInner">
                        <div class="inputTextTitle">
                            <%= titleLastName %>: * 
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
            </form>
            <div style="clear: both;"></div>

            <div class="divideLine"></div>
            <div class="alert-wrapper">
                <%--  <h2 class="header">Alerts</h2>
                <p>
                    Select the alerts you wish to receive.
                </p>

                <!--<div class="divider"></div> -->

                <div class="blockOuter indent">
                    <label>
                        <span class="checkboxOuter">
                            <input tabindex="7" type="checkbox" class="checkboxRelease ReleasesA" id="ReleasesA" />
                        </span>
                        <span class="checkBoxText"><%= titleReleasesA %>
                        </span>
                    </label>

                    <p style="margin-top: 19px; line-height: 35px;">
                        From time to time, we may use your registration details to provide you with additional information about us and our products and services which may be of interest to you.
                    </p>
                    <label>
                        <span class="checkboxOuter">
                            <input tabindex="8" type="checkbox" class="checkboxRelease ReleasesC" id="ReleasesC" />
                        </span>
                        <span class="checkBoxText"><%= titleReleasesC %>
                        </span> 
                    </label>--%>
                <%-- <p>Our <a title="View our Privacy Policy (opens in a popup window)" rel="privacyEmail" href="#" class="nobdr">Privacy Policy</a> statement explains how we handle and store your personal data.</p>--%>
                <div class="divider"></div>
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
            <input type="button" tabindex="9" class="formRegister buttonStyle clearInput" value="Register" />
            <div class="pageVerification pageVerification_bottom">
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

        <div class="divider"></div>
        <%
            if (showLoginToUnsubscribe)
            {    
        %>

        <div class="subPageLogin">


            <h2 class="header">Unsubscribe</h2>
            <!--   <p>
                    If you have already subscribed, enter your email address here, and login to edit your preferences.<br />
                    If you would like to unsubscribe, please login and press the <b>unsubscribe</b> button
                </p>-->

            <form action="emailAlerts.aspx">

                <p>If you have already subscribed, enter your email address here if you would like to unsubscribe.</p>
                <br />
                <span><%= titleEmailAdress %>:</span>
                <div class="input-wrapper">
                    <input tabindex="1" class="informationInput enterInformationLoginEmail" name="enterInformationLoginEmail" type="email" value="" />

                    <input class="formLogin buttonStyle clearInput" type="button" value="Unsubscribe" />
                    <div class="emptyEmailNotificationMessage" style="display: none; color: red; font-weight: bold; ">Email input field can not be left blank.</div>
                </div>
            </form>

        </div>


        <div class="subPageLoginConfirm pageVerification_placedAtSubmitbutton">
            <br />
            <br />
            <form action="emailAlerts.aspx">
                Please confirm that you want to unsubscribe: <span class="emailToConfirm"></span>
                <br />
                <div class="blockInner">
                    <div class="inputText">
                        <input class="formLoginConfirm buttonStyle clearInput unsubscribeButton" type="submit" value="Unsubscribe" />
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

                    <input class="formUnsubscribeInTool buttonStyle clearInput" type="submit" value="Unsubscribe" />
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

    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
    <%--<script type="text/javascript" src="http://ir1.euroinvestor.com/ir/tools/EmailAlertsWithPush/inc/generic_mobileOverlayFix.js"></script>--%>
    <script type="text/javascript" src="http://ir.euroinvestor.com/Tools/EmailAlertsWithPush/Inc/genericIR_mobileOverlayFix.js"></script>
    <div class="semiTransparantOverlay hidden"></div>
</body>
</html>



<script type="text/javascript">

    $('.formLogin').click(function () {
        if ($('.unsubscribeEmail').val() == '') {
            $(".emptyEmailNotificationMessage").css("display", "block")
           
        }
    });

</script>
