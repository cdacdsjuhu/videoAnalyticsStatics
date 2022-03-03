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

    // if (currentLocation.includes("http://localhost:8080/user_mgt")) {
    //     window.onload = function(){
    //         var button = document.getElementById('showuser');
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

   

   
});
///////////////////////// ---------------BASIC CONFIGURATION END--------------------//////////////////////////

///////////////////////// ---------------ADMIN PAGE DISPLAY CAMERA START--------------------//////////////////////////

function displayCameraPerform() {
    var currentLocation = ''+window.location;
        console.log(currentLocation);

        // if (currentLocation.includes("http://localhost:8080/admin") == false) {
        //     return;
        // }

        if (currentLocation.includes("/admin") == false) {
            return;
        }

        var button = document.getElementById('displaycamera');
        button.form.submit();
        
}

function toggle(source) {
    checkboxes = document.getElementsByName('vid');
    for(var i=0, n=checkboxes.length;i<n;i++) {
      checkboxes[i].checked = source.checked;
    }
  }

var camNameFetched = [];
var camString ="";
function getId(e) {
    var checkboxId = e;
   
    if(camNameFetched.includes(checkboxId)) {
        camNameFetched.pop(checkboxId);
    } else {
        camNameFetched.push(checkboxId);
    }
    camString="";
    
    camNameFetched.forEach(cameraID =>{
        if(camString.length ==0){
            camString = cameraID;
        }
        else{
            camString = camString+"#"+cameraID;
        }
    });
}

function setGeneralSettingsCookies() {

    var currentLocation = ''+window.location;
    console.log(currentLocation);

    // if (currentLocation.includes("http://localhost:8080/displayCamera?userId=User+%3A+karandeomkar2%40gmail.com") == false) {
    //         return;
    //     }

        if (currentLocation.includes("displayCamera") == false) {
            return;
        }

    var name = "camNameDetails";
    var value = camNameFetched;

    if (camNameFetched.length == 0) {
        // window.location.href = "http://localhost:8080/general_settings";
        window.location.href = "https://10.210.0.166/VideoAnalyticsAppMongo/general_settings";
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
    window.location.href = "https://10.210.0.166/VideoAnalyticsAppMongo/general_settings";
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
