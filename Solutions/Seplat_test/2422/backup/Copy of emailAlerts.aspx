<%@ Page Language="C#" AutoEventWireup="true" %>
<%@ OutputCache VaryByParam="*" Duration="1" %>

<% 
    // Settings
    string activeClient = "versarien";
    int solutionID = 1834;
    int instrumentID = 337132;
    bool showLoginToUnsubscribe = false;
    bool showEuroInvestorDisclaimer = false;

    //string linkToPrivacyStatement = "";
    //string privacyStatement = @"By pressing “Register” I confirm that I have read, understood and agree with the <a target=""_blank"" class=""cleanLink"" href=""" + linkToPrivacyStatement + @""">Privacy Statement</a> on this website";
    string privacyStatement = @""; // Overwrite with a custom privacy statement.

    string titleRequiredField = "(*) required field";
    string titleRegisterButton = "Subscribe";
    string titleBackFromUnsubscribe = "Subscribe";
    string titleReleasesA = "Regulatory News";
    string titleReleasesB = "";
    string titleReleasesC = "Other News";
    //
    string titleFirstName = "First name";
    string titleLastName = "Surname";
    string titleCompany = "Company";
    string titleCountry = "Country";
    string titleOccupation = "Occupation";
    string titleProfession = "Profession";
    string titleEmailAdress = "Email adress";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Email Alerts</title>
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

                <h2>Login</h2>
                <p>
                    If you have already subscribed, enter your email address here, and login to edit your preferences.<br />
                    If you would like to unsubscribe, please login and press the <b>unsubscribe</b> button
                </p>

                <form action="emailAlerts.aspx">

                    <div class="blockInner">
                        <div class="inputTextTitle">
                            <%= titleEmailAdress %>
                        </div>
                        <div class="inputText">
                            <div style="float: left; width: 80%;">
                                <input tabindex="1" class="informationInput enterInformationLoginEmail" name="enterInformationLoginEmail" type="email" value="" style="width: 90%; position: relative;" />
                            </div>
                            <div style="float: left; width: 20%;">
                                <input class="formLogin buttonStyle clearInput" type="submit" value="Login" />
                            </div>
                        </div>
                    </div>
                    <div style="clear: both;"></div>

                </form>

            </div>

            <div class="subPageLoginConfirm">

                <form action="emailAlerts.aspx">
                    Please confirm that you want to unsubscribe: <span class="emailToConfirm"></span>

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

            <p>
                Subscribe to our investor alert service and receive all regulatory news and press releases as soon as they become available. 
            </p>

            <form action="emailAlerts.aspx">

                <%--<input type="hidden" class="checkboxRelease ReleasesA" value="checked" id="ReleasesA" />--%>

                

                <table>
                    <tr>
                        <td colspan="2">
                            <p>
                                <br />
                                Please enter your email address in the box below.
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <span class="checkBoxText"><%= titleReleasesA %>
                            </span>
                        </th>
                        <td>
                            <input tabindex="1" type="checkbox" class="checkboxRelease ReleasesA" id="ReleasesA" />
                            <span class="missing" id="regulatorymessage"></span>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <span class="checkBoxText"><%= titleReleasesC %>
                            </span>
                        </th>
                        <td>
                            <input tabindex="2" type="checkbox" class="checkboxRelease ReleasesC" id="ReleasesC" />
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <p>
                                <br />
                                Please enter your email address in the box below.
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <span class="inputTextTitle">
                                <%= titleEmailAdress %> *
                            </span>
                        </th>
                        <td>
                            <span class="inputText">
                                <input tabindex="5" class="informationInput enterInformationEmail" name="enterInformationEmail" type="text" value="" id="enterInformationEmail" />
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <th></th>
                        <td>
                            <input class="formRegister buttonStyle clearInput" type="submit" value="<%= titleRegisterButton %>" />
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <p>
                                &nbsp;
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span class="requiredAndLinkText">
                                <%= titleRequiredField %>    
                            </span>
                        </td>
                        <td>
                            <span class="requiredAndLinkText">
                            <a class="cleanLink formUnsubscribe unsubscribeNextToButton">Unsubscribe</a>
                            </span>
                        </td>
                    </tr>
                </table>

                <input type="hidden" name="activeClient" class="activeClient" value="<%= activeClient %>" />
                <input type="hidden" name="solutionID" class="solutionID" value="<%= solutionID %>" />
                <input type="hidden" name="instrumentID" class="instrumentID" value="<%= instrumentID %>" />
                <input type="hidden" name="companyAnnoucementLanguage" value="English" class="companyAnnoucementLanguage" id="companyAnnoucementLanguage" />

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

                <table>
                    <tr>
                        <th>
                            <span class="inputTextTitle">
                                <%= titleEmailAdress %> *
                            </span>
                        </th>
                        <td>
                            <span class="inputText">
                                <input tabindex="1" class="inputTextField unsubscribeEmail" name="unsubscribeEmail" type="text" value="" />
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <th>

                        </th>
                        <td>
                            <input class="formUnsubscribeInTool buttonStyle clearInput" type="submit" value="Unsubscribe" />
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <span class="requiredAndLinkText">
                                <%= titleRequiredField %>
                                <br />
                                <a class="cleanLink goToHome"><%= titleBackFromUnsubscribe %></a>
                            </span>
                        </td>
                    </tr>
                </table>
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
    <script type="text/javascript">
        $(function ()
        {
            $(".enterInformationEmail").keyup(function ()
            {
                if ($(".enterInformationEmail").val() != "") {
                    $(".enterInformationEmail").removeClass("actionRequired");
                }
            });
            $("#ReleasesA, #ReleasesC").click(function ()
            {
                if ($('#regulatorymessage').html() == 'Please select one') {
                    if (!$("#ReleasesA").is(':checked') && !$("#ReleasesC").is(':checked')) {
                        $('#regulatorymessage').html('Please select one');
                    } else {
                        $('#regulatorymessage').html('');
                    }
                }
            });
            $(".formRegister").click(function ()
            {
                if (!$("#ReleasesA").is(':checked') && !$("#ReleasesC").is(':checked')) {
                    $('#regulatorymessage').html('Please select one');
                } else {
                    $('#regulatorymessage').html('');
                }
                if ($(".enterInformationEmail").val() == "") {
                    $(".enterInformationEmail").addClass("actionRequired");
                }
                if (($("#ReleasesA").is(':checked') || $("#ReleasesC").is(':checked')) && $(".enterInformationEmail").val() != "") {
                    $(".formRegister").submit();
                }
            });
        });
    </script>
</body>
</html>