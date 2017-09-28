import styled, { css } from "styled-components";
import { ButtonContainer } from "../Styled";

const icon = 64;

const Container = styled(ButtonContainer)`
  justify-content: flex-start;
  align-content: flex-start;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: 100%;
  width: 100%;
  overflow: hidden;
  padding: 9px 12px;
  font-size: 16px;
  background-color: rgba(255,255,255,.15);

  :not(:first-of-type) {
    margin-top: 6px;
  }

  :not(:last-of-type) {
    margin-bottom: 6px;
  }
`;

const Icon = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  width: ${icon}px;
  height: ${icon}px;
  border: 2px solid rgb(208, 185, 80);
  border-radius: 50%;
  overflow: hidden;
`;

const IconImg = styled.img`
  width: 100%;
  height: auto;
`;

const Info = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: calc(100% - ${icon}px);
  padding-left: 15px;
`;

const Link = styled.a`
  display: block;
  margin-bottom: 6px;
  font-weight: bold;
  text-decoration: none;
  color: rgb(208, 185, 80);

  :hover,
  :focus,
  :active {
    text-decoration: underline;
  }
`;

const Status = styled.div`
  font-weight: 300;
  font-style: italic;
  color: #fff;
  opacity: .5;

  ${props =>
    props.online && css`
    opacity: 1;
    font-style: normal;
  `}
`;

export {
  Container,
  Icon,
  IconImg,
  Info,
  Link,
  Status
};