class vgraph{
    constructor(){};
    elem = document.querySelector("#graph2");
    cont = elem.getContext('2d');

    elem2 = document.querySelector("#graph4");
    cont2 = elem2.getContext('2d');

    graph() {
        var width = elem.width;
        var height = elem.height;
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
         y2 = -2*((Math.pow(x, 3)/3) - 3*(Math.pow(x, 2)) + 8*x -3) + height/2;

         context.lineTo(x2, y2);
         context.stroke();
         context2.lineTo(x2, y2);
         context2.stroke();
         x1 = x2;
         y1 = y2;
        }
    }

    graph2() {
        var width = elem.width;
        var height = elem.height;
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
         y2 = -2*((Math.pow(x, 3)/3) - 3*(Math.pow(x, 2)) + 8*x -10) + height/2;

         context.lineTo(x2, y2);
         context.stroke();
         context2.lineTo(x2, y2);
         context2.stroke();
         x1 = x2;
         y1 = y2;
        }
    }

    clear(){
        this.context.clearRect(0, 0, elem.width, elem.height);
        this.context2.clearRect(0, 0, elem2.width, elem2.height);
        this.context.beginPath();

    }
}

    
    