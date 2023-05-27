import Square from './Square';

type SquarePositionProps = {
  minX: number,
  maxX: number,
  minY: number,
  maxY: number,
};

class SquareGroup {
  private squareList: Array<Square>;
  constructor() {
    this.squareList = [];
  }

  draw(ctx: CanvasRenderingContext2D) {
    for(let square of this.squareList) {
      square.draw(ctx);
    }
  }

  create(pos: SquarePositionProps) {
    this.squareList.push(new Square(pos));
  }
}

export default SquareGroup;