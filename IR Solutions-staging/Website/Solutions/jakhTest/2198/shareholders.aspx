<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" type=""text/css"" href=""http://fonts.googleapis.com/css?family=Open+Sans:300,300italic,400,400italic,600,700""/>";
    site.appendCustomCSSFont += @"<link rel=""stylesheet"" type=""text/css"" href=""http://fonts.googleapis.com/css?family=Raleway:400,100,200,300,500,600,700,800,900""/>";
%>
<%= site.newHeader("IRCustomModule") %>
<link rel="stylesheet" type="text/css" href="includes_shareholders/css/shareholders.style.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("includes_shareholders/css/shareholders.style.css")).Ticks.ToString()%>" />
<script type="text/javascript">
    var activeModules = ['IRCustomModule'];
</script>


<div class="wrapper">

    <div id="IRData"></div>



    <script id="IRDataTemplate" type="text/x-handlebars-template">
        <div class="table-wrapper">
            <table class="table-look">
                <thead>
                    <tr>
                        <%-- year or ''(empty)    reverse or ''(empty)  --%>
                        {{{getPeriodHeaders '' 'reverse'}}}                                                 
                    </tr>
                    <tr>
                        {{{getPeriodHeaders 'year' 'reverse'}}}                            
                    </tr>
                </thead>
                <tbody>
                    {{#tables}}
                        {{#if_eq workSheetName 'quarters'}}
                            <%--{{#if_eq tableName 'cash flow'}}--%>
                            <tr>
                                <td>{{tableName}}</td>
                            </tr>
                                {{#each rows}}
                                        <tr>
                                                                <%-- worksheetname    tableName    rowTitle    reverse or ''(empty)  --%>
                                            {{{getPeriodYearValues ../workSheetName ../tableName this.rowTitle 'reverse'}}}       
                                        </tr>
                                {{/each}}
                            <%--{{/if_eq}}--%>
                        {{/if_eq}}
                    {{/tables}}
                         <%-- get specific row by defining worksheetname -> tableName -> rowtitle --%>                                    
                                {{{getPeriodYearValues 'quarters' 'income statement' 'Revenue (standard prices)' 'reverse'}}}                            

                </tbody>
            </table>




            <br />
            <br />
            <br />
            <div>Get Latest value from specific table with specific rowTitle : <b>{{getLastestValue 'Cash flow' 'Cash flow from operating'}}</b></div>

            <div>Get Value from specific table with specific rowTitle by specific period : <b>{{getPeriodValue 'Income statement' 'Revenue (Standard Prices)' 'Q2 2010'}}</b></div>
        </div>
    </script>

</div>

<%= site.newFooter("IRCustomModule") %>
<script type="text/javascript" src="includes_shareholders/js/ir.behaviour.js?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("includes_shareholders/js/ir.behaviour.js")).Ticks.ToString()%>"></script>


