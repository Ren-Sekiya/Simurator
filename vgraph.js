class VCanvas {

    /**
     * @param { HTMLCanvasElement } canvasElement HTMLのCanvas要素
     */
    constructor( canvasElement ) {
      /** @private */
      this._canvas = canvasElement;
      this._context = canvasElement.getContext("2d");
      this._scaleWidth = null;
      this._scaleHeight = null;
      this._scaleTop = null;
      this._slaceLeft = null;
      this._scalable = false;
      var _dir_x = 1; // X軸の向き
      var _dir_y = 1; // Y軸の向き
      var _color = [0,0,0,1]; // 色の初期値は黒
    };
  
    /**
     * 仮想座標を設定する．
     *
     * @param { number } left 左端の座標
     * @param { number } top 上端の座標
     * @param { number } width 仮想座標の幅
     * @param { number } height 仮想座標の高さ
     */
    scale( left, top, width, height ) {
      this._scaleLeft = left;
      this._scaleTop = top;
      this._scaleWidth = width;
      this._scaleHeight = height;
      this._scalable = true;
  
      if( this._scaleWidth < 0 ) {
        this._scaleWidth = -this.scaleWidth;
        this._dir_x = -1;
      } else this._dir_x = 1;
  
      if( this._scaleHeight < 0 ) {
        this._scaleHeight = -this._scaleHeight;
        this._dir_y = -1;
      } else this._dir_y = 1;
    };
}