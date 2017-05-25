<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>
<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>

<link rel="stylesheet" type="text/css" href="ir.calc.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("ir.calc.css")).Ticks.ToString()%>" />

<div class="tabs-container">

    <div id="container" class="tabs">
        <ul>
<li class="tabitem tab-first"><a class="current clickableTab" listing="0">MFC.TO (TSX)</a></li>
<li class="tabitem"><a class="clickableTab" listing="1">MFC (NYSE)</a></li>
<li class="tabitem"><a class="clickableTab" listing="3">MFC.PR.B (TSX)</a></li>
<li class="tabitem"><a class="clickableTab" listing="4">MFC:PM (PSE)</a></li>
<li class="tabitem tab-last"><a class="clickableTab" listing="5">MFC.HK (HKEX)</a></li>
        </ul>

        <div id="tab-1">
            <iframe src="calc.aspx?listing=0" id="mainIframe"></iframe>
        </div>
    </div>
</div>

<script type="text/javascript">
$(document).ready(function () {
	$('.clickableTab').click(function () {
		$('#mainIframe').attr('src', 'calc.aspx?listing=' + $(this).attr('listing'));
		$('.clickableTab').removeClass('current');
		$(this).addClass('current');
		
	});
	
});
</script>
