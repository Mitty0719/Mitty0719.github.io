import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

type IntroTextProps = {
  title: string,
  content: string | Array<string>,
}

const IntroTextWrap = styled.div`

`;

const IntroTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 24px;
`
const IntroTextCon = styled.div`
  font-size: 16px;
  line-height: 42px;
`

const IntroTextArrayCon = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  gap: 21px;
`;

const IntroTextArrayItem = styled.li`
  font-size: 14px;
`;

const IntroText: FunctionComponent<IntroTextProps> = function({ title, content }) {
  const isString = typeof content == 'string';

  return (
    <IntroTextWrap>
      <IntroTitle>
        {title}
      </IntroTitle>
      {
        isString
        ? <IntroTextCon>
            {content}
        </IntroTextCon>
        : <IntroTextArrayCon>
          {
            content.map( (data, index) => <IntroTextArrayItem key={data}>
              {data}
            </IntroTextArrayItem>
            )
          }
        </IntroTextArrayCon>
      }
    </IntroTextWrap>
  );
}

export default IntroText;