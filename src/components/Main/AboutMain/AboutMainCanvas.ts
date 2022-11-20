import TextGroup from './TextGroup';

class AboutMainCanvas{
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D | null;
  private textGroup : TextGroup;
  private parentNode: HTMLDivElement;

  constructor(parentNode: HTMLDivElement){
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.textGroup = new TextGroup();

    this.parentNode = parentNode;
    if(this.parentNode){
      this.parentNode.appendChild(this.canvas);
      this.resize();
    }

    window.requestAnimationFrame(this.draw.bind(this));
  }
  resize(){
    this.canvas.width = this.parentNode.clientWidth;
    this.canvas.height = this.parentNode.clientHeight;
  }

  draw(){
    window.requestAnimationFrame(this.draw.bind(this));
    if(this.ctx){
      this.textGroup.draw(this.ctx);
    }
  }
}

export default AboutMainCanvas;