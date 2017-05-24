<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ OutputCache VaryByParam="*" Duration="1" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>


<% 
    // Settings
    string activeClient = "Jeudan";
    int solutionID = 2748;
    int instrumentID = 207307;
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

    <script type="text/javascript">
        var activeModules = ['IRCustomModule'];
    </script>

    <link rel="stylesheet" href="http://fast.fonts.net/cssapi/c8776784-5d75-432d-ae59-d50b8bc58a15.css" />
    <link rel="stylesheet" href="http://ir1.euroinvestor.com/ir/tools/EmailAlertsWithPush/inc/generic.css" />
    <link rel="stylesheet" href="inc/emailAlerts.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("inc/emailAlerts.css")).Ticks.ToString()%>" />
</head>

<div id="emailAlertData"></div>

<script id="IRDataTemplate" type="text/x-handlebars-template">
    <body>
        <div class="semiTransparantOverlay hidden"></div>
        <div class="content">

            <div class="pageRegister">

                <%
                    if (showLoginToUnsubscribe)
                    {
                %>

                <div class="subPageLogin">

                    <h2 class="header">{{headers/t_login}}</h2>
                    <p>
                        {{headers/t_description_login}}
                    </p>

                    <form action="emailAlerts.aspx">

                        <br />
                        <b>{{headers/t_email_address}}</b>
                        <input tabindex="1" class="informationInput enterInformationLoginEmail" name="enterInformationLoginEmail" type="email" value="" style="width: 230px; position: relative;" />

                        <input class="formLoginConfirm buttonStyle clearInput" style="position: relative; top: 0px;" type="button" value="{{headers/t_submit}}" />

                    </form>

                </div>
                <div class="subPageLoginConfirm">

                    <form action="emailAlerts.aspx">
                        {{headers/t_please_confirm_that_you_want_to_unsubscribe}}: 
                        <span class="emailToConfirm"></span>
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


                <%-- <h2 class="header">{{headers/t_register}}</h2>
                <p>
                    {{headers/t_description_contact_details}}</p>




                <div class="divider"></div>--%>

                <form action="emailAlerts.aspx">

                    <input type="hidden" class="checkboxRelease ReleasesA" value="checked" id="ReleasesA" checked="checked" />
                    <input type="hidden" class="checkboxRelease ReleasesB" value="checked" id="ReleasesB" checked="checked" />

                    <div class="blockOuter">
                        <div class="blockInner">
                            <div class="inputTextTitle">
                                {{headers/t_first_name}} 
                            </div>
                            <div class="inputText">
                                <input tabindex="3" class="informationInput enterInformationFirstName" name="enterInformationFirstName" type="text" value="" id="enterInformationFirstName" placeholder="{{headers/t_first_name}}" />
                            </div>
                        </div>

                        <div class="blockInner">
                            <div class="inputTextTitle">
                                {{headers/t_last_name}} 
                            </div>
                            <div class="inputText">
                                <input tabindex="4" class="informationInput enterInformationLastName" name="enterInformationLastName" type="text" value="" id="enterInformationLastName" placeholder="{{headers/t_last_name}}" />
                            </div>
                        </div>
                        <div class="blockInner">
                            <div class="inputTextTitle">
                                {{headers/t_email}} 
                            </div>
                            <div class="inputText">
                                <input tabindex="2" class="informationInput enterInformationEmail" name="enterInformationEmail" type="text" value="" id="enterInformationEmail" placeholder="{{headers/t_email}}" />
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



                    <div class="divider"></div>

                    <p class="disclaimerHighlight">
                        <%= privacyStatement %>
                    </p>

                    <div class="divider"></div>

                    <input type="hidden" name="activeClient" class="activeClient" value="<%= activeClient %>" />
                    <input type="hidden" name="solutionID" class="solutionID" value="<%= solutionID %>" />
                    <input type="hidden" name="instrumentID" class="instrumentID" value="<%= instrumentID %>" />
                    <input type="hidden" name="companyAnnoucementLanguage" value="English" class="companyAnnoucementLanguage" id="companyAnnoucementLanguage" />



                    <div class="blockNoBorder buttonsWrapper">
                        <input type="button" tabindex="9" class="formRegister buttonStyle clearInput" value="{{headers/t_register}}" />
                        <a class="cleanLink formUnsubscribe unsubscribeNextToButton">{{headers/t_unsubscribe}}</a>
                    </div>

                </form>
            </div>

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


            <div class="pageUnsubscribe">

                <form action="emailalerts.aspx">

                    <input type="hidden" name="activeClient" class="activeClient" value="<%= activeClient %>" />
                    <input type="hidden" name="solutionID" class="solutionID" value="<%= solutionID %>" />
                    <input type="hidden" name="instrumentID" class="instrumentID" value="<%= instrumentID %>" />

                    <div class="blockNoBorder pageUnsubscribeWrapper">
                        <h2>{{headers/t_unsubscribe}}
                        </h2>
                        <p>
                            {{headers/t_please_enter_a_valid_email_address_to_unsubscribe}}.
                        </p>

                        <div class="divider"></div>

                        <div class="blockInner">
                            <div class="inputTextTitle">
                                {{headers/t_email}}
                            </div>
                            <div class="inputText">
                                <input tabindex="1" class="inputTextField unsubscribeEmail" name="unsubscribeEmail" type="text" value="" />
                            </div>
                        </div>

                        <div class="divider"></div>

                        <div class="blockNoBorder buttonsWrapper">

                            <div class="divider"></div>
                            <div class="divider"></div>

                            <input class="formUnsubscribeInTool buttonStyle clearInput" type="submit" value="{{headers/t_unsubscribe}}" />
                            <a class="cleanLink goToHome formUnsubscribeGoBack">{{headers/t_back}}</a>
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

        </div>

    </body>
</script>


<%= site.newFooter("IRCustomModule") %>


<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
<script type="text/javascript" src="inc/emailAlerts.js?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("inc/emailAlerts.js")).Ticks.ToString()%>"></script>
<script type="text/javascript" src="http://ir.euroinvestor.com/tools/EmailAlertsWithPush/inc/genericIR.js"></script>
<script type="text/javascript" src="customMobileOverlayFix.js?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("customMobileOverlayFix.js")).Ticks.ToString()%>"></script>

</html>
