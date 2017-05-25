<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>
<% 
    // Settings
    string activeClient = "Raute";
    int solutionID = 2378;
    int instrumentID = 591070;
    bool showLoginToUnsubscribe = true;
    bool showEuroInvestorDisclaimer = false;

    string[] RNSFilters = { "Select all", "Acquisition and Realisations", "Reports and Accounts", "Monthly Net Asset Value (NAV)", "Event Notes", "Results and Trading Statements", "Director Dealings", "Board / Management", "Dividends", "Other Shareholder Documents", "Half Yearly Report" };
    string[] RNSFiltersGroup = { "allRNSnews", "ACQ, DIS", "ACS", "NAV", "NOA,NOE,RAG,REG,AGM,EGM", "FR,IR,QRF,QRT,NOR", "RDN,RDS,POS", "BOA,APP", "DIV", "ODP,PDI", "IR" };

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
    <link rel="stylesheet" href="inc/emailAlerts.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("inc/emailAlerts.css")).Ticks.ToString()%>" />

    <link href='https://fonts.googleapis.com/css?family=Roboto:400,300,700' rel='stylesheet' type='text/css'>
    <script type="text/javascript">
        var activeModules = ['IRCustomModule'];
    </script>
</head>


<div id="emailAlertData"></div>


<script id="IRDataTemplate" type="text/x-handlebars-template">
    <body style="font-size: 16px; overflow: hidden">

        <div class="content">

            <div class="pageRegister">



                <div class="subPageLogin">
                    <div class="divideLine"></div>

                    <h2 class="header">{{headers/t_unsubscribe}}</h2>
                    <!--   <p>
                    If you have already subscribed, enter your email address here, and login to edit your preferences.<br />
                    If you would like to unsubscribe, please login and press the <b>unsubscribe</b> button
                </p>-->

                    <form action="emailAlerts.aspx">

                        <p>
                           {{headers/t_description_unsubscribe}}
                        </p>
                        <br />
                        <span>{{headers/t_email_address}}:</span>
                        <div class="input-wrapper">
                            <input tabindex="1" class="informationInput enterInformationLoginEmail" name="enterInformationLoginEmail" type="email" value="" />

                            <input class="formLogin buttonStyle clearInput" type="button" value="{{headers/t_unsubscribe}}" />
                        </div>
                    </form>

                </div>


                <div class="subPageLoginConfirm pageVerification_placedAtSubmitbutton">

                    <form action="emailAlerts.aspx">
                        {{headers/t_description_unsubscribe}}: <span class="emailToConfirm"></span>
                        <br />
                        <div class="blockInner">
                            <div class="closeBox goToHome">X</div>
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

                <div class="register-wrapper">
                    <div class="divideLine"></div>
                    <h2 class="header">{{headers/t_register}}</h2>
                    <p>
                       <%-- Please follow the instructions below to automatically receive alerts about significant changes.<br />
                        <br />
                        Enter your email address and a little information about yourself, and then click on the <strong>Register</strong> button below (*indicates a required field).--%>
                    {{headers/t_description_contact_details}}
                    </p>

                </div>
                <div class="divider"></div>

                <form action="emailAlerts.aspx">



                    <div class="blockOuterWrapper">
                        <br />
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



                        <p class="requiredField">
                            <span class="requiredFieldMSG"></span>
                        </p>


                    </div>

                    <div style="clear: both;"></div>

                    <div class="divideLine"></div>
                    <div class="alert-wrapper">
                        <h2 class="header">{{headers/t_alerts}}</h2>
                        <p>
                            {{headers/t_description_releases}}. *
                        </p>

                        <!--<div class="divider"></div> -->

                        <div class="blockOuter indent">
                            <label>
                                <span class="checkboxOuter">
                                    <input tabindex="7" type="checkbox" class="checkboxRelease ReleasesA" id="ReleasesA" />
                                </span>
                                <span class="checkBoxText">{{headers/t_titleReleasesA}}
                                </span>
                            </label>



                            <p style="margin-bottom: 15px;">
                                {{headers/t_from_time_to_time}}
                            </p>
                            <label>
                                <span class="checkboxOuter">
                                    <input tabindex="8" type="checkbox" class="checkboxRelease ReleasesC" id="ReleasesC" />
                                </span>
                                <span class="checkBoxText">{{headers/t_titleReleasesC}}
                                </span>
                            </label>

                            <div class="divider"></div>
                        </div>
                    </div>

                    <div style="clear: both;"></div>


                    <p class="disclaimerHighlight">
                    </p>


                    <input type="hidden" name="activeClient" class="activeClient" value="Raute" />
                    <input type="hidden" name="solutionID" class="solutionID" value="2378" />
                    <input type="hidden" name="instrumentID" class="instrumentID" value="591070" />
                    <input type="hidden" name="companyAnnoucementLanguage" value="English" class="companyAnnoucementLanguage" id="companyAnnoucementLanguage" />


                    <div class="blockNoBorder pageVerification_placedAtSubmitbutton">
                        <input type="button" tabindex="9" class="formRegister buttonStyle clearInput" value="{{headers/t_register}}" style="float: left;" />
                        <%--<a class="cleanLink formUnsubscribe unsubscribeNextToButton" style="color: #019D54; background: none; text-decoration: underline; font-weight: normal; border: 0;">{{headers/t_unsubscribe}}</a>--%>
                        <div class="pageVerification pageVerification_bottom">
                            <div class="blockNoBorder noTopMargin">
                                <h2 class="removeHeight">{{headers/t_verification}}...
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
            </div>


            <div class="pageUnsubscribe">

                <form action="emailalerts.aspx">

                    <input type="hidden" name="activeClient" class="activeClient" value="Raute" />
                    <input type="hidden" name="solutionID" class="solutionID" value="2378" />
                    <input type="hidden" name="instrumentID" class="instrumentID" value="591070" />

                    <div class="blockNoBorder">
                        <h2>{{headers/t_unsubscribe}}
                        </h2>
                        <p>
                            {{headers/t_email_to_unsubscribe}}.
                        </p>

                        <div class="divider"></div>

                        <div class="blockInner">
                            <div class="inputTextTitle">
                                {{headers/t_email_address}}: *
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
                            <a class="cleanLink goToHome" style="margin-right: 10px; line-height: 20px; padding-top: 5px; font-size: 14px;">Back</a>
                        </div>

                    </div>

                </form>

            </div>

            <div class="divider"></div>

        </div>



        <div class="semiTransparantOverlay hidden"></div>
    </body>
