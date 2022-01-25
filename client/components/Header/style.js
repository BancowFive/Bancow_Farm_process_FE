import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  height: 54px;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  padding: 0 24px;
`;

export const LogoWrapper = styled.span`
  position: absolute;
  left: 24px;
`;
export const CallBtn = styled.button`
  border: none;
  background-color: inherit;
  position: absolute;
  right: 24px;
  color: ${({ theme }) => theme.colors.tertiary};
`;
