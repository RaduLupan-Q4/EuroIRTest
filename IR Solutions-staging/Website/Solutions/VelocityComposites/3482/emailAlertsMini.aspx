<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ OutputCache VaryByParam="*" Duration="1" %>

<% 
    // Settings
    string activeClient = "Velocity Composites";
    int solutionID = 3482;
    int instrumentID = 33646174;

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
    <link href='//fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="ir.client.css" type="text/css" />
    <link rel="stylesheet" href="//fast.fonts.net/cssapi/eeefab73-0c4e-4a12-a18b-44f1ae58b9b8.css" />
    <link rel="stylesheet" href="inc/emailAlerts.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("inc/emailAlerts.css")).Ticks.ToString()%>" />

</head>
<body>

    <div class="content">

        <div class="pageRegister">

            <h2 class="header">Register</h2>
            <p>
                Please follow the instructions below to automatically receive alerts about stock exchange announcements.<br />
                If you would like to receive email alerts please complete the following and then press <b>Register.</b><br />
                (* indicates a required field).
            </p>
            <br/>
            <br/>
            <form action="emailAlerts.aspx">

                <input type="hidden" class="checkboxRelease ReleasesA" value="checked" id="ReleasesA" checked="checked" />
                <input type="hidden" class="checkboxRelease ReleasesB" value="checked" id="ReleasesB" checked="checked" />

                <div class="blockOuter">

                    <div class="blockInner">
                        <div class="inputTextTitle">
                            <%= titleEmailAdress %> *
                        </div>
                        <div class="inputText">
                            <input tabindex="2" class="informationInput enterInformationEmail" name="enterInformationEmail" type="text" value="" id="enterInformationEmail" />
                        </div>
                    </div>

                    <div class="blockInner">
                        <div class="inputTextTitle">
                            <%= titleFirstName %> *
                        </div>
                        <div class="inputText">
                            <input tabindex="3" class="informationInput enterInformationFirstName" name="enterInformationFirstName" type="text" value="" id="enterInformationFirstName" />
                        </div>
                    </div>

                    <div class="blockInner">
                        <div class="inputTextTitle">
                            <%= titleLastName %> *
                        </div>
                        <div class="inputText">
                            <input tabindex="4" class="informationInput enterInformationLastName" name="enterInformationLastName" type="text" value="" id="enterInformationLastName" />
                        </div>
                    </div>

                    <div class="blockInner">
                        <div class="inputTextTitle">
                            <%= titleCompany %>
                        </div>
                        <div class="inputText">
                            <input tabindex="5" class="informationInput enterInformationCompany" name="enterInformationCompany" type="text" value="" id="enterInformationCompany" />
                        </div>
                    </div>

                    <div class="blockInner">
                        <div class="inputTextTitle">
                            <%= titleCountry %>
                        </div>
                        <div class="inputText">
                            <input tabindex="6" class="informationInput enterInformationCountry" name="enterInformationCountry" type="text" value="" id="enterInformationCountry" />
                        </div>
                    </div>

                    <div style="clear: both;"></div>

                    <p class="requiredField">
                        <span class="requiredFieldMSG"></span>
                    </p>


                </div>

                <div style="clear: both;"></div>
                

                <input type="hidden" name="activeClient" class="activeClient" value="<%= activeClient %>" />
                <input type="hidden" name="solutionID" class="solutionID" value="<%= solutionID %>" />
                <input type="hidden" name="instrumentID" class="instrumentID" value="<%= instrumentID %>" />
                <input type="hidden" name="companyAnnoucementLanguage" value="English" class="companyAnnoucementLanguage" id="companyAnnoucementLanguage" />

                <div class="divider"></div>

                <div class="blockNoBorder">
                    <input type="button" tabindex="9" class="formRegister buttonStyle clearInput" style="float: left" value="Register" />
                    <a class="cleanLink formUnsubscribe unsubscribeNextToButton" >Unsubscribe</a>
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
                        <a class="cleanLink goToHome" style="position: relative; left:0px;">Back</a>
                    </div>

                </div>

            </form>

        </div>

        <div class="divider"></div>
    </div>

    <script src="//ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script type="text/javascript" src="//ir.euroinvestor.com/tools/EmailAlertsWithPush/inc/genericIR.js"></script>
</body>
</html>