$(document).ready(function () {
  //alert(window.location.href);
  setInterval(function () {
    var l = window.location.href;
    var urll;
    if (l.includes("VideoAnalyticsAppMongo")) {
      urll = "/VideoAnalyticsAppMongo/fireAlert";
    } else {
      urll = "/fireAlert";
    }
    $.ajax({
      type: "GET",
      url: urll,
      success: function (data) {
        if (data == true) {
          console.log("SUCCESS : ", data);
          var music = document.getElementById("xyz");
          /* music.muted = true;
	           music.play();
	           music.muted = false; */
          var promise = music.play();
          if (promise !== undefined) {
            promise
              .then((_) => {
                // Autoplay started!
              })
              .catch((error) => {
                // Autoplay was prevented.
                // Show a "Play" button so that user can start playback.
                music.muted = false;
                music.play();
                music.muted = false;
              });
            //alert("Thank you!");
            var element = document.getElementById("bb");
            element.classList.add("quadrat");
          }
        } else {
          var element = document.getElementById("bb");
          element.classList.remove("quadrat");
        }
      },
      error: function (e) {
        // console.log("ERROR : ", e);
      },
    });
  }, 10000);
});
