import styled from "styled-components";
import { textStyle, flexbox } from "../../../styles/utils";

export const CalendarContainer = styled.div`
  width: 322px;
  margin: 0 auto;
  ul {
    ${flexbox()}
  }
  li {
    ${flexbox()}
    ${textStyle("body1")}
    width: 40px;
    height: 40px;
  }
  li + li {
    margin-left: 7px;
  }
`;
export const StyledCalendarController = styled.div`
  margin-bottom: 30px;
  ${flexbox("between")}
  ${textStyle("headline3")}
  font-weight: 700;
`;

export const StyledCalendarDate = styled.div`
  li {
    color: ${({ theme }) => theme.colors.tertiary};
  }
`;

export const StyledCalendarDay = styled.div`
  ul {
    margin-top: 18px;
  }
  li {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.available};
    border-radius: 50%;
    cursor: pointer;
  }
  .isEmpty,
  .isToday {
    background-color: transparent;
    cursor: default;
  }
  .isSelected {
    background-color: ${({ theme }) => theme.colors.mainBlue};
    color: ${({ theme }) => theme.colors.white};
  }
  .isDisable {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.placeholder};
    cursor: default;
  }
`;
