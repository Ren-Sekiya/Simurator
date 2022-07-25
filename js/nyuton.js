class calnyuton{
    constructor(elem1, elem2, elem3, elem4, elem5){
        this.elem1 = elem1; //2枚目のキャンバス
        this.a = 0.0;
        this.b = parseFloat(elem2.value); //初期値b
        this.elem3 = elem3; //理論値
        this.elem4 = elem4; //計算値
        this.graph = elem5.value;
        this.answer = 0.44585;
        this.answer2 = 5.72189;
        this.eps = 0.0001;
        this.timer = 0;
    };

    calcurate(){
        var context =this.elem1.getContext('2d');
        context.fillStyle = "royalblue";
        if(this.graph == 1){
            this.elem3.innerHTML = "理論値：" + this.answer;
            while(1){
                this.a = this.b - this.func(this.b) / this.func2(this.b);
                if(isNaN(this.a)){
                    this.elem4.innerHTML = "ニュートン法の計算値：変曲点のため計算できません";
                    break;
                }
                context.beginPath();
                context.arc(this.elem1.width / 2 + 20 * this.a, this.elem1.height / 2, 4, 0, Math.PI*2, true);
                context.fill();
                this.elem4.innerHTML = "ニュートン法の計算値：" + Math.round(this.a*100000)/100000;
                if(Math.abs(this.a - this.b) < this.eps || this.timer > 50) break;
                else{
                    this.b = this.a;
                    this.timer++;
                }
            }
        }
        else{
            this.elem3.innerHTML = "理論値：" + this.answer2;
            while(1){
                this.a = this.b - this.func3(this.b) / this.func4(this.b);
                if(isNaN(this.a)){
                    this.elem4.innerHTML = "ニュートン法の計算値：変曲点のため計算できません";
                    break;
                }
                context.beginPath();
                context.arc(this.elem1.width / 2 + 20 * this.a, this.elem1.height / 2, 4, 0, Math.PI*2, true);
                context.fill();
                this.elem4.innerHTML = "ニュートン法の計算値：" + Math.round(this.a*100000)/100000;
                if(Math.abs(this.a - this.b) < this.eps || this.timer > 50) break;
                else{
                    this.b = this.a;
                    this.timer++;
                }
            }
        }
    }

    func(tmp){
        return (Math.pow(tmp, 3.0)/3.0) - 3.0*(Math.pow(tmp, 2.0)) + 8.0*tmp -3.0;
    }

    func2(tmp){
        return (Math.pow(tmp, 2.0) - 6.0 * tmp + 8.0);
    }

    func3(tmp){
        return (Math.pow(tmp, 3.0)/3.0) - 3.0*(Math.pow(tmp, 2.0)) + 8.0*tmp -10.0;
    }

    func4(tmp){
        return (Math.pow(tmp, 2.0) - 6.0 * tmp + 8.0);
    }
}