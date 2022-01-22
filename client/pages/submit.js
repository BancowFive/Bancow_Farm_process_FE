import React from 'react';
import styled from 'styled-components'
import ProgressStep from '../components/common/ProgressStep';

const Layout = styled.div`
height: 800px;
width: 360px;
border: 1px solid black;
`
const Submit = () => {
  return (
    <Layout>
      <ProgressStep />
    </Layout>
  );
};

export default Submit;
