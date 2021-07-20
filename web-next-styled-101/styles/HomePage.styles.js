import styled from "styled-components";

export const HeaderFlex = styled.div`
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
`;

export const Heading = styled.h1`
  color: ${({ changeTextColor }) => (changeTextColor ? "blue" : "red")};
  font-size: 10rem;
  font-weight: 900;
`;
