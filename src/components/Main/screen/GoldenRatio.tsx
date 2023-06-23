import { FunctionComponent, useEffect, useRef } from "react";
import styled from "@emotion/styled";
import ScrollEvent from '../../../../static/js/scrollEvent';

const GoldenRatioCon = styled.section`
  position: relative;
  width: 100vw;
  height: 500vh;
  &section {
    padding-top: 500px;
    padding-bottom: 500px;
  }
`
const GoldenRatioCanvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  transform: scale(0.8);
  transition-duration: .2s;
  &.sticky-elem {
    position: fixed;
  }
  &.hide-elem {
    opacity: 0;
  }
`;
const ScrollTextCon = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  &.sticky-elem {
    position: fixed;
  }
`;
const ScrollText = styled.span`
  position: absolute;
  display: inline-block;
  width: fit-content;
  min-width: 120px;
  font-size: 144px;
  font-weight: 800;
  white-space: pre;
  &.left {
    left: 0;
    transform: translate(-120%);
  }
  &.right {
    right: 0;
    transform: translate(120%);
  }
`;
const GOLDEN_RATIO = 1.618;

const GoldenRatio : FunctionComponent = function () {

  const refContainer = useRef(null);
  const refScrollTextContainer = useRef(null);
  const refCanvas = useRef(null);
  let container : HTMLDivElement | null = null;
  let scrollTextContainer : HTMLDivElement | null = null;
  let canvas : HTMLCanvasElement | null = null;
  let eventObj : any;

  useEffect(() => {
    const options = {
      threshold: 0.75,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          canvasApp.isShowing = true;
        } else {
        }
      });
    }, options);

    if(refContainer.current) {
      container = refContainer.current as HTMLDivElement;
      container?.classList.add('scroll-section');
      eventObj = new ScrollEvent();
    }
    if(refScrollTextContainer.current) {
      scrollTextContainer = refScrollTextContainer.current as HTMLDivElement;
      scrollTextContainer.id = 'scroll-text-con';
      eventObj.addScrollClass({id: 'scroll-text-con', classList: ['sticky-elem'], startRatio: 0, endRatio: 1});
      
      const children = scrollTextContainer.children;
      let itemIndex = 1;
      for(const elem of children) {
        const textItem = elem as HTMLDivElement;
        const id = `text-item-${itemIndex}`;
        const startRatio = 0.1 * itemIndex + 0.2;
        const endRatio = startRatio + 0.3;

        textItem.style.top = `${Math.random() * window.innerHeight / 3 + window.innerHeight / 5}px`;
        textItem.id = id;
        if(textItem.classList.contains('left')) {
          eventObj.addScrollEvent({id: id, style: 'left', startRatio: startRatio, endRatio: endRatio, startValue: 0, endValue: 110, suffix: '%'});
          eventObj.addScrollEventTransform({id: id, transformStyle: [
            {style: 'translate', startValue: -120, endValue: 0, suffix: '%' },
          ], startRatio: startRatio, endRatio: endRatio});
        } else {
          eventObj.addScrollEvent({id: id, style: 'right', startRatio: startRatio, endRatio: endRatio, startValue: 0, endValue: 110, suffix: '%'});
          eventObj.addScrollEventTransform({id: id, transformStyle: [
            {style: 'translate', startValue: 120, endValue: 0, suffix: '%' },
          ], startRatio: startRatio, endRatio: endRatio});
        }
        itemIndex++;
      }

    }
    if(refCanvas.current) {
      canvas = refCanvas.current as HTMLCanvasElement;
      canvas.id = 'goldenRatio-canvas';
      eventObj.addScrollClass({id: 'goldenRatio-canvas', classList: ['sticky-elem'], startRatio: 0, endRatio: 1});
      eventObj.addScrollClass({id: 'goldenRatio-canvas', classList: ['hide-elem'], startRatio: 0.9, endRatio: 2});
      
      observer.observe(canvas);
    }

    const canvasApp = new GoldenRatioCanvasApp(canvas!, loadImages());

  }, []);

  function loadImages() {
    const images = [];
    const prefix = `../../../../video/goldenRatio/image`;
    const imageCnt = 499;
    
    let image = null;
    for(let i = 1; i <= imageCnt; i++ ) {
      image = new Image;
      image.src = prefix + (String(i).padStart(4, '0')) + '.jpg';
      images.push(image);
    }

    return {images, imageCnt};
  }

  return (
    <GoldenRatioCon ref={refContainer}>
      <GoldenRatioCanvas ref={refCanvas}/>
      <ScrollTextCon ref={refScrollTextContainer}>
        <ScrollText className="left" style={{color: '#333333'}}>NERD</ScrollText>
        <ScrollText className="left" style={{color: '#fac901'}}>Constant</ScrollText>
        <ScrollText className="left" style={{color: '#dd0100'}}>Fassional</ScrollText>
        <ScrollText className="left" style={{color: '#225095'}}>Classical</ScrollText>
        <ScrollText className="left" style={{color: '#fac901'}}>INFJ</ScrollText>
      </ScrollTextCon>
    </GoldenRatioCon>
  );

};

