import styled, { css } from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
  width: 100%;
  min-height: 100%;
  padding: 50px;
  color: #fff;

  @media(max-width: 768px) {
    padding: 30px;
  }

  @media(max-width: 480px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`;

const Heading = styled.h1`
  width: 100%;
  margin: 0 0 30px;
  font-weight: 700;
  font-size: 36px;
  line-height: 1.5;
  text-align: center;

  @media(max-width: 768px) {
    font-size: 30px;
  }
`;

const Sidebar = styled.article`
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 200px;
  width: 200px;

  @media(max-width: 768px) {
    flex-basis: 300px;
    width: 300px;
    margin: 0 auto 30px;
  }
`;

const Content = styled.article`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: stretch;
  align-content: space-around;

  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: calc(100% - 200px);

  min-height: 102px;
  padding-left: 64px;
  font-size: 32px;

  @media(max-width: 768px) {
    flex-basis: 100%;
    width: 100%;
    padding-left: 0;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

const Button = styled.div`
  width: 100%;
  margin: 0 5px;
  padding: 10px 15px;
  font-weight: 300;
  font-size: 14px;
  text-transform: uppercase;
  text-align: center;
  color: rgb(208, 185, 80);
  cursor: pointer;
  transition: all 0.3s ease;

  ${props =>
    props.isActive &&
    css`
    color: #fff;
    background-color: rgb(158, 129, 48);
  `};
`;

export {
  Container,
  Sidebar,
  Heading,
  ButtonContainer,
  Button,
  Content
};