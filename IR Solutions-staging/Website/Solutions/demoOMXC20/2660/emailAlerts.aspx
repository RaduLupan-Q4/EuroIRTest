<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ OutputCache VaryByParam="*" Duration="1" %>

<%
    // Settings
    string activeClient = "4D PHARMA PLC";
    int solutionID = 2628;
    int instrumentID = 19157662;

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
    <link rel="stylesheet" href="http://ir.euroinvestor.com/tools/EmailAlertsWithPush/inc/generic.css" type="text/css" />
    <link href='https://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="ir.client.css" type="text/css" />
</head>
<body>

<div class="content">

    <div class="pageRegister">

        <form action="emailAlerts.aspx">

            <input type="hidden" class="checkboxRelease ReleasesA" value="checked" id="ReleasesA" checked="checked" />
            <input type="hidden" class="checkboxRelease ReleasesB" value="checked" id="ReleasesB" checked="checked" />

            <div class="blockOuter">

                <div class="blockInner">
                    <div class="inputTextTitle">
                        Email address
                    </div>
                    <div class="inputText">
                        <input tabindex="2" class="informationInput enterInformationEmail" name="enterInformationEmail" type="text" value="" id="enterInformationEmail" />
                    </div>
                </div>

                <div class="blockInner">
                    <div class="inputTextTitle">
                        First name
                    </div>
                    <div class="inputText">
                        <input tabindex="3" class="informationInput enterInformationFirstName" name="enterInformationFirstName" type="text" value="" id="enterInformationFirstName" />
                    </div>
                </div>

                <div class="blockInner">
                    <div class="inputTextTitle">
                        Surname
                    </div>
                    <div class="inputText">
                        <input tabindex="4" class="informationInput enterInformationLastName" name="enterInformationLastName" type="text" value="" id="enterInformationLastName" />
                    </div>
                </div>

                <div style="clear: both;"></div>


                <p class="requiredField">
                    <span class="requiredFieldMSG"></span>
                </p>


            </div>

            <div style="clear: both;"></div>

            <div class="divider"></div>

            <input type="hidden" name="activeClient" class="activeClient" value="21stCenturyTechnology" />
            <input type="hidden" name="solutionID" class="solutionID" value="1876" />
            <input type="hidden" name="instrumentID" class="instrumentID" value="2060610" />
            <input type="hidden" name="companyAnnoucementLanguage" value="English" class="companyAnnoucementLanguage" id="companyAnnoucementLanguage" />

            <div class="divider"></div>

            <div class="blockNoBorder">

                <a class="cleanLink formUnsubscribe unsubscribeNextToButton">Unsubscribe</a>
                <input type="button" tabindex="9" class="formRegister buttonStyle clearInput" value="Register" />
            </div>

        </form>
    </div>

    <div class="pageVerification" style="display: none;">
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

            <input type="hidden" name="activeClient" class="activeClient" value="21stCenturyTechnology" />
            <input type="hidden" name="solutionID" class="solutionID" value="1876" />
            <input type="hidden" name="instrumentID" class="instrumentID" value="2060610" />

            <div class="blockNoBorder">

                <div class="blockInner">
                    <div class="inputTextTitle">
                        Email address
                    </div>
                    <div class="inputText">
                        <input tabindex="1" class="inputTextField unsubscribeEmail" name="unsubscribeEmail" type="text" value="" />
                        <div class="divider"></div>
                        <div class="divider"></div>
                    </div>

                </div>

                <div class="divider"></div>

                <div class="blockNoBorder">

                    <input class="formUnsubscribeInTool buttonStyle clearInput" type="submit" value="Unsubscribe" />
                    <a class="cleanLink goToHome">Back</a>
                </div>

            </div>

        </form>

    </div>

    <div class="divider"></div>
</div>
	<script type="text/javascript" src="inc/postHeight.js"></script>
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
    <script type="text/javascript" src="http://ir.euroinvestor.com/tools/EmailAlertsWithPush/inc/genericIR.js"></script>
    <link rel="stylesheet" type="text/css" href="email.css" />
</body>
</html>
