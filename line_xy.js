var element = document.querySelector("#graph1");
var context = element.getContext('2d');

context.beginPath();
context.moveTo(200, 0);
context.lineTo(200, 400);
context.stroke();

context.beginPath();
context.moveTo(0, 200);
context.lineTo(400, 200);
context.stroke();