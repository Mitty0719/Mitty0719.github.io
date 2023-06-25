import React, { FunctionComponent, useEffect } from 'react';
import styled from '@emotion/styled';
import { PostFrontmatterType } from 'types/PostItem.types';

type ContinuousPostProps = {
  node: {
    id: string,
    html: string,
    title: string,
    fields: {
      slug: string
    }
    frontmatter: PostFrontmatterType
  }
}

const ContinuousPostWrap = styled.div`
  margin: 80px 0;
  overflow: hidden;
`;
const PostContainer = styled.div`
  display: flex;
  width: 100%;
  height: 2400px;
  gap: 80px;
`;
const PostColumn = styled.div`
  flex: 1;
  height: 100%;
`;

const PostItem = styled.div`
  width: 100%;
  min-height: 200px;
  height: 500px;
  border: 1px solid #ccc;
  border-radius: 48px;
  margin-bottom: 80px;
  cursor: pointer;

  &.hType1 {
    height: 300px;
  }
  &.hType2 {
    height: 400px;
  }
  &.hType3 {
    height: 500px;
  }
`;

const ContinuousPost: FunctionComponent<ContinuousPostProps> = function({
  node: {
    id, html, title,
    fields: { slug },
    frontmatter
  }
}){

  useEffect(() => {
    new ScrollList();
    console.log(title);
    
  }, [])
  return <ContinuousPostWrap>
      <PostContainer className="scroll-con">
        <PostColumn>
          <PostItem></PostItem>
          <PostItem></PostItem>
          <PostItem></PostItem>
        </PostColumn>
        <PostColumn>
          <PostItem className="hType3"></PostItem>
          <PostItem className="hType2"></PostItem>
          <PostItem className="hType3"></PostItem>
        </PostColumn>
        <PostColumn>
          <PostItem className="hType1"></PostItem>
          <PostItem className="hType2"></PostItem>
          <PostItem className="hType3"></PostItem>
        </PostColumn>
      </PostContainer>
  </ContinuousPostWrap>
}

export default ContinuousPost;

class ScrollList {

  target : HTMLDivElement | null;
  cols : Array<ScrollColumn | null>;
  originX : number;
  originY : number;
  targetX : number;
  targetY : number;
  centerX : number;
  centerY : number;
  timer : any | null;


  constructor() {
    this.target = document.querySelector(".scroll-con");
    this.cols = [];
    this.originX = this.target!.clientLeft || 0;
    this.originY = this.target!.clientTop || 0;
    this.targetX = 0;
    this.targetY = 0;
    this.centerX = window.innerWidth / 2;
    this.centerY = window.innerHeight / 2;
    this.timer = null;

    window.addEventListener("mousemove", this.moveMouse.bind(this));
    window.addEventListener("scroll", this.scrollWindow.bind(this));

    for (const col of this.target!.children) {
      this.cols.push(new ScrollColumn(col as HTMLDivElement));
    }

    setInterval(() => this.loop.call(this), 10);
  }

  loop() {
    this.moveItem();

    for (const col of this.cols) {
      col!.loop();
    }
  }

  moveItem() {
    // const s = -0.0008;
    // this.originX += (this.targetX - this.originX) * s;
    // this.originY += (this.targetY - this.originY) * s;

    const s = -0.08;
    this.originX = this.targetX * s;
    this.originY = this.targetY * s;
    this.target!.style.transform = `translate(${this.originX}px, ${this.originY}px) scale(0.8)`;
  }

  moveMouse(e : MouseEvent) {
    this.targetX = e.clientX - this.centerX;
    this.targetY = e.clientY - this.centerY;
  }
  scrollWindow() {
    if (this.timer !== null) {
      clearTimeout(this.timer);
    }
    this.timer = setTimeout(() => {
      for (const col of this.cols) {
        col!.scrollWindow(scrollY);
      }
    }, 150);
  }
}

class ScrollColumn {
  target : HTMLDivElement | null;
  originY : number;
  prevTargetY : number;
  targetY : number;
  speed : number;

  constructor(item : HTMLDivElement) {
    this.target = item;
    this.originY = this.target!.clientTop || 0;
    this.prevTargetY = 0;
    this.targetY = 0;
    this.speed = (Math.random() * 3) / 100 + 0.005;
    // this.speed = 0.05;
  }

  loop() {
    this.originY += (this.targetY - this.originY) * this.speed;
    this.target!.style.transform = `translateY(${this.originY / 2}px)`;
  }

  scrollWindow(scrollY : number) {
    if (this.prevTargetY != scrollY) {
      this.targetY = scrollY;
      this.prevTargetY = scrollY;
    }
  }
}