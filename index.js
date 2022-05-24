var length = document.querySelectorAll(".drum").length;

for(var i = 0;i<length;i++){
document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}


function handleClick(){

button_pressed = this.innerHTML

if(button_pressed == 'w'){
var audio  = new Audio('sounds\\tom-1.mp3');
this.style.color = 'white';
}

else if(button_pressed == 'a')
{
var audio  = new Audio('sounds\\tom-2.mp3');
this.style.color = 'white';
}

else if(button_pressed == 's'){
var audio  = new Audio('sounds\\tom-3.mp3');
this.style.color = 'white';
}

else if(button_pressed == 'd'){
var audio  = new Audio('sounds\\tom-4.mp3');
this.style.color = 'white';
}

else if(button_pressed == 'j'){
var audio  = new Audio('sounds\\snare.mp3');
this.style.color = 'white';
}

else if(button_pressed == 'k'){
var audio  = new Audio('sounds\\crash.mp3');
this.style.color = 'white';
}

else if(button_pressed == 'l'){
var audio  = new Audio('sounds\\crash.mp3');
this.style.color = 'white';
}

audio.play();



}