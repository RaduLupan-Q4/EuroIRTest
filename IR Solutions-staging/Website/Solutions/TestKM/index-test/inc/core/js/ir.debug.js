//
// Variables
//
// var debug = clientVariable.debug || false;

var debugIterations_preloadIRChartDataClosePriceListing = 0;
var debugIterations_preloadIRChartDataClosePriceOther = 0;
//
// Debug msg functions
//
function debugStep(msg) {
    if (typeof clientVariable !== 'undefined' && typeof clientVariable.debug !== 'undefined' && clientVariable.debug) console.log('%c' + msg, 'color: #ccc');
}
function debugDataLoad(msg) {
    if (typeof clientVariable !== 'undefined' && typeof clientVariable.debug !== 'undefined' && clientVariable.debug) console.log('%c' + msg, 'color: #333');
}
function debugError(msg) {
    if (typeof clientVariable !== 'undefined' && typeof clientVariable.debug !== 'undefined' && clientVariable.debug) console.log('%c' + msg + "", 'color: #FF0000');
}
function debugStatus(msg) {
    if (typeof clientVariable !== 'undefined' && typeof clientVariable.debug !== 'undefined' && clientVariable.debug) console.log('%c' + msg + "", 'color: #008800');
}
function debugTimestamp(msg) {
    if (typeof clientVariable !== 'undefined' && typeof clientVariable.debug !== 'undefined' && clientVariable.debug) console.log('%c' + msg + "", 'color: #0094d4');
}
function debugDataContent(data) {
    if (typeof clientVariable !== 'undefined' && typeof clientVariable.debug !== 'undefined' && clientVariable.debug) console.log(data);
}
function errorHandling(data) {
    debugStep("errorHandling");
    debugError(data.statusText);
    if (data.statusText.indexOf('Invalid solutionID') > -1) $('html').html('The share price page is currently unavailable.');
    else if (data.statusText.indexOf('Bad Request') > -1) $('html').html('The share price page is currently unavailable.');
    else $('html').html('The share price page is currently unavailable.');
}