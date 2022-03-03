$(document).ready(function () {
  
  date_input.css('top', '103px');
  date_input.datepicker(options);

  $('#example').DataTable();

 
})



///////////////////////// ---------------BASIC CONFIGURATION START--------------------//////////////////////////
var cameraName = "";
$(document).ready(function(){
	var user = $("#user").html();
    $("#userIdFeild").val(user);
    $("#userIdDetailsFeild").val(user);
    $("#userId").val(user);
    $("#userDisplayId").val(user);
    $("#fetchUserAdminId").val(user);
    $("#addUserAdminId").val(user);
    $("#displayUserId").val(user);
    $("#removeUserAdminId").val(user);
    $("#navigateUserAdminId").val(user);
    $("#saveEmailConfigAdminId").val(user);
    $("#saveGeneralConfigAdminId").val(user);
    $("#saveUserPermissionAdminId").val(user);
    $("#fetchUserPermissionAdminId").val(user);

    
    var camCount = $("#camcount").html();
    //camCount = camCount*2;
    var camDetails = $("#camurllist").html();
    if (camCount >= 1) {
        //document.getElementById("camcount").style.visibility = "visible";
        var cameraName = "";
        if (camDetails.includes("#")) {
            cameraName = camDetails.split("MWM")[0].split("#");
        } else {
            cameraName = camDetails.split("MWM")[0];
        }
        //document.getElementById("cam1Label").innerHTML = cameraName[0];
        var cn = 0;
    	for(var i=0; i<camCount; i++) {
    		document.getElementById("cam"+(i+1)).style.display = "block";
            // if(cn == (camCount/2)) {
            //     cn = 0;
            // }
            document.getElementById("cam"+(i+1)+"Label").innerHTML = cameraName[cn];
            cn++;
    	}
    } else if (camCount == 1) {
        if (!camDetails.length == 0) {
            var cameraName = "";
            if (camDetails.includes("#")) {
                cameraName = camDetails.split("MWM")[0].split("#");
            } else {
                cameraName = camDetails.split("MWM")[0];
            }
            document.getElementById("cam1Label").innerHTML = cameraName[0];
        }
    } else {
        displayCameraPerform();
    }

    var currentLocation = ''+window.location;
    console.log(currentLocation);

    // if (currentLocation.includes("http://localhost:8080/remove_camera")) {
    //     window.onload = function(){
    //         var button = document.getElementById('showcamera');
    //         button.form.submit();
    //     }
    // }

    

    // if (currentLocation.includes("http://localhost:8080/user_permission")) {
    //     window.onload = function(){
    //         var button = document.getElementById('showuserpermission');
    //         button.form.submit();
    //     }
    // }

///////////////////////////////////////////////////////////////////////////////////////////////////////
   /* if (currentLocation.includes("https://10.210.0.166/VideoAnalyticsApp/remove_camera")) {
        window.onload = function(){
            var button = document.getElementById('showcamera');
            button.form.submit();
        }
    }*/

   

    if (currentLocation.includes("https://10.210.0.166/VideoAnalyticsApp/user_permission")) {
        window.onload = function(){
            var button = document.getElementById('showuserpermission');
            button.form.submit();
        }
    }
});
///////////////////////// ---------------BASIC CONFIGURATION END--------------------//////////////////////////

///////////////////////// ---------------ADMIN PAGE DISPLAY CAMERA START--------------------//////////////////////////

function displayCameraPerform() {
    var currentLocation = ''+window.location;
        console.log(currentLocation);

        // if (currentLocation.includes("http://localhost:8080/admin") == false) {
        //     return;
        // }

        if (currentLocation.includes("https://10.210.0.166/VideoAnalyticsApp/admin") == false) {
            return;
        }

        window.onload = function(){
            var button = document.getElementById('displaycamera');
            button.form.submit();
        }
}

function toggle(source) {
    checkboxes = document.getElementsByName('vid');
    for(var i=0, n=checkboxes.length;i<n;i++) {
      checkboxes[i].checked = source.checked;
    }
  }

var camNameFetched = [];
function getId(e) {
    var checkboxId = e;
    console.log("ID:" + e);
    var labelId = checkboxId.replace("CheckBox","Label");
    var cameraName = document.getElementById(labelId).innerHTML;
    if(camNameFetched.includes(cameraName)) {
        camNameFetched.pop(cameraName);
    } else {
        camNameFetched.push(cameraName);
    }
}

