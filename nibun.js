class calnibun{
    constructor(elem1, elem2, elem3, elem4, elem5, elem6, elem7){
        this.elem1 = elem1; //1つ目のグラフ
        this.elem2 = elem2; //二枚目のキャンバス
        this.a = elem3.value; //初期値a
        this.b = elem4.value; //初期値b
        this.elem5 = elem5; //理論値
        this.elem6 = elem6; //計算値
        this.graph = elem7.number;
        this.answer = 0.44585
        this.answer2 = 5.7218;
        this.eps = 0.0001;
        this.roop = 20;
    };

    calcurator(){
        if(this.graph == 1){
            this.elem5.innerHTML = "理論値：" + this.answer;
            do{
                console.log("やばい");
                var c = (this.a + this.b) / 2.0;
                this.elem6.innerHTML = "計算値：" + this.func(c);
                if(this.func(c)*this.func(this.a) < 0) this.b = c;
                else this.a = c;
            }while(Math.abs(this.a-this.b) > this.eps);
        }
        else{
            this.elem5.innerHTML = "理論値：" + this.answer2;
            do{
                var c = (this.a + this.b) / 2.0;
                this.elem6.innerHTML = "計算値：" + this.func2(c);
                if(this.func2(c)*this.func2(this.a) < 0) this.b = c;
                else this.a = c;
            }while(Math.abs(this.a-this.b) > this.eps);
        }
    }

    func(tmp){
        return (Math.pow(tmp, 3)/3) - 3*(Math.pow(tmp, 2)) + 8*tmp -3;
    }

    func2(tmp){
        return (Math.pow(tmp, 3)/3) - 3*(Math.pow(tmp, 2)) + 8*tmp -10;
    }
}