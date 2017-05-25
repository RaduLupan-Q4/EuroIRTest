<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" type=""text/css"" href=""http://fonts.googleapis.com/css?family=Open+Sans:300,300italic,400,400italic,600,700""/>";
    site.appendCustomCSSFont += @"<link rel=""stylesheet"" type=""text/css"" href=""http://fonts.googleapis.com/css?family=Raleway:400,100,200,300,500,600,700,800,900""/>";
%>
<%= site.newHeader("IRCustomModule") %>
<link rel="stylesheet" type="text/css" href="includes_keyfigures/css/keyfigure.style.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("includes_keyfigures/css/keyfigure.style.css")).Ticks.ToString()%>" />
<script type="text/javascript">
    var activeModules = ['IRCustomModule'];
</script>


<div class="wrapper">

    <div id="IRData"></div>



    <script id="IRDataTemplate" type="text/x-handlebars-template">

        <div class="table-wrapper">
            <table class="table-look">
                {{#tables}}
                    <thead class="{{@index}}">
                        <tr>
                            <th></th>
                            {{#each columnHeaders}}
                        <th>{{this}}</th>
                            {{/each}}
                        </tr>
                    </thead>
                <tbody>
                    <tr class="IRDataGroup">
                        <td>{{tableName}}</td>
                    </tr>
                    {{#each rows}}
                    <tr class="IRDataGroup">
                        <td class="IRData column-first">{{rowTitle}}</td>
                        {{#each rowData}}
                        <td class="IRData">{{this}}</td>
                        {{/each}}
                    </tr>
                    {{/each}}

                </tbody>
                {{/tables}}
                
            </table>

        </div>
    </script>

</div>

<%= site.newFooter("IRCustomModule") %>
<script type="text/javascript" src="includes_keyfigures/js/ir.behaviour.js?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("includes_keyfigures/js/ir.behaviour.js")).Ticks.ToString()%>"></script>


