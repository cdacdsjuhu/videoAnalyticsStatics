///////////////////////// ---------------BASIC CONFIGURATION START--------------------//////////////////////////
setTimeout(function(){
    //fetchVideoData();
    //fetchVideo();
    moveToAna();
    },100);
///////////////////////// ---------------BASIC CONFIGURATION END--------------------//////////////////////////

///////////////////////// ---------------ANALYTICS PAGE START--------------------//////////////////////
var cameraVideoId = "";
function printId(e) {
    cameraVideoId = e;
    console.log("ID:" + e);
    //setData();
    saveToAna(e);
}

// function setData() {
//     var videoInnerHTMLText = document.getElementById(cameraVideoId).innerHTML;
//     videoInnerHTMLText = videoInnerHTMLText.trim();
//     videoInnerHTMLText = videoInnerHTMLText.replace(/(\r\n|\n|\r)/gm, ""); 
//     videoInnerHTMLText = videoInnerHTMLText.replace(/\t/g, "");
//     console.log(videoInnerHTMLText);

//     videoInnerHTMLText = videoInnerHTMLText.replace(/;/g, "ZZ");
//     console.log(videoInnerHTMLText);

//     var name = "videodata";
//     var value = videoInnerHTMLText;

//     var expires = "";
//     var days = 1;
//     if (days) {
//         var date = new Date();
//         date.setTime(date.getTime() + (days*24*60*60*1000));
//         expires = "; expires=" + date.toUTCString();
//     }
//     document.cookie = name + "=" + (value || "")  + expires + "; path=/";

//     // window.location.href = "http://localhost:8080/analytics";
//     window.location.href = "https://10.210.0.166/VideoAnalyticsAppMongo/analytics";
// }

// function fetchVideo() {
//     var currentLocation = ''+window.location;
//     console.log(currentLocation);

//     // if (currentLocation.includes("http://localhost:8080/analytics") == false) {
//     //     return;
//     // }

//     if (currentLocation.includes("https://10.210.0.166/VideoAnalyticsAppMongo/analytics") == false) {
//         return;
//     }

//     var x = getCookie("videodata");
//     console.log(x);

//     var innerHTMLPart1 = "<div id='cam' name='stream' style='width: 1220px; height: 720px;'>";
//     var innerHTMLPart2 = "</div>";

//     x = x.split("</label>")[1].trim();
//     x = x.replace("ZZ", ";");
//     x = x.split("src")[0];
//     x = x+"></video>";

//     var finalInnerHTMLText = innerHTMLPart1 + x + innerHTMLPart2;

//     document.getElementById("analyticsVideoSection").innerHTML = finalInnerHTMLText;

//     //eraseCookie("videodata");
// }

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

function saveToAna(id) {

    var name = "camid";
    var value = "";

    if (id.includes("video1")) {
        value = "cam1";
    } else if (id.includes("video2")) {
        value = "cam2";
    } else if (id.includes("video3")) {
        value = "cam3";
    } else if (id.includes("video4")) {
        value = "cam4";
    } else if (id.includes("video5")) {
        value = "cam5";
    }else if (id.includes("video6")) {
        value = "cam6";
    }else if (id.includes("video7")) {
        value = "cam7";
    }else if (id.includes("video8")) {
        value = "cam9";
    }else if (id.includes("video9")) {
        value = "cam9";
    }else if (id.includes("video10")) {
        value = "cam10";
    }else if (id.includes("video11")) {
        value = "cam11";
    }else if (id.includes("video12")) {
        value = "cam12";
    }else if (id.includes("video13")) {
        value = "cam13";
    }else if (id.includes("video14")) {
        value = "cam14";
    }else if (id.includes("video15")) {
        value = "cam15";
    }

    var expires = "";
    var days = 1;
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";

    //window.location.href = "http://localhost:8080/analytics";
    window.location.href = "https://10.210.0.166/VideoAnalyticsAppMongo/analytics";
}

function moveToAna() {
    var currentLocation = ''+window.location;
        console.log(currentLocation);
        // if (currentLocation.includes("http://localhost:8080/analytics") == false) {
        //     return;
        // }

        if (currentLocation.includes("https://10.210.0.166/VideoAnalyticsAppMongo/analytics") == false) {
            return;
        }

    var id = getCookie("camid");
    document.getElementById(id).style.display = "block";

}

///////////////////////// ---------------ANALYTICS PAGE END--------------------////////////////////////