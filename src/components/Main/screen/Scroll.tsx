import { FunctionComponent, useEffect, useRef } from "react";
import styled from "@emotion/styled";

const ScrollCon = styled.section`
  position: relative;
`
const ScrollContent = styled.article`
  display: flex;
  flex-flow: column;
  align-items: center;
`;
const FadeBoxCon = styled.div`
  width: 50vw;
  margin-top: 360px;
  transform: translateY(0px);
`;
const FadeCanvas = styled.canvas`
  position: absolute;
  width: 100%;
  height: 900px;
`;
const FadeItem = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 20px;
  background-color: #fdfdfd;
  box-shadow: inset 0px 5px 10px rgba(0, 0, 0, 0.25);
  transition-duration: 1s;
  &:hover {
    background-color: rgba(0, 0, 0, 0);
  }
  &::after {
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 20px;
    transform: translateY(100%);
    background-color: #fff;
    content: '';
  }
  &:last-child {
    margin-bottom: 0;
    &:after {
      content: none;
    }
  }
`;
const ScrollBox = styled.div`
  width: 100vw;
`;
const ScrollBoxItem = styled.img`
  position: absolute;
  width: 200px;
  transition-duration: 1s;
`;

const Scroll : FunctionComponent = function () {

  const scrollItemList = [...Array(4)].map(() => useRef(null));
  const fadeItemHeightList = [300, 200, 120, 80, 60, 40];
  const fadeCanvas = useRef(null);
  let canvas : HTMLCanvasElement | null = null;
  let ctx : CanvasRenderingContext2D | null = null;
  let canvasWidth = 0;
  let canvasHeight = 0;
  const imageCnt = 397;
  const canvasImageList : Array<HTMLImageElement> = [];
  let canvasImageSequence = 0;
  let loopIndex = 0;

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observe) => {
      entries.forEach(entry => {
        const target = entry.target as HTMLElement;
        
        if(entry.isIntersecting) {
        } else {
          target.style.transform = 'translateY(0)';
        }

      });
    });

    for(const scrollItem of scrollItemList) {
      if(scrollItem.current) {
        observer.observe(scrollItem.current);
      }
    }

    if(fadeCanvas.current) {
      canvas = fadeCanvas.current as HTMLCanvasElement;
      ctx = canvas.getContext('2d');
      initCanvas();
    }

    loadImages();
  }, []);

  function initCanvas() {
    if(canvas) {
      canvasWidth = canvas.clientWidth;
      canvasHeight = canvas.clientHeight;
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
    }
    if(ctx) {
      window.requestAnimationFrame(canvasLoop);
    }
  }

  function canvasLoop() {
    window.requestAnimationFrame(canvasLoop);
    ctx!.clearRect(0, 0, canvasWidth, canvasHeight);
    // 중간에 위치 하게 계산하기
    ctx!.drawImage(canvasImageList[canvasImageSequence], 0, 0, canvasWidth,  canvasHeight);
    // if(!(loopIndex % 2)) {
      //   canvasImageSequence++;
      // }
    canvasImageSequence++;
    if(canvasImageSequence == imageCnt) {
      canvasImageSequence = 0;
    }
    loopIndex++;
  }

  function loadImages() {
    const prefix = `../../../../video/fadebox/Untitled-4`;
    
    let image = null;
    for(let i = 1; i <= imageCnt; i++ ) {
      image = new Image;
      image.src = prefix + (String(i).padStart(4, '0')) + '.jpg';
      canvasImageList.push(image);
    }
  }

  return (
    <ScrollCon>
      <ScrollContent>
        <FadeBoxCon>
          <FadeCanvas ref={fadeCanvas}/>
          {fadeItemHeightList.map(height => <FadeItem key={height} style={{height: height}}/>)}
        </FadeBoxCon>
        <ScrollBox>
          <ScrollBoxItem 
            ref={scrollItemList[0]} 
            src="../../../../image/bicycle.svg" 
          />
          <ScrollBoxItem 
            ref={scrollItemList[1]} 
            src="../../../../image/sweetpotato.svg" 
          />
          <ScrollBoxItem 
            ref={scrollItemList[2]} 
            src="../../../../image/camera.svg" 
          />
        </ScrollBox>
      </ScrollContent>
    </ScrollCon>
  );

};

export default Scroll;