<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ OutputCache VaryByParam="*" Duration="1" %>

<% 
    // Settings
    string activeClient = "VecturaIntranet";
    int solutionID = 2008;
    int instrumentID = 460968;
    bool showLoginToUnsubscribe = false;
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
    <title>Email Alerts</title>
    <link rel="stylesheet" href="http://fast.fonts.net/cssapi/c8776784-5d75-432d-ae59-d50b8bc58a15.css" />
    <link rel="stylesheet" href="http://ir1.euroinvestor.com/ir/tools/EmailAlertsWithPush/inc/generic.css" />
    <link rel="stylesheet" href="inc/emailAlerts.css" />
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
                    If you have already subscribed, enter your email address here, and login to edit your preferences.<br />
                    If you would like to unsubscribe, please login and press the <b>unsubscribe</b> button
                </p>

                <form action="emailAlerts.aspx">
                    
                    <br />
                    <b><%= titleEmailAdress %></b>
                    <input tabindex="1" class="informationInput enterInformationLoginEmail" name="enterInformationLoginEmail" type="email" value="" style="width: 230px; position: relative;" />
                  
                    <input class="formLoginConfirm buttonStyle clearInput" style="position: relative; top: 0px;" type="button" value="Submit" />

                </form>

            </div>
            <div class="subPageLoginConfirm">

                <form action="emailAlerts.aspx">
                    Please confirm that you want to unsubscribe: <span class="emailToConfirm"></span>
                    <br />
                    <div class="blockInner">
                        <div class="inputText">
                            <input class="formLoginConfirm buttonStyle clearInput" type="submit" value="Unsubscribe" />
                        </div>
                    </div>
                    <div style="clear: both;"></div>

                </form>

            </div>

            <%
                }    
            %>


            <h2 class="header">Register</h2>
            <p>
                Please follow the instructions below to automatically receive alerts about stock exchange announcements.<br />
                If you would like to receive email alerts please complete the following and then press <b>Register.</b><br />
                (*indicates a required field).


                <%--If you would like to receive email alerts please complete the following and then press <i>Register</i>.<br />
                If you have already signed up and would like to update your subscription, <a class="cleanLink formUnsubscribe">click here</a>.--%>
            </p>

            <div class="divider"></div>

            <form action="emailAlerts.aspx">

                <input type="hidden" class="checkboxRelease ReleasesA" value="checked" id="ReleasesA" checked="checked" />
                <input type="hidden" class="checkboxRelease ReleasesB" value="checked" id="ReleasesB" checked="checked" />

                <div class="blockOuter">

                    <div class="blockInner">
                        <div class="inputTextTitle">
                            <%= titleEmailAdress %> *
                        </div>
                        <div class="inputText">
                            <input tabindex="2" class="informationInput enterInformationEmail" name="enterInformationEmail" type="text" value="" id="enterInformationEmail" />
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


<%--                <h2 class="header">Alerts</h2>
                <p>
                    Select the alerts you wish to receive.
                </p>

                <div class="divider"></div>

                <div class="blockOuter indent">
                   <%-- <label>
                        <span class="checkboxOuter">
                            <input tabindex="7" type="checkbox" class="checkboxRelease ReleasesA" id="ReleasesA" />
                        </span>
                        <span class="checkBoxText"><%= titleReleasesA %>
                        </span>
                    </label>

                    <div class="divider"></div>--%>

                    <%--<p>
                        From time to time we may use your registration details to provide you wish additional information about us and our products and services which may be of interest to you.
                    </p>
                    <div class="divider"></div>

                    <label>
                        <span class="checkboxOuter">
                            <input tabindex="8" type="checkbox" class="checkboxRelease ReleasesC" id="ReleasesC" />
                        </span>
                        <span class="checkBoxText"><%= titleReleasesC %>
                        </span>
                    </label>

                    <div class="divider"></div>

                </div>--%>

                <div style="clear: both;"></div>

                <%--<div class="blockOuter indent">
                <label>
                    <span class="checkboxOuter">
                        <input type="checkbox" class="checkboxRelease ReleasesB" id="ReleasesB" />
                    </span>
                    <span class="checkBoxText"><%= titleReleasesB %>
                    </span>
                </label>
            </div>
            <div class="blockOuter indent">
                <label>
                    <span class="checkboxOuter">
                        <input type="checkbox" class="checkboxRelease ReleasesC" id="ReleasesC" />
                    </span>
                    <span class="checkBoxText"><%= titleReleasesC %>
                    </span>
                </label>
            </div>--%>


                <div class="divider"></div>

                <p class="disclaimerHighlight">
                    <%= privacyStatement %>
                </p>

                <div class="divider"></div>

                <input type="hidden" name="activeClient" class="activeClient" value="<%= activeClient %>" />
                <input type="hidden" name="solutionID" class="solutionID" value="<%= solutionID %>" />
                <input type="hidden" name="instrumentID" class="instrumentID" value="<%= instrumentID %>" />
                <input type="hidden" name="companyAnnoucementLanguage" value="English" class="companyAnnoucementLanguage" id="companyAnnoucementLanguage" />

                <div class="divider"></div>

                <div class="blockNoBorder">
                     
                    <input type="button" tabindex="9" class="formRegister buttonStyle clearInput" value="Register" />
                    If you would like to unsubscribe, please login and press the <b>unsubscribe</b> button
                    <a class="cleanLink formUnsubscribe unsubscribeNextToButton" style="position: relative; left:25px; top:50px;">Unsubscribe</a>
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
    <script type="text/javascript" src="http://ir.euroinvestor.com/tools/EmailAlertsWithPush/inc/genericIR.js"></script>

</body>
</html>
