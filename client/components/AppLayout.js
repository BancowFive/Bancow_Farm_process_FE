import styled from "styled-components";
import PropTypes from "prop-types";

const Layout = styled.div`
  padding-top: 54px;
`;

const AppLayout = ({ children }) => {
  return <Layout>{children}</Layout>;
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
