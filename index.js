
// Button clicked Function -------------------------------------------------------------------

let numOfDrums = document.querySelectorAll(".drum").length;
let i = 0;

while (i < numOfDrums) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        let buttonInnerHTML = this.innerHTML;
        playMusic(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);

    })
    i++;
}

// Keyboard key pressed Function -------------------------------------------------------------

document.addEventListener("keypress", function (event) {
    playMusic(event.key);
    buttonAnimation(event.key);
});


// Music play function -----------------------------------------------------------------------

function playMusic(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("Assets/sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("Assets/sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("Assets/sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("Assets/sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio("Assets/sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var crash = new Audio("Assets/sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kick = new Audio("Assets/sounds/kick-bass.mp3");
            kick.play();
            break;

        default:
            console.log(buttonInnerHTML);
            break;
    }
}


// Buttons animation Function ----------------------------------------------------------------

function buttonAnimation(currentkey) {
    let activeButton = document.querySelector("." + currentkey);
    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}