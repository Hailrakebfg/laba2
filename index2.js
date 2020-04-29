var audio = new Audio('./RAP.mp3');
audio.volume = 0.6;

audio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);

function showRAP(){
	alert("это уже другое...");
    document.body.style.background = "url('RAP.gif') repeat";
    audio.play();
}