function informParentSite(sizeToSend)
{
    // IE 6, 7 and 8 (parent.location)

    if (typeof (parrentSideName) != "undefined") {
        parent.location = parrentSideName + '#size' + sizeToSend;
    }
}