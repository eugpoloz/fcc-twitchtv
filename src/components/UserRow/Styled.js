import styled, { css } from "styled-components";
import { ButtonContainer } from "../Styled";

const Container = styled(ButtonContainer)`
  justify-content: flex-start;
  align-content: flex-start;
  flex: 0 1 100%;
  padding: 10px 15px;
  font-size: 16px;
  background-color: gray;

  :not(:first-of-type) {
    margin-top: 8px;
  }

  :not(:last-of-type) {
    margin-bottom: 8px;
  }
`;

export { Container };