!function(e,t,n){function r(e,t){return typeof e===t}function i(){var e,t,n,i,o,a,s;for(var l in b){if(e=[],t=b[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(i=r(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)a=e[o],s=a.split("."),1===s.length?S[s[0]]=i:(!S[s[0]]||S[s[0]]instanceof Boolean||(S[s[0]]=new Boolean(S[s[0]])),S[s[0]][s[1]]=i),x.push((i?"":"no-")+s.join("-"))}}function o(e){var t=w.className,n=S._config.classPrefix||"";if(E&&(t=t.baseVal),S._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}S._config.enableClasses&&(t+=" "+n+e.join(" "+n),E?w.className.baseVal=t:w.className=t)}function a(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):E?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function s(){var e=t.body;return e||(e=a(E?"svg":"body"),e.fake=!0),e}function l(e,n,r,i){var o,l,c,u,f="modernizr",d=a("div"),p=s();if(parseInt(r,10))for(;r--;)c=a("div"),c.id=i?i[r]:f+(r+1),d.appendChild(c);return o=a("style"),o.type="text/css",o.id="s"+f,(p.fake?p:d).appendChild(o),p.appendChild(d),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(t.createTextNode(e)),d.id=f,p.fake&&(p.style.background="",p.style.overflow="hidden",u=w.style.overflow,w.style.overflow="hidden",w.appendChild(p)),l=n(d,e),p.fake?(p.parentNode.removeChild(p),w.style.overflow=u,w.offsetHeight):d.parentNode.removeChild(d),!!l}function c(e,t){return!!~(""+e).indexOf(t)}function u(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function f(t,r){var i=t.length;if("CSS"in e&&"supports"in e.CSS){for(;i--;)if(e.CSS.supports(u(t[i]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];i--;)o.push("("+u(t[i])+":"+r+")");return o=o.join(" or "),l("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}function d(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function p(e,t,i,o){function s(){u&&(delete j.style,delete j.modElem)}if(o=r(o,"undefined")?!1:o,!r(i,"undefined")){var l=f(e,i);if(!r(l,"undefined"))return l}for(var u,p,m,h,v,g=["modernizr","tspan"];!j.style;)u=!0,j.modElem=a(g.shift()),j.style=j.modElem.style;for(m=e.length,p=0;m>p;p++)if(h=e[p],v=j.style[h],c(h,"-")&&(h=d(h)),j.style[h]!==n){if(o||r(i,"undefined"))return s(),"pfx"==t?h:!0;try{j.style[h]=i}catch(y){}if(j.style[h]!=v)return s(),"pfx"==t?h:!0}return s(),!1}function m(e,t){return function(){return e.apply(t,arguments)}}function h(e,t,n){var i;for(var o in e)if(e[o]in t)return n===!1?e[o]:(i=t[e[o]],r(i,"function")?m(i,n||t):i);return!1}function v(e,t,n,i,o){var a=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+_.join(a+" ")+a).split(" ");return r(t,"string")||r(t,"undefined")?p(s,t,i,o):(s=(e+" "+P.join(a+" ")+a).split(" "),h(s,t,n))}function g(e,t,r){return v(e,n,n,t,r)}function y(e,t){if("object"==typeof e)for(var n in e)q(e,n)&&y(n,e[n]);else{e=e.toLowerCase();var r=e.split("."),i=S[r[0]];if(2==r.length&&(i=i[r[1]]),"undefined"!=typeof i)return S;t="function"==typeof t?t():t,1==r.length?S[r[0]]=t:(!S[r[0]]||S[r[0]]instanceof Boolean||(S[r[0]]=new Boolean(S[r[0]])),S[r[0]][r[1]]=t),o([(t&&0!=t?"":"no-")+r.join("-")]),S._trigger(e,t)}return S}var b=[],C={_version:"3.0.0-alpha.4",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){b.push({name:e,fn:t,options:n})},addAsyncTest:function(e){b.push({name:null,fn:e})}},S=function(){};S.prototype=C,S=new S;var x=[],w=t.documentElement,E="svg"===w.nodeName.toLowerCase();E||!function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=b.elements;return"string"==typeof e?e.split(" "):e}function i(e,t){var n=b.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),b.elements=n+" "+e,c(t)}function o(e){var t=y[e[v]];return t||(t={},g++,e[v]=g,y[g]=t),t}function a(e,n,r){if(n||(n=t),f)return n.createElement(e);r||(r=o(n));var i;return i=r.cache[e]?r.cache[e].cloneNode():h.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!i.canHaveChildren||m.test(e)||i.tagUrn?i:r.frag.appendChild(i)}function s(e,n){if(e||(e=t),f)return e.createDocumentFragment();n=n||o(e);for(var i=n.frag.cloneNode(),a=0,s=r(),l=s.length;l>a;a++)i.createElement(s[a]);return i}function l(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return b.shivMethods?a(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(b,t.frag)}function c(e){e||(e=t);var r=o(e);return!b.shivCSS||u||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),f||l(e,r),e}var u,f,d="3.7.2",p=e.html5||{},m=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,h=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,v="_html5shiv",g=0,y={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",u="hidden"in e,f=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){u=!0,f=!0}}();var b={elements:p.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:d,shivCSS:p.shivCSS!==!1,supportsUnknownElements:f,shivMethods:p.shivMethods!==!1,type:"default",shivDocument:c,createElement:a,createDocumentFragment:s,addElements:i};e.html5=b,c(t)}(this,t);{var T=function(){var t=e.matchMedia||e.msMatchMedia;return t?function(e){var n=t(e);return n&&n.matches||!1}:function(t){var n=!1;return l("@media "+t+" { #modernizr { position: absolute; } }",function(t){n="absolute"==(e.getComputedStyle?e.getComputedStyle(t,null):t.currentStyle).position}),n}}();C.mq=T}S.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect);var k="Moz O ms Webkit",_=C._config.usePrefixes?k.split(" "):[];C._cssomPrefixes=_;var N={elem:a("modernizr")};S._q.push(function(){delete N.elem});var j={style:N.elem.style};S._q.unshift(function(){delete j.style});var P=C._config.usePrefixes?k.toLowerCase().split(" "):[];C._domPrefixes=P,C.testAllProps=v,C.testAllProps=g,S.addTest("flexbox",g("flexBasis","1px",!0));var z=C._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];C._prefixes=z;var A=C.testStyles=l;S.addTest("touchevents",function(){var n;if("ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch)n=!0;else{var r=["@media (",z.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");A(r,function(e){n=9===e.offsetTop})}return n});var F=a("input"),M="search tel url email datetime date month week time datetime-local number range color".split(" "),O={},D=":)";S.inputtypes=function(e){for(var r,i,o,a=e.length,s=0;a>s;s++)F.setAttribute("type",i=e[s]),r="text"!==F.type&&"style"in F,r&&(F.value=D,F.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(i)&&F.style.WebkitAppearance!==n?(w.appendChild(F),o=t.defaultView,r=o.getComputedStyle&&"textfield"!==o.getComputedStyle(F,null).WebkitAppearance&&0!==F.offsetHeight,w.removeChild(F)):/^(search|tel)$/.test(i)||(r=/^(url|email|number)$/.test(i)?F.checkValidity&&F.checkValidity()===!1:F.value!=D)),O[e[s]]=!!r;return O}(M);var L="CSS"in e&&"supports"in e.CSS,$="supportsCSS"in e;S.addTest("supports",L||$),S.addTest("csstransforms3d",function(){var e=!!g("perspective","1px",!0),t=S._config.usePrefixes;if(e&&(!t||"webkitPerspective"in w.style)){var n;S.supports?n="@supports (perspective: 1px)":(n="@media (transform-3d)",t&&(n+=",(-webkit-transform-3d)")),n+="{#modernizr{left:9px;position:absolute;height:5px;margin:0;padding:0;border:0}}",A(n,function(t){e=9===t.offsetLeft&&5===t.offsetHeight})}return e}),S.addTest("csstransitions",g("transition","all",!0)),S.addTest("opacity",function(){var e=a("a").style;return e.cssText=z.join("opacity:.55;"),/^0.55$/.test(e.opacity)});var q;!function(){var e={}.hasOwnProperty;q=r(e,"undefined")||r(e.call,"undefined")?function(e,t){return t in e&&r(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}(),C._l={},C.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),S.hasOwnProperty(e)&&setTimeout(function(){S._trigger(e,S[e])},0)},C._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e,r;for(e=0;e<n.length;e++)(r=n[e])(t)},0),delete this._l[e]}},S._q.push(function(){C.addTest=y}),S.addAsyncTest(function(){var n,r,i=function(e){e.fake&&e.parentNode&&e.parentNode.removeChild(e)},o=function(e,t){var n=!!e;if(n&&(n=new Boolean(n),n.blocked="blocked"===e),y("flash",function(){return n}),t&&d.contains(t)){for(;t.parentNode!==d;)t=t.parentNode;d.removeChild(t)}};try{r="ActiveXObject"in e&&"Pan"in new e.ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(l){}if(n=!("plugins"in navigator&&"Shockwave Flash"in navigator.plugins||r),n||E)o(!1);else{var c,u,f=a("embed"),d=s();if(f.type="application/x-shockwave-flash",d.appendChild(f),w.appendChild(d),!("Pan"in f||r))return o("blocked",f),void i(d);c=function(){return w.contains(d)?(w.contains(f)?(u=f.style.cssText,""!==u?o("blocked",f):o(!0,f)):o("blocked"),void i(d)):(d=t.body||d,f=a("embed"),f.type="application/x-shockwave-flash",d.appendChild(f),setTimeout(c,1e3))},setTimeout(c,10)}}),S.addTest("cssanimations",g("animationName","a",!0)),S.addTest("history",function(){var t=navigator.userAgent;return-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone")?e.history&&"pushState"in e.history:!1}),i(),o(x),delete C.addTest,delete C.addAsyncTest;for(var B=0;B<S._q.length;B++)S._q[B]();e.Modernizr=S}(window,document);