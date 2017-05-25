﻿<%@ Page Language="C#" AutoEventWireup="true" %> 

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();  
%>
<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>

<link rel="stylesheet" type="text/css" href="ir.client.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("ir.client.css")).Ticks.ToString()%>" />

<div class="tabs-container">

        <div id="container" class="tabs">
            <ul>
                <li class="tabitem"><a href="#tab-1">LSE (Mondi plc)</a></li>
                <li class="tabitem"><a href="#tab-2">JSE (Mondi Ltd)</a></li>
                <li class="tabitem"><a href="#tab-3">JSE (Mondi plc)</a></li>
            </ul>

            <div id="tab-1">
                <iframe src="detailedshareprice.aspx" style="width: 100%; height: 1037px; border: none;"></iframe>
            </div>
            <div id="tab-2">
                <iframe src="../2700/detailedshareprice.aspx" style="width: 100%; height: 1037px; border: none;"></iframe>
            </div>
            <div id="tab-3">
                <iframe src="../2702/detailedshareprice.aspx" style="width: 100%; height: 1037px; border: none;"></iframe>
            </div>
        </div>
</div>

<script type="text/javascript">
    $(document).ready(function () {
        jQuery.fn.minitabs = function(index,speed,effect) {
  var id = "#" + this.attr('id');
  var $divs = $(id + ">DIV");
  $divs.not($divs.eq(index)).hide();
  $(id + ">UL>LI>A").eq(index).addClass("current");
  $(id + ">UL>LI>A").click(
    function(){
      $(id + ">UL>LI>A").removeClass("current");
      $(this).addClass("current");
      $(this).blur();
      var re = /([_\-\w]+$)/i;
      var target = $('#' + re.exec(this.href)[1]);
      var old = $(id + ">DIV");
      switch (effect) {
        case 'fade':
          old.fadeOut(speed).fadeOut(speed);
          target.fadeIn(speed);
          break;
        case 'slide':
          old.slideUp(speed);  
          target.fadeOut(speed).fadeIn(speed);
          break;
        default : 
          old.hide(speed);
          target.show(speed)
      }
      return false;
    }
 );
}
$('#container').minitabs(0);

    });
</script>