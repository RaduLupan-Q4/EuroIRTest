<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ OutputCache VaryByParam="*" Duration="1" %>
<% 
    // Settings
    string activeClient = "ConvaTec2";
    int solutionID = 3444;
    int instrumentID = 28;
    bool showLoginToUnsubscribe = false;
    bool showEuroInvestorDisclaimer = false;

    string[] RNSFilters = { "All press releases",
        "Acquisition and Disposals",
        "Board and Management changes",
        "Directors/PDMR shareholding",
        "Dividends",
        "General",
        "Holding(s) in company",
        "Results and Reports",
        "Shareholder Meetings"};
    string[] RNSFiltersGroup = { "allRNSnews", "ACQ,DIS", "BOA,APP", "DSH,MSC", "DIV",
        "LIS,AIM,PAA,ARI,BRC,BLR,CAR,CAN,CRO,CNR,NOV,EFN,COS,CMC,CAS,CON,RDN,DSP,TAB,EOD,FON,IOD,IOE,LOI,SEN,MER,NAV,NAR,NRA,OFB,ODP,OFF,OLA,ORE,OTT,OUP,NOT,PFU,PME,PNM,PRL,PDI,AGR,SAL,CNT,JVE,RAP,REA,RES,RSP,REN,REP,RTE,RTT,SOA,APM,SSD,STA,STR,POT,OFD,STC,SPC,SRS,SPM,SUS,TEN,TSM,TST,POS,TRS",
        "HOL,MMH",
        "FR,IR,QRF,QRT,NOR,ACS,TST,MSC,IR,RAG,REG,ROI,ROM,RTE,SYR",
        "NOA,NOE,RAG,REG,AGM,EGM,ROM"};





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
    <%--<link rel="stylesheet" href="https://irssl.euroinvestor.com/ir/tools/EmailAlertsWithPush/inc/generic.css" />--%>
    <link rel="stylesheet" href="//ir.euroinvestor.com/Tools/EmailAlertsWithPush/Inc/generic.css" />
    <link rel="stylesheet" href="ir.client.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("ir.client.css")).Ticks.ToString()%>" />
    <link rel="stylesheet" href="inc/emailAlerts.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("inc/emailAlerts.css")).Ticks.ToString()%>" />
    <link href='//fonts.googleapis.com/css?family=Lato:400,300italic,300,400italic,700,900' rel='stylesheet' type='text/css'>
