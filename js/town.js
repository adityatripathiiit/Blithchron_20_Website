function isIE9OrBelow() {
    return /MSIE\s/.test(navigator.userAgent) && parseFloat(navigator.appVersion.split("MSIE")[1]) < 10
}

function popup() {
    isIE9OrBelow() && alert("Please use different browser, not supported on IE9 or below")
}

function popupWithAttendeeDetails() {
    isIE9OrBelow() && alert("Please use different browser, not supported on IE9 or below")
}

function popupWithTicketDetails() {
    isIE9OrBelow() && alert("Please use different browser, not supported on IE9 or below")
}

function popupWithAllDetails() {
    isIE9OrBelow() && alert("Please use different browser, not supported on IE9 or below")
}
if (!isIE9OrBelow()) {
    var noScriptEle = document.getElementById("tsNoJsMsg"),
        tsScriptEle = document.createElement("script");
    tsScriptEle.src = "https://www.townscript.com/popup-widget/inject-modal.nocache.js",
        tsScriptEle.type = "text/javascript", noScriptEle.parentNode.replaceChild(tsScriptEle, noScriptEle)
}