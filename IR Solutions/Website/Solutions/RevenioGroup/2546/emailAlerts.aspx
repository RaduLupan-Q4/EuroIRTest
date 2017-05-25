<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="System.Web.Razor.Parser" %>
<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>
<% 
    // Settings
    string activeClient = "RevenioGroup";
    int solutionID = 2546;
    int instrumentID = 2032633;
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

    <script type="text/javascript">
        var activeModules = ['IRCustomModule'];
    </script>
    <link rel="stylesheet" href="http://ir1.euroinvestor.com/ir/tools/EmailAlertsWithPush/inc/generic.css" />
    <link rel="stylesheet" href="inc/emailAlerts.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("inc/emailAlerts.css")).Ticks.ToString()%>" />
</head>

<div id="emailAlertData"></div>


<script id="IRDataTemplate" type="text/x-handlebars-template">
    <body style="font-size: 16px; overflow: hidden">
        <div class="semiTransparantOverlay hidden"></div>

        <div class="content">

            <div class="pageRegister">

                <%--

                <%
                    if (showLoginToUnsubscribe)
                    {
                %>

                <div class="subPageLogin">


                    <h2 class="header">{{headers/t_login}}</h2>
                    <!--   <p>
                    If you have already subscribed, enter your email address here, and login to edit your preferences.<br />
                    If you would like to unsubscribe, please login and press the <b>unsubscribe</b> button
                </p>-->

                    <form action="emailAlerts.aspx">

                        <p>
                            {{headers/t_description_login}}
                        </p>
                        <br />
                        <span>{{headers/t_email_address}}:</span>
                        <div class="input-wrapper">
                            <input tabindex="1" class="informationInput enterInformationLoginEmail" name="enterInformationLoginEmail" type="email" value="" />

                            <input class="formLogin buttonStyle clearInput" type="button" value="{{headers/t_login}}" />
                        </div>
                    </form>

                </div>


                <div class="subPageLoginConfirm pageVerification_placedAtSubmitbutton">
                    <br />
                    <br />
                    <form action="emailAlerts.aspx">
                        {{headers/t_description_unsubscribe}}: <span class="emailToConfirm"></span>
                        <br />
                        <div class="blockInner">
                            <div class="inputText">
                                <input class="formLoginConfirm buttonStyle clearInput" type="submit" value="{{headers/t_unsubscribe}}" />
                            </div>
                        </div>
                        <div style="clear: both;"></div>

                    </form>

                    <div class="pageVerification pageVerification_top">
                        <div class="blockNoBorder noTopMargin">
                            <h2 class="removeHeight">{{headers/t_verification}}...
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

                --%>

                <div class="register-wrapper">

                    <h2 class="header">{{headers/t_register_title}}</h2>
                    <p>
                        {{headers/t_description_contact_details}}
                    <br />
                        (* {{headers/t_required_field}}).
                    </p>
                    <%--<p style="height:10px; line-height:10px; font-size:12px;"><br /> * indicates a required field</p>--%>
                </div>
                <div class="divider"></div>

                <form action="emailAlerts.aspx">

                    <%--<input type="hidden" class="checkboxRelease ReleasesA" value="checked" id="ReleasesA" />--%>

                    <div class="blockOuter">

                        <div class="blockInner">
                            <div class="inputTextTitle">
                                {{headers/t_email_address}}: * 
                            </div>
                            <div class="inputText">
                                <input tabindex="2" class="informationInput enterInformationEmail" name="enterInformationEmail" type="text" value="" id="enterInformationEmail" />
                            </div>
                        </div>

                        <div class="blockInner">
                            <div class="inputTextTitle">
                                {{headers/t_first_name}}: *
                            </div>
                            <div class="inputText">
                                <input tabindex="3" class="informationInput enterInformationFirstName" name="enterInformationFirstName" type="text" value="" id="enterInformationFirstName" />
                            </div>
                        </div>

                        <div class="blockInner">
                            <div class="inputTextTitle">
                                {{headers/t_surname}}: * 
                            </div>
                            <div class="inputText">
                                <input tabindex="4" class="informationInput enterInformationLastName" name="enterInformationLastName" type="text" value="" id="enterInformationLastName" />
                            </div>
                        </div>

                        <div class="blockInner">
                            <div class="inputTextTitle">
                                {{headers/t_company}}:
                            </div>
                            <div class="inputText">
                                <input tabindex="5" class="informationInput enterInformationCompany" name="enterInformationCompany" type="text" value="" id="enterInformationCompany" />
                            </div>
                        </div>

                        <div class="blockInner">
                            <div class="inputTextTitle">
                                {{headers/t_country}}:
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
                        <br />
                        <%--<h2 class="header">{{headers/t_announcements}}</h2>--%>
                        <p>
                            {{headers/t_recieve_alerts}}
                        </p>

                        <!--<div class="divider"></div> -->
                        <br />
                        <div class="blockOuter indent">
                            <label>
                                <span class="checkboxOuter">
                                    <input tabindex="7" type="checkbox" class="checkboxRelease ReleasesA" id="ReleasesA" />
                                </span>
                                <span class="checkBoxText">{{headers/t_titleReleasesA}}
                                </span>
                            </label>

                            <%--<p style="margin-top: 19px; line-height: 25px;">
                                {{headers/t_from_time_to_time}}
                            </p>--%>
                            <br />
                            <% string language = Request.QueryString["language"];
                                if (language != "fi")
                                { %>
                            <label>
                                <span class="checkboxOuter">
                                    <input tabindex="8" type="checkbox" class="checkboxRelease ReleasesC" id="ReleasesC" />
                                </span>
                                <span class="checkBoxText">{{headers/t_titleReleasesC}}
                                </span>
                            </label>
                            <% } %>

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
                        <input type="button" tabindex="9" class="formRegister buttonStyle clearInput" value="{{headers/t_register}}" />

                        <a class="formUnsubscribe buttonUnsubscribe">{{headers/t_unsubscribe}}</a>

                        <div class="pageVerification pageVerification_bottom">
                            <div class="blockNoBorder noTopMargin">
                                <h2 class="removeHeight">{{headers/t_verification}}...
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

                </form>
            </div>


            <div class="pageUnsubscribe">

                <form action="emailalerts.aspx">

                    <input type="hidden" name="activeClient" class="activeClient" value="<%= activeClient %>" />
                    <input type="hidden" name="solutionID" class="solutionID" value="<%= solutionID %>" />
                    <input type="hidden" name="instrumentID" class="instrumentID" value="<%= instrumentID %>" />

                    <div class="blockNoBorder">
                        <h2>{{headers/t_unsubscribe}}
                        </h2>
                        <p>
                            {{headers/t_email_to_unsubscribe}}.
                        </p>

                        <div class="divider"></div>

                        <div class="blockInner">
                            <div class="inputTextTitle">
                                {{headers/t_email_address}} *
                            </div>
                            <div class="inputText">
                                <input tabindex="1" class="inputTextField unsubscribeEmail" name="unsubscribeEmail" type="text" value="" />
                            </div>
                        </div>

                        <div class="divider"></div>

                        <div class="blockNoBorder">

                            <div class="divider"></div>
                            <div class="divider"></div>

                            <input class="formUnsubscribeInTool buttonStyle clearInput" type="submit" value="{{headers/t_unsubscribe}}" />
                            <a class="goToHome formUnsubscribeGoBack">{{headers/t_back}}</a>
                        </div>

                    </div>

                </form>
                <div class="pageVerification pageVerification_top">
                    <div class="blockNoBorder noTopMargin">
                        <h2 class="removeHeight">{{headers/t_verification}}...
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
                if (showEuroInvestorDisclaimer)
                {
                    Server.Execute("~/Disclaimers/emailAlertsDisclaimer.aspx");
                }
            %>
        </div>

    </body>
</script>



<%= site.newFooter("IRCustomModule") %>
<script type="text/javascript" src="inc/emailAlerts.js?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("inc/emailAlerts.js")).Ticks.ToString()%>"></script>
<%--<script type="text/javascript" src="http://ir1.euroinvestor.com/ir/tools/EmailAlertsWithPush/inc/generic_mobileOverlayFix.js"></script>--%>
<script type="text/javascript" src="customMobileOverlayFix.js"></script>

</html>
