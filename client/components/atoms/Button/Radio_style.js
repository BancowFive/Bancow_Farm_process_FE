import styled from "styled-components";
import { flexbox } from "../../../styles/utils";

export const RadioLabel = styled.label`
  ${flexbox("between")}
  width: 47%;
  padding: 17px 16px;
  color: ${({ theme }) => theme.colors.guide};
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.borderGray};
  border-radius: 10px;
  transition: background-color 200ms ease-in-out;

  @media (min-width: 540px) {
    width: 47%;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 258px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 258px;
  }

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme.colors.backgroundGray};
  }

  .check-icon {
    //unchecked
    position: relative;
    width: 24px;
    height: 24px;
    border: 1px solid ${({ theme }) => theme.colors.placeholder};
    border-radius: 50%;
  }
`;
export const RadioInput = styled.input`
  display: none;
  /* &:checked {
    display: none;
  } */

  &:checked + ${RadioLabel} {
    ${flexbox("between")}
    width: 47%;
    padding: 17px 16px;
    color: ${({ theme }) => theme.colors.blue};
    background-color: ${({ theme }) => theme.colors.backgroundBlue};
    border: 1px solid ${({ theme }) => theme.colors.borderBlue};
    border-radius: 10px;
    transition: background-color 200ms ease-in-out;

    @media (min-width: 540px) {
      width: 47%;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      width: 258px;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      width: 258px;
    }

    .check-icon {
      border: none;
      background-image: url("/checked.svg");
    }

    &:not(:disabled):hover {
      background-color: ${({ theme }) => theme.colors.available};
    }
  }
`;
