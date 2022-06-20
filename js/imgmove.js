var square = document.getElementsByClassName('square')[0];
var shadow = document.getElementsByClassName('shadow')[0];
var text = document.getElementsByTagName('h1')[0];
var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
var device = false;

var accelerationX
var accelerationY

window.ondevicemotion = function(event) {
  device = true;
	var accelerationX = event.accelerationIncludingGravity.x;
	var accelerationY = event.accelerationIncludingGravity.y;
	var accelerationZ = event.accelerationIncludingGravity.z;
}


document.addEventListener('mousemove', function(e){
  var mousexPercent = Math.round((e.x * 100) / (windowWidth));
  var mouseyPercent = Math.round((e.y * 100) / (windowHeight));
  var relMousexPercent
  var relMouseyPercent
  if (mousexPercent <= 50){
    var relMousexPercent = -(50 - (mousexPercent));
  }
  if (mousexPercent > 50){
    var relMousexPercent = 0 + (mousexPercent/2);
  }
  if (mouseyPercent <= 50){
    var relMouseyPercent = (50 - (mouseyPercent));
  }
  if (mouseyPercent > 50){
    var relMouseyPercent = -(0 + (mouseyPercent/2));
  }
                 
  square.style.transform = 
    'perspective(1000px) translateX(' 
    + (-1) * relMousexPercent/2.5 
    + 'px) translateY(' + relMouseyPercent/2.5 
    + 'px) rotateX(' + relMouseyPercent/2 + 'deg)'
    + 'rotateY(' + relMousexPercent/2 + 'deg)'
  square.style.webkitTransform = 
    'perspective(1500px) translateX(' 
    + (-1) * relMousexPercent/2.5 + 'px) translateY(' 
    + relMouseyPercent/2.5 + 'px) rotateX(' 
    + relMouseyPercent/2 + 'deg)'
    + 'rotateY(' + relMousexPercent/2 + 'deg)'
  shadow.style.transform = 
      'perspective(1000px) translateX(' 
    + (-1) * relMousexPercent/1.3 
    + 'px) translateY(' + relMouseyPercent/1.3 
    + 'px) rotateX(' + relMouseyPercent/2 + 'deg)'
    + 'rotateY(' + relMousexPercent/2 + 'deg)'
  shadow.style.webkitTransform = 
      'perspective(1500px) translateX(' 
      + (-1) * relMousexPercent/1.3 
      + 'px) translateY(' + relMouseyPercent/1.3 
      + 'px) rotateX(' + relMouseyPercent/2 + 'deg)'
      + 'rotateY(' + relMousexPercent/2 + 'deg)'
})