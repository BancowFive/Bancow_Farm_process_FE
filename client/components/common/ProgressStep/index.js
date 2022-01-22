import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../styles/index.js'

const Container = styled.div`
  min-width: 312px;
  height: 31px;
  margin: 0 24px;
  border: 1px solid red;
`
//글씨, 배경색 등 컬러만 변하면 되니까 props로 판단하게 하기
//active progress line도 props에 따라 다른 width 가지게 하기
const Bars = styled.div`
  position: relative;
  display: fixed;
  flex-grow: 1;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  background-color: black;
  margin-right: 7px;
  min-width: 305px;
  height: 14px;
`

const Step = styled.div`
  position: absolute;
  top: 0;
`
const ProgressDot = styled.div`
  box-sizing: border-box;
  width: 14px;
  height: 14px;
  border: 2px solid ${theme.colors.placeholder};
  border-radius: 50%;
  /* background-color: ${theme.colors.yellow}; */
  background-color: white;
`

const Progress = styled.span`
  font-family: ${theme.fontFamilies.main};
  font-size: ${theme.fontSizes.body3};
  line-height: ${theme.lineHeights.body3};
  letter-spacing: ${theme.letterSpacings.body3};
  color: ${theme.colors.placeholder};
`

const ProgressLine = styled.div`
  position: absolute;
  min-width: 291px;
  width: 100%;
  box-sizing: border-box;
  border-top: 1.5px dashed ${theme.colors.borderGray};
`

const ActiveProgressLine = styled.div`
  position: absolute;
  min-width: 291px;
  width: 100%;
  box-sizing: border-box;
  border-top: 3px solid ${theme.colors.yellow};
  border-radius: 5px;
`




const ProgressStep = (props) => {
  return (
    <Container>
      <Bars>
        <ProgressLine />
        <ActiveProgressLine />
        <Step>
          <ProgressDot />
          <Progress>1차</Progress>
        </Step>
      </Bars>
    </Container>
    
  );
};

export default ProgressStep;
