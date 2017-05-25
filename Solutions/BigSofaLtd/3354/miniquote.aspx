<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Open+Sans"" type=""text/css"" />";
    //site.appendCustomCSSFont += @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Droid+Serif"" type=""text/css"" />";
%>
<%= site.newHeader("IRMiniquote") %>

<link href="//fonts.googleapis.com/css?family=Roboto" rel="stylesheet">

<script type="text/javascript">
    var activeModules = ['IRMiniquote'];
</script>

<div class="IRMiniquoteModule"><span class="ajaxLoader">Loading</span></div>

<script id="IRMiniquoteModuleTemplate" type="text/x-handlebars-template">
    <div class="IRMiniQuoteQuoteModule table-look responsive">
        <div class="miniquoteDetailsWrapper">
            <div class="data-price">
                <div class="Latest">{{headers/t_current_price}}</div>
                <div class="Data top-div">{{decimals stocks/last}}p</div>
            </div>
            <div class="data-price">
                <div class="Latest">{{headers/t_change}}</div>
                <div class="Data change {{formatColour stocks/change}}"><span class="positiveNumber" style="display: none;">+</span>{{decimals stocks/change}}p (<span class="positiveNumber" style="display: none;">+</span>{{decimals stocks/changePercent}}%)</div>
            </div>
        </div>
    </div>
</script>

<%= site.newFooter("IRMiniquote") %>





<script type="text/javascript">


    var customXApplied = false;

    function prepareCustomX() {

        if (!customXApplied) {
            if (typeof ($('.formatColourPos').html()) != 'undefined') {
                $('.positiveNumber').css("display", "inline-block");
            }
        }

        customXApplied = true;
    }
    $(function () {
        setInterval(function () {
            prepareCustomX();
        }, 200);
    });


</script>
