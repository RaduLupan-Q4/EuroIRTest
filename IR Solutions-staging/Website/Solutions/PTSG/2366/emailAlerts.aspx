<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ OutputCache VaryByParam="*" Duration="1" %>
<% 
    // Settings
    string activeClient = "PTSG";
    int solutionID = 2366;
    int instrumentID = 25001122;
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
</head>
<body style="font-size: 16px;overflow:hidden">

    <div class="content">

        <div class="pageRegister">



            <div class="subPageLogin">
                <div class="divideLine"></div>

                <h2 class="header">Login</h2>
             <!--   <p>
                    If you have already subscribed, enter your email address here, and login to edit your preferences.<br />
                    If you would like to unsubscribe, please login and press the <b>unsubscribe</b> button
                </p>-->

                <form action="emailAlerts.aspx">

               <p>   If you have already subscribed, enter your email address here, and login to edit your preferences.<br /><br />
If you would like to unsubscribe, please login and press the <strong>Unsubscribe</strong> button.</p><br/>
                    <span>Email address:</span>
                    <div class="input-wrapper">
                        <input tabindex="1" class="informationInput enterInformationLoginEmail" name="enterInformationLoginEmail" type="email" value="" />

                        <input class="formLogin buttonStyle clearInput" type="button" value="Login" />
                    </div>
                </form>

            </div>


            <div class="subPageLoginConfirm pageVerification_placedAtSubmitbutton">
                
                <form action="emailAlerts.aspx">
                    Please confirm that you want to unsubscribe: <span class="emailToConfirm"></span>
                    <br />
                    <div class="blockInner">
                        <div class="closeBox goToHome">X</div>
                        <div class="inputText">
                            <input class="formLoginConfirm buttonStyle clearInput" type="submit" value="Unsubscribe" />
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

            <div class="register-wrapper">
                <div class="divideLine"></div>
            <h2 class="header">Register</h2>
           <p>
                Please follow the instructions below to automatically receive alerts about significant changes.<br /><br />
                Enter your email address and a little information about yourself, and then click on the <strong>Register</strong> button below (*indicates a required field).
            </p>

                </div>
            <div class="divider"></div>

            <form action="emailAlerts.aspx">



                <div class="blockOuterWrapper">
                    <br/>
                    <div class="blockInner">
                        <div class="inputTextTitle">
                            Email address: * 
                        </div>
                        <div class="inputText">
                            <input tabindex="2" class="informationInput enterInformationEmail" name="enterInformationEmail" type="text" value="" id="enterInformationEmail" />
                        </div>
                    </div>

                    <div class="blockInner">
                        <div class="inputTextTitle">
                            First name: *
                        </div>
                        <div class="inputText">
                            <input tabindex="3" class="informationInput enterInformationFirstName" name="enterInformationFirstName" type="text" value="" id="enterInformationFirstName" />
                        </div>
                    </div>

                    <div class="blockInner">
                        <div class="inputTextTitle">
                            Surname: *
                        </div>
                        <div class="inputText">
                            <input tabindex="4" class="informationInput enterInformationLastName" name="enterInformationLastName" type="text" value="" id="enterInformationLastName" />
                        </div>
                    </div>

                    <div class="blockInner">
                        <div class="inputTextTitle">
                            Company:
                        </div>
                        <div class="inputText">
                            <input tabindex="5" class="informationInput enterInformationCompany" name="enterInformationCompany" type="text" value="" id="enterInformationCompany" />
                        </div>
                    </div>

                    <div class="blockInner">
                        <div class="inputTextTitle">
                            Country:
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
                <h2 class="header">Alerts</h2>
                <p>
                    Select the alerts you wish to receive. *
                </p>

                <!--<div class="divider"></div> -->

                <div class="blockOuter indent">
                    <label>
                        <span class="checkboxOuter">
                            <input tabindex="7" type="checkbox" class="checkboxRelease ReleasesA" id="ReleasesA" />
                        </span>
                        <span class="checkBoxText">Stock Exchange Announcement Alerts
                        </span>
                    </label>



                    <p style="margin-bottom: 15px;">
                        From time to time, we may use your registration details to provide you with additional information about us and our products and services which may be of interest to you.
                    </p>
                    <label>
                        <span class="checkboxOuter">
                            <input tabindex="8" type="checkbox" class="checkboxRelease ReleasesC" id="ReleasesC" />
                        </span>
                        <span class="checkBoxText">If you would like to be contacted, please tick this box.
                        </span>
                    </label>

                    <div class="divider"></div>
                     </div>
                </div>

                <div style="clear: both;"></div>


                <p class="disclaimerHighlight">

                </p>


                <input type="hidden" name="activeClient" class="activeClient" value="PTSG" />
                <input type="hidden" name="solutionID" class="solutionID" value="2366" />
                <input type="hidden" name="instrumentID" class="instrumentID" value="25001122" />
                <input type="hidden" name="companyAnnoucementLanguage" value="English" class="companyAnnoucementLanguage" id="companyAnnoucementLanguage" />


                <div class="blockNoBorder pageVerification_placedAtSubmitbutton" >
                    <input type="button" tabindex="9" class="formRegister buttonStyle clearInput" value="Register"  style="float: left;"/>
                    <a class="cleanLink formUnsubscribe unsubscribeNextToButton" style="color: #019D54; background: none; text-decoration: underline; font-weight: normal; border: 0;">Unsubscribe</a>
                    <div class="pageVerification pageVerification_bottom">
                        <div class="blockNoBorder noTopMargin">
                            <h2 class="removeHeight">Verification...
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

                <input type="hidden" name="activeClient" class="activeClient" value="PTSG" />
                <input type="hidden" name="solutionID" class="solutionID" value="2366" />
                <input type="hidden" name="instrumentID" class="instrumentID" value="25001122" />

                <div class="blockNoBorder">
                    <h2>Unsubscribe
                    </h2>
                    <p>
                        Please enter your email address to unsubscribe.
                    </p>

                    <div class="divider"></div>

                    <div class="blockInner">
                        <div class="inputTextTitle">
                            Email address: *
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

    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>

     <script type="text/javascript" src="http://ir.euroinvestor.com/Tools/EmailAlertsWithPush/Inc/genericIR_mobileOverlayFix.js"></script>

    <div class="semiTransparantOverlay hidden" ></div>
</body>
</html>


<script type="text/javascript" src="checkbox.js?v=15"></script>
<script type="text/javascript">

    $('#loginscreen_loginButton').click(function () {
        var getUserInformationFromEmail = $('#getUserInformationFromEmail').val();
        $.ajax({
            url: '../../../Tools/EmailAlertsWithPush/EmailAlertsManager.aspx?action=getuserinformation&solutionID=2366&ts=' + (new Date).getTime(),
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
