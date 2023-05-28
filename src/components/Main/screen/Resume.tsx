import { FunctionComponent, ReactElement, useEffect, useState } from "react";
import styled from "@emotion/styled";

const ResumeCon = styled.section`
  margin-top: 400px;
`;

const ResumeTitleCon = styled.div`
  margin-bottom: 69px;
`;

const ResumeTitle = styled.h3`
  font-size: 46px;
  font-weight: normal;
`;

const ResumeContent = styled.div`
`;

const InformationCon = styled.div`
  display: flex;
  gap: 92px;
`;
const InformationImageCon = styled.div`
  width: 240px;
  height: 240px;
`;
const InformationImage = styled.div`
  width: 100%;
  height: 100%;
  background-color: #999;
`;

const ResumeArticleCon = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 36px;
  margin-top: 76px;
`;
const ResumeArticle = styled.li``;
const ResumeArticleTitleCon = styled.div``;
const ResumeArticleTitle = styled.h4`
  font-size: 36px;
  font-weight: normal;
`;

const ResumeItemList = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  gap: 36px;
  margin-top: 36px;
`;
const ResumeItem = styled.li``;
const ResumeItemTitle = styled.div``;
const ResumeItemDescList = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  gap: 9px;
  margin-top: 18px;
`;
const ResumeItemDescItem = styled.li`
  &:before {
    display: inline-block;
    padding: 0 8px;
    content: '-';
  }
`;

const resumeList = [
  {
    title: 'Work Experience',
    dataList: [
      { title: 'SEMES 제조기술팀', descList: ['ㄴㅁㅇㄹ', 'ㅁㄴㅇㄹ'], date: '' }
    ],
  },
  {
    title: 'Education Experience',
    dataList: [

    ],
  },
  {
    title: 'Expertise',
    dataList: [

    ],
  },
  {
    title: 'Qualification',
    dataList: [

    ],
  },
]

function createResumeArticle() {
  const dom: Array<ReactElement> = [];
  for(const item of resumeList) {
    dom.push(
      <ResumeArticle>
        <ResumeArticleTitleCon>
          <ResumeArticleTitle>{item.title}</ResumeArticleTitle>
        </ResumeArticleTitleCon>
        <ResumeItemList>
          {item.dataList.map(innerData => <ResumeItem>
            <ResumeItemTitle>{innerData.title}</ResumeItemTitle>
            <ResumeItemDescList>
              {innerData.descList.map(descData => <ResumeItemDescItem>{descData}</ResumeItemDescItem>)}
            </ResumeItemDescList>
          </ResumeItem>)}
        </ResumeItemList>
      </ResumeArticle>
    );
  }

  return dom;
};

const Resume : FunctionComponent = function () {

  useEffect(() => {
    createResumeArticle();
  }, []);

  return (
    <ResumeCon>
      <ResumeTitleCon>
        <ResumeTitle>RESUME</ResumeTitle>
      </ResumeTitleCon>
      <ResumeContent>
        <InformationCon>
          <InformationImageCon>
            <InformationImage></InformationImage>
          </InformationImageCon>
          <ResumeArticle>
            <ResumeArticleTitleCon>
              <ResumeArticleTitle>Contact</ResumeArticleTitle>
              <ResumeItemList>
                <ResumeItem>e-mail : sprout071900@gmail.com</ResumeItem>
                <ResumeItem>github : www.naver.com</ResumeItem>
                <ResumeItem>mobile : 010-4458-9625</ResumeItem>
              </ResumeItemList>
            </ResumeArticleTitleCon>
          </ResumeArticle>
        </InformationCon>
        <ResumeArticleCon>
          {createResumeArticle()}
        </ResumeArticleCon>
      </ResumeContent>
    </ResumeCon>
  );

};

export default Resume;