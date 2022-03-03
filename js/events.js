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