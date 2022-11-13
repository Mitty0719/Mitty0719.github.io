class Text{
  private x : number;
  private y : number;
  private isBlur : boolean;
  private value : string;
  private directionX : number;
  private directionY : number;
  constructor(value : string){
    this.x = 0;
    this.y = 0;
    this.directionX = -1;
    this.directionY = -1;
    this.isBlur = false;
    this.value = value;
  }

  draw(ctx: CanvasRenderingContext2D){
    ctx.save();
    ctx.fillText(this.value, this.x, this.y);
    ctx.restore();
  }
}

export default Text;