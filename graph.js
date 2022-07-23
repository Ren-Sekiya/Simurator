class vgraph{
    constructor(){};
    element = document.querySelector("#graph2");
    context = element.getContext('2d');

    element2 = document.querySelector("#graph4");
    context2 = element2.getContext('2d');

    graph() {
        var width = element.width;
        var height = element.height;
        var x1 = 0;
        var y1 = height;
        var x2 = 0;
        var y2 = 0;
       for(var x = -10 ;x < 10; x++){
         context.beginPath();
         context.moveTo(x1, y1);
         context2.beginPath();
         context2.moveTo(x1, y1);

         x2 = x1 + (width/width) * 20;
         y2 = ((Math.pow(x, 3)/3) - 3*(Math.pow(x, 2)) + 8*x -3);
         if(y2 < 0){
            y2 = -2 * y2;
         }else{
            y2 = y2 * 2;
         }

         context.lineTo(x2, y2);
         context.stroke();
         context2.lineTo(x2, y2);
         context2.stroke();
         x1 = x2;
         y1 = y2;
        }
    }

    graph2() {
        var x1 = element.width;
        var x2 = element2.width;
        var y1 = element.height;
        var y2 = element2.height;
       /* for(var x = 0 ;x < 10; x++){
         var y2 = -((Math.pow(x, 3)/3) - 3*(Math.pow(x, 2)) + 8*x -3) + 200;
         context.beginPath();
         context.moveTo(x1, y1);
         context.lineTo(x2 + 1, y2);
         context.stroke();
         context2.beginPath();
         context2.moveTo(x1, y1);
         context2.lineTo(x2 + 1, y2);
         context2.stroke();*/
         x1 = x2;
         y1 = y2;
        /*}*/
    }
}

    
    