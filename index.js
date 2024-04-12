var numOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i=0; i<numOfDrumButtons; i++){
document.querySelectorAll(".drum")[i].addEventListener("click", function(){
var buttonInnerHTML = this.innerHTML;
drumSound(buttonInnerHTML)});
}

document.addEventListener("keydown", function(event){
drumSound(event.key)});

function drumSound(key){
    switch (key) {
        case "w":
            var audioCymbal = new Audio('./sounds/tom-1.mp3');
            audioCymbal.play();
            break;

        case "a":
            var audioCymbal = new Audio('./sounds/tom-2.mp3');
            audioCymbal.play();
            break;

        case "s":
            var audioCymbal = new Audio('./sounds/tom-3.mp3');
            audioCymbal.play();
            break;
        
        case "d":
            var audioCymbal = new Audio('./sounds/tom-4.mp3');
            audioCymbal.play();
            break;

        case "j":
            var audioCymbal = new Audio('./sounds/snare.mp3');
            audioCymbal.play();
            break;

        case "k":
            var audioCymbal = new Audio('./sounds/crash.mp3');
            audioCymbal.play();
            break;

        case "l":
            var audioCymbal = new Audio('./sounds/kick-bass.mp3');
            audioCymbal.play();
            break;
    
        default:
            break;
    }
}