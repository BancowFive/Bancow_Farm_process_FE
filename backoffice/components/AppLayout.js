import styled from "styled-components";
import PropTypes from "prop-types";
import { flexbox } from "../styles/utils";

const Layout = styled.div`
  ${flexbox("start")};

  .sidebar {
    flex: 0;
  }

  .content {
    flex: 1;
  }
`;

const AppLayout = ({ children }) => {
  return <Layout>{children}</Layout>;
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