</head>
<body style="font-size: 16px;">

    <div class="content emailAlerts">

        <div class="pageRegister">

            <%
                if (showLoginToUnsubscribe)
                {
            %>

            <div class="subPageLogin">

                <h2 class="header">Login</h2>
                <!--   <p>
                    If you have already subscribed, enter your email address here, and login to edit your preferences.<br />
                    If you would like to unsubscribe, please login and press the <b>unsubscribe</b> button
                </p>-->

                <form action="emailAlerts.aspx">
                    <div class="fullwidth">
                        <p>
                            If you have already subscribed, enter your email address here, and login to edit your preferences.<br />
                            If you would like to unsubscribe, please login and press the unsubscribe button.
                        </p>
                    </div>
                    <br />
                    <div class="fullwidth">&nbsp; </div>
                    <br />
                    <div style="width: 100%;">
                        <span class="inputTextTitle"><%= titleEmailAdress %>:</span>
                        <div class="input-wrapper loginField">
                            <input tabindex="1" class="informationInput enterInformationLoginEmail " name="enterInformationLoginEmail" type="email" value="" />

                            <input class="formLogin  clearInput" type="button" value="Login" />
                        </div>
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
                            <input class="formLoginConfirm buttonStyle clearInput" type="submit" value="Unsubscribe" style="" />
                        </div>
                    </div>
                    <div style="clear: both;"></div>

                </form>

               
            </div>

            <%
                }
            %>

            <%-- <div class="divideLine"></div>--%>
                            <div style="clear: both;"></div>

                <h2 class="header">Your Email Alerts</h2>
            <p>Please select the alerts that you would like to receive:</p>
            <br />
                <div class="RNSFilterAlertsWrapper">
                    <%
                        Response.Write(@"<div class=""subGroup"">");
                        var filterGroupIndex = 0;
                        foreach (string filter in RNSFilters)
                        {
                            Response.Write(@"<div id=""" + RNSFiltersGroup[filterGroupIndex] + @""" enabledFilters=""" + RNSFiltersGroup[filterGroupIndex].Replace(",", "") + @""" class=""checkbox checkboxRNSFilter"">" + filter + "</div>");
                            filterGroupIndex++;
                        }
                        Response.Write(@"<div class=""clearBoth""></div>");
                        Response.Write(@"</div>");
                    %>
                </div>
            <br />
            <div class="register-wrapper">

                <h2 class="header">Your contact details</h2>
            <%--    <p>
                    Please follow the instructions below to automatically receive alerts about stock exchange announcements. 
               If you would like to receive email alerts please complete the following and then press Register.<br />
                    (*indicates a required field).
                </p>--%>
                <%--<p style="height:10px; line-height:10px; font-size:12px;"><br /> * indicates a required field</p>--%>
            </div>
            <%--<div class="divider"></div>--%>

            <form action="emailAlerts.aspx">

                <%--<input type="hidden" class="checkboxRelease ReleasesA" value="checked" id="ReleasesA" />--%>

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
                </div>


                <div style="clear: both;"></div>

                <%--<div class="divideLine"></div>--%>
                <div class="alert-wrapper">
                    <%--<h2 class="header">Alerts</h2>--%>
                    <p style="display: none;">
                        Select the alerts you wish to receive.
                    </p>

                    <!--<div class="divider"></div> -->

                    <div class="blockOuter indent">
                        <label style="display: none;">
                            <span class="checkboxOuter">
                                <input tabindex="7" type="checkbox" class="checkboxRelease ReleasesA" id="ReleasesA" checked />
                            </span>
                            <span class="checkBoxText"><%= titleReleasesA %>
                            </span>
                        </label>



                        <%--<p>
                            From time to time, we may use your registration details to provide you with additional information about us and our products and services which may be of interest to you.
                        </p>
                        <div>
                            <label>
                                <span class="checkboxOuter">
                                    <input tabindex="8" type="checkbox" class="checkboxRelease ReleasesC" id="ReleasesC" />
                                </span>
                                <span class="checkBoxText"><%= titleReleasesC %>
                                </span>
                            </label>
                            <p>Our <a title="View our Privacy Policy (opens in a popup window)" rel="privacyEmail" href="#" class="nobdr">Privacy Policy</a> statement explains how we handle and store your personal data.</p>
                        </div>
                    <div class="divider"></div>--%>
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
                    <p class="requiredField">
                        <span class="requiredFieldMSG"></span>
                    </p>
                    <input style="margin-top: 20px;" type="button" tabindex="9" class="formRegister buttonStyle clearInput" value="Register" />
                    
                     <a class="formUnsubscribe buttonUnsubscribe">Unsubscribe</a>
                    
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

            </form>
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

        <div class="divider"></div>
        <%
            if (showEuroInvestorDisclaimer)
            {
                Server.Execute("~/Disclaimers/emailAlertsDisclaimer.aspx");
            }
        %>
    </div>

    <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
    <%--<script type="text/javascript" src="http://ir1.euroinvestor.com/ir/tools/EmailAlertsWithPush/inc/generic_mobileOverlayFix.js"></script>--%>
    <%--<script type="text/javascript" src="http://ir.euroinvestor.com/Tools/EmailAlertsWithPush/Inc/genericIR_mobileOverlayFix.js"></script>--%>
    <script type="text/javascript" src="genericIR_mobileOverlayFix.js?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("genericIR_mobileOverlayFix.js")).Ticks.ToString()%>"></script>


    <div class="semiTransparantOverlay hidden"></div>
</body>
</html>

<script type="text/javascript" src="checkbox.js?v=15"></script>
<script type="text/javascript">

    $('#loginscreen_loginButton').click(function () {
        var getUserInformationFromEmail = $('#getUserInformationFromEmail').val();
        $.ajax({
            url: '../../../../Tools/EmailAlertsWithPush/EmailAlertsManager.aspx?action=getuserinformation&solutionID=2808&ts=' + (new Date).getTime(),
            //url: 'http://localhost:61531/EmailAlertsManager.aspx?action=getuserinformation&solutionID=2808&ts=' + (new Date).getTime(),
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
