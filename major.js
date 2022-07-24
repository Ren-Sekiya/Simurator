var element = document.querySelector("#graph1");
var context = element.getContext('2d');
var element2 = document.querySelector("#graph3");
var context2 = element2.getContext('2d');


var x1 = element.width;
var x2 = element2.width;
var y1 = element.height;
var y2 = element2.height;

context.beginPath();
context.moveTo(x1/2, 0);
context.lineTo(x1/2, y1);
context.stroke();

context.beginPath();
context.moveTo(0, y1/2);
context.lineTo(x1, y1/2);
context.stroke();

context2.beginPath();
context2.moveTo(x1/2, 0);
context2.lineTo(x1/2, y1);
context2.stroke();

context2.beginPath();
context2.moveTo(0, y1/2);
context2.lineTo(x1, y1/2);
context2.stroke();

document.querySelector("#b01").addEventListener('click', () =>{
    var vg = new vgraph(document.querySelector("#graph2"), document.querySelector("#graph4"));
    vg.graph();
});

document.querySelector("#b02").addEventListener('click', () => {
    var vg = new vgraph(document.querySelector("#graph2"), document.querySelector("#graph4"));
    vg.graph2();
});

document.querySelector("#clear").addEventListener('click', () =>{
    var vg = new vgraph(document.querySelector("#graph2"), document.querySelector("#graph4"));
    vg.clear();
})

document.querySelector("#inputControlBar1").addEventListener('input', () =>{
    var val = document.querySelector("#inputControlBar1");
    document.querySelector("#viewbar1").innerText = val.value;
})

document.querySelector("#inputControlBar2").addEventListener('input', () =>{
    var val = document.querySelector("#inputControlBar2");
    document.querySelector("#viewbar2").innerText = val.value;
})