<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" type=""text/css"" href=""https://fonts.googleapis.com/css?family=Open+Sans:300,300italic,400,400italic,600,700""/>";
    site.appendCustomCSSFont += @"<link rel=""stylesheet"" type=""text/css"" href=""https://fonts.googleapis.com/css?family=Raleway:400,100,200,300,500,600,700,800,900""/>";
%>
<%= site.newHeader("IRCustomModule") %>
<link rel="stylesheet" type="text/css" href="includes_insiders/css/insiders.style.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("includes_insiders/css/insiders.style.css")).Ticks.ToString()%>" />
<script type="text/javascript">
    var activeModules = ['IRCustomModule'];
</script>



<div class="wrapper">

    <div class="tabs-container">
        <div class="navbar-header">Insiders</div>

        <div id="container" class="tabs">
            <ul class="navbar">
                <li class="tabitem"><a href="#tab-1">Insiders list</a></li>
                <li class="tabitem"><a href="#tab-2">Transaction history</a></li>
                <li class="tabitem"><a href="#tab-3">Persons no longer subject to disclosure requirements</a></li>
            </ul>


            <div id="tab-1">
                <div id="IRDataInsiders"></div>
            </div>
            <div id="tab-2">
                <div id="IRDataTransactions"></div>
            </div>
            <div id="tab-3">
                tab 3
            </div>
        </div>
    </div>



    <%-- Insiders list --%>
    <script id="IRDataTemplateInsiders" type="text/x-handlebars-template">
        <div class="table-wrapper insiders" id="">

            <div class="personInFocus"></div>

            <table class="table-look insiders" id="">
                <tr>
                    <th class=" Header column-first">Members of the Board</th>
                    <th class=" Header">Criteria</th>
                    <th class=" Header column-last">Shares</th>
                </tr>
                {{#tables}}   
                    {{#each insiderInfoRows}}
                        <tr class="userRow" id="{{id}}">
                            <td class="Data column-first">{{name}}</td>
                            <td class="Data">{{position}}</td>
                            <td class="Data column-last">{{currentHolding}}</td>
                        </tr>

                        <div class="hiddenUserContent" id="user{{id}}">
                            <div>{{name}}</div>
                            <div>{{position}}</div>
                            <div>{{positionFrom}}</div>
                            <div>{{currentHolding}}</div>
                            <div>{{latestTransaction}}</div>
                        </div>
                   {{/each}}                    
                {{/tables}}
                <tr>
                    <td class="Data total column-first ">Total</td>
                    <td class="Data total"></td>
                    <td class="Data total column-last">0</td>    
				</tr>
            </table>
        </div>
    </script>
    
    
    
    
    
    
    
    
    
    

    <%-- Transactions list --%>
    <script id="IRDataTemplateTransactions" type="text/x-handlebars-template">
        <div class="table-wrapper transactions" id="">
            <table class="table-look transactions" id="">
                <tr>
                    <th class="Header date column-first">Date</th>
                    <th class="Header insider">Insider</th>
                    <th class="Header owner">Owner</th>
                    <th class="Header transaction">Transaction</th>
                    <th class="Header security">Security</th>
                    <th class="Header amount column-last">Amount</th>
                </tr>
                <tr>
                    <td class="Data date column-first">Value 1</td>
                    <td class="Data insider">Value 2</td>
                    <td class="Data owner">Value 3</td>
                    <td class="Data transaction">Value 4</td>
                    <td class="Data security">Value 5</td>
                    <td class="Data amount column-last">Value 6</td>
                </tr>
                <tr>
                    <td class="Data date column-first">Value 1</td>
                    <td class="Data insider">Value 2</td>
                    <td class="Data owner">Value 3</td>
                    <td class="Data transaction">Value 4</td>
                    <td class="Data security">Value 5</td>
                    <td class="Data amount column-last">Value 6</td>
                </tr>
                <tr>
                    <td class="Data date column-first">Value 1</td>
                    <td class="Data insider">Value 2</td>
                    <td class="Data owner">Value 3</td>
                    <td class="Data transaction">Value 4</td>
                    <td class="Data security">Value 5</td>
                    <td class="Data amount column-last">Value 6</td>
                </tr>
            </table>
        </div>
    </script>


</div>

<%= site.newFooter("IRCustomModule") %>
<script type="text/javascript" src="/inc/scripts/jquery/jquery.minitabs.js?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("/inc/scripts/jquery/jquery.minitabs.js")).Ticks.ToString()%>">
</script>
<script type="text/javascript" src="includes_insiders/js/ir.behaviour.js?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("includes_insiders/js/ir.behaviour.js")).Ticks.ToString()%>"></script>


<script type="text/javascript">
    $(document).ready(function () {
        $("#container").minitabs();    
    });
</script>
