<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" type=""text/css"" href=""https://fonts.googleapis.com/css?family=Open+Sans:300,300italic,400,400italic,600,700""/>";
    site.appendCustomCSSFont += @"<link rel=""stylesheet"" type=""text/css"" href=""https://fonts.googleapis.com/css?family=Raleway:400,100,200,300,500,600,700,800,900""/>";
%>
<%= site.newHeader("IRCustomModule") %>
<link rel="stylesheet" type="text/css" href="includes_keyfigures/css/keyfigure.style.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("includes_keyfigures/css/keyfigure.style.css")).Ticks.ToString()%>" />
<script type="text/javascript">
    var activeModules = ['IRCustomModule'];
</script>


<div class="wrapper">

    <div id="IRData"></div>

    <script id="IRDataTemplate" type="text/x-handlebars-template">
        {{#tables}}     
        <div class="table-wrapper" >
            <table class="table-look" id="{{tableId}}">
                <tr>
                    <th class="left">
                        {{tableName}}
                    </th>
                    {{{printTags '0' 'th'  'name' columnHeaders 99 'forward'}}}
                </tr>

                {{#each rows}}
                         <tr>
                             <td class="left">
                                 {{rowTitle}}
                             </td>
                             {{{printTags id 'td' 'cell'  rowData 99 'forward'}}}
                         </tr>
                {{/each}}
            </table>
        </div>
        {{/tables}}



    
    </script>

</div>

<%= site.newFooter("IRCustomModule") %>
<script type="text/javascript" src="inc/js/ir.behaviour.js?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("inc/js/ir.behaviour.js")).Ticks.ToString()%>"></script>