function setGeneralSettingsCookies() {

    var currentLocation = ''+window.location;
    console.log(currentLocation);

    // if (currentLocation.includes("http://localhost:8080/displayCamera?userId=User+%3A+bipul%40cdac.in") == false) {
    //         return;
    //     }

        if (currentLocation.includes("https://10.210.0.166/VideoAnalyticsApp/displayCamera?userId=User+%3A+bipul%40cdac.in") == false) {
            return;
        }

    var name = "camNameDetails";
    var value = camNameFetched;

    if (camNameFetched.length == 0) {
        // window.location.href = "http://localhost:8080/general_settings";
        window.location.href = "https://10.210.0.166/VideoAnalyticsApp/general_settings";
    }

    var expires = "";
    var days = 1;
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";

    camNameFetched = [];

    //window.location.href = "http://localhost:8080/general_settings";
    window.location.href = "https://10.210.0.166/VideoAnalyticsApp/general_settings";
}
///////////////////////// ---------------ADMIN PAGE DISPLAY CAMERA END--------------------//////////////////////////

///////////////////////// ---------------ADD CAMERA PAGE START--------------------//////////////////////////
function rtspCameraAddModeFunction() {
    document.getElementById("addCameraSectionDetails").style.display = "none";
    document.getElementById("addCameraSectionRtps").style.display = "block";
}

function genCameraAddModeFunction() {
    document.getElementById("addCameraSectionRtps").style.display = "none";
    document.getElementById("addCameraSectionDetails").style.display = "block";
}

function fetchIdForDetect(event) {
    var checkboxId = event;
    console.log("ID:" + event);
    setDetectionDataInTextFeild(event);
}

function setDetectionDataInTextFeild(detect) {
    var feildData = document.getElementById("saveAddCamDetection").value;
    var detectValue = document.getElementById(detect).getAttribute("value");
    if (feildData.length == 0) {
        $("#saveAddCamDetection").val(detectValue);
    } else {
        feildData = feildData+"#"+detectValue;
        $("#saveAddCamDetection").val(feildData);
    }
}
///////////////////////// ---------------ADD CAMERA PAGE END--------------------//////////////////////////

///////////////////////// ---------------REMOVE CAMERA PAGE START--------------------//////////////////////////
function setValueInInputFeildRemoveCameraFunction() {
    var value = document.getElementById("dropCameraId").value;
    document.getElementById("CameraIdTxt").value = value;
}
///////////////////////// ---------------REMOVE CAMERA PAGE END--------------------//////////////////////////


///////////////////////// ---------------ADD USER PERMISSION PAGE START--------------------//////////////////////
function setValueInInputFunction() {
    var value = document.getElementById("dropUserEmail").value;
    document.getElementById("userEmailTxt").value = value;
}
///////////////////////// ---------------ADD USER PERMISSION PAGE END--------------------//////////////////////

///////////////////////// ---------------USER MANAGEMENT PAGE START--------------------//////////////////////
function addUserFunction() {
    document.getElementById("existingUserSection").style.display = "none";
    document.getElementById("addUserSection").style.display = "block";
    document.getElementById("removeUserSection").style.display = "none";
}

function removeUserFunction() {
    document.getElementById("existingUserSection").style.display = "none";
    document.getElementById("addUserSection").style.display = "none";
    document.getElementById("removeUserSection").style.display = "block";
}

function userListFunction() {
    document.getElementById("addUserSection").style.display = "none";
    document.getElementById("removeUserSection").style.display = "none";
    document.getElementById("existingUserSection").style.display = "block";
}

function setValueInInputFeildRemoveUserFunction() {
    var value = document.getElementById("dropRemoveUserId").value;
    document.getElementById("RemoveUserIdTxt").value = value;
}
///////////////////////// ---------------USER MANAGEMENT PAGE END--------------------//////////////////////

///////////////////////// ---------------USER PERMISSION PAGE START--------------------//////////////////////
function addUserPermissionFunction() {
    document.getElementById("userPermissionSection").style.display = "block";
    document.getElementById("existingUserPermissionSection").style.display = "none";
}

function showUserPermissionFunction() {
    document.getElementById("userPermissionSection").style.display = "none";
    document.getElementById("existingUserPermissionSection").style.display = "block";
}
///////////////////////// ---------------USER PERMISSION PAGE END--------------------//////////////////////




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




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
//     window.location.href = "https://10.210.0.166/VideoAnalyticsApp/analytics";
// }

// function fetchVideo() {
//     var currentLocation = ''+window.location;
//     console.log(currentLocation);

