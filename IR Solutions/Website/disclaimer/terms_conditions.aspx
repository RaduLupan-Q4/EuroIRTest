<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    
%>

<script type="text/javascript">
    var activeModules = ['IRDisclaimer'];
</script>

<%= site.header("IRDisclaimer") %>

<div class="disclaimer-terms-and-conditions">
    <h1>Terms and Conditions</h1>
    <p>
        The market quotation data (“the Data”) on this webpage (the “Webpage”) is owned or licensed by EuroInvestor.com A/S (“EuroInvestor”) with all rights reserved.
            It may not be reproduced, distributed or published without prior written consent from EuroInvestor.
            The Data is provided to EuroInvestor by Interactive Data and is provided for informational purposes only.
            It may not be reproduced, distributed or published in connection with any offer, solicitation, invitation or recommendation to subscribe for or to buy or sell any securities or derivatives thereon by any recipient.
            All stock prices are quoted with at least 15-20 minutes delay unless otherwise is noted.
            EuroInvestor is not liable for any delay, inaccuracy, error, interruption, omission or discontinuance in the Data.
            Further, EuroInvestor gives no guarantee against, and assumes no liability for, any use of the Data just as EuroInvestor does not warrant or represent the accuracy or completeness of the Data in any respect.
            Each recipient shall be deemed to have made its own investigation and appraisal of the financial status of the companies in question.
    </p>
    <p>
        Trading in financial products may result in losses as well as profits.
            EuroInvestor shall not be responsible for any direct or indirect losses, expenses or damages, arising from any investment based on the Data.
            Any information, including but not limited to pricing information on the Website is of an indicative nature and does not, and is not intended to, constitute an offer, solicitation, invitation or recommendation to buy, sell or deliver (directly or indirectly) any securities or derivatives thereon, nor a representation that a purchase or sale thereof can be effected on the basis of such information or at any given price.
    </p>
    <p>
        The information on the Website including the Data does not give rise to any legally binding obligation and/or agreement, including without limitation any obligation to update such information nor can this information be interpreted as advice for a particular investment strategy or for any other purpose.
    </p>
    <p>
        The Data is sourced from different stock exchanges (“Exchange”). Some of these Exchanges have their own legal disclaimers and terms of use which shall have effect on the Data related to the respective Exchange. For the moment being, such Exchanges are:
    </p>
    <p>
        Dow Jones Indexes [<a href="http://www.djindexes.com/mdsidx/downloads/crc/DJ_Indexes_Terms_Conditions.pdf">Click to view</a>]<br />
    </p>
    <p>
        OMX Nasdaq [<a href="http://ir1.euroinvestor.com/asp/ir/Disclaimers/MainDisclaimer_OMXNasdaq.aspx">Click to view</a>]
    </p>
    <p>
        Hong Kong Stock Exchange [<a href="http://ir1.euroinvestor.com/asp/ir/Disclaimers/MainDisclaimer_HKEX.aspx">Click to view</a>]
    </p>
</div>

<%= site.footer("IRDisclaimer") %>

<%
    if (!string.IsNullOrEmpty(Request.QueryString["colourMain"]))
    {
        site.overwrite_colourMain = Request.QueryString["colourMain"].ToString();
    }
    if (!string.IsNullOrEmpty(Request.QueryString["language"]))
    {
        site.overwrite_language = Request.QueryString["language"].ToString();
    }
%>






