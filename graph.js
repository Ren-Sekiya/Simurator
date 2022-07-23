class vgraph{
    constructor(){};
    element = document.querySelector("#graph2");
    context = element.getContext('2d');

    element2 = document.querySelector("#graph4");
    context2 = element2.getContext('2d');

    graph() {
        var x1 = element.width;
        var x2 = element2.width;
        var y1 = element.height;
        var y2 = element2.height;
        for(var x = 0.0 ;x < 10.0; x++){
         var y2 = -((Math.pow(x, 3)/3) - 3*(Math.pow(x, 2)) + 8*x -3) + 200;
         context.beginPath();
         context.moveTo(x1, y1);
         context.lineTo(x2 + 1, y2);
         context.stroke();
         /*context2.beginPath();
         context2.moveTo(x1, y1);
         context2.lineTo(x2 + 1, y2);
         context2.stroke();*/
         x1 = x2;
         y1 = y2;
        }
    }

    graph2() {
        var x1 = element.width;
        var x2 = element2.width;
        var y1 = element.height;
        var y2 = element2.height;
        for(var x = 0.0 ;x < 10.0; x++){
         var y2 = -((Math.pow(x, 3)/3) - 3*(Math.pow(x, 2)) + 8*x -3) + 200;
         context.beginPath();
         context.moveTo(x1, y1);
         context.lineTo(x2 + 1, y2);
         context.stroke();
         /*context2.beginPath();
         context2.moveTo(x1, y1);
         context2.lineTo(x2 + 1, y2);
         context2.stroke();*/
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