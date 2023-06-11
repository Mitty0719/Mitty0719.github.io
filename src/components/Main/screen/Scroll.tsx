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

  }, []);

  return (
    <ScrollCon>
      <ScrollContent>
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