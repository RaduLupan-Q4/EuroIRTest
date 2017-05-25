<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ OutputCache VaryByParam="*" Duration="1" %>

<% 
    // Settings
    string activeClient = "EchoEnergy";
    int solutionID = 3510;
    int instrumentID = 34037009;
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
    //string titleFirstName = "First name";
    //string titleLastName = "Surname";
    //string titleCompany = "Company";
    //string titleCountry = "Country";
    //string titleOccupation = "Occupation";
    //string titleProfession = "Profession";
    string titleEmailAdress = "Email address";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Email Alerts</title>
    <link rel="stylesheet" href="https://irssl.euroinvestor.com/ir/tools/EmailAlertsWithPush/inc/generic.css" />
    <link rel="stylesheet" href="//fast.fonts.net/cssapi/c8776784-5d75-432d-ae59-d50b8bc58a15.css" />
    <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Open+Sans:400,300,700" />
    <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Oswald" />
    <link rel="stylesheet" href="inc/emailAlerts.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("inc/emailAlerts.css")).Ticks.ToString()%>" />
</head>
<body>
<div class="semiTransparantOverlay hidden"></div>

    <div class="content">

        <div class="pageRegister">


                <form action="emailAlerts.aspx">

                    <input type="hidden" class="checkboxRelease ReleasesA" value="checked" id="ReleasesA" checked="checked" />
                    <input type="hidden" class="checkboxRelease ReleasesB" value="checked" id="ReleasesB" checked="checked" />

                    <div class="blockOuter">

                        <div class="blockInner">

                            <div class="inputText left" style="margin-right: 20px; margin-bottom: 10px">
                                <input tabindex="2" placeholder="Email address*" class="informationInput enterInformationEmail" name="enterInformationEmail" type="text" value="" id="enterInformationEmail" />
                                <p class="emailNotification">Please enter a valid email.</p>
                            </div>

                            <div class="inputText" style="margin-right: 20px;">
                                <input tabindex="3" placeholder="Full name" class="informationInput enterInformationFirstName" name="enterInformationFirstName" type="text" value="" id="enterInformationFirstName" />
                            </div>
                        </div>
                        <input type="button" tabindex="9" class="formRegister buttonStyle clearInput" style="float: left" value="Sign Up" />
                        

                        
                        

                        <div style="clear: both;"></div>

                        <div class="divider"></div>

                        

                        <p class="requiredField">
                            <span class="requiredFieldMSG"></span>
                        </p>


                    </div>

                    <div style="clear: both;"></div>


                    

                    

                    <div style="clear: both;"></div>

                    


                    

                    <p class="disclaimerHighlight">
                        
                    </p>

                    

                    <input type="hidden" name="activeClient" class="activeClient" value="EchoEnergy" />
                    <input type="hidden" name="solutionID" class="solutionID" value="3510" />
                    <input type="hidden" name="instrumentID" class="instrumentID" value="34037009" />
                    <input type="hidden" name="companyAnnoucementLanguage" value="English" class="companyAnnoucementLanguage" id="companyAnnoucementLanguage" />

                    

                    
                </form>
        </div>

        <div class="pageVerification">
           
            <div class="blockNoBorder noTopMargin">
               <span class="popup-close x-close">X</span>
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

                <input type="hidden" name="activeClient" class="activeClient" value="EchoEnergy" />
                <input type="hidden" name="solutionID" class="solutionID" value="3510" />
                <input type="hidden" name="instrumentID" class="instrumentID" value="34037009" />

                <div class="blockNoBorder">
                    <h2>Unsubscribe
                    </h2>
                    <p>
                        Please enter your email address to unsubscribe.
                    </p>

                    <div class="divider"></div>

                    <div class="blockInner">
                        <div class="inputTextTitle">
                            Email address
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
        
    </div>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
    <script type="text/javascript" src="genericIR_mobileOverlayFix.js"></script>
</body>
</html>
