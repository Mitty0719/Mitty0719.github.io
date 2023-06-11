import { FunctionComponent, useEffect, useRef } from "react";
import styled from "@emotion/styled";

const GoldenRatioCon = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;
  margin: 500px 0;
`
const GoldenRatioCanvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
const GOLDEN_RATIO = 1.618;

const GoldenRatio : FunctionComponent = function () {

  const refContainer = useRef(null);
  const refCanvas = useRef(null);
  let container : HTMLDivElement | null = null;
  let canvas : HTMLCanvasElement | null = null;
  let ctx : CanvasRenderingContext2D | null = null;
  let stageWidth = 0;
  let stageHeight = 0;
  const imageCnt = 499;
  const canvasImageList : Array<HTMLImageElement> = [];
  let canvasImageSequence = 0;
  let goldenRatioWidth = 0;
  let goldenRatioHeight = 0;

  let goldenRatioItemList : Array<Item> = [];

  useEffect(() => {
    if(refContainer.current) {
      container = refContainer.current as HTMLDivElement;
      stageWidth = container.clientWidth;
      stageHeight = container.clientHeight;
    }
    if(refCanvas.current) {
      canvas = refCanvas.current as HTMLCanvasElement;
      ctx = canvas.getContext('2d');

      canvas.width = stageWidth;
      canvas.height = stageHeight;

      window.requestAnimationFrame(canvasLoop);
    }

    loadImages();
    createGoldenRatioItem();
  }, []);


  function canvasLoop() {
    window.requestAnimationFrame(canvasLoop);
    ctx!.clearRect(0, 0, stageWidth, stageHeight);

    for(const item of goldenRatioItemList) {
      item.draw(ctx!, canvasImageList[canvasImageSequence]);
    }
    canvasImageSequence++;
    if(canvasImageSequence == imageCnt) {
      canvasImageSequence = 0;
    }
  }

  function loadImages() {
    const prefix = `../../../../video/goldenRatio/image`;
    
    let image = null;
    for(let i = 1; i <= imageCnt; i++ ) {
      image = new Image;
      image.src = prefix + (String(i).padStart(4, '0')) + '.jpg';
      canvasImageList.push(image);
    }
  }

  function createGoldenRatioItem() {
    const goldenRatioItemCnt = 8;

    let width = 600;
    let height = width * GOLDEN_RATIO;
    let prevItem : Item | null = null;

    goldenRatioWidth = width;
    goldenRatioHeight = height;

    for(let i = 0; i <= goldenRatioItemCnt; i++) {
      const item : Item = new Item(width, i, prevItem, stageWidth, stageHeight, goldenRatioWidth, goldenRatioHeight);
      
      goldenRatioItemList.push(item);
      
      width = height - width;
      height = width * GOLDEN_RATIO;

      prevItem = item;
    }
  }

  return (
    <GoldenRatioCon ref={refContainer}>
      <GoldenRatioCanvas ref={refCanvas}/>
    </GoldenRatioCon>
  );

};

class Item {
  originX: number;
  originY: number;
  minX: number;
  minY: number;
  maxX: number;
  maxY: number;
  width: number;
  xGap: number;
  yGap: number;
  goldenRatioX: number;
  goldenRatioY: number;

  color: string;

  constructor(width: number, index: number, prevItem: Item | null, stageWidth : number, stageHeight : number, goldenRatioWidth : number, goldenRatioHeight : number) {
    this.originX = 0;
    this.originY = 0;
    this.minX = stageWidth / 2 - goldenRatioWidth / 2;
    this.minY = stageHeight / 2 - goldenRatioHeight / 2;
    this.maxX = this.minX + width;
    this.maxY = this.minY + width;
    this.width = width;
    this.xGap = 0;
    this.yGap = 0;
    this.goldenRatioX = 0;
    this.goldenRatioY = 0;
    this.color = 'black';
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

  draw(ctx : CanvasRenderingContext2D, image : CanvasImageSource) {
    // ctx.fillRect(this.minX, this.minY, this.width, this.width);
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