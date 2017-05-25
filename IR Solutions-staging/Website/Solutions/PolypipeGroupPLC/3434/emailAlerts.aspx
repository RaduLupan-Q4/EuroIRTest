<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ OutputCache VaryByParam="*" Duration="1" %>

<% 
    // Settings
    string activeClient = "PolypipeGroupPLC";
    int solutionID = 3434;
    int instrumentID = 19971019;

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

    <link rel="stylesheet" href="emailAlerts.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("emailAlerts.css")).Ticks.ToString()%>" />

</head>
<body>

   <div class="content">
     
        <div class="pageRegister">

            <form action="emailAlerts.aspx">

                <div class="blockOuter">
                <p class="subscribe-to">Subscribe to our mailing list</p>
                <p class="required"><span class="star">*</span> indicates required</p>
                    <input id="ReleasesA" type="checkbox" checked style="display: none;">

                    <div class="blockInner">
                        <div class="inputText">
                            <p class="email-label">Email Address <span class="star">*</span></p>
                            <input tabindex="2" class="informationInput enterInformationEmail" name="enterInformationEmail" type="text" value="" id="enterInformationEmail" />
                        </div>
                    </div>

                    <div class="blockInner">
                        <div class="inputText">
                            <p class="email-label">Full Name <span class="star">*</span></p>
                            <input tabindex="1" class="informationInput enterInformationFirstName" name="enterInformationFirstName" type="text" value="" id="enterInformationFirstName" />
                        </div>
                    </div>

                    <div class="blockInner">
                        <p class="email-label">Which best describes you? <span class="star">*</span></p>
                        <div class="styled-select">
                        
                           <select required name="enterInformationProfession" size="1" name="enterInformationProfession" id="enterInformationProfession">
                                <option value="na">- Please Select -</option>
                                <option value="Fund manager">Fund manager</option>
                                <option value="Broker/Analyst">Broker/Analyst</option>
                                <option value="Shareholder">Shareholder</option>
                                <option value="Potential investor">Potential investor</option>
                                <option value="Customer">Customer</option>                              
                                <option value="Employee">Employee</option>
                                <option value="Journalist">Journalist</option>                              
                                <option value="Other">Other</option>
                            </select>
                            
                        </div>
                    </div>

                    <div class="blockInner">
                        <div class="inputText">
                            <p class="email-info">From time to time we may email you other information that we think could be of interest. If you would prefer not to receive this information please select the no button below.</p>

                            <label>
                            <input type="radio" name="yes/no"/> Yes</label>
                            <label>
                            <input type="radio" name="yes/no"/> No</label>

                            <p class="email-info-submit">As required by the Data Protection Act, we are committed to treating all personal data collected from this site in a confidential manner. Your personal details, as supplied by you, will be used to send you the information that you have requested and for any other purpose for which you have given your consent. Collective and anonymous data concerning site visits may be collected and shared with third parties.</p>
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


                <div class="blockNoBorder pageVerification_placedAtSubmitbutton input-wrapper">
                    <input type="submit" class="formRegister buttonStyle clearInput alertTypeSubmitBox" value="Subscribe" />
                    <div class="line"></div>  
                    <div><a class="cleanLink formUnsubscribe unsubscribeNextToButton"><span><img class="arrowRight" src="images/arrowRight.png" alt="arrow"></span>Unsubscribe from email alerts</a></div>
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
                <input type="hidden" name="activeClient" class="activeClient" value="<%= activeClient %>" />
                <input type="hidden" name="solutionID" class="solutionID" value="<%= solutionID %>" />
                <input type="hidden" name="instrumentID" class="instrumentID" value="<%= instrumentID %>" />

                <div class="blockNoBorder max-width-600">

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