class GoldenRatioCanvasApp {
  canvas : HTMLCanvasElement;
  ctx : CanvasRenderingContext2D | null;
  stageWidth : number;
  stageHeight : number;
  imageList : { images: Array<HTMLImageElement>, imageCnt: number };
  imageSequence: number;
  goldenRatioWidth : number;
  goldenRatioHeight : number;
  goldenRatioItemList : Array<Item>;
  isShowing : boolean;

  constructor (canvas : HTMLCanvasElement, imageList: {images: Array<HTMLImageElement>, imageCnt: number}) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.stageWidth = 0;
    this.stageHeight = 0;
    this.imageList = imageList;
    this.imageSequence = 0;
    this.goldenRatioWidth = 0;
    this.goldenRatioHeight = 0;
    this.goldenRatioItemList = [];
    this.isShowing = false;
    
    this.resize();
    this.createGoldenRatioItem();

    window.requestAnimationFrame(this.canvasLoop.bind(this));
    window.addEventListener('resize', this.resize.bind(this));
  }

  resize () {
    this.stageWidth = window.innerWidth;
    this.stageHeight = window.innerHeight;

    this.canvas.width = this.stageWidth;
    this.canvas.height = this.stageHeight;

    for(const item of this.goldenRatioItemList) {
      item.resize(this.stageWidth, this.stageHeight, this.goldenRatioWidth, this.goldenRatioHeight);
    }
  }

  canvasLoop() {
    window.requestAnimationFrame(this.canvasLoop.bind(this));
    this.ctx!.clearRect(0, 0, this.stageWidth, this.stageHeight);

    for(const item of this.goldenRatioItemList) {
      item.draw(this.ctx!, this.imageList.images[this.imageSequence], this.isShowing);
    }
    this.imageSequence++;
    if(this.imageSequence == this.imageList.imageCnt) {
      this.imageSequence = 0;
    }
  }

  createGoldenRatioItem() {
    const goldenRatioItemCnt = 8;

    let width = 600;
    let height = width * GOLDEN_RATIO;
    let prevItem : Item | null = null;

    this.goldenRatioWidth = width;
    this.goldenRatioHeight = height;

    for(let i = 0; i <= goldenRatioItemCnt; i++) {
      const item : Item = new Item(width, i, prevItem, this.stageWidth, this.stageHeight, this.goldenRatioWidth, this.goldenRatioHeight);
      
      this.goldenRatioItemList.push(item);
      
      width = height - width;
      height = width * GOLDEN_RATIO;

      prevItem = item;
    }
  }
}

class Item {
  targetX: number;
  targetY: number;
  minX: number;
  minY: number;
  width: number;
  xGap: number;
  yGap: number;
  goldenRatioX: number;
  goldenRatioY: number;
  moveX: number;
  moveY: number;
  opacity: number;
  opacitySpeed: number;

