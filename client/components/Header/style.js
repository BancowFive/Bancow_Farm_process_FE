import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  position: fixed;
`;

export const LogoWrapper = styled.span`
  position: absolute;
  left: 0;
`;
export const CallBtn = styled.button`
  border: none;
  background-color: inherit;
  position: absolute;
  right: 0;
  color: ${({ theme }) => theme.colors.tertiary};
`;
