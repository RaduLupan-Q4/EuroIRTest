<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ OutputCache VaryByParam="*" Duration="1" %>

<% 
    int solutionID = 2584;
    int instrumentID = 633767;
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "//www.w3.org/TR/html4/loose.dtd">

<html xmlns="//www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Email Alerts</title>
    <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Fira+Sans:400,300,500,700" />
    <link rel="stylesheet" href="//ir.euroinvestor.com/tools/EmailAlertsWithPush/inc/generic.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("//ir.euroinvestor.com/tools/EmailAlertsWithPush/inc/generic.css")).Ticks.ToString()%>" />
    <link rel="stylesheet" href="../ir.clientMaster.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("../ir.clientMaster.css")).Ticks.ToString()%>" />
    <link rel="stylesheet" href="inc/emailAlerts.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("inc/emailAlerts.css")).Ticks.ToString()%>" />
    
</head>
<body>

    <div class="content">

        <div class="pageRegister">

            <div class="register-wrapper">
              
                <%--<h2 class="header">Register</h2>--%>
                <p>Receive E-mail Alerts...</p>
                <p>Select the Stock Exchange Announcement alert checkbox below<p>
               <%-- <p>To automatically receive E-mail Alerts...</p>
                <p>1. Select the alert checkbox.</p>
                <p>2. Enter your e-mail address in the space provided.</p>
                <p>3. Click on the "Submit" button.</p>--%>
                <%--<p style="height:10px; line-height:10px; font-size:12px;"><br /> * indicates a required field</p>--%>
            </div>
            <%--<div class="divider"></div>--%>

            <form action="emailAlerts.aspx">

                <%--<input type="hidden" class="checkboxRelease ReleasesA" value="checked" id="ReleasesA" />--%>

                <div class="blockOuter">
                    <p class="requiredField">
                        <span class="requiredFieldMSG"></span>
                    </p>
                    

                    <div style="clear: both;"></div>

                    <%--<div class="divider"></div>--%>

                    


                </div>

                <div style="clear: both;"></div>

                
                <div class="alert-wrapper">
           <%--         <h2 class="header">Alerts</h2>
                    <p>
                        Select the alerts you wish to receive.
                    </p>--%>

                    <div class="blockOuter indent">
                        
                        <div class="subGroup">
                            <div class="checkbox checkboxReleaseATrigger">Stock Exchange Announcement alerts</div>
                            <input tabindex="7" id="ReleasesA" type="checkbox" class="checkboxRelease ReleasesA checkboxRNSFilter" style="display:none;"   />
                        </div>

                        <%--<div class="subGroup">
                            <div id="MSC" class="checkbox checkboxRNSFilter ">Stock Exchange Announcement alerts</div>
                        </div>--%>
                 <%--       <div class="subGroup">
                            <div id="ACS" class="checkbox checkboxRNSFilter">Annual Reports</div>
                        </div>--%>
                    </div>
                </div>

                <div style="clear: both;"></div>
                
                <input type="hidden" name="solutionID" class="solutionID" value="<%= solutionID %>" />
                <input type="hidden" name="instrumentID" class="instrumentID" value="<%= instrumentID %>" />
                <input type="hidden" name="companyAnnoucementLanguage" value="English" class="companyAnnoucementLanguage" id="companyAnnoucementLanguage" />
                <input type="hidden" class="ReleaseRNSFilter" id="ReleaseRNSFilter" checked="checked" />
                
                <div class="blockInner">
                        <div class="inputTextTitle" style="float: none;">
                            E-mail Address:
                        </div>
                        <div class="inputText">
                            <input tabindex="2" class="informationInput enterInformationEmail" name="enterInformationEmail" type="text" value="" id="enterInformationEmail" />
                        </div>
                    </div>

                <div class="blockNoBorder pageVerification_placedAtSubmitbutton">
                    <input type="button" tabindex="9" class="formRegister buttonStyle clearInput alertTypeSubmitBox" value="Submit" />
                    <div class="pageVerification pageVerification_bottom">
                        <div class="blockNoBorder noTopMargin">
                            <h2 class="removeHeight">Success
                            </h2>
                            <p>
                            </p>
                        </div>
                        <%--<div class="closeBox goToHome">Back</div>--%>
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
                            E-mail Address:
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

    </div>

    <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
    <script type="text/javascript" src="inc/checkbox.js"></script>
    <script type="text/javascript" src="inc/customMobileOverlayFix.js"></script>
    <script type="text/javascript" src="inc/overlay.js"></script>
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

                $('.checkboxReleaseATrigger').on('click', function () {
                    if ($('.checkboxReleaseATrigger').hasClass('checked')) {
                        $("#ReleasesA").prop("checked", true);
                    } else {
                        $("#ReleasesA").prop("checked", false);
                    }
                });

                customXApplied = true;
            }
        }
    }
    $(function () {
        setInterval(function () {
            prepareCustomX();
        }, 100);
    });


</script>
