
type SquarePositionProps = {
  minX: number,
  maxX: number,
  minY: number,
  maxY: number,
};

class Square{
  private width: number;
  private height: number;
  private x: number;
  private y: number;
  private color: string;
  private alpha: number;

  COLOR = ['#243763', '#FF6E31', '#FFEBB7', '#AD8E70'];
  
  constructor(pos: SquarePositionProps) {
    this.width = pos.maxX - pos.minX;
    this.height = pos.maxY - pos.minY;
    this.x = pos.minX;
    this.y = pos.minY;
    this.color = this.COLOR[Math.floor(Math.random() * 3)];
    this.alpha = 0;
  }

  draw(ctx: CanvasRenderingContext2D) {
    this.alpha += 0.001;

    ctx.save();
    ctx.fillStyle = this.color;
    ctx.globalAlpha = this.alpha;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.restore();
  }
}

export default Square;