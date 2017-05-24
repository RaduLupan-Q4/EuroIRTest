<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ OutputCache VaryByParam="*" Duration="1" %>

<% 
    // Settings
    string activeClient = "ChemoMetec";
    int solutionID = 2056;
    int instrumentID = 604647;

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
    <link rel="stylesheet" href="ir.client.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("ir.client.css")).Ticks.ToString()%>" />
</head>
<body>

   <div class="content">

        <div class="pageRegister">

            <form action="emailAlerts.aspx">

                <div class="blockOuter">
                    

                    <div class="blockInner">
                        <div class="inputTextTitle">
                            Name
                        </div>
                        <div class="inputText">
                            <input tabindex="1" class="informationInput enterInformationFirstName" name="enterInformationFirstName" type="text" value="" id="enterInformationFirstName" />
                        </div>
                    </div>

                    <div class="blockInner">
                        <label class="labels_text"><span class="label-span">Profile</span><select name="enterInformationProfession" size="1" id="selectedProfile" class="styled-select" title="Please select your profile.">
                            <option value="na">Select profile</option>
                            <option value="Analyst">Analyst</option>
                            <option value="Customer">Customer</option>
                            <option value="Employee">Employee</option>
                            <option value="Investor">Investor</option>
                            <option value="Media">Media</option>
                            <option value="Shareholder">Shareholder</option>
                            <option value="Student">Student</option>
                            <option value="Other">Other</option>
                        </select></label>

                    </div>

                    <div class="blockInner email-checkboxes">
                        <label class="infoTypes"><input type="checkbox" class="checkboxRelease ReleasesA" id="ReleasesA" value="financial-reports">Financial reports</label>

                        <label class="infoTypes"><input type="checkbox" class="checkboxRelease ReleasesB" id="ReleasesB" value="all-releases">All Company Releases</label>
                    </div>
                    <div class="blockInner">
                        <div class="inputTextTitle">
                            Email
                        </div>
                        <div class="inputText">
                            <input tabindex="2" class="informationInput enterInformationEmail" name="enterInformationEmail" type="text" value="" id="enterInformationEmail" />
                        </div>
                    </div>

                    <div style="clear: both;"></div>

                    <div class="divider"></div>

                    <p class="requiredField">
                        <span class="requiredFieldMSG"></span>
                    </p>


                </div>

                <div style="clear: both;"></div>
                
                <div class="divider"></div>

                <input type="hidden" name="activeClient" class="activeClient" value="<%=activeClient %>" />
                <input type="hidden" name="solutionID" class="solutionID" value="<%=solutionID %>" />
                <input type="hidden" name="instrumentID" class="instrumentID" value="<%=instrumentID %>" />
                <input type="hidden" name="companyAnnoucementLanguage" value="English" class="companyAnnoucementLanguage" id="companyAnnoucementLanguage" />

                <div class="divider"></div>

                <div class="blockNoBorder pageVerification_placedAtSubmitbutton">
                    <input type="button" class="formRegister buttonStyle clearInput alertTypeSubmitBox" value="Send" />
                    <div><a class="cleanLink formUnsubscribe unsubscribeNextToButton">Unsubscribe</a></div>
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
                <input type="hidden" name="activeClient" class="activeClient" value="<%=activeClient %>" />
                <input type="hidden" name="solutionID" class="solutionID" value="<%=solutionID %>" />
                <input type="hidden" name="instrumentID" class="instrumentID" value="<%=instrumentID %>" />

                <div class="blockNoBorder">

                    <div class="divider"></div>

                    <div class="blockInner">
                        <div class="inputTextTitle">
                            Email
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
                        <a class="cleanLink goToHome">Back</a>
                    </div>

                </div>

            </form>

        </div>

        <div class="divider"></div>
    </div>

    <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
    <script type="text/javascript" src="//ir.euroinvestor.com/tools/EmailAlertsWithPush/inc/genericIR.js"></script>
</body>
</html>