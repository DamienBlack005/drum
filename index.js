var drumButn = document.querySelectorAll(".drum").length;


for (var i = 0; i < drumButn; i++) {
// detecting mouseclick
document.querySelectorAll(".drum")[i].addEventListener("click", function(){
var buttonInnerHTML = this.innerHTML; // In an event, this refers to the element that received the event
  makeSound(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);
});}

// detecting keypress
document.addEventListener("keydown", function(event){
  makeSound(event.key);
  // here keydown is passed as an argument of the ananomous function. Because before the
  // codes of the function run, it lets the the "keydown" event to finish and
  // than the function is callbacked after.
  // (event.key) means the event object which has the property of "keydown"
  // that is passed as an argument in the ananomous function + the
  // argument key. which makes them an object so it can be passed using dot notation
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "k":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "l":
      var snare1 = new Audio("sounds/snare.mp3");
      snare1.play();
      break;
    default:
      console.log(key);
      break;
  }
}

function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);

}
