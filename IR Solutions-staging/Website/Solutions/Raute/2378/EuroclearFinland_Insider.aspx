<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" type=""text/css"" href=""https://fonts.googleapis.com/css?family=Open+Sans:300,300italic,400,400italic,600,700""/>";
    site.appendCustomCSSFont += @"<link rel=""stylesheet"" type=""text/css"" href=""https://fonts.googleapis.com/css?family=Raleway:400,100,200,300,500,600,700,800,900""/>";
%>
<%= site.newHeader("IRCustomModule") %>
<link rel="stylesheet" type="text/css" href="inc/tablesaw.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("inc/tablesaw.css")).Ticks.ToString()%>" />
<link rel="stylesheet" type="text/css" href="includes_insiders/css/insiders.style.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("includes_insiders/css/insiders.style.css")).Ticks.ToString()%>" />
<script type="text/javascript">
    var activeModules = ['IRCustomModule'];
</script>

<div class="wrapper">

    <div class="tabs-container">
        <div class="navbar-header"></div>

        <div id="container" class="tabs">
            <ul class="navbar">
                <li class="tabitem"><a href="#tab-1" id="tabItemOne"></a></li>
                <li class="tabitem"><a href="#tab-2" id="tabItemTwo"></a></li>
                <li class="tabitem"><a href="#tab-3" id="tabItemThree"></a></li>
            </ul>
            <div id="tab-1">
                <div id="IRDataInsiders"></div>
            </div>
            <div id="tab-2">
                <div id="IRDataTransactions"></div>
            </div>
            <div id="tab-3">
                <div id="IRDataEndedInsiders"></div>
            </div>
        </div>
    </div>



    <%-- Insiders list --%>
    <script id="IRDataTemplateInsiders" type="text/x-handlebars-template">
        <div class="table-wrapper insiders" id="">
            <div class="lastUpdated">{{headers/t_updated}} : {{showDateWithFormat lastUpdated 'YYYY-MM-DD'}}</div>
            <%--<div class="personInFocus"></div>--%>

            <div class="tab1-tables-wrapper">
                <table class="table-look insiders board tablesaw" data-sortable-numeric id="">
                    <tr>
                        {{#headers}}
                        <th class="Header name column-first">{{t_members_of_the_board}}</th>
                        <th class="Header criteria">{{t_criteria}}</th>
                        <th class="Header numberalignment">{{t_a_share}}</th>
                        <th class="Header numberalignment">{{t_change}}</th>
                        <th class="Header numberalignment">{{t_k_share}}</th>
                        <th class="Header numberalignment">{{t_change}}</th>
                        <th class="Header numberalignment">{{t_options}}</th>
                        <th class="Header numberalignment column-last">{{t_change}}</th>
                        {{/headers}}
                    </tr>
                    {{#data}}   
                    {{#each insiderInfoRows}}
                       {{#if_eq position 'membersOfTheBoard'}}
                        <tr class="userRow" id="{{id}}">
                            <td class="Data name column-first">{{name}}</td>
                            <td class="Data criteria">{{positionName}}</td>
                            <td class="Data numberalignment a-share">{{getShare holdings 'RUTAV'}}</td>
                            <td class="Data numberalignment a-share-change">{{getChange holdings 'RUTAV'}}</td>
                            <td class="Data numberalignment k-share">{{getShare holdings 'RUTKV'}}</td>
                            <td class="Data numberalignment k-share-change">{{getChange holdings 'RUTKV'}}</td>
                            <td class="Data numberalignment options">{{getOptions holdings}}</td>
                            <td class="Data numberalignment option-change column-last">{{ getOptionsChange holdings }}</td>
                        </tr>
                    {{/if_eq}}
                    {{/each}}                                                   
                {{/data}}
               
                <tr>
                    <td class="Data total column-first ">{{headers/t_total}}</td>
                    <td class="Data total"></td>
                    <td class="Data numberalignment total a-share"></td>
                    <td class="Data numberalignment total"></td>
                    <td class="Data numberalignment total k-share"></td>
                    <td class="Data numberalignment total"></td>
                    <td class="Data numberalignment total options"></td>
                    <td class="Data numberalignment total column-last"></td>
                </tr>
                </table>

                <table class="table-look management board tablesaw" id="">
                    <tr>
                        {{#headers}}
                        <th class="Header name column-first">{{t_management}}</th>
                        <th class="Header criteria">{{t_criteria}}</th>
                        <th class="Header numberalignment">{{t_a_share}}</th>
                        <th class="Header numberalignment">{{t_change}}</th>
                        <th class="Header numberalignment">{{t_k_share}}</th>
                        <th class="Header numberalignment">{{t_change}}</th>
                        <th class="Header numberalignment">{{t_options}}</th>
                        <th class="Header numberalignment column-last">{{t_change}}</th>
                        {{/headers}}
                    </tr>
                    {{#data}}   
                    {{#each insiderInfoRows}}
                        {{#if_eq position 'management'}}
                        <tr class="userRow" id="{{id}}">
                            <td class="Data name column-first">{{name}}</td>
                            <td class="Data criteria criteria">{{positionName}}</td>
                            <td class="Data numberalignment a-share">{{getShare holdings 'RUTAV'}}</td>
                            <td class="Data numberalignment a-share-change">{{getChange holdings 'RUTAV'}}</td>
                            <td class="Data numberalignment k-share">{{getShare holdings 'RUTKV'}}</td>
                            <td class="Data numberalignment k-share-change">{{getChange holdings 'RUTKV'}}</td>
                            <td class="Data numberalignment options">{{getOptions holdings}}</td>
                            <td class="Data numberalignment option-change column-last">{{ getOptionsChange holdings }}</td>
                        </tr>
                    {{/if_eq}}
                    {{/each}}                                                   
                {{/data}}
               
                <tr>
                    <td class="Data total column-first ">{{headers/t_total}}</td>
                    <td class="Data total"></td>
                    <td class="Data numberalignment total a-share"></td>
                    <td class="Data numberalignment total"></td>
                    <td class="Data numberalignment total k-share"></td>
                    <td class="Data numberalignment total"></td>
                    <td class="Data numberalignment total options"></td>
                    <td class="Data numberalignment total column-last"></td>
                </tr>
                </table>
                <table class="table-look auditors board tablesaw" id="">
                    <tr>
                        {{#headers}}
                        <th class="Header name column-first">{{t_auditors}}</th>
                        <th class="Header criteria">{{t_criteria}}</th>
                        <th class="Header numberalignment">{{t_a_share}}</th>
                        <th class="Header numberalignment">{{t_change}}</th>
                        <th class="Header numberalignment">{{t_k_share}}</th>
                        <th class="Header numberalignment">{{t_change}}</th>
                        <th class="Header numberalignment">{{t_options}}</th>
                        <th class="Header numberalignment column-last">{{t_change}}</th>
                        {{/headers}}
                    </tr>
                    {{#data}}   
                    {{#each insiderInfoRows}}
                        {{#if_eq position 'auditors'}}
                        <tr class="userRow" id="{{id}}">
                            <td class="Data name column-first">{{name}}</td>
                            <td class="Data criteria">{{positionName}}</td>
                            <td class="Data numberalignment a-share">{{getShare holdings 'RUTAV'}}</td>
                            <td class="Data numberalignment a-share-change">{{getChange holdings 'RUTAV'}}</td>
                            <td class="Data numberalignment k-share">{{getShare holdings 'RUTKV'}}</td>
                            <td class="Data numberalignment k-share-change">{{getChange holdings 'RUTKV'}}</td>
                            <td class="Data numberalignment options">{{getOptions holdings}}</td>
                            <td class="Data numberalignment option-change column-last">{{ getOptionsChange holdings }}</td>
                        </tr>
                    {{/if_eq}}
                    {{/each}}                                                   
                {{/data}}
               
                <tr>
                    <td class="Data total column-first ">{{headers/t_total}}</td>
                    <td class="Data total"></td>
                    <td class="Data total a-share"></td>
                    <td class="Data total"></td>
                    <td class="Data total k-share"></td>
                    <td class="Data total"></td>
                    <td class="Data total options"></td>
                    <td class="Data total column-last"></td>
                </tr>
                </table>
            </div>

            <%--   user profiles --%>
            {{#data}}   
                {{#each insiderInfoRows}}
                    <div class="profile-wrapper hiddenUserContent" id="user{{id}}">
                        <div class="profile-header">
                            <div class="profile-name">{{name}}</div>
                            <div class="profile-back" onclick="goBack()"><a>{{../../headers/t_back}}</a></div>
                        </div>

                        <div class="profile-table-wrapper">
                            <div class="table-criteria-wrapper">
                                <table class="table-look criteria" >
                                    <tr>
                                        <th class="Header column-first">{{../../headers/t_criteria_for_disclosure_requirement}}</th>
                                        <th class="Header date">{{../../headers/t_start_date}}</th>
                                        <th class="Header column-last"></th>                                       
                                    </tr>
                                    <tr>
                                        <td class="Data column-first">{{positionName}}</td>
                                        <td class="Data date">{{showDateWithFormat positionFrom 'YYYY-MM-DD'}}</td>
                                        <td class="Data column-last"></td>
                                    </tr>
                                </table>
                            </div>
                            <div class="table-holdings-wrapper">
                            <div class="table-headline">{{../../headers/t_holdings}}</div>
                                <table class="table-look holdings">
                                    <%--<tr>
                                        <th class="Header column-first">Holdings</th>
                                        <th class="Header"></th>
                                        <th class="Header column-last"></th>
                                    </tr>--%>
                                    <tr>
                                        <th class="Header column-first">{{../../headers/t_own_holdings}}</th>
                                        <th class="Header">{{../../headers/t_security}}</th>
                                        <th class="Header column-last">{{../../headers/t_amount}}</th>
                                    </tr>
                                    {{#each holdings}}
                                    <tr>
                                        <td class="Data column-first"></td>
                                        <td class="Data">{{name}}</td>
                                        <td class="Data column-last">{{amount}}</td>
                                    </tr>
                                    {{/each}}
                                </table>
                            </div>
                            <div class="table-headline">{{../../headers/t_linkages}}</div>
                            <div class="table-linkage-wrapper">
                                <table class="table-look linkage tablesaw">
                                    <tr>
                                        <th class="Header column-first"></th>
                                        <th class="Header"></th>
                                        <th class="Header"></th>
                                        <th class="Header"></th>
                                        <th class="Header column-last"></th>
                                    </tr>
                                    {{{linkages id}}}
                                </table>
                            </div>
                            <div class="table-headline">{{../../headers/t_transaction_history_last_12_month}}</div>
                            <div class="table-transHistory-wrapper" style="overflow-y: scroll">
                                <table class="table-look transHistory tablesaw">
                                    <%-- <tr>
                                        <th class="Header column-first"></th>
                                        <th class="Header"></th>
                                        <th class="Header"></th>
                                        <th class="Header"></th>
                                        <th class="Header column-last"></th>
                                    </tr>--%>
                                    <tr>
                                        <th class="Header column-first">*{{../../headers/t_date}}</th>
                                        <th class="Header">{{../../headers/t_owner}}</th>
                                        <th class="Header">{{../../headers/t_transaction}}</th>
                                        <th class="Header">{{../../headers/t_security}}</th>
                                        <th class="Header column-last">{{../../headers/t_amount}}</th>
                                    </tr>

                                    {{{transactions name}}}                                   
                                </table>
                            </div>
                        </div>
                    </div>
            {{/each}}                    
            {{/data}}
        </div>
    </script>



    <%-- Transactions list --%>
    <script id="IRDataTemplateTransactions" type="text/x-handlebars-template">
        <div class="table-wrapper transactions" id="">
            <table class="table-look transactions tablesaw" id="">
                <tr>
                    {{#headers}}
                    <th class="Header date column-first">{{t_date}}</th>
                    <th class="Header insider">{{t_insider}}</th>
                    <th class="Header owner">{{t_owner}}</th>
                    <th class="Header transaction">{{t_transaction}}</th>
                    <th class="Header security">{{t_security}}</th>
                    <th class="Header amount column-last">{{t_amount}}</th>
                    {{/headers}}
                </tr>
                {{#data}}
                    {{#each transactionRows}}
                        <tr>
                            <td class="Data date column-first">{{showDateWithFormat date 'YYYY-MM-DD'}}</td>
                            <td class="Data insider">{{name}}</td>
                            <td class="Data owner">{{holder}}</td>
                            <td class="Data transaction">{{basisString}}</td>
                            <td class="Data security">{{security}}</td>
                            <td class="Data amount column-last">{{numberAmount}}</td>
                        </tr>
                {{/each}}
                {{/data}}
            </table>
        </div>
    </script>

    <%-- Transactions list --%>
    <script id="IRDataTemplateEndedInsiders" type="text/x-handlebars-template">
        <div class="table-wrapper ended" id="">
           <table class="table-look personsNoLongerSubject tablesaw">
                    <tr>
                        {{#headers}}
                        <th class="Header column-first">{{t_bound}}</th>
                        <th class="Header">{{t_criteria}}</th>
                        <th class="Header column-last">{{t_end_date}}</th>
                        {{/headers}}
                    </tr>

                    {{#data}}   
                    {{#each endedInsiders}}
                    <tr>
                        <td class="Data column-first">{{name}}</td>
                        <td class="Data date">{{positionName}}</td>
                        <td class="Data column-last">{{formatDate positionEnded 'YYYY-MM-DD'}}</td>
                    </tr>
                         {{/each}}                                                   
                {{/data}}
                </table>
        </div>
    </script>


</div>

<%= site.newFooter("IRCustomModule") %>
<script type="text/javascript" src="/inc/scripts/jquery/jquery.minitabs.js?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("/inc/scripts/jquery/jquery.minitabs.js")).Ticks.ToString()%>"></script>

<script type="text/javascript" src="includes_insiders/js/ir.behaviour.js?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("includes_insiders/js/ir.behaviour.js")).Ticks.ToString()%>"></script>

<script type="text/javascript" src="inc/tablesaw.js?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("inc/tablesaw.js")).Ticks.ToString()%>"></script>

