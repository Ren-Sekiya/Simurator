class vgraph{
    constructor(elem, elem2, elem3, elem4, elem5){
    this.element = elem;
    this.context = elem.getContext('2d');

    this.element2 = elem2;
    this.context2 = elem2.getContext('2d');

    this.element3 = elem3;
    this.answer = 0.44585;
    this.answer2 = 5.7218;

    this.element4 = elem4;
    this.element5 = elem5;
    };

    graph() {
        this.element3.innerText = "理論値：" + this.answer;
        this.element4.innerText = "";
        this.element5.innerText = "";
        var width = this.element.width;
        var height = this.element.height;
        this.context.clearRect(0, 0, this.element.width, this.element.height);
        this.context2.clearRect(0, 0, this.element2.width, this.element2.height);
        var x1 = 0.0;
        var y1 = height;
        var x2 = 0.0;
        var y2 = 0.0;
       for(var x = -9 ;x <= 10; x++){
         this.context.beginPath();
         this.context.moveTo(x1, y1);
         this.context2.beginPath();
         this.context2.moveTo(x1, y1);

         x2 = x1 + (width/width) * 20;
         y2 = -2*((Math.pow(x, 3)/3) - 3*(Math.pow(x, 2)) + 8*x -3) + height/2;

         this.context.lineTo(x2, y2);
         this.context.stroke();
         this.context2.lineTo(x2, y2);
         this.context2.stroke();
         x1 = x2;
         y1 = y2;
        }
    }

    graph2() {
        this.element3.innerText = "理論値：" + this.answer2;
        this.element4.innerText = "";
        this.element5.innerText = "";
        var width = element.width;
        var height = element.height;
        this.context.clearRect(0, 0, this.element.width, this.element.height);
        this.context2.clearRect(0, 0, this.element2.width, this.element2.height);
        var x1 = 0.0;
        var y1 = height;
        var x2 = 0.0;
        var y2 = 0.0;
       for(var x = -9 ;x <= 10; x++){
        this.context.beginPath();
        this.context.moveTo(x1, y1);
        this.context2.beginPath();
        this.context2.moveTo(x1, y1);

         x2 = x1 + (width/width) * 20;
         y2 = -2*((Math.pow(x, 3)/3) - 3*(Math.pow(x, 2)) + 8*x -10) + height/2;

         this.context.lineTo(x2, y2);
         this.context.stroke();
         this.context2.lineTo(x2, y2);
         this.context2.stroke();
         x1 = x2;
         y1 = y2;
        }
    }

    clear(){
        this.element4.innerText = "";
        this.element5.innerText = "";
        //this.context.beginPath();
        this.context.clearRect(0, 0, this.element.width, this.element.height);
        this.context2.clearRect(0, 0, this.element2.width, this.element2.height);
        //this.context.fill();
        
    }
}

    
    