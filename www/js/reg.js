$(window).on('load', function() {
	var socket = null;
    socket = io.connect('http://35.162.224.166/', {'sync disconnect on unload': false });

    socket.on('connect', function(){
        if(localStorage.getItem("uid") != null){
            console.log('In if inside connect');
            set();
        }else{
            console.log('In else inside connect');
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
            src: 'http://35.162.224.166/signup?name='+loc,
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