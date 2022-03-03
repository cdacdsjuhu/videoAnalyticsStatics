$(document).ready(function() {

    //setGeneralSettingsCookies();
    var name = "camNameDetails";
    var camDetails = getCookie(name);
    console.log(camDetails);

    var x = [];
    x = camDetails.replace(/,/g, "#");

    document.getElementById("saveGeneralConfigCameraList").value = x;

} );

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function fetchIdForDetectGen(event) {
    var checkboxId = event;
    console.log("ID:" + event);
    setDetectionDataInTextFeildGen(event);
}

function setDetectionDataInTextFeildGen(detect) {
    var feildData = document.getElementById("saveGeneralConfigDetectionList").value;
    var detectValue = document.getElementById(detect).getAttribute("value");
    if (feildData.length == 0) {
        $("#saveGeneralConfigDetectionList").val(detectValue);
    } else {
        feildData = feildData+"#"+detectValue;
        $("#saveGeneralConfigDetectionList").val(feildData);
    }
}