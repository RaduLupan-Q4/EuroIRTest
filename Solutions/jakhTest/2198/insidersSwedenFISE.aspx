<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" type=""text/css"" href=""http://fonts.googleapis.com/css?family=Open+Sans:300,300italic,400,400italic,600,700""/>";
    site.appendCustomCSSFont += @"<link rel=""stylesheet"" type=""text/css"" href=""http://fonts.googleapis.com/css?family=Raleway:400,100,200,300,500,600,700,800,900""/>";
%>
<%= site.newHeader("IRCustomModule") %>
<link rel="stylesheet" type="text/css" href="includes_insiders/css/insiders.style.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("includes_insiders/css/insiders.style.css")).Ticks.ToString()%>" />
<script type="text/javascript">
    var activeModules = ['IRCustomModule'];
</script>


<div class="wrapper">

    <div id="IRData"></div>

    <script id="IRDataTemplate" type="text/x-handlebars-template">
        <div class="table-wrapper">
            {{#each tables}}
            <table class="table-look">
                <thead class="{{@index}}">
                    <tr>
                        <th>{{tableName}}</th>
                    </tr>
                    {{#if transactionRows}}
                     <tr>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Position</th>
                        <th>Holder</th>
                        <th>Transaction</th>
                        <th>Security</th>
                        <th>NumberAmount</th>
                        <th>Total</th>
                        <th>Comments</th>
                    </tr>
                    {{/if}}
                    {{#if insiderInfoRows}}
                     <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Position from</th>
                        <th>Current holding</th>
                        <th>Lastest transaction</th>
                    </tr>
                    {{/if}}
                </thead>
                <tbody>
                    {{#if transactionRows}}
                    {{#each transactionRows}}
                    <tr class="IRDataGroup">
                        <td class="IRData column-first">{{name}}</td>
                        <td class="IRData">{{date}}</td>
                        <td class="IRData">{{position}}</td>
                        <td class="IRData">{{holder}}</td>
                        <td class="IRData">{{transaction}}</td>
                        <td class="IRData">{{security}}</td>
                        <td class="IRData">{{numberAmount}}</td>
                        <td class="IRData">{{total}}</td>
                        <td class="IRData column-last">{{comments}}</td>
                    </tr>
                    {{/each}}
                    {{/if}}
                    

                    {{#if insiderInfoRows}}
                    {{#each insiderInfoRows}}
                    <tr class="IRDataGroup">
                        <td class="IRData column-first">{{name}}</td>
                        <td class="IRData">{{position}}</td>
                        <td class="IRData">{{positionFrom}}</td>
                        <td class="IRData">{{currentHolding}}</td>
                        <td class="IRData column-last">{{latestTransaction}}</td>
                    </tr>
                    {{/each}}
                    {{/if}}
                </tbody>
            </table>
            {{/each}}                

        </div>
    </script>

</div>

<%= site.newFooter("IRCustomModule") %>
<script type="text/javascript" src="includes_insiders/js/ir.behaviour.js?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("includes_insiders/js/ir.behaviour.js")).Ticks.ToString()%>"></script>


