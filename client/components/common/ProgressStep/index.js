import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../styles/index.js'

const Container = styled.div`
  position: relative;
  min-width: 312px;
  height: 31px;
  margin: 0 24px;
  background-color: black;
`
const Bars = styled.div`
  position: relative;
  display: fixed;
  flex-grow: 1;
  box-sizing: border-box;
  align-items: center;
  margin: 0 16px 0 3px;
  height: 14px;
`

const Step = styled.div.attrs(props => ({
  left: props.step === '1' /* 1차 = 97.5 % 293 = 33.276450 */
  ? '33.276450%'
  : props.step === '2' /* 2차 = 195 % 293 = 66.552901 */
  ? '66.552901%' : 'auto', /* 완료(3차) = auto */
  right: props.step === '3' ? '2px' : 'auto'
}))`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: ${props => props.left};
  right: ${props => props.right}
`

const ProgressDot = styled.div.attrs(props => ({
  background: props.active ? theme.colors.yellow : 'white',
  border: props.active? theme.colors.yellow : theme.colors.placeholder
}))`
  box-sizing: border-box;
  width: 14px;
  height: 14px;
  border: 2px solid ${props => props.border};
  border-radius: 50%;
  background-color: ${props => props.background};
`

const Progress = styled.div.attrs(props => ({
  width: props.extraWidth || '18px'
}))`
  text-align: center;
  font-family: ${theme.fontFamilies.main};
  font-size: ${theme.fontSizes.body3};
  line-height: 17px;
  color: ${theme.colors.placeholder};
  margin-top: 1px;
  width: ${props => props.width};
`

const ProgressLine = styled.div`
  position: absolute;
  min-width: 293px;
  width: 100%;
  box-sizing: border-box;
  border-top: 1.5px dashed ${theme.colors.borderGray};
`

const ActiveProgressLine = styled.div.attrs(props => ({
  width: props.active === 1 /* 1차 = 99.5 % 293 = 36.348122 */
  ? '33.959044%'
  : props.active === 2 /* 2차 = 197 % 293 = 69.624573 */
  ? '67.235494%' : '100%', /* 완료(3차) = auto */
}))`
  position: absolute;
  width: ${props => props.width};
  box-sizing: border-box;
  border-top: 3px solid ${theme.colors.yellow};
  border-radius: 5px;
`

const ProgressStep = (props) => {
  return (
    <Container>
      <Bars>
        <ProgressLine />
        <ActiveProgressLine active={props.activeStep}/>
        <Step step={'1'}>
          <ProgressDot active={props.activeStep < 4}/>
          <Progress>1차</Progress>
        </Step>
        <Step step={'2'}>
          <ProgressDot active={props.activeStep >= 2}/>
          <Progress>2차</Progress>
        </Step>
      </Bars>
        <Step step={'3'}>
          <ProgressDot active={props.activeStep >= 3}/>
          <Progress extraWidth={'23px'}>완료</Progress>
        </Step>
    </Container>
    
  );
};

export default ProgressStep;
