function showRAP(){
var audio = new Audio('./RAP.mp3');
audio.volume = 0.6;

audio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);

    alert("FLEX");
    document.body.style.background = "url('RAP.gif') repeat";
    audio.play();
}