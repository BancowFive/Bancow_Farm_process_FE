import React from 'react';
import { ProgressStep } from '../../components/ProgressStep'
import { Button } from "../../components/Button";
import { Container, AverageDate, Info } from './styled';

const step1 = () => {
  return (
    <>
      <Container>
        <ProgressStep activeStep={1}/>
        <h1>1차 신청 완료되었어요</h1>
        <p>
          평균 <AverageDate>2일 이내</AverageDate>로
          <br/>뱅카우가 연락드릴게요
        </p>
        <img src={'/cow_plus_me.svg'} alt='소와 나'/>
        <Info>확인을 누르시면 메인페이지로 이동합니다</Info>
      </Container>
      <Button variant='primary' size={60} block to='/'>확인</Button>
    </>

  );
}; 

export default step1;
