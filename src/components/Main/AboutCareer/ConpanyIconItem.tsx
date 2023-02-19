import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

type CompanyIconItemProps = {
  name: string,
  startDate: string,
  endDate: string,
  icon: string,
}

const CompanyIconItemtWrap = styled.div`
  position: relative;
  display: inline-block;
`;

const CompanyTooltipCon = styled.div`
  position: absolute;
  top: 100%;
  right: 0%;
  padding: 12px;
  background-color: #666;
  border-radius: 5px;
  opacity: 0;
  transition-duration: 1s;

  &:after {
    position: absolute;
    top: 0;
    right: 12px;
    width: 0;
    height: 0;
    border-bottom: 7px solid #666;
    border-top: 5px solid transparent;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    transform: translateX(-50%) translateY(-100%);
    content: '';
  }
`;
const CompanyIconCon = styled.div`
  padding: 8px;
  &:hover + ${CompanyTooltipCon} {
    opacity: 1;
  }
`;
const TooltipTitle = styled.div`
  color: #fff;
  font-size: 12px;
  word-break: keep-all;
  white-space: pre;
`;
const TooltipPeriod = styled.div`
  margin-top: 4px;
  color: #fff;
  font-size: 10px;
  word-break: keep-all;
  white-space: pre;
`;

const CompanyIconItem: FunctionComponent<CompanyIconItemProps> = function({
  name, startDate, endDate, icon
}) {
  return (
    <CompanyIconItemtWrap>
      <CompanyIconCon>
        <img src={`../../../../image/${icon}`} alt={`${icon} image`} width={24} height={24} />
      </CompanyIconCon>
      <CompanyTooltipCon>
        <TooltipTitle>
          {name}
        </TooltipTitle>
        <TooltipPeriod>
          {startDate} ~ {endDate}
        </TooltipPeriod>
      </CompanyTooltipCon>
    </CompanyIconItemtWrap>
  );
}

export default CompanyIconItem;