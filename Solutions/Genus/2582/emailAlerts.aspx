<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ OutputCache VaryByParam="*" Duration="1" %>

<% 
    string activeClient = "Genus";
    int solutionID = 2582;
    int instrumentID = 189784;
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Email Alerts</title>
    <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Fira+Sans:400,300,500,700" />
    <link rel="stylesheet" href="http://ir1.euroinvestor.com/ir/tools/EmailAlertsWithPush/inc/generic.css" />
    <link rel="stylesheet" href="inc/emailAlerts.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("inc/emailAlerts.css")).Ticks.ToString()%>" />
</head>
<body>

    <div class="content">

        <div class="pageRegister">

            <div class="divideLine"></div>

            <div class="register-wrapper">
                <div class="divideLine"></div>
                <h2 class="header">Register</h2>
                <p>
                    Please follow the instructions below to automatically receive alerts about significant changes.<br />
                    An e-mail will be sent to you shortly confirming that your change has been processed. You can return to this page at any time to modify your selections.
                </p>
                <%--<p style="height:10px; line-height:10px; font-size:12px;"><br /> * indicates a required field</p>--%>
            </div>
            <div class="divider"></div>

            <form action="emailAlerts.aspx">

                <%--<input type="hidden" class="checkboxRelease ReleasesA" value="checked" id="ReleasesA" />--%>

                <div class="blockOuter">
                    <p class="requiredField">
                        <span class="requiredFieldMSG"></span>
                    </p>
                    <div class="blockInner">
                        <div class="inputTextTitle">
                            Enter your e-mail address here:
                        </div>
                        <div class="inputText">
                            <input tabindex="2" class="informationInput enterInformationEmail" name="enterInformationEmail" type="text" value="" id="enterInformationEmail" />
                        </div>
                    </div>

                    <div style="clear: both;"></div>

                    <div class="divider"></div>

                    


                </div>

                <div style="clear: both;"></div>

                <div class="divideLine"></div>
                <div class="alert-wrapper">
                    <h2 class="header">Alerts</h2>
                    <p>
                        Select the alerts you wish to receive.
                    </p>

                    <div class="blockOuter indent">
                        
                        <div class="subGroup">
                            <div class="checkbox checkboxReleaseATrigger">Regulatory News</div>
                            <input tabindex="7" type="checkbox" class="checkboxRelease ReleasesA" style="display: none;" id="ReleasesA" />
                        </div>

                        <div class="subGroup">
                            <div id="MSC" class="checkbox checkboxRNSFilter">Reports and Presentations</div>
                        </div>
                        <div class="subGroup">
                            <div id="ACS" class="checkbox checkboxRNSFilter">Annual Reports</div>
                        </div>
                    </div>
                </div>

                <div style="clear: both;"></div>
                
                 <input type="hidden" name="activeClient" class="activeClient" value="<%= activeClient %>" />
                <input type="hidden" name="solutionID" class="solutionID" value="<%= solutionID %>" />
                <input type="hidden" name="instrumentID" class="instrumentID" value="<%= instrumentID %>" />
                <input type="hidden" name="companyAnnoucementLanguage" value="English" class="companyAnnoucementLanguage" id="companyAnnoucementLanguage" />
                <input type="hidden" class="ReleaseRNSFilter" id="ReleaseRNSFilter" checked="checked" />


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
                            Email *
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

    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
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
