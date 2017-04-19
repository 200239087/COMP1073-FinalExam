module objects {
  /**
   * The Button class extends the createjs.Bitmap
   *
   * @export
   * @class Button
   * @extends {createjs.Bitmap}
   */
  export class Button extends createjs.Bitmap {

    // +++++++++++++++++ CONSTRUCTORS ++++++

    /**
     * Creates an instance of Button.
     *
     * @param {string} imageString
     * @param {number} _width
     * @param {number} _height
     * @param {number} x
     * @param {number} y
     * @param {boolean} _isCentered
     *
     * @memberOf Button
     */
    constructor(
      imageString:string,
      x:number, y:number,
      private _isCentered: boolean, 
      private _width: number,
      private _height: number) {
      super(imageString);

      // check to see if the user requires the button's pivot to be centered
      if(_isCentered) {
        this.regX = this.getBounds().width * 0.5;
        this.regY = this.getBounds().height * 0.5;
      }

      // set the position of the button
      this.x = x;
      this.y = y;

      // bind the mouseover and mouseout events
      this.on("mouseover", this._mouseOver);
      this.on("mouseout", this._mouseOut);
    }

    // +++++++++++++++ PRIVATE METHODS

    /**
     * The mouseover event handler
     *
     * @private
     * @param {createjs.MouseEvent} event
     *
     * @memberOf Button
     */
    private _mouseOver(event:createjs.MouseEvent) {
      this.alpha = 0.8; // 70% opaque - 30% transparent
      this.scaleX = 1.0; 
      this.scaleY = 1.0;
    }

    /**
     * The mouseout event handler
     *
     * @private
     * @param {createjs.MouseEvent} event
     *
     * @memberOf Button
     */
    private _mouseOut(event:createjs.MouseEvent) {
      this.alpha = 1.0; // 100% opaque -solid
      this.scaleX = 1.0; // 100% of scale - normal size
      this.scaleY = 1.0;
    }


  }
}
