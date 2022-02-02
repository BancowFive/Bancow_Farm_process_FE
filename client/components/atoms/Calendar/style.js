import styled from "styled-components";
import { textStyle, flexbox } from "../../../styles/utils";

export const CalendarContainer = styled.div`
  position: relative;
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
  ${flexbox("between")}
  ${textStyle("headline3")}
  font-weight: 700;
  height: 28px;
  margin-bottom: 30px;
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

  .isEmpty {
    background-color: transparent;
    cursor: default;
  }

  .isToday {
    position: relative;
    background-color: transparent;
    .pointer {
      position: absolute;
      bottom: 0;
      background-color: ${({ theme }) => theme.colors.yellow};
      width: 6px;
      height: 6px;
      border-radius: 50%;
    }
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

export const ColorInfomation = styled.div`
  position: absolute;
  ${flexbox()}
  ${textStyle("body3")}
  color: ${({ theme }) => theme.colors.tertiary};
  right: 10px;
  .pointer {
    width: 10px;
    height: 10px;
    margin-right: 4px;
    background-color: ${({ theme }) => theme.colors.available};
    border-radius: 50%;
  }
`;
