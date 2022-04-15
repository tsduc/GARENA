document.getElementById("Light").onclick = function () {
    document.getElementById("trangthai").src = "./images/daymode.6f91fb3c.jpg";
    document.getElementById("Light").style.background = 'linear-gradient(-180deg, #f55, #f33939)';
    document.getElementById("Light").style.color = 'white';
    document.getElementById("Dark").style.background = 'white';
    document.getElementById("Dark").style.color = 'black';
};

document.getElementById("Dark").onclick = function () {
    document.getElementById("trangthai").src = "./images/nightmode.5abdd16c.jpg";
    document.getElementById("Dark").style.background = 'linear-gradient(-180deg, #f55, #f33939)';
    document.getElementById("Dark").style.color = 'white';
    document.getElementById("Light").style.background = 'white';
    document.getElementById("Light").style.color = 'black';
};
document.getElementById("Game").onclick = function () {
    document.getElementById("trangthaii").src = "./images/gpc_game.9da62a38.jpg";
    document.getElementById("Game").style.background = 'linear-gradient(-180deg, #f55, #f33939)';
    document.getElementById("Game").style.color = 'white';
    document.getElementById("Mic").style.background = 'white';
    document.getElementById("Mic").style.color = 'black';
};

document.getElementById("Mic").onclick = function () {
    document.getElementById("trangthaii").src = "./images/gpc_voice.d9fd029d.jpg";
    document.getElementById("Mic").style.background = 'linear-gradient(-180deg, #f55, #f33939)';
    document.getElementById("Mic").style.color = 'white';
    document.getElementById("Game").style.background = 'white';
    document.getElementById("Game").style.color = 'black';
};