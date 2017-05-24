<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html dir="lrt">
<head>
    <title>IR Solutions, Euroinvestor</title>
    <link rel="stylesheet" type="text/css" media="screen" href="/inc/css/ir.normalize.css?v=635793031194669922" />
    <link rel="stylesheet" type="text/css" media="screen" href="/inc/css/ir.style.css?v=635890532135184019" />
    <link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Open+Sans:300,300italic,400,400italic,600,700" />
    <link rel="stylesheet" type="text/css" media="screen" href="/includes/css/libs/jquery-ui1-11-1_smoothness.css?v=635810169525468128" />
    <link rel="stylesheet" type="text/css" media="screen" href="allTools.css" />

</head>
<body>





    <div id="tabs-container">
        <div class="navbar-wrapper">
            <ul class="tabs-menu">
                <li class="current"><a href="#tab-1">Share graph</a></li>
                <li><a href="#tab-2">Investment calculator</a></li>
                <li><a href="#tab-3">Share series</a></li>
                <li><a href="#tab-4">Share price look-up</a></li>
            </ul>
        </div>
        <div class="tab">

            <div id="tab-1" class="tab-content">
            </div>

            <div id="tab-2" class="tab-content">
            </div>

            <div id="tab-3" class="tab-content">
            </div>

            <div id="tab-4" class="tab-content">
            </div>
        </div>
    </div>







    <div class="disclaimer disclaimer-IRLookup">
        <span class="disclaimer-copyright">Copyright &copy; 1997-2016 <a href="http://www.euroinvestor.com/ir/">Euroinvestor</a> </span><span class="disclaimer-dataSource">and our data suppliers. </span><span class="disclaimer-delayed">Data delayed by 15-20 min.</span><span class="disclaimer-terms"> <a href="http://ir.euroinvestor.com/disclaimer/terms_conditions.aspx">See Terms of use</a></span>
    </div>
    <script type="text/javascript" src="/includes/js/libs/jquery2-1-4.min.js?v=635808478220682775"></script>
    <script type="text/javascript" src="ir.client.js?v=635906227508408261"></script>
    <script type="text/javascript" src="/inc/scripts/core/ir.util.js?v=635907132526993590"></script>
    <script type="text/javascript" src="/inc/scripts/bootstrap/3_2_0/bootstrap.min.js?v=635793031199586841"></script>
    <script type="text/javascript" src="/includes/js/libs/handlebars1-3-0.min.js?v=635808478214120447"></script>
    <script type="text/javascript" src="/includes/js/libs/moment2-7-0.min.js?v=635808478220995253"></script>
    <script type="text/javascript" src="/includes/js/libs/moment-timezone0-3-1.min.js?v=635808478220995253"></script>
    <script type="text/javascript" src="/inc/scripts/moment/moment-timezone-with-data-2010-2020.min.js?v=635808478211933009"></script>
    <script type="text/javascript" src="/inc/scripts/browserSupport/respond.min.js?v=635793031199506909"></script>
    <script type="text/javascript" src="/inc/scripts/ir.reset.js?v=635793031198936378"></script>
    <script type="text/javascript" src="/inc/scripts/core/ir.behaviour.js?v=635889809206474823"></script>
    <script type="text/javascript" src="/inc/scripts/core/ir.util.data.js?v=635905951577936428"></script>
    <script type="text/javascript" src="/includes/js/libs/highstock-2-0-4.js?v=635808478220057902"></script>
    <script type="text/javascript" src="/inc/scripts/jsv.js?v=635793031199216579"></script>
    <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.7.0/underscore-min.js" />
    </script>
    <script src="//code.jquery.com/ui/1.11.1/jquery-ui.js"></script>
    <script type="text/javascript" src="/inc/scripts/core/ir.tool.lookup.js?v=635907121538861149"></script>
    <script type="text/javascript" src="/inc/scripts/core/ir.util.draw.js?v=635890548722757094"></script>
</body>
</html>
<script>
    //tab navigation
    $(document).ready(function () {
        $(".tabs-menu a").click(function (event) {
            event.preventDefault();
            $(this).parent().addClass("current");
            $(this).parent().siblings().removeClass("current");
            var tab = $(this).attr("href");
            $(".tab-content").not(tab).css("display", "none");
            $(tab).fadeIn();
        });
    });
</script>
