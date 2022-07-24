class calnibun{
    constructor(elem1, elem2, elem3, elem4, elem5, elem6){
        this.elem1 = elem1; //二枚目のキャンバス
        this.a = parseFloat(elem2.value); //初期値a
        this.b = parseFloat(elem3.value) //初期値b
        this.elem4 = elem4; //理論値
        this.elem5 = elem5; //計算値
        this.graph = elem6.value;
        this.answer = 0.44585;
        this.answer2 = 5.72189;
        this.eps = 0.0001;
    };

    calcurator(){
        var context = this.elem1.getContext('2d');
        if(this.graph == 1){
            this.elem4.innerHTML = "理論値：" + this.answer;
            do{
                var c = (this.a + this.b) / 2.0;
                context.beginPath();
                context.arc(this.elem1.width / 2 + 20 * c,this.elem1.height/2 - 2 * this.func(c), 4 ,0, Math.PI*2, true);
                context.fillstyle = 'red';
                context.fill();
                this.elem5.innerHTML = "二分法の計算値：" + Math.round(c*100000)/100000;
                if(this.func(c)*this.func(this.a) < 0) this.b = c;
                else this.a = c;
            }while(Math.abs(this.a-this.b) > this.eps);
        }
        else{
            this.elem4.innerHTML = "理論値：" + this.answer2;
            do{
                var c = (this.a + this.b) / 2.0;
                context.beginPath();
                context.arc(this.elem1.width / 2 + 20 * c, this.elem1.height/2 - 2*this.func2(c), 4 , 0, Math.PI*2, true);
                context.fillstyle = "red";
                context.fill();
                this.elem5.innerHTML = "二分法の計算値：" + Math.round(c*100000)/100000;
                if(this.func2(c)*this.func2(this.a) < 0) this.b = c;
                else this.a = c;
            }while(Math.abs(this.a-this.b) > this.eps);
        }
    }

    func(tmp){
        return (Math.pow(tmp, 3.0)/3.0) - 3.0*(Math.pow(tmp, 2.0)) + 8.0*tmp -3.0;
    }

    func2(tmp){
        return (Math.pow(tmp, 3.0)/3.0) - 3.0*(Math.pow(tmp, 2.0)) + 8.0*tmp -10.0;
    }
}