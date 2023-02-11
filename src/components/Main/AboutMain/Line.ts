import { getRandomBoolean } from '../../../common';

class Line{
  public width: number;
  public height: number;
  public x: number;
  public y: number;
  public dx: number;
  public dy: number;
  private color: string;
  private value: string;
  private speed: number;

  constructor(value: string, stageWidth: number, stageHeight: number){
    this.width = 5;
    this.height = 5;
    this.x = 0;
    this.y = 0;
    this.dx = 0;
    this.dy = 0;
    this.color = '#f2f2f2';
    this.value = value;
    this.speed = Math.floor(Math.random() * 3) + 1;
    
    // true : x moving, false : y moving
    if(getRandomBoolean()) {
      const isRight = getRandomBoolean();
      this.x = isRight ? -this.width : stageWidth;
      this.y = Math.floor(Math.random() * (stageHeight - this.height)) + this.height;
      this.dx = isRight ? this.speed : -this.speed;
    } else {
      const isBottom = getRandomBoolean();
      this.x = Math.floor(Math.random() * (stageWidth - this.width)) + this.width;
      this.y = isBottom ? -this.height : stageHeight;
      this.dy = isBottom ? this.speed : -this.speed;
    }
  }

  move(){
    this.x += this.dx;
    this.y += this.dy;
  }

  // checkScreen(stageWidth: number, stageHeight: number){
  //   const minX = this.x;
  //   const maxX = this.x + this.width;
  //   const minY = this.y;
  //   const maxY = this.y + this.height;
  //   if(maxX < 0 || minX > stageWidth || maxY < 0 || minY > stageHeight) {
  //   }
  // }

  draw(ctx: CanvasRenderingContext2D){
    this.move();
    ctx.save();
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.restore();
  }
}

export default Line;