</script>
  
            <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>

        <script type="text/javascript" src="http://ir.euroinvestor.com/Tools/EmailAlertsWithPush/Inc/genericIR_mobileOverlayFix.js"></script>  
    
    <%= site.newFooter("IRCustomModule") %>
<script type="text/javascript" src="inc/emailAlerts.js?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("inc/emailAlerts.js")).Ticks.ToString()%>"></script>
<script type="text/javascript" src="customMobileOverlayFix.js"></script>

<%--<script type="text/javascript" src="checkbox.js?v=15"></script>--%>
<script type="text/javascript">

    $('#loginscreen_loginButton').click(function () {
        var getUserInformationFromEmail = $('#getUserInformationFromEmail').val();
        $.ajax({
            url: '../../../Tools/EmailAlertsWithPush/EmailAlertsManager.aspx?action=getuserinformation&solutionID=2378&ts=' + (new Date).getTime(),
            //url: 'http://localhost:61531/EmailAlertsManager.aspx?action=getuserinformation&solutionID=2290&ts=' + (new Date).getTime(),
            type: "POST",
            dataType: "json",
            cache: false,
            data: {
                getUserInformationFromEmail: getUserInformationFromEmail
            },
            success: function (userData) {
                if ((userData.userExist + '') == 'True') {
                    $('#enterInformationEmailRNSFilter').val(userData.optional_email);
                    $('#enterInformationFirstName').val(userData.optional_firstname);
                    $('#enterInformationLastName').val(userData.optional_lastname);
                    var country = userData.optional_country + '';
                    if (country.length > 1) {
                        $('#enterInformationCountry').parent().find("input[placeholder='Type your country']").val(userData.optional_country.charAt(0).toUpperCase() + userData.optional_country.slice(1));
                        var countrySelector = '#enterInformationCountry option[value="' + userData.optional_country + '"]';
                        $(countrySelector).attr('selected', 'selected');
                    }

                    $('#enterInformationProfession option[value=' + userData.optional_profession + ']').attr('selected', 'selected');
                    var rnsFilter = userData.rnsCategories.split(',');
                    $('.checkbox').removeClass('checked');
                    for (count = 0; count < rnsFilter.length; count++) {
                        $('#' + rnsFilter[count].toUpperCase()).addClass('checked');
                        if (rnsFilter[count].toUpperCase() == 'ACQ' || rnsFilter[count].toUpperCase() == 'FR' || rnsFilter[count].toUpperCase() == 'IR') {
                            $(".checkboxRNSFilter[enabledfilters=ACQFRIR]").addClass('checked');
                        }
                    }

                    var releaseCEnabled = userData.releaseCEnabled;
                    if (releaseCEnabled == 'True') {
                        $('input[name=release]').parent().find('input[value=checked]').click();
                    } else {
                        $('input[name=release]').parent().find('input[value=no]').click();
                    }
                    var rssEnabled = userData.rssEnabled;
                    if (rssEnabled == 'True') {
                        $('#ReleaseRSS').addClass('checked');
                    } else {
                        $('#ReleaseRSS').removeClass('checked');
                    }

                    $('#loginscreen').hide();
                    $('.blockOuter').show();
                    $('.loginText').hide();
                    $('.unsubscribeText').show();
                    $('input.formRegister').val('Update Information');
                } else {
                    //If user does not exists
                    $('#loginscreen').hide();
                    $('#invalidemailscreen').show();
                }


            }
        });

    });

</script>


</html>

