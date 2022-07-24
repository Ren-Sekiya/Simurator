class calnibun{
    constructor(elem1, elem2, elem3, elem4, elem5, elem6){
        this.elem1 = elem1; //1つ目のグラフ
        this.elem2 = elem2; //二枚目のキャンバス
        this.elem3 = elem3; //初期値a
        this.elem4 = elem4; //初期値b
        this.elem5 = elem5; //理論値
        this.elem6 = elem6; //計算値
        this.answer = 0.44585
        this.eps = 0.001;
        this.roop = 20;
    };

    calcurator(){
        this.elem5.innerHTML = "理論値：" + 0.44585;

    }
}