var button = document.getElementById("colorChangeButton");
var hexCharacters = "0123456789ABCDEF";

button.addEventListener("click", colorchange);

function colorchange() {
    var randcol = "";
    for (var i = 0; i < 6; i++) {
        randcol += hexCharacters[Math.floor(Math.random() * 16)];
    }
    document.body.style.backgroundColor = "#" + randcol;
}

var button3 = document.getElementById("crazyButton")
var i = 0;


button3.addEventListener("click", gocrazy);



function gocrazy(){
    setInterval(function(){
        var randomColor = Math.floor(Math.random() * 16777215).toString(16);
        document.body.style.backgroundColor = "#" + randomColor;
        },1);
}

var button2 = document.getElementById("whiteButton");

button2.addEventListener("click", gobacktowhite);

function gobacktowhite() {
    document.body.style.backgroundColor = "#FFFFFF";
}

var button4 = document.getElementById("stopcrazyButton");
button4.addEventListener("click", stopCrazy);

function stopCrazy() {
    window.clearInterval();
    document.body.style.backgroundColor = "#FFFFFF";
}