//     // if (currentLocation.includes("http://localhost:8080/analytics") == false) {
//     //     return;
//     // }

//     if (currentLocation.includes("https://10.210.0.166/VideoAnalyticsApp/analytics") == false) {
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
    window.location.href = "https://10.210.0.166/VideoAnalyticsApp/analytics";
}

function moveToAna() {
    var currentLocation = ''+window.location;
        console.log(currentLocation);
        // if (currentLocation.includes("http://localhost:8080/analytics") == false) {
        //     return;
        // }

        if (currentLocation.includes("https://10.210.0.166/VideoAnalyticsApp/analytics") == false) {
            return;
        }

    var id = getCookie("camid");
    document.getElementById(id).style.display = "block";

}

///////////////////////// ---------------ANALYTICS PAGE END--------------------////////////////////////



if (Hls.isSupported()) {
	  var video1 = document.getElementById("video1");
      var hls = new Hls();
      // bind them together
      hls.attachMedia(video1);
      hls.on(Hls.Events.MEDIA_ATTACHED, function () {
        console.log("video and hls.js are now bound together !");
        hls.loadSource("http://10.210.0.166:443/VAAPP/node/main.m3u8");
        hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
        });
      });
	}
	
	
	
	
	
////////////////////////////////////////////////////////////////////////////////////////////////////////////

$(document).ready(function() {

    var currentLocation = ''+window.location;
    console.log(currentLocation);

    // if (currentLocation.includes("http://localhost:8080/events")) {
    //     window.onload = function(){
    //         var button = document.getElementById('showevents');
    //         button.form.submit();
    //     }
    // }

    if (currentLocation.includes("https://10.210.0.166/VideoAnalyticsApp/events")) {
        window.onload = function(){
            var button = document.getElementById('showevents');
            button.form.submit();
        }
    }

    $('#eventtable').DataTable( {
        "pagingType": "full_numbers"
    } );
} );




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////



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




//////////////////////////////////////////////////////////////////////////////////////////////////////////////


