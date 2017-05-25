<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>

<%= site.newHeader("IRChart") %>

<script type="text/javascript">
    var activeModules = ['IRQuote'];
</script>

<div class="IRQuoteModule"></div>

<style type="text/css">
    div.disclaimer-IRQuoteMini {
        width: 100%;
        max-width: 100%;
        text-align: left;
        top: 0px;
    }

    div.disclaimer-IRQuoteMini .disclaimer-copyright {
        display: none;
    }
    
    div.disclaimer-IRQuoteMini .disclaimer-dataSource {
        display: none;
    }
    div.disclaimer-IRQuoteMini .disclaimer-delayed {
        
    }
    
</style>

<%= site.newFooter("IRQuoteMini") %>

<script id="IRQuoteTableTemplate" type="text/x-handlebars-template" />

    {{#stocks}}
        <div class="IRMiniQuote">
            
            <span>SHARE PRICE</span>
            <br />
            <div class="MQDivider">
                <span class="MQLast">
                    {{decimals last}}p
                </span> 
                <span>
                    Change
                </span>
                <span class="MQChange">
                     {{decimals change}}
                </span>
            </div>
            <span class="MQTimeStamp">
                {{showDate timestamp}}
            </span>
            <span>
                {{showTime timestamp}}
            </span>
        </div>
    {{/stocks}}

</script>