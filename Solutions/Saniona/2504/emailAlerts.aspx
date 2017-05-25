<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ OutputCache VaryByParam="*" Duration="1" %>

<% 
    // Settings
    string activeClient = "Saniona";
    int solutionID = 2504;
    int instrumentID = 20129291;
    bool showLoginToUnsubscribe = true;
    bool showEuroInvestorDisclaimer = false;

    //string linkToPrivacyStatement = "http://www.smith-nephew.com/privacy-statement/";
    //string privacyStatement = @"By pressing “Register” I confirm that I have read, understood and agree with the <a target=""_blank"" class=""cleanLink"" href=""" + linkToPrivacyStatement + @""">Privacy Statement</a> on this website";
    string privacyStatement = @""; // Overwrite with a custom privacy statement.

    string titleRequiredField = "* denotes required field";
    string titleReleasesAll = "All";
    string titleReleasesA = "Stock Exchange Announcement Alerts";
    string titleReleasesB = "Newsletter";
    string titleReleasesC = "Press Releases";
    //
    string titleFirstName = "First name";
    string titleLastName = "Surname";
    string titleCompany = "Company";
    string titleCountry = "Country";
    string titleOccupation = "Occupation";
    string titleProfession = "Profession"; // swedish translation = 'Yrke'
    string titleEmailAdress = "Email address";

    string language = Request.QueryString["language"];
    if (string.IsNullOrEmpty(language) || language != "se")
    {
        language = "en";
    }
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Email Alerts</title>
    <link rel="stylesheet" href="http://ir1.euroinvestor.com/ir/tools/EmailAlertsWithPush/inc/generic.css" />
    <link rel="stylesheet" href="inc/emailAlerts.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("inc/emailAlerts.css")).Ticks.ToString()%>" />
