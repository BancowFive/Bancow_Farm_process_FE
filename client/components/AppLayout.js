import styled from "styled-components";
import { flexbox } from "../styles/utils";
import PropTypes from "prop-types";
import { Side } from "../components";

const Layout = styled.div`
  ${flexbox()};
`;

const Content = styled.div`
  ${flexbox("center", "start")};
  width: 100%;
  height: 100%;
`;

const AppLayout = ({ children }) => {
  return (
    <Layout>
      <Side />
      <Content>{children}</Content>
    </Layout>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
