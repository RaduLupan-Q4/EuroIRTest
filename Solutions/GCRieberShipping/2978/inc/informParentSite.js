function informParentSite(sizeToSend) {
    // All other browsers and devices (parent.postMesage)
    if (typeof (parrentSideName) != "undefined") {
        parent.postMessage(sizeToSend, parrentSideName);
    }
}