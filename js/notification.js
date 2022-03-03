let a = 0;
var globalNotiCount = 0;
//var i=0;
//var j=0;
//var t=0;
//var p=0;
//var d=0;

$(document).ready(function () {
  //alert(window.location.href);
  var l = window.location.href;
  var setUrl = null;
  var urll;
  if (l.includes("VideoAnalyticsAppMongo"))
    urll = "/VideoAnalyticsAppMongo/notification";
  else {
    urll = "/notification";
  }

  setInterval(function () {
    $.ajax({
      type: "GET",
      url: urll,
      success: function (data) {
        if (data != null) {
          let notiCount = 0;
          document.getElementById("notify").innerHTML = "";
          for (const i of data.list) {
            //console.log(typeof i.type);
            if (i.type == "Fire") {
              var CodeInsideDiv = document.getElementById("notify");
              var injection = "<a>" + " Fire Detected at " + i.camId + "</a>";
              var injection = "<a>" + i.title + "</a>";
              CodeInsideDiv.innerHTML = injection + CodeInsideDiv.innerHTML;
            }
            if (i.type == "Smoke") {
              var CodeInsideDiv = document.getElementById("notify");
              var injection = "<a>" + " Smoke Detected at " + i.camId + "</a>";
              var injection = "<a>" + i.title + "</a>";
              CodeInsideDiv.innerHTML = injection + CodeInsideDiv.innerHTML;
            }
            if (i.type == "Crowd") {
              var CodeInsideDiv = document.getElementById("notify");
              var injection = "<a>" + " Crowd Detected at " + i.camId + "</a>";
              var injection = "<a>" + i.title + "</a>";
              CodeInsideDiv.innerHTML = injection + CodeInsideDiv.innerHTML;
            }
            if (i.type == "Face") {
              var CodeInsideDiv = document.getElementById("notify");
              var injection = "<a>" + " Face Detected at " + i.camId + "</a>";
              var injection = "<a>" + i.title + "</a>";
              CodeInsideDiv.innerHTML = injection + CodeInsideDiv.innerHTML;
            }
          }

          $("#noticount").text(data.Count);
          $("#noticount1").text(data.Count);

          /*
          notiCount++;
  
          var t =
            data[0].list[0].objecttype +
            " Detected on " +
            data[0].camID +
            " at " +
            data[0].createdDate;
          var p =
            data[1].list[0].objecttype +
            " Detected on " +
            data[1].camID +
            " at " +
            data[1].createdDate;
          var d =
            data[2].list[0].objecttype +
            " Detected on " +
            data[2].camID +
            " at " +
            data[2].createdDate;
          var e =
            data[3].list[0].objecttype +
            " Detected on " +
            data[3].camID +
            " at " +
            data[3].createdDate;
          var f =
            data[4].list[0].objecttype +
            " Detected on " +
            data[4].camID +
            " at " +
            data[4].createdDate;
          var g =
            data[5].list[0].objecttype +
            " Detected on " +
            data[5].camID +
            " at " +
            data[5].createdDate;
          var h =
            data[6].list[0].objecttype +
            " Detected on " +
            data[6].camID +
            " at " +
            data[6].createdDate;
          var i =
            data[7].list[0].objecttype +
            " Detected on " +
            data[7].camID +
            " at " +
            data[7].createdDate;
          var j =
            data[8].list[0].objecttype +
            " Detected on " +
            data[8].camID +
            " at " +
            data[8].createdDate;
          var k =
            data[9].list[0].objecttype +
            " Detected on " +
            data[9].camID +
            " at " +
            data[9].createdDate;
  
          //globalNotiCount += notiCount;
          $("#noticount").text(globalNotiCount);
          $("#noticount1").text(globalNotiCount);
          $("#noticount2").text(t);
          $("#noticount3").text(p);
          $("#noticount4").text(d);
          $("#noticount5").text(e);
          $("#noticount6").text(f);
          $("#noticount7").text(g);
          $("#noticount8").text(h);
          $("#noticount9").text(h);
          $("#noticount10").text(i);
          */
        }
      },

      error: function (e) {
        console.log("ERROR : ", e);
      },
    });
  }, 15000);
});
