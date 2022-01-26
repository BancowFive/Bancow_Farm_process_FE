import React from 'react';
import { ProgressStep } from '../../components/ProgressStep'
import { Button } from "../../components/Button";
import { AverageDate } from '../../components/EmphasizedWord';
import { Container, ButtonInfo, ImgContainer } from './styled';
import Image from 'next/image';
import cowAndMePic from '../../public/cow_plus_me.svg'

const step1 = () => {
  return (
    <>
      <Container>
        <ProgressStep activeStep={1}/>
        <h1>1차 신청이 완료되었어요</h1>
        <h2>
          평균 <AverageDate>2일 이내</AverageDate>로
          <br/>뱅카우가 연락드릴게요
        </h2>
        <ImgContainer>
          <Image src={cowAndMePic} alt='소와 나'/>
        </ImgContainer>
        <ButtonInfo>확인을 누르시면 메인페이지로 이동합니다</ButtonInfo>
      </Container>
      <Button variant='primary' size={60} block to='/'>확인</Button>
    </>

  );
}; 

export default step1;