</head>
<body>

    <div class="content">

        <div class="pageRegister">

            <%
                if (showLoginToUnsubscribe)
                {
            %>

            <div class="subPageLogin">

                <h2 class="header loginText">Login</h2>
                <!--   <p>
                    If you have already subscribed, enter your email address here, and login to edit your preferences.<br />
                    If you would like to unsubscribe, please login and press the <b>unsubscribe</b> button
                </p>-->

                <form action="emailAlerts.aspx">

                    <p class="alreadySubscribedText">
                        If you have already subscribed, enter your email address here, and login to edit your preferences.<br />
                        If you would like to unsubscribe, please login and press the <strong>Unsubscribe</strong> button.
                    </p>
                    <br />
                    <span class="emailAdrTranslation"><%= titleEmailAdress %>:</span>
                    <div class="input-wrapper">
                        <input tabindex="1" class="informationInput enterInformationLoginEmail" name="enterInformationLoginEmail" type="email" value="" />

                        <input class="formLogin buttonStyle clearInput" type="button" value="Login" />
                    </div>
                </form>

            </div>


            <div class="subPageLoginConfirm pageVerification_placedAtSubmitbutton">
                <form action="emailAlerts.aspx">
                    <h3 style="font-weight: bold;" class="unsubscribeTranslation">Unsubscribe</h3>
                    <span class="unsubscribeSubText">Please confirm that you want to unsubscribe: </span><span class="emailToConfirm"></span>
                    <div class="closeBox goToHome">X</div>
                    <br />
                    <div class="blockInner">
                        <div class="inputText">
                            <input class="formLoginConfirm buttonStyle clearInput unsubscribeBtnTranslation" type="submit" value="Unsubscribe" style="margin-left: 0;" />
                        </div>
                    </div>
                    <div style="clear: both;"></div>

                </form>

                <div class="pageVerification pageVerification_top">
                    <div class="blockNoBorder noTopMargin">
                        <h2 class="removeHeight verificationTranslation">Verification...
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
                <h2 class="header registerTitleText">Register</h2>
                <p class="registerSubText">
                    Please follow the instructions below to automatically receive alerts about significant changes.<br />
                    Enter your email address and a little information about yourself, and then click on the <strong>Register</strong> button below (*indicates a required field).
                </p>
                <%--<p style="height:10px; line-height:10px; font-size:12px;"><br /> * indicates a required field</p>--%>
            </div>
            <div class="divider"></div>

            <form action="emailAlerts.aspx">

                <%--<input type="hidden" class="checkboxRelease ReleasesA" value="checked" id="ReleasesA" />--%>

                <div class="blockOuter">

                    <div class="blockInner">
                        <div class="inputTextTitle emailAdrTranslation">
                            <%= titleEmailAdress %>* :
                        </div>
                        <div class="inputText">
                            <input tabindex="2" class="informationInput enterInformationEmail" name="enterInformationEmail" type="text" value="" id="enterInformationEmail" />
                        </div>
                    </div>

                    <div class="blockInner">
                        <div class="inputTextTitle firstNameTranslation">
                            <%= titleFirstName %>* :
                        </div>
                        <div class="inputText">
                            <input tabindex="3" class="informationInput enterInformationFirstName" name="enterInformationFirstName" type="text" value="" id="enterInformationFirstName" />
                        </div>
                    </div>

                    <div class="blockInner">
                        <div class="inputTextTitle lastNameTranslation">
                            <%= titleLastName %>* :
                        </div>
                        <div class="inputText">
                            <input tabindex="4" class="informationInput enterInformationLastName" name="enterInformationLastName" type="text" value="" id="enterInformationLastName" />
                        </div>
                    </div>

                    <div class="blockInner">
                        <div class="inputTextTitle companyTranslation">
                            <%= titleCompany %>:
                        </div>
                        <div class="inputText">
                            <input tabindex="5" class="informationInput enterInformationCompany" name="enterInformationCompany" type="text" value="" id="enterInformationCompany" />
                        </div>
                    </div>

                    <div class="blockInner">
                        <div class="inputTextTitle countryTranslation">
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
                    <h2 class="header alertTranslation">Alerts</h2>
                    <p class="alertSubText">
                        Select the alerts you wish to receive.
                    </p>

                    <!--<div class="divider"></div> -->

                    <div class="blockOuter">
                        <label>
                            <span class="checkboxOuter">
                                <input tabindex="6" type="checkbox" class="ReleasesTriggerAll" id="ReleasesTriggerAll" />
                            </span>
                            <span class="checkBoxText releaseAllTranslation"><%= titleReleasesAll %>
                            </span>
                        </label>
                    </div>

                    <div class="blockOuter indent">
                        <label>
                            <span class="checkboxOuter">
                                <input tabindex="7" type="checkbox" class="checkboxRelease ReleasesA" id="ReleasesA" />
                            </span>
                            <span class="checkBoxText releaseATranslation"><%= titleReleasesA %>
                            </span>
                        </label>
                    </div>
                    <div class="blockOuter indent">
                        <label>
                            <span class="checkboxOuter">
                                <input tabindex="8" type="checkbox" class="checkboxRelease ReleasesC" id="ReleasesC" />
                            </span>
                            <span class="checkBoxText releaseCTranslation"><%= titleReleasesC %>
                            </span>
                        </label>
                    </div>
                    <div class="blockOuter indent">
                        <label>
                            <span class="checkboxOuter">
                                <input tabindex="9" type="checkbox" class="checkboxRelease ReleasesB" id="ReleasesB" />
                            </span>
                            <span class="checkBoxText releaseBTranslation"><%= titleReleasesB %>
                            </span>
                        </label>


                    </div>
                    <%--<p style="margin-bottom: 15px;">
                        From time to time, we may use your registration details to provide you with additional information about us which may be of interest to you.
                    </p>
                    <label>
                        <span class="checkboxOuter">
                            <input tabindex="8" type="checkbox" class="checkboxRelease ReleasesC" id="ReleasesC" />
                        </span>
                        <span class="checkBoxText releaseCTranslation"><%= titleReleasesC %>
                        </span> 
                    </label>--%>
                    <%-- <p>Our <a title="View our Privacy Policy (opens in a popup window)" rel="privacyEmail" href="#" class="nobdr">Privacy Policy</a> statement explains how we handle and store your personal data.</p>--%>


                    <div class="divider"></div>
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
        </div>


        <div class="pageUnsubscribe">

            <form action="emailalerts.aspx">

                <input type="hidden" name="activeClient" class="activeClient" value="<%= activeClient %>" />
                <input type="hidden" name="solutionID" class="solutionID" value="<%= solutionID %>" />
                <input type="hidden" name="instrumentID" class="instrumentID" value="<%= instrumentID %>" />

                <div class="blockNoBorder">
                    <h2 class="unsubscribeTranslation">Unsubscribe
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

                        <input class="formUnsubscribeInTool buttonStyle clearInput unsubscribeBtnTranslation" type="submit" value="Unsubscribe" />
                        <a class="cleanLink goToHome">X</a>
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
    <%--<script type="text/javascript" src="http://ir1.euroinvestor.com/ir/tools/EmailAlertsWithPush/inc/generic_mobileOverlayFix.js"></script>
     <script type="text/javascript" src="http://ir.euroinvestor.com/Tools/EmailAlertsWithPush/Inc/genericIR_mobileOverlayFix.js"></script>--%>
    <%--<script type="text/javascript" src="customMobileOverlayFix.js?<%= language %>"></script>--%>
    <script type="text/javascript" charset="ISO-8859-1" src="customMobileOverlayFix.js?<%= language %>&v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("customMobileOverlayFix.js")).Ticks.ToString()%>"></script>

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

        

        $('#ReleasesTriggerAll').on('click', function () {
            
            //$('#ReleasesA, #ReleasesB, #ReleasesC').removeClass('checked');

            if ($(this).prop("checked")) {
                $('#ReleasesA').prop("checked", true);
                $('#ReleasesC').prop("checked", true);
                $('#ReleasesB').prop("checked", true);
                //$('#ReleasesA, #ReleasesB, #ReleasesC').addClass('checked');
            } else {
                $('#ReleasesA').prop("checked", false);
                $('#ReleasesC').prop("checked", false);
                $('#ReleasesB').prop("checked", false);
            }

        });

        $('#ReleasesA, #ReleasesB, #ReleasesC').on('click', function () {
            
            var checked = 0;
            if ($('#ReleasesA').prop("checked")) {
                checked += 1;
            }
            if ($('#ReleasesB').prop("checked")) {
                checked += 1;
            }
            if ($('#ReleasesC').prop("checked")) {
                checked += 1;
            }
            
            if (checked == 3) {
                $('#ReleasesTriggerAll').prop("checked", true);
            } else {
                $('#ReleasesTriggerAll').prop("checked", false);
            }

        });

    });

    if ('<%= language %>' == 'se' || '<%= language %>' == 'SE') {
        $(".loginText").html("Logga in");
        $(".alreadySubscribedText").html("Om du redan är registrerad, vänligen fyll i din email adress här för att ändra dina preferenser.<br />" +
            "Om du vill avbryta din prenumeration, vänligen logga in och tryck på 'avsluta prenumeration'.");
        $('.emailAdrTranslation').html('Email adress');
        $('.formLogin.buttonStyle').val('Logga in');
        $('.registerTitleText').html('Registera');
        $('.registerSubText').html("Vänligen, följ instruktionerna nedan för att ta emot e-postmeddelanden angående viktiga ändringar.<br />" +
            "Fyll i din email adress och ytterligare information, klicka sedan på 'registrera' (*obligatoriskt fält)");
        $('.firstNameTranslation').html('Förnamn');
        $('.lastNameTranslation').html('Efternamn');
        $('.companyTranslation').html('Företag');
        $('.countryTranslation').html('Land');
        $('.alertTranslation').html('e-postmeddelanden');
        $('.alertSubText').html('Välj de e-postmeddelanden du vill ta emot');
        $('.releaseAllTranslation').html('All');
        $('.releaseATranslation').html('Börsmeddelanden');
        $('.releaseCTranslation').html('Pressmeddelanden');
        $('.releaseBTranslation').html('Nyhetsbrev');
        //$('.releaseCTranslation').html('Om du önskar att bli kontaktad, vänligen kryssa för den här rutan');
        $(".formRegister").val("Registrér");

        $(".unsubscribeTranslation").html("Avsluta prenumeration");
        $(".unsubscribeBtnTranslation").val("Avsluta prenumeration");
        $(".unsubscribeSubText").html("Vänligen bekräfta att du vill avsluta din prenumeration.");

        $(".verificationTranslation").html("Verifikation...");

        //$(".goToHome").append("Tillbaka");
        //$(".subcribeText").append("Indtast din mail, hvis du ønsker at modtage selskabsmeddelelser.");
        //$("#emailAlertsTitle").append("Abonnér på mail nyheder");
        //$(".formUnsubscribe").append("Afmeld");
        //$(".formUnsubscribeInTool").val("Afmeld");
        //$(".unsubcribeTitle").append("Afmeld");
        //$(".unsubcribeText").append("Indtast venligst din email for at afmelde");



    } else if ('<%= language %>' == 'en' || '<%= language %>' == 'EN') {
        $(".subcribeText").append("Register to recieve company announcements.");
        $(".formRegister").val("Register");
        $("#emailAlertsTitle").append("Email alerts");
        $(".formUnsubscribe").append("Unsubscribe");
        $(".unsubcribeTitle").append("Unsubscribe");
        $(".unsubcribeText").append("Please enter your email address to unsubscribe");
        //$(".goToHome").append("X");
    }

</script>
