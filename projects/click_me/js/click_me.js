    function move_me(){
        var x = Math.floor(Math.random() * (window.innerWidth - 450));
        var y = Math.floor(Math.random() * (window.innerHeight - 440));
        document.getElementById("clickme").style.left = (270 + x + "px");
        document.getElementById("clickme").style.top = (220 + y + "px");         
    }