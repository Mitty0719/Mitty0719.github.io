import { LineStyle } from 'pixi.js';
import LineGroup from './LineGroup';
import SquareGroup from './SquareGroup';

class AboutMainCanvas{
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D | null;
  private lineGroup: LineGroup;
  private squareGroup: SquareGroup;
  private parentNode: HTMLDivElement;
  private stageWidth: number;
  private stageHeight: number;

  constructor(parentNode: HTMLDivElement){
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.stageWidth = 0;
    this.stageHeight = 0;
    
    this.parentNode = parentNode;
    if(this.parentNode){
      this.parentNode.appendChild(this.canvas);
      this.resize();
    }
    
    this.lineGroup = new LineGroup(this.stageWidth, this.stageHeight);
    this.squareGroup = new SquareGroup();
    window.requestAnimationFrame(this.draw.bind(this));

    this.canvas.addEventListener('click', e => this.clickHandler.call(this, e));
  }
  resize(){
    this.stageWidth = this.parentNode.clientWidth;
    this.stageHeight = this.parentNode.clientHeight;

    this.canvas.width = this.stageWidth;
    this.canvas.height = this.stageHeight;
  }

  draw(){
    window.requestAnimationFrame(this.draw.bind(this));
    if(this.ctx){
      this.lineGroup.draw(this.ctx);
      this.squareGroup.draw(this.ctx);
    }
  }

  clickHandler(e: MouseEvent){
    const pos = this.checkLineArea(e.x, e.y);
    this.squareGroup.create(pos);
  }

  checkLineArea(x: number, y: number) {
    let minX = 0;
    let maxX = this.stageWidth;
    let minY = 0;
    let maxY = this.stageHeight;
    // lineGroup이 x, y가 정렬되있지 않아 min, max가 정확히 매칭되지 않음 - 선이 많아 오히려 괜찮을지도?
    for(let line of this.lineGroup.lineList){
      if(line.dx > 0) { // x moving
        if(line.y < y){
          minY = (minY - line.y) < 0 ? line.y + line.height : minY;
        } else {
          maxY = (maxY - line.y) > 0 ? line.y : maxY;
        }
      }
      if(line.dy > 0) { // y moving
        if(line.x < x){
          minX = (minX - line.x) < 0 ? line.x + line.width : minX;
        } else {
          maxX = (maxX - line.x) > 0 ? line.x : maxX;
        }
      }
    }
    // console.log(minX, minY, maxX, maxY);
    return {minX, minY, maxX, maxY};
  }
}

export default AboutMainCanvas;