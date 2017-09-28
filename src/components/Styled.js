import styled, { css } from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100%;
  min-height: 100%;
  padding: 50px;
  color: #fff;
`;

const Sidebar = styled.article`
  flex: 1 1 30%;
  min-width: 300px;
`;

const Content = styled.article`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: stretch;
  align-content: space-around;

  flex: 1 1 70%;
  padding-left: 64px;
  font-size: 32px;
`;

const Heading = styled.h1`
  margin: 0 0 30px;
  font-weight: 700;
  font-size: 36px;
  line-height: 1.5;
  text-align: center;
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
  Content,
};