if (Hls.isSupported()) {
	  var video1 = document.getElementById("video1");
      var hls = new Hls();
      // bind them together
      hls.attachMedia(video1);
      hls.on(Hls.Events.MEDIA_ATTACHED, function () {
        console.log("video and hls.js are now bound together !");
        hls.loadSource("");
        hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
        });
      });
	}