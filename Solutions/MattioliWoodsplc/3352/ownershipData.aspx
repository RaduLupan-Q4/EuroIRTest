<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" type=""text/css"" href=""https://fonts.googleapis.com/css?family=Open+Sans:300,300italic,400,400italic,600,700""/>";
    site.appendCustomCSSFont += @"<link rel=""stylesheet"" type=""text/css"" href=""https://fonts.googleapis.com/css?family=Raleway:400,100,200,300,500,600,700,800,900""/>";
%>

<%= site.newHeader("IRCustomModule") %>

<link rel="stylesheet" type="text/css" href="includes_ownershipData/css/ownershipData.style.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("includes_ownershipData/css/ownershipData.style.css")).Ticks.ToString()%>" />

<script type="text/javascript">
    var activeModules = ['IRCustomModule'];
</script>


<div class="wrapper">

    <div id="IRData"></div>

    <script id="IRDataTemplate" type="text/x-handlebars-template">
        {{#tables}} 
            {{#if_eq workSheetName 'MajorShareholders'}}
            <div class="table-wrapper">
                <table class="table-look" id="{{tableId}}">
                    <tr class="Header">
                        <th class="column-left">{{tableName}}
                        </th>
                        {{{printTags '0' 'th'  'name' columnHeaders 99 'forward'}}} 
                    </tr>

                    {{#each rows}}
                             <tr>
                                 <td class="column-left">{{rowTitle}} 
                                 </td>
                                 {{{printTags id 'td' 'cell'  rowData 99 'forward' rowTitle}}} 
                             </tr>
                    {{/each}}
                </table>
            </div>
        {{/if_eq}}
        {{/tables}}



    
    </script>

</div>

<%= site.newFooter("IRCustomModule") %>
<script type="text/javascript" src="includes_ownershipData/js/ir.behaviour.js?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("includes_ownershipData/js/ir.behaviour.js")).Ticks.ToString()%>"></script>


<script type="text/javascript">

    //Hide all tr's with percentage lower than 3%

        var sharePercentageNumber = 3;
        var majorShareholdersApplied = false;

        function prepareMajorShareholders() {
            if (!majorShareholdersApplied) {
                if (typeof ($('.table-look tr td').html()) != 'undefined') {
                    $('.table-look tr').each(function () {

                        var customerId = $(this).find("td:nth-child(3)").html();
                        
                        //customerId = customerId + ' %';
                       

                        if (customerId < sharePercentageNumber || (customerId == "undefined")) {
                            $(this).closest('tr').hide();
                         
                        }        
                        
                    });

                    majorShareholdersApplied = true;                  
                }
            }
        }

        $(function () {
            setInterval(function () {
                prepareMajorShareholders();
            }, 200);
        });
        
        
</script>
