class calnibun{
    constructor(elem1, elem2, elem3, elem4, elem5, elem6, elem7){
        this.elem1 = elem1; //1つ目のグラフ
        this.elem2 = elem2; //二枚目のキャンバス
        this.a = parseFloat(elem3.value); //初期値a
        this.b = parseFloat(elem4.value) //初期値b
        this.elem5 = elem5; //理論値
        this.elem6 = elem6; //計算値
        this.graph = elem7.value;
        this.answer = 0.44585
        this.answer2 = 5.7218;
        this.eps = 0.0001;
        this.roop = 20;
    };

    calcurator(){
        if(this.graph == 1){
            this.elem5.innerHTML = "理論値：" + this.answer;
            do{
                console.log(this.a);
                console.log(this.b);
                var c = (this.a + this.b) / 2.0;
                this.elem6.innerHTML = "計算値：" + c;
                if(this.func(c)*this.func(this.a) < 0) this.b = c;
                else this.a = c;
            }while(Math.abs(this.a-this.b) > this.eps);
        }
        else{
            this.elem5.innerHTML = "理論値：" + this.answer2;
            do{
                var c = (this.a + this.b) / 2.0;
                this.elem6.innerHTML = "計算値：" + c;
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