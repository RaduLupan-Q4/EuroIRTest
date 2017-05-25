var debug = isDev();
debugStep("ir.util.js - start");

$(function ()
{
    document.write("<b>Test</b>");
    
})

function isDev()
{
    if (location.href.indexOf('localhost') > -1) {
        return true;
    } else {
        return false;
    }
}
function debugStep(msg)
{
    if (debug) {
        console.log('%c' + msg, 'color: #AAA');
    }
}
debugStep("ir.util.js - end");