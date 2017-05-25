<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>
<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>

<link rel="stylesheet" type="text/css" href="ir.client.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("ir.client.css")).Ticks.ToString()%>" />

<div class="tabs-container">

    <div id="container" class="tabs">
        <ul>
<li class="tabitem"><a href="#tab-1" onclick="refresh('#c1');">MFC.TO (TSX)</a></li>
<li class="tabitem"><a href="#tab-2" onclick="refresh('#c2');">MFC (NYSE)</a></li>
<li class="tabitem"><a href="#tab-4" onclick="refresh('#c4');">MFC.PR.B (TSX)</a></li>
<li class="tabitem"><a href="#tab-5" onclick="refresh('#c5');">MFC:PM (PSE)</a></li>
<li class="tabitem"><a href="#tab-6" onclick="refresh('#c6');">MFC.HK (HKEX)</a></li>
        </ul>

        <div id="tab-1">
            <iframe src="calc.aspx?listing=0" id="c1"></iframe>
        </div>
        <div id="tab-2">
            <iframe src="calc.aspx?listing=1" id="c2"></iframe>
        </div>
        <div id="tab-3">
            <iframe src="calc.aspx?listing=2" id="c3"></iframe>
        </div>
        <div id="tab-4">
            <iframe src="calc.aspx?listing=3" id="c4"></iframe>
        </div>
        <div id="tab-5">
            <iframe src="calc.aspx?listing=4" id="c5"></iframe>
        </div>
        <div id="tab-6">
            <iframe src="calc.aspx?listing=5" id="c6"></iframe>
        </div>
    </div>
</div>

<script type="text/javascript">
    $(document).ready(function () {
        jQuery.fn.minitabs = function (index, speed, effect) {
            var id = "#" + this.attr('id');
            var $divs = $(id + ">DIV");
            $divs.not($divs.eq(index)).hide();
            $(id + ">UL>LI>A").eq(index).addClass("current");
            $(id + ">UL>LI>A").click(
              function () {
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
                      default:
                          old.hide(speed);
                          target.show(speed)
                  }
                  return false;
              }
           );
        }
        $('#container').minitabs(0);

    });
    function refresh(id) {
        $(id).attr('src', $(id).attr('src'));
    }
</script>
