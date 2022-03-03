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
