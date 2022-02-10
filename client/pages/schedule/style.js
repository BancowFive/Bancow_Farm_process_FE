import styled from "styled-components";
import { StyledContainer } from "../../components/blocks/Grid/style";
import { textStyle, flexbox } from "../../styles/utils";

export const Container = styled(StyledContainer)`
  .content {
    bottom: 10px;
    padding: 0;
  }

  h2 {
    margin: 34px 24px 40px;
  }
  h2.choose {
    width: 255px;
  }
  h2.wait {
    width: 220px;
  }

  @media (min-width: 1024px) {
    h2 {
      margin: 30px 0 36px;
      ${textStyle("headline1")};
    }
    h2.choose {
      width: 100%;
    }
    h2.wait {
      width: 100%;
    }
  }
`;

export const Toast = styled.div.attrs(props => ({
  display: `${props.show ? "block" : "none"}`,
}))`
  ${flexbox()};
  display: ${props => props.display};
  margin: 38px auto 20px;

  @media (min-width: 540px) {
    margin: 15px auto 18px;
  }
`;
