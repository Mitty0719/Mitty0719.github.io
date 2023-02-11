import Line from "./Line";

class lineGroup{
  public lineList: Array<Line>;
  private stageWidth: number;
  private stageHeight: number;
  private maxLength: number;

  constructor(stageWidth: number, stageHeight: number){
    this.lineList = [];
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;
    this.maxLength = 50;
    
    setInterval(this.createLineInterval.bind(this), 50);
  }

  createLineInterval() {
    if(this.lineList.length < this.maxLength){
      this.create();
    }
  }

  create(){
    this.lineList.push(new Line('', this.stageWidth, this.stageHeight));
    // this.lineList.sort((a, b) => a.x - b.x || a.y - b.y);
  }

  draw(ctx : CanvasRenderingContext2D){
    for(let line of this.lineList){
      // line.checkScreen(this.stageWidth, this.stageHeight);
      line.draw(ctx);
    }
  }
}

export default lineGroup;