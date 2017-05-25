<%@ Page Language="C#" AutoEventWireup="false" %>

<!DOCTYPE html>
<html>
<head>
    <title></title>
	<meta charset="utf-8" />
    <link rel="stylesheet" href="newsDisclaimer.css" />
</head>
<body>

    <% 
        string solutionId = Request.QueryString["solutionID"];
        string customerKey = Request.QueryString["customerKey"];
        string storyId = Request.QueryString["storyid"];
    %>

    <div class="col-sm-8 col-xs-12 col-sm-offset-2 ccbnContent">
        <p><strong>Restricted materials</strong></p><p>The information contained in this section of the website of Scandinavian Tobacco Group A/S (the "Company") is not intended for, and must not be accessed by, or distributed or disseminated, directly or indirectly, in whole or in part, to persons resident or physically present in the United States of America (including its territories and possessions, any state of the United States and the District of Columbia, the "United States"), Australia, Canada, or Japan, or any jurisdiction where to do so might constitute a violation of the securities laws or regulations of such jurisdiction, and does not constitute an offer to sell or the solicitation of an offer to buy or acquire, any ordinary shares or other securities of the Company in the United States, Australia, Canada, Japan, or any other jurisdiction in which such release, publication or distribution would be unlawful.</p><p>
            The shares of the Company referred to in this section of the website (the "Shares") have not been and will not be registered under the U.S. Securities Act of 1933, as amended (the "Securities Act") and may not be offered or sold within the United States absent registration or in certain transactions exemption from, or in a transaction not subject to, the registration requirements of the Securities Act and in compliance with any applicable securities laws of any state or other jurisdiction of the United States. Furthermore, the Shares have not been and will not be registered under the applicable securities laws of Australia, Canada, Japan, or any other jurisdiction in which it would be unlawful or would require registration or other measures, and therefore may not be offered or sold or for the account or benefit of any person having a registered address in, or located or resident in, Australia, Canada, Japan or any other jurisdiction in which it would be unlawful or would require registration or other measures.
        </p><p>The information on this website does not constitute an offer of the Shares to the public in the United Kingdom. No prospectus has been or will be approved in the United Kingdom in respect of the Shares. The information on this website is being distributed to and is directed only at (i) persons who are outside the United Kingdom or (ii) persons who are investment professionals within the meaning of Article 19(5) of the Financial Services and Markets Act 2000 (Financial Promotion) Order 2005 (the “Order”) and (iii) high net worth entities, and other persons to whom it may lawfully be communicated, falling within Article 49(2)(a) to (d) of the Order (all such persons together being referred to as “Relevant Persons”). Any investment activity to which the information on this website relates will only be available to and will only be engaged with, Relevant Persons. Any person who is not a Relevant Person should not act or rely on the contents of this website.</p><p>
            Access to the information and documents contained on the following section of the Company’s website may be illegal in certain jurisdictions, and only certain categories of persons may be authorised to access such information and documents. All persons residing outside of Denmark who wish to have access to the documents contained in this section of the Company’s website should first ensure that they are not subject to local laws or regulations that prohibit or restrict their right to access this section of the website, or require registration or approval for any acquisition of securities by them. No such registration or approval has been or will be obtained outside Denmark. The Company assumes no responsibility if there is a violation of applicable law and regulations by any person.
        </p><p>
            The use of this section of the website is subject to Danish law and any disputes arising out of or regarding this section of the website is subject to Danish law and the exclusive jurisdictions of the Danish courts.
        </p><p>
            I therefore certify that:<br>
            1. I am resident and physically present in a country outside the United States, Australia, Canada, and Japan; and<br>
            2. I am resident and physically present (a) in Denmark or (b) outside Denmark and each of the jurisdictions referred to in clause (1) above and, in that case, I am authorized to access the information and documents on this website without being subject to any legal restriction and without any further action required by the Company.
        </p><p>
            I have read, understand and agree to comply with all of the restrictions set forth above.
        </p><p>
            <input type="radio" name="confirm" value="yes" id="yes" class="yesSelector"><label for="yes">Yes</label>&nbsp;&nbsp;
            <input type="radio" name="confirm" value="no" id="no" class="noSelector"><label for="no">No</label>
        </p><p>
            
            
            <input type="submit" name="proceed" id="proceed" value="Proceed" class="ccbnButton btn btnRed"></p>
    </div>

    <script type="text/javascript" src="http://ir.euroinvestor.com/includes/js/libs/jquery2-1-4.min.js"></script>
    <script type="text/javascript">

        $('#proceed').click(function () {

            var yesIsSelected = $('.yesSelector').is(':checked');
            var noIsSelected = $('.noSelector').is(':checked');

            if (yesIsSelected) {
                //window.open('http://ir.euroinvestor.com/Tools/newsArticleHTML.aspx?solutionID=<%= solutionId %>&customerKey=<%= customerKey %>&storyid=<%= storyId %>');
                window.open('newsArticle.aspx?storyid=<%= storyId %>&solutionID=<%= solutionId %>&customerKey=<%= customerKey %>');
            } else if (noIsSelected) {
                window.open('newsDisclaimerNo.aspx', '_self');
            }
        });

    </script>

</body>
</html>
