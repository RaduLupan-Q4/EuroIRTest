﻿<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>

<%= site.newHeader("IRNews") %>

<script type="text/javascript">
    var activeModules = ['IRNews'];
</script>

<div class="IRNewsModule"></div>

<%= site.newFooter("IRChart") %>

<script id="IRNewsTemplate" type="text/x-handlebars-template">

    <input type="text" class="searchText" value="" placeholder="{{headers/t_searchHere}}" />
    <input type="submit" class="newsSubmit" value="{{headers/t_submit}}" />

    <div class="IRNewsEntries"></div>
    
</script>

<script id="IRNewsEntriesTemplate" type="text/x-handlebars-template">
    
    <table class="IRNewsTool table-look horizontal responsive">
        <thead>
            <tr>
                <th class="Header column-first date">{{headers/t_date}}</th>
                <th class="Header title">{{headers/t_title}}</th>
                <th class="Header column-last download">{{headers/t_download}}</th>
            </tr>
        </thead>
        <tbody>
        {{#each data}}
            <tr class="Data" id="{{storyID}}">
                <td class="Data column-first date">{{showDate timestamp}}</td>
                <td class="Data title" id="{{ShowCategoryShort categories}}">{{headline}}</td>
                <td class="Data title">{{categories/0/data}}</td>
                <td class="Data column-last download">(X KB)
                    <img src="{{showImage 'pdficonsmall'}}" style="background-repeat: no-repeat; background-position: center right; float: right; padding-left: 5px;" />
                </td>
            </tr>
        {{/each}}
        </tbody>
    </table>

</script>