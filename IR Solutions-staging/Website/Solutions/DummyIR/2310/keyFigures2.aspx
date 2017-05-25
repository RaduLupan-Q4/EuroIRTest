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
<style>
    #tabs div {
        width:140px;
        height:40px;
        line-height:40px;
        border:1px solid #999;
        border-radius: 12px 12px 0px 0px;
        display:inline-block;
        vertical-align:middle;
        text-align:center;
        font-size:14px;
        font-weight:bold;
        margin-left:5px;
        cursor:pointer;
    }
    #tabs div.active {
        background-color:#efefef;
    }
    table.table-look {
        display:none;
    }
    .disclaimer {
        display:none;
    }
</style>

<div class="wrapper">
    <div style="width:800px;border:1px solid #ccc">
        <div id="tabs" style="position:absolute;top:0px;left:0px;width:800px">      
        </div>
        <div id="IRData" style="position:absolute;top:41px;left:0px;width:800px"></div>
    </div>


    <script id="IRDataTemplate" type="text/x-handlebars-template">
        {{#tables}}     
        <div class="table-wrapper" style="margin-bottom: 0px;">
            <table class="table-look">
                <tr>
                    <th class="left">
                        {{tableName}}
                    </th>
                    {{{printTags 'th' 'name' columnHeaders 5 'reverse'}}}
                </tr>

                {{#each rows}}
                         <tr>
                             <td class="left">
                                 {{rowTitle}}
                             </td>
                             {{{printTags 'td' 'cell' rowData 5 'reverse'}}}
                         </tr>
                {{/each}}
            </table>
        </div>
        {{/tables}}
    
    </script>

</div>

<%= site.newFooter("IRCustomModule") %>
<script type="text/javascript">
    $(document).ready(function () {
        setTimeout(function () {
            var count = 0;
            $('table.table-look').each(function () {
                var tableName = $(this).find('tr').find('th').html();
                $('#tabs').append('<div number="' + count + '">' + tableName + '</div>')

                if (count == 0) {
                    $('#tabs').find('div').addClass('active');
                    $(this).css('display', 'table');
                }
                count++;
            });
            $('#tabs div').click(function () {
                $('#tabs div').removeClass('active');
                $(this).addClass('active');

                $('table.table-look').css('display', 'none');
                var clickedNumber = parseInt($(this).attr('number'));
                var count = 0;
                $('table.table-look').each(function () {
                    if (count == clickedNumber) {
                        $(this).css('display', 'table');
                    }
                    count++;
                });

            });
        }, 500);
    });
</script>
<script type="text/javascript" src="includes_keyfigures/js/ir.behaviour.js?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("includes_keyfigures/js/ir.behaviour.js")).Ticks.ToString()%>"></script>


