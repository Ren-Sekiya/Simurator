var element = document.querySelector("#graph1");
var context = element.getContext('2d');

var element2 = document.querySelector("#graph3");
var context2 = element.getContext('2d');


context.beginPath();
context.moveTo(200, 0);
context.lineTo(200, 400);
context.stroke();

context.beginPath();
context.moveTo(0, 200);
context.lineTo(400, 200);
context.stroke();

context2.beginPath();
context2.moveTo(200, 0);
context2.lineTo(200, 400);
context2.stroke();

context2.beginPath();
context2.moveTo(0, 200);
context2.lineTo(400, 200);
context2.stroke();