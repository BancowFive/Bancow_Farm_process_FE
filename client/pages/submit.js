import React from 'react';
import styled from 'styled-components';
import { ProgressStep } from '../components/ProgressStep';

const Layout = styled.div`
  width: 360px;
  height: 800px;
  border: 1px solid black;
`
const Submit = () => {
  return (
    <Layout>
      <ProgressStep activeStep={1}/>
    </Layout>
  );
};

export default Submit;
