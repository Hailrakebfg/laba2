function showAnime(){
var audio = new Audio('./best.mp3');
audio.volume = 0.6;

audio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);

    alert("это пики");
    document.body.style.background = "url('laba.gif') repeat";
    audio.play();
}