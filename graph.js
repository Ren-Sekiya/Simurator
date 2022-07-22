class vgraph{
    constructor(){};
    element = document.querySelector("#graph2");
    context = element.getContext('2d');

    element2 = document.querySelector("#graph4");
    context2 = element2.getContext('2d');

    graph() {
        var x1 = 200.0;
        var x2 = 200.0;
        var y1 = 200.0;
        var y2 = 200.0;
        for(var x = 0.0 ;x < 10.0; x + 0.1){
         var y2 = -((Math.pow(x, 3)/3) - 3*(Math.pow(x, 2)) + 8*x -3) + 200;
         context.beginPath();
         context.moveTo(x1, y1);
         context.lineTo(x2 + 0.1, y2);
         context.stroke();
         context2.beginPath();
         context2.moveTo(x1, y1);
         context2.lineTo(x2 + 0.1, y2);
         context2.stroke();
         x1 = x2;
         y1 = y2;
        }
    }

    graph2() {
        var x1 = 200.0;
        var x2 = 200.0;
        var y1 = 200.0;
        var y2 = 200.0;
        for(var x = 0.0 ;x < 10.0; x + 0.1){
         var y2 = -((Math.pow(x, 3)/3) + 3*(Math.pow(x, 2)) - 8*x -10) + 200;
         context.beginPath();
         context.moveTo(x1, y1);
         context.lineTo(x2 + 0.1, y2);
         context.stroke();
         context2.beginPath();
         context2.moveTo(x1, y1);
         context2.lineTo(x2 + 0.1, y2);
         context2.stroke();
         x1 = x2;
         y1 = y2;
        }
    }
}

    
    document.querySelector("#b01").addEventListener('click', () =>{
        var vg = new vgraph();
     vg.graph();
    });

    document.querySelector("#b02").addEventListener('click', () => {
        var vg = new vgraph();
        vg.graph2(x);
    });