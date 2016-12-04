$(window).on('load',function() {
    
    var networkState = navigator.connection.type;
    if (networkState == 'unknown' || networkState == Connection.NONE){
        $('.loader').fadeOut("fast");
        alert('Please Connect to Internet.');
        location.reload();
    }else{
        $('.loader').fadeOut("fast");
        if(localStorage.getItem("uid") != null)
            location.href="login.html";
    }

    console.log("In index.js");


    // else{
    //     var optn = {
    //         enableHighAccuracy : true,
    //         timeout : 10000,
    //         maximumAge : 0
    //     };
    //     navigator.geolocation.getCurrentPosition(onSuccess, onError, optn);
    // }
    // function onSuccess () {
    //     $('.loader').fadeOut("fast");
    //     if(localStorage.getItem("phone")!=null && localStorage.getItem("uid")!=null)
    //     	location.href="login.html";
    // }
    // function onError (error) {
    //     $('.loader').fadeOut("fast");
    //     if(error.code == error.PERMISSION_DENIED) {
    //         alert('Please Enable GPS.');
    //     }else{
    //         alert('GPS is Not Working.');
    //     }
    //     location.reload();
    // }
});
