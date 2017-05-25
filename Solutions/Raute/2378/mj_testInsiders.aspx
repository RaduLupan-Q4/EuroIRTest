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
                <table class="table-look personsNoLongerSubject tablesaw">
                    <tr>
                        <th class="Header column-first">Insider</th>
                        <th class="Header">Criteria</th>
                        <th class="Header column-last">End Date</th>
                    </tr>
                    <tr>
                        <td class="Data column-first">Hautamäki Risto Kalevi</td>
                        <td class="Data date">Member of the board of directors</td>
                        <td class="Data column-last">2016-03-31</td>
                    </tr><tr>
                        <td class="Data column-first">Rajalahti Janne Antero</td>
                        <td class="Data date">Auditor with chief responsibility for audits</td>
                        <td class="Data column-last">2016-03-31</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>



    <%-- Insiders list --%>
    <script id="IRDataTemplateInsiders" type="text/x-handlebars-template">
        <div class="table-wrapper insiders" id="">

            <div class="personInFocus"></div>
            <table class="table-look insiders board tablesaw" >
                <tr>
                    <th class=" Header column-first">Members of the Board</th>
                    <th class=" Header">Criteria</th>
                    <th class=" Header">A-Share</th>
                    <th class=" Header">Change</th>
                    <th class=" Header">K-Share</th>
                    <th class=" Header">Change</th>
                    <th class=" Header">Options</th>
                    <th class=" Header column-last">Change</th>
                </tr>

                {{#data}}   
                    {{#each insiderInfoRows}}
                        {{#if_eq position 'membersOfTheBoard'}}
                        <tr class="userRow" id="{{id}}">
                            <td class="Data column-first">{{name}}</td>
                            <td class="Data criteria">{{positionName}}</td>
                            <td class="Data a-share">{{getShare holdings 'RUTAV'}}</td>
                            <td class="Data a-share-change"></td>
                            <td class="Data k-share">{{getShare holdings 'RUTKV'}}</td>
                            <td class="Data k-share-change"></td>
                            <td class="Data options">{{getOptions holdings}}</td>
                            <td class="Data option-change column-last"></td>
                        </tr>
                {{/if_eq}}
                    {{/each}}                                                   
                {{/data}}
               
                <tr>
                    <td class="Data total column-first ">Total</td>
                    <td class="Data total"></td>
                    <td class="Data total a-share"></td>
                    <td class="Data total"></td>
                    <td class="Data total k-share"></td>
                    <td class="Data total"></td>
                    <td class="Data total options"></td>
                    <td class="Data total column-last"></td>
                </tr>
            </table>
            <table class="table-look management board tablesaw" id="">
                <tr>
                    <th class=" Header column-first">Management</th>
                    <th class=" Header">Criteria</th>
                    <th class=" Header">A-Share</th>
                    <th class=" Header">Change</th>
                    <th class=" Header">K-Share</th>
                    <th class=" Header">Change</th>
                    <th class=" Header">Options</th>
                    <th class=" Header column-last">Change</th>
                </tr>
                {{#data}}   
                    {{#each insiderInfoRows}}
                        {{#if_eq position 'management'}}
                        <tr class="userRow" id="{{id}}">
                            <td class="Data column-first">{{name}}</td>
                            <td class="Data criteria">{{positionName}}</td>
                            <td class="Data a-share">{{getShare holdings 'RUTAV'}}</td>
                            <td class="Data a-share-change"></td>
                            <td class="Data k-share">{{getShare holdings 'RUTKV'}}</td>
                            <td class="Data k-share-change"></td>
                            <td class="Data options">{{getOptions holdings}}</td>
                            <td class="Data option-change column-last"></td>
                        </tr>
                {{/if_eq}}
                    {{/each}}                                                   
                {{/data}}
               
                <tr>
                    <td class="Data total column-first ">Total</td>
                    <td class="Data total"></td>
                    <td class="Data total a-share"></td>
                    <td class="Data total"></td>
                    <td class="Data total k-share"></td>
                    <td class="Data total"></td>
                    <td class="Data total options"></td>
                    <td class="Data total column-last"></td>
                </tr>
            </table>
            <table class="table-look auditors board tablesaw" id="">
                <tr>
                    <th class=" Header column-first">Auditors</th>
                    <th class=" Header">Criteria</th>
                    <th class=" Header">A-Share</th>
                    <th class=" Header">Change</th>
                    <th class=" Header">K-Share</th>
                    <th class=" Header">Change</th>
                    <th class=" Header">Options</th>
                    <th class=" Header column-last">Change</th>
                </tr>
                {{#data}}   
                    {{#each insiderInfoRows}}
                        {{#if_eq position 'auditors'}}
                        <tr class="userRow" id="{{id}}">
                            <td class="Data column-first">{{name}}</td>
                            <td class="Data criteria">{{positionName}}</td>
                            <td class="Data a-share">{{getShare holdings 'RUTAV'}}</td>
                            <td class="Data a-share-change"></td>
                            <td class="Data k-share">{{getShare holdings 'RUTKV'}}</td>
                            <td class="Data k-share-change"></td>
                            <td class="Data options">{{getOptions holdings}}</td>
                            <td class="Data option-change column-last"></td>
                        </tr>
                {{/if_eq}}
                    {{/each}}                                                   
                {{/data}}
               
                <tr>
                    <td class="Data total column-first ">Total</td>
                    <td class="Data total"></td>
                    <td class="Data total a-share"></td>
                    <td class="Data total"></td>
                    <td class="Data total k-share"></td>
                    <td class="Data total"></td>
                    <td class="Data total options"></td>
                    <td class="Data total column-last"></td>
                </tr>
            </table>

            {{#data}}   
                    {{#each insiderInfoRows}}
                    <div class="profile-wrapper hiddenUserContent" id="user{{id}}">
                        <div class="profile-header">
                            <div class="profile-name">{{name}}</div>
                            <div class="profile-back" onclick="goBack()"><a>Back</a></div>
                        </div>

                        <div class="profile-table-wrapper">
                            <div class="table-criteria-wrapper">
                                <table class="table-look criteria">
                                    <tr>
                                        <th class="Header column-first">Criteria for disclosure requirement</th>
                                        <th class="Header">Start Date</th>
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
                                <table class="table-look holdings">
                                    <tr>
                                        <th class="Header column-first">Holdings</th>
                                        <th class="Header"></th>
                                        <th class="Header column-last"></th>
                                    </tr>
                                    <tr>
                                        <td class="Header column-first">Own holdings</td>
                                        <td class="Header">Security</td>
                                        <td class="Header column-last">Amount</td>
                                    </tr>
                                    {{{holdings name}}}
                                </table>
                            </div>
                            <div class="table-headline">Linkages</div>
                            <div class="table-linkage-wrapper">
                                <table class="table-look linkage">
                                    <%--<tr>
                                        <th class="Header column-first">Linkages</th>
                                        <th class="Header"></th>
                                        <th class="Header"></th>
                                        <th class="Header"></th>
                                        <th class="Header column-last"></th>
                                    </tr>--%>

                                    {{{linkages id}}}

                                </table>
                            </div>
                            <div class="table-transHistory-wrapper">
                                <table class="table-look transHistory">
                                    <tr>
                                        <th class="Header column-first">Transaction history of the last 12 months</th>
                                        <th class="Header"></th>
                                        <th class="Header"></th>
                                        <th class="Header"></th>
                                        <th class="Header column-last"></th>
                                    </tr>
                                    <tr>
                                        <td class="Header column-first">*Date</td>
                                        <td class="Header">Owner</td>
                                        <td class="Header">Transaction</td>
                                        <td class="Header">Security</td>
                                        <td class="Header column-last">Amount</td>
                                    </tr>
                                    <tr>
                                        <td class="Data column-first"></td>
                                        <td class="Data"></td>
                                        <td class="Data"></td>
                                        <td class="Data"></td>
                                        <td class="Data column-last"></td>
                                    </tr>
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
                    <th class="Header date column-first">Date</th>
                    <th class="Header insider">Insider</th>
                    <th class="Header owner">Owner</th>
                    <th class="Header transaction">Transaction</th>
                    <th class="Header security">Security</th>
                    <th class="Header amount column-last">Amount</th>
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


</div>

<%= site.newFooter("IRCustomModule") %>
<script type="text/javascript" src="/inc/scripts/jquery/jquery.minitabs.js?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("/inc/scripts/jquery/jquery.minitabs.js")).Ticks.ToString()%>"></script>

<script type="text/javascript" src="includes_insiders/js/ir.behaviour.js?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("includes_insiders/js/ir.behaviour.js")).Ticks.ToString()%>"></script>


<script type="text/javascript">
    $(document).ready(function () {
        $("#container").minitabs();
    });
</script>


<script type="text/javascript" src="inc/tablesaw.js?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("inc/tablesaw.js")).Ticks.ToString()%>"></script>

<link rel="stylesheet" type="text/css" media="screen" href="inc/tablesaw.css" /><style>
    body {
        width:100%!important;
    }

</style>
<!-- Add this to do responsive Tables-->
<script type="text/javascript">
    $(document).ready(function () {
        $("#container").minitabs();
        function applyTableSaws() {
            $('table.tablesaw').each(function () {
                $(this).attr('data-tablesaw-minimap', '');
                $(this).attr('data-tablesaw-mode', 'swipe');
                //$(this).addClass('tablesaw');
                $(this).addClass('tablesaw-swipe');

                $(this).prepend('<thead></thead>')
                $(this).find('thead').append($(this).find("tr:eq(0)"));

                var counter = 0;
                $(this).find('thead th').each(function () {
                    $(this).attr('scope', 'col');
                    $(this).attr('data-tablesaw-sortable-col', '');
                    if (counter == 0) {
                        $(this).attr('data-tablesaw-priority', 'persist');
                    } else {
                        $(this).attr('data-tablesaw-priority', counter);
                    }
                    counter++;
                });
            });


            console.log('test');

            $(document).trigger("enhance.tablesaw");

        }
        setTimeout(function () { applyTableSaws(); },2000);
    });
</script>
<!--<table class="table-look insiders board tablesaw tablesaw-swipe" data-tablesaw-mode="swipe" data-tablesaw-minimap>-->