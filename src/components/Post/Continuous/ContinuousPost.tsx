import React, { FunctionComponent, useEffect } from 'react';
import styled from '@emotion/styled';
import { PostFrontmatterType } from 'types/PostItem.types';

type ContinuousPostProps = {
  edges: Array<Array<ItemType>>
}
type ItemType = {
  node: {
    id: string,
    html: string,
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
  position: relative;
  margin-bottom: 80px;
  width: 100%;
  min-height: 200px;
  height: 500px;
  background-color: #ccc;
  border: 8px solid #eee;
  border-radius: 48px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.08);

  &:hover {
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.08);
  }

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
const PostItemTitle = styled.div`
  position: absolute;
  bottom: 24px;
  right: 24px;
  color: #fff;
  font-size: 36px;
  font-weight: 800;
`;

const ContinuousPost: FunctionComponent<ContinuousPostProps> = function(edges : ContinuousPostProps){
  
  function createColumn() {
    console.dir(edges.edges);
    const columnLength = 3;
    const itemList : Array<Array<ItemType>> = edges.edges;

    const columns = [];
    for(let i = 0; i < columnLength; i++) {
      columns.push(
        <PostColumn key={i}>
          {createItem(itemList, i, columnLength)}
        </PostColumn>
      );
    }

    return columns;
  }

  function createItem(itemList: Array<Array<ItemType>> , i : number, columnLength : number) {
    const items = [];
    const backgroundColors = ['#fac901','#225095', '#dd0100'];
    if(itemList) {
      for(let j = 0; j < itemList.length; j++) {
        if(j % columnLength == i) {
          const item = itemList[j][1] as ItemType;
          const fromtmatter = item.node.frontmatter;
          const backgroundColor = backgroundColors[Math.round(Math.random() * backgroundColors.length)];
          items.push(
            <PostItem key={`item-${fromtmatter.title}-${i}`} className="drag-item" style={{backgroundColor: backgroundColor}}>
              <PostItemTitle>
                {fromtmatter.title}
              </PostItemTitle>
            </PostItem>
          );
        }
      }
    }
    return items;
  }
  
  useEffect(() => {
    new ScrollList();
  }, [])


  return <ContinuousPostWrap>
      <PostContainer className="scroll-con">
        { createColumn() }
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