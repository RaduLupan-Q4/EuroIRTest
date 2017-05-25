<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite(); 
%>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
<script type="text/javascript" src="http://minitabs.googlecode.com/files/jquery.minitabs.js"></script>
<link rel="stylesheet" type="text/css" href="ir.client.css">

<%--<h2><b>Chart</b></h2>--%>
<iframe  id="chartiframe" src="about:blank" allowtransparency="true" style="width: 100%; height: 700px; border: none;"></iframe>

<%--<h2><b>Lookup</b></h2>--%>
<iframe id="lookupiframe" src="about:blank" style="width: 100%; height: 700px; border: none;"></iframe>



<script type="text/javascript">
var getUrlParameter = function getUrlParameter(sParam) {
var sPageURL = decodeURIComponent(window.location.search.substring(1)),
sURLVariables = sPageURL.split('&'),
sParameterName,
i;
for (i = 0; i < sURLVariables.length; i++) {
sParameterName = sURLVariables[i].split('=');
if (sParameterName[0] === sParam) {
return sParameterName[1] === undefined ? true : sParameterName[1];
}
}
};
$(document).ready(function () {
var language = '';
try {
language = getUrlParameter('language');
}
catch (err) {
}
if (language != undefined) {
    $('#chartiframe').attr('src', 'chart.aspx?language=' + language);
    $('#lookupiframe').attr('src', 'lookup.aspx?language=' + language);
} else {
    $('#chartiframe').attr('src', 'chart.aspx');
    $('#lookupiframe').attr('src', 'lookup.aspx');
}

});
</script>

