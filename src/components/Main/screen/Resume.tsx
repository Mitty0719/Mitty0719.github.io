import { FunctionComponent, ReactElement, useEffect, useState } from "react";
import styled from "@emotion/styled";

const ResumeCon = styled.section`
  margin-top: 400px;
  margin-bottom: 200px;
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
  position: relative;
  width: 240px;
  height: 240px;
  overflow: hidden;
`;
const InformationImage = styled.img`
  position: absolute;
  left: 50%;
  height: 100%;
  background-color: #999;
  transform: translateX(-50%);
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
  gap: 18px;
  margin-top: 18px;
  padding-left: 8px;
`;
const ResumeItem = styled.li``;
const ResumeItemTitle = styled.div`
  font-weight: bold;
`;
const ResumeItemDate = styled.span`
  margin-left: 8px;
  font-size: 12px;
`;
const ResumeItemDescList = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  gap: 9px;
  margin-top: 12px;
`;
const ResumeItemDescItem = styled.li`
  &:before {
    display: inline-block;
    padding: 0 4px;
    content: '-';
  }
`;

const resumeList = [
  {
    title: 'Work Experience',
    dataList: [
      { title: 'SEMES - 제조기술팀', descList: ['디스플레이 제작 설비 검수'], date: '2017.11 ~ 2018.04' },
      { title: '미래정보기술 - 개발팀', descList: ['MES 프로그램 개발'], date: '2021.04 ~ 2021.10' },
      { title: '레이랩 - UX/UI개발팀', descList: ['ERP, HR 시스템 퍼블리싱'], date: '2022.07 ~ 재직중' },
    ],
  },
  {
    title: 'Education Experience',
    dataList: [
      { title: '부산기계공업고등학교', descList: ['메카트로닉스과 졸업'],  date: '2014.03 ~ 2017.02'},
      { title: 'SBS아카데이컴퓨터아트학원', descList: ['웹디자인과정 수료'],  date: '2018.04 ~ 2018.10'},
      { title: '부산IT전문학교', descList: ['빅데이터기반데이터시각화과정 수료'],  date: '2020.10 ~ 2021.04'},
    ],
  },
  {
    title: 'Project Experience',
    dataList: [
      { title: 'Initial Cleaner 제작 검수', descList: [
        `설비 제조업체와 협력해 제조과정에서 발생한 오차 확인 및 가동 테스트`
      ],  date: '2017.12 ~ 2018.04'},
      { title: '필름생산업체 MES 프로그램 개발', descList: [
        `필름생산 공정에서 필요한 프로그램을 개발, 사용자와 직접 소통하며 프로그램 개선`,
        `프로젝트 진행에 필요한 문서 관리(화면설계서, DB설계서, 프로그램 정의서, 메뉴얼 등)`,
        `C#, DevExpress, MSSQL`
      ],  date: '2021.06 ~ 2021.10'},
      { title: '전자선조사업체 MES 프로그램 개발', descList: [
        `전자선 조사 과정에서 필요한 프로그램을 개발, 현장의 설비 진행 과정을 고려해 프로그램 개선 및 변경`,
        `C#, DevExpress, MSSQL`
      ],  date: '2021.08 ~ 2021.10'},
      { title: 'Posco 안전보건시스템 퍼블리싱', descList: [
        `안전보건시스템 화면 퍼블리싱`
      ],  date: '2022.07 ~ 진행중'},
      { title: 'Posco E&C HR시스템 퍼블리싱', descList: [
        `포스크건설 HR시스템 화면 퍼블리싱`
      ],  date: '2023.01 ~ 진행중'},
    ],
  },
  {
    title: 'Expertise',
    dataList: [
      { title: 'HTML/CSS', descList: null, date: '●●●●●●●●◦◦'},
      { title: 'Javascript', descList: null, date: '●●●●●●◦◦◦◦'},
      { title: 'React', descList: null, date: '●●●●◦◦◦◦◦◦'},
      { title: 'Dart', descList: null, date: '●●●●●◦◦◦◦◦'},
      { title: 'Flutter', descList: null, date: '●●●●◦◦◦◦◦◦'},
      { title: 'SQL', descList: null, date: '●●◦◦◦◦◦◦◦◦'},
    ],
  },
  {
    title: 'Qualification',
    dataList: [
      { title : '웹디자인기능사 (한국산업인력공단)', descList: null, date: '20218.09'},
      { title : '컴퓨터그래픽스운용기능사 (한국산업인력공단)', descList: null, date: '20218.09'}
    ],
  },
]

function createResumeArticle() {
  const dom: Array<ReactElement> = [];
  for(const item of resumeList) {
    dom.push(
      <ResumeArticle key={item.title}>
        <ResumeArticleTitleCon>
          <ResumeArticleTitle>{item.title}</ResumeArticleTitle>
        </ResumeArticleTitleCon>
        <ResumeItemList>
          {item.dataList.map(innerData => <ResumeItem key={innerData.title}>
            <ResumeItemTitle>{innerData.title} <ResumeItemDate>{innerData.date}</ResumeItemDate></ResumeItemTitle>
            {innerData.descList && <ResumeItemDescList>
              { innerData.descList.map(descData => <ResumeItemDescItem key={descData}>{descData}</ResumeItemDescItem>)}
            </ResumeItemDescList>}
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
            <InformationImage src="https://media.tenor.com/NJI8SeEjhjUAAAAC/shokupanman-laugh.gif"></InformationImage>
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