<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="System.Web.Razor.Parser" %>
<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>
<% 
    // Settings
    string activeClient = "EasyHotelPlc";
    int solutionID = 3504;
    int instrumentID = 21331013;
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
    <link rel="stylesheet" href="ir.client.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("ir.client.css")).Ticks.ToString()%>" />
</head>

<div id="emailAlertData"></div>


<script id="IRDataTemplate" type="text/x-handlebars-template">
    <body style="font-size: 16px; overflow: hidden">
        <div class="semiTransparantOverlay hidden"></div>

        <div class="content">

            <div class="pageRegister">



                <div class="register-wrapper">

                    <h2 class="header">{{headers/t_register_title}}</h2>
                    <p>
                        {{headers/t_description_contact_details}}
                    <br />
                        (* {{headers/t_required_field}}).
                    </p>

                </div>
                <div class="divider"></div>

                <form action="emailAlerts.aspx">



                    <div class="blockOuter">

                        <div class="blockInner">
                            <div class="inputTextTitle">
                                {{headers/t_email_address}}: * 
                            </div>
                            <div class="inputText">
                                <input tabindex="2" class="informationInput enterInformationEmail" name="enterInformationEmail" type="email" value="" id="enterInformationEmail" />
                                <div class="messageEmail">Please enter a valid email address</div>
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



                        <p class="requiredField">
                            <span class="requiredFieldMSG"></span>
                        </p>


                    </div>

                    <div style="clear: both;"></div>

                    <div class="divideLine"></div>
                    <div class="alert-wrapper">
                        <br />

                        <p>
                            {{headers/t_recieve_alerts}}
                        </p>

                        <!--<div class="divider"></div> -->
                        <br />
                        <div class="blockOuter indent">
                            <label>
                                <span class="checkboxOuter">
                                    <input tabindex="7" type="checkbox" class="checkboxRelease ReleasesA" id="ReleasesA" />
                                    <span class="checkBoxText">{{headers/t_titleReleasesA}}
                                    </span>
                                </span>
                            </label>

                            <br />

                            <span style="float:left; line-height: 20px; margin-top: 15px; margin-bottom: 20px;">From time to time, we may use your registration details to provide you with additional information about us and our products and services which may be of interest to you.
                            </span>

                            <br />

                            <label>
                                <span class="checkboxOuter">
                                    <input tabindex="8" type="checkbox" class="checkboxRelease ReleasesC" id="ReleasesC" />
                                    <span class="checkBoxText">{{headers/t_titleReleasesC}}
                                    </span>
                                </span>

                            </label>



                            <div class="divider"></div>
                        </div>
                    </div>

                    <div style="clear: both;"></div>


                    <p class="disclaimerHighlight">
                    </p>
                   
                    <input type="hidden" name="activeClient" class="activeClient" value="EasyHotelPlc" />
                    <input type="hidden" name="solutionID" class="solutionID" value="3504" />
                    <input type="hidden" name="instrumentID" class="instrumentID" value="21331013" />
                    <input type="hidden" name="companyAnnoucementLanguage" value="English" class="companyAnnoucementLanguage" id="companyAnnoucementLanguage" />


                    <div class="blockNoBorder pageVerification_placedAtSubmitbutton">
                        <input type="button" tabindex="9" class="formRegister buttonStyle clearInput" value="{{headers/t_register}}" />

                        <a class="formUnsubscribe buttonUnsubscribe">{{headers/t_unsubscribe}}</a>

                        <div class="pageVerification pageVerification_bottom">
                            <div class="blockNoBorder noTopMargin">
                                <h2 class="removeHeight">{{headers/t_verification}}...
                                </h2>
                                <span class="popup-close x-close">X</span>
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
                   
                    <input type="hidden" name="activeClient" class="activeClient" value="EasyHotelPlc" />
                    <input type="hidden" name="solutionID" class="solutionID" value="3504" />
                    <input type="hidden" name="instrumentID" class="instrumentID" value="21331013" />

                    <div class="blockNoBorder">
                        <h2 class="customPopUp">{{headers/t_unsubscribe}}
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
                                <input tabindex="1" class="inputTextField informationInput unsubscribeEmail" name="unsubscribeEmail" type="email" value="" />
                                <div class="messageEmail">Please enter a valid email address</div>
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
                        <span class="popup-close x-close">X</span>
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
<script type="text/javascript" src="inc/emailAlerts.js?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("inc/emailAlerts.js")).Ticks.ToString()%>"></script>
<%--<script type="text/javascript" src="http://ir1.euroinvestor.com/ir/tools/EmailAlertsWithPush/inc/generic_mobileOverlayFix.js"></script>--%>
<script type="text/javascript" src="customMobileOverlayFix.js?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("customMobileOverlayFix.js")).Ticks.ToString()%>"></script>

</html>
