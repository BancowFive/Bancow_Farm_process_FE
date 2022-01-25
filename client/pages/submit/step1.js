import React from 'react';
import { ProgressStep } from '../../components/ProgressStep'
import { Container, Img } from './styled';

const step1 = () => {
  return (
    <Container>
      <ProgressStep activeStep={1}/>
      <h1>1차 신청 완료되었어요</h1>
      <h2>평균 2일 이내로
        <br/>뱅카우가 연락드릴게요</h2>
      <Img>
        <img src='../../public/cow_and_farmer.svg' alt='소와 농부'/>
      </Img>
    </Container>

  );
}; 

export default step1;
