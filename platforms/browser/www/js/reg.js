$(window).on('load', function() {
	var socket = null,flag = 0,interval = null;
    socket = io.connect('http://buddytrack.herokuapp.com', {'sync disconnect on unload': false });

    socket.on('connect', function(){
        if(localStorage.getItem("uid") != null){
            set();
        }else{
            socket.emit('first_attempt'); 
        }
    });
    function set(){
        var id = localStorage.getItem("uid");
        socket.emit('second_attempt',id);
    }
    socket.on('first_ack', function(id) {
        var key = parseInt(id) + 1;
        key = key.toString();
        localStorage.setItem("uid",key);
        set();
    });

    socket.on('second_ack', function() {
    	var loc = localStorage.getItem("uid");
		$('iframe').attr({
            src: 'http://geforce-buddytrack.rhcloud.com/signup?name='+loc,
        });
    });

    socket.on('exitApp', function() {
        var ch = confirm("Are you sure?");
        if(ch) {
            navigator.app.exitApp();
        }
    });

	$('iframe').on('load',function() {
		$('.loader').fadeOut("fast");
	});
});