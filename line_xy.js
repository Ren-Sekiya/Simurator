var element = document.querySelector("graph1");
var context = element.getContext('2d');

context.beginPath();
context.moveTo(0, 0);
context.lineTo(200, 200);
context.stroke();