<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ OutputCache VaryByParam="*" Duration="1" %>

<% 
    // Settings
    string activeClient = "AssuraPlc";
    int solutionID = 2788;
    int instrumentID = 594597;

    string titleFirstName = "First name";
    string titleLastName = "Surname";
    string titleCompany = "Company";
    string titleCountry = "Country";
    string titleEmailAdress = "Email address";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Email Alerts</title>
    <link rel="stylesheet" href="//ir.euroinvestor.com/tools/EmailAlertsWithPush/inc/generic.css" type="text/css" />
<!--    <link rel="stylesheet" type="text/css" media="screen" href="ir.client.css" />-->
    <link rel="stylesheet" type="text/css" media="screen" href="ir.client.css" />

</head>
<body>

   <div class="content">

        <div class="pageRegister">

            <form action="emailAlerts.aspx">
                
                <div class="blockOuter">
                   
                   <label>
                        <span class="checkboxOuter indent">
                            <input tabindex="1" type="checkbox" class="checkboxRelease ReleasesI" id="ReleasesI" checked/>
                        </span>
                        <span class="checkBoxText">Company announcements
                        </span>
                    </label>
                    

                    <div class="blockInner">
                        <div class="inputText">
                            <input tabindex="2" class="informationInput enterInformationFirstName" name="enterInformationFirstName" type="text" value="" placeholder="Name" id="enterInformationFirstName" />
                        </div>
                    </div>
                    
                    <div class="blockInner">
                        <div class="inputText">
                            <input tabindex="3" class="informationInput enterInformationEmail" name="enterInformationEmail" type="text" value="" placeholder="Email address" id="enterInformationEmail" />
                        </div>
                    </div>

                    <div class="blockInner">
                        <div class="inputText">
                            <input tabindex="4" class="informationInput enterInformationLastName" name="enterInformationLastName" type="text" value="" placeholder="Surname" id="enterInformationLastName" />
                        </div>
                    </div>


                    
                    <div style="clear: both;"></div>


                    <p class="requiredField">
                        <span class="requiredFieldMSG"></span>
                    </p>


                </div>

                <div style="clear: both;"></div>
                

                <input type="hidden" name="activeClient" class="activeClient" value="ChemoMetec" />
                <input type="hidden" name="solutionID" class="solutionID" value="2056" />
                <input type="hidden" name="instrumentID" class="instrumentID" value="604647" />
                <input type="hidden" name="companyAnnoucementLanguage" value="English" class="companyAnnoucementLanguage" id="companyAnnoucementLanguage" />


                <div class="blockNoBorder pageVerification_placedAtSubmitbutton input-wrapper">
                    <input type="submit" class="formRegister buttonStyle clearInput alertTypeSubmitBox" value="Submit" />  
                    <a class="cleanLink formUnsubscribe unsubscribeNextToButton">Unsubscribe from email alerts</a>
                </div>
                

            </form>
        </div>

        <div class="pageVerification pageVerification_bottom" style="display: none;">
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

        <div class="pageUnsubscribe" style="display: none;">

            <form action="emailalerts.aspx">
                <input type="hidden" name="activeClient" class="activeClient" value="ChemoMetec" />
                <input type="hidden" name="solutionID" class="solutionID" value="2056" />
                <input type="hidden" name="instrumentID" class="instrumentID" value="604647" />

                <div class="blockNoBorder">

                    <div class="blockInner">
                        <div class="inputTextTitle">
                            Email
                        </div>
                        <div class="inputText">
                            <input tabindex="1" class="inputTextField unsubscribeEmail" name="unsubscribeEmail" type="text" value="" />
                        </div>
                    </div>

                    <div class="blockNoBorder">

                        <div class="divider"></div>
                        <div class="divider"></div>

                        <input class="formUnsubscribeInTool buttonStyle clearInput unsubscribeBtnTranslation" type="submit" value="Unsubscribe" />                  
                        <a class="cleanLink goToHome">Back</a>
                    </div>

                </div>

            </form>

        </div>

    </div>

    <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
    <script type="text/javascript" src="//ir.euroinvestor.com/tools/EmailAlertsWithPush/inc/genericIR.js"></script>
</body>
</html>