  color: string;

  constructor(width: number, index: number, prevItem: Item | null, stageWidth : number, stageHeight : number, goldenRatioWidth : number, goldenRatioHeight : number) {
    this.targetX = stageWidth / 2 - goldenRatioWidth / 2;
    this.targetY = stageHeight / 2 - goldenRatioHeight / 2;
    this.minX = stageWidth / 2 - goldenRatioWidth / 2;
    this.minY = stageHeight / 2 - goldenRatioHeight / 2 - 1200;
    this.width = width;
    this.xGap = 0;
    this.yGap = 0;
    this.goldenRatioX = 0;
    this.goldenRatioY = 0;
    this.color = 'black';
    this.moveX = 0;
    this.moveY = (Math.random() * 10 + 20) / -500;
    this.opacity = 0;
    this.opacitySpeed = 0.01;

    switch(index) {
      case 0 : this.color = 'red'; break;
      case 1 : this.color = 'green'; break;
      case 2 : this.color = 'blue'; break;
      case 3 : this.color = 'gray'; break;
      case 4 : this.color = 'yellow'; break;
      case 5 : this.color = 'skyblue'; break;
      case 6 : this.color = 'yellowgreen'; break;
      case 7 : this.color = 'green'; break;
      case 8 : this.color = 'red'; break;
    }

    this.calcIndexToCoordinate(index, prevItem);
  }

  resize(stageWidth : number, stageHeight : number, goldenRatioWidth : number, goldenRatioHeight : number) {
    this.targetX = stageWidth / 2 - goldenRatioWidth / 2;
    this.targetY = stageHeight / 2 - goldenRatioHeight / 2;
    this.minX = stageWidth / 2 - goldenRatioWidth / 2;
    this.minY = stageHeight / 2 - goldenRatioHeight / 2 - 1200;
  }

  draw(ctx : CanvasRenderingContext2D, image : CanvasImageSource, isShowing : boolean) {
    if(isShowing) {
      if(Math.abs(this.targetX - this.minX) > Math.abs(this.moveX)) {
        this.minX += this.moveX;
      }
      if(Math.abs(this.targetY - this.minY) > Math.abs(this.moveY)) {
        this.minY += (this.minY - this.targetY) * this.moveY;
      }
      this.opacity += this.opacitySpeed;
    }

    // ctx.fillRect(this.minX, this.minY, this.width, this.width);
    ctx.globalAlpha = this.opacity;
    ctx.fillStyle = this.color;
    // ctx.fillRect(this.minX + this.goldenRatioX, this.minY + this.goldenRatioY, this.width, this.width);
    ctx.drawImage(image, this.goldenRatioX, this.goldenRatioY, this.width, this.width , this.minX + this.goldenRatioX, this.minY + this.goldenRatioY, this.width, this.width);
  }

  calcIndexToCoordinate(index: number, prevItem : Item | null) {
    const nextItemWidth = Math.round((this.width * GOLDEN_RATIO) - this.width);
    const prevGolenRatioX = prevItem?.goldenRatioX || 0;
    const prevGolenRatioY = prevItem?.goldenRatioY || 0;
    const prevWidth = prevItem?.width || 0;
    switch(index % 4) {
      case 0: 
        if(index) {
          this.goldenRatioX = prevGolenRatioX + prevWidth;
          this.goldenRatioY = prevGolenRatioY;
        }
        break;
      case 1: 
        this.goldenRatioX = prevGolenRatioX + nextItemWidth;
        this.goldenRatioY = prevGolenRatioY + prevWidth;
        break;
      case 2:
        this.goldenRatioX = prevGolenRatioX - prevWidth + nextItemWidth;
        this.goldenRatioY = prevGolenRatioY + nextItemWidth;
        break;
      case 3:
        this.goldenRatioX = prevGolenRatioX;
        this.goldenRatioY = prevGolenRatioY - this.width;
        break;
    }

  }
}

export default GoldenRatio;