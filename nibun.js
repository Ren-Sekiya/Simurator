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
        this.eps = 0.0001;
        this.roop = 20;
    };

    calcurator(){
        this.elem5.innerHTML = "理論値：" + 0.44585;
        if(this.graph == 1){
            do{
                var c = (this.a + this.b) / 2.0;
                if(this.func(c)*this.funk(a) < 0) b = c;
                else this.a = c;
            }while(this.a - this.b > eps);
        }
        else{
            do{
                var c = (this.a + this.b) / 2.0;
                if(this.func2(c)*this.func2(a) < 0) b = c;
                else this.a = c;
            }while(this.a - this.b > eps);
        }
        this.elem6.innerHTML = func(c);
    }

    func(tmp){
        return (Math.pow(tmp, 3)/3) - 3*(Math.pow(tmp, 2)) + 8*x -3;
    }

    func2(tmp){
        return (Math.pow(tmp, 3)/3) - 3*(Math.pow(tmp, 2)) + 8*x -10;
    }
}