function loginTypeFunction() {
    var type = document.getElementById("dropLoginType").value;

    if(type.includes("Admin")) {
        document.getElementById("user_login").style.display = "none";
        document.getElementById("admin_login").style.display = "block";
    } else {
        document.getElementById("admin_login").style.display = "none";
        document.getElementById("user_login").style.display = "block";
    }
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



///////////////////////// ---------------BASIC CONFIGURATION START--------------------//////////////////////////
// setTimeout(function(){
//     fetchVideos();
//     },1000);
///////////////////////// ---------------BASIC CONFIGURATION END--------------------//////////////////////////

///////////////////////// ---------------SEARCH AND PLAY PAGE START--------------------//////////////////////
function fetchVideos() {
    //var innerHTMLText = "<div class='galary' style='width: 25%;'><video id='video1' width='160' height='120' class='video' controls><source id='mp4_src1' class='source' src='/node/videoplayback.mp4' type='video/mp4'></video><br><label id='video1Label'>videoplayback</label></div>";
    var innerHTMLTextPart1 = "<div class='galary' style='width: 25%;'>";
    var innerHTMLTextPart2 = "<br>";
    var innerHTMLTextPart3 = "</div>";
    var videoLocation = document.getElementById("recordedVideoSectionId");

    var userId = document.getElementById("user").innerHTML;
    userId = userId.split(":")[1].trim();

    var currentLocation = ''+window.location;
    console.log(currentLocation);
    
    if (currentLocation.includes("http://localhost:8080/find_play") == false) {
        return;
    }

    //processFetchVideo(userId);

    // if (currentLocation.includes("https://10.210.0.166/VideoAnalyticsApp/find_play") == false) {
    //     return;
    // }

    // var xhr = new XMLHttpRequest();

    // xhr.onreadystatechange = function () {
    //     if (xhr.readyState == XMLHttpRequest.DONE) {
    //         if (xhr.status == 200) {
    //             var x = xhr.responseText;
    //             var videoCount = x.split("<<>>")[0];
    //             var videoPath = x.split("<<>>")[1];
    //             var videoNameArr = x.split("<<>>")[2].split("#");
    //             if(x!=0) {
    //                 var completeInnerHTMLText = "";
    //                 for (let index = 1; index <= videoCount; index++) {
    //                     var innerHTMLTextPart4 = "<video id='video"+index+"' width='160' height='120' class='video' controls>";
    //                     //var innerHTMLTextPart5 = "<source id='mp4_src"+index+"' class='source' src='"+videoPath+videoNameArr[index-1]+"' type='video/mp4'></video>";
    //                     //var innerHTMLTextPart5 = "<source id='mp4_src"+index+"' class='source' src='file://"+videoPath+videoNameArr[index-1]+"' type='video/mp4'></video>";
    //                     var innerHTMLTextPart5 = "<source id='mp4_src"+index+"' class='source' src='"+"https://10.210.0.166/VARequiredData/save_videos/"+videoNameArr[index-1]+"' type='video/mp4'></video>";
    //                     var innerHTMLTextPart6 = "<label id='video"+index+"Label'>"+videoNameArr[index-1]+"</label>";
    //                     var finalTextFormation = innerHTMLTextPart1+innerHTMLTextPart4+innerHTMLTextPart5+innerHTMLTextPart2+innerHTMLTextPart6+innerHTMLTextPart3;

    //                     completeInnerHTMLText = completeInnerHTMLText + finalTextFormation;
    //                 }
    //                 videoLocation.innerHTML = completeInnerHTMLText;
    //             } else {
    //                 alert("No any Videos available");
    //             }
    //         }
    //     }
    // };

    // xhr.open('GET', 'http://localhost:8080/fetch_videos?userId='+userId, true);
    // // xhr.open('GET', 'https://10.210.0.166/VideoAnalyticsApp/fetch_videos?userId='+userId, true);
    // xhr.send(null);
}
///////////////////////// ---------------SEARCH AND PLAY PAGE END--------------------//////////////////////

function fetchVideoDatwWise(start, end) {
    // var startM = start._d;
    // var endM = end._d;

    var startM = convert(start._d);
    var endM = convert(end._d);

    var userId = document.getElementById("user").innerHTML;
    userId = userId.split(":")[1].trim();

    userId = userId + "DTP" + startM + "DTP" + endM;
    console.log(userId);

    processFetchVideo(userId)
}

function processFetchVideo(userId) {
    var innerHTMLTextPart1 = "<div class='galary' style='width: 25%;'>";
    var innerHTMLTextPart2 = "<br>";
    var innerHTMLTextPart3 = "</div>";
    var videoLocation = document.getElementById("recordedVideoSectionId");

    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            if (xhr.status == 200) {
                var x = xhr.responseText;
                var videoCount = x.split("<<>>")[0];
                var videoPath = x.split("<<>>")[1];
                var videoNameArr = x.split("<<>>")[2].split("#");
                if(x!=0) {
                    var completeInnerHTMLText = "";
                    for (let index = 1; index <= videoCount; index++) {
                        var innerHTMLTextPart4 = "<video id='video"+index+"' width='160' height='120' class='video' controls>";
                        //var innerHTMLTextPart5 = "<source id='mp4_src"+index+"' class='source' src='"+videoPath+videoNameArr[index-1]+"' type='video/mp4'></video>";
                        //var innerHTMLTextPart5 = "<source id='mp4_src"+index+"' class='source' src='file://"+videoPath+videoNameArr[index-1]+"' type='video/mp4'></video>";
                        var innerHTMLTextPart5 = "<source id='mp4_src"+index+"' class='source' src='"+"https://10.210.0.166/VARequiredData/save_videos/"+videoNameArr[index-1]+"' type='video/mp4'></video>";
                        var innerHTMLTextPart6 = "<label id='video"+index+"Label'>"+videoNameArr[index-1]+"</label>";
                        var finalTextFormation = innerHTMLTextPart1+innerHTMLTextPart4+innerHTMLTextPart5+innerHTMLTextPart2+innerHTMLTextPart6+innerHTMLTextPart3;

                        completeInnerHTMLText = completeInnerHTMLText + finalTextFormation;
                    }
                    videoLocation.innerHTML = completeInnerHTMLText;
                } else {
                    alert("No any Videos available");
                }
            }
        }
    };

    // xhr.open('GET', 'http://localhost:8080/fetch_videos?userId='+userId, true);
    xhr.open('GET', 'https://10.210.0.166/VideoAnalyticsApp/fetch_videos?userId='+userId, true);
    xhr.send(null);
    
}


function convert(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    // return [date.getFullYear(), mnth, day].join("-");
    return [day, mnth, date.getFullYear()].join("-");
  }


function searchByCamIp() {
    var userId = document.getElementById("user").innerHTML;
    userId = userId.split(":")[1].trim();

    var camIp = $("#camIpInput").val();

    userId = userId + "CAMIP" + camIp;

    processFetchVideo(userId);
}





//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}
