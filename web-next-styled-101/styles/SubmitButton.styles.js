import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { theme } from "./theme";

//This components inherits the styles of Button from Material-UI
export const SubmitFormButton = styled(Button)`
  && {
    background: ${({ active }) =>
      active ? theme.colors.blue : theme.colors.red};

    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const BtnContainer = styled.div`
  // height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  padding-bottom: 50vh;
`;
