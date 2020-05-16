"use strict";

var audioBtn = document.getElementById("audioInfo");
var audio = document.getElementById("audio");

function playAudio() {
    audio.play();
}

audioBtn.addEventListener("click", playAudio);