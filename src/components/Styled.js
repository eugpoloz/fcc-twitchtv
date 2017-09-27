import styled, { css } from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
  width: 100%;
  min-height: 100%;
  padding: 50px;
  color: #fff;
`;

export const Sidebar = styled.article`
  flex: 1 1 30%;
  min-width: 300px;
`;

export const Content = styled.article`
  flex: 1 1 70%;
  padding-left: 60px;
`;

export const Heading = styled.h1`
  margin: 0 0 30px;
  font-weight: 700;
  font-size: 36px;
  line-height: 1.5;
  text-align: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export const Button = styled.div`
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

export const UserContainer = styled(ButtonContainer)`
  justify-content: space-around;
  align-content: space-around;
  align-items: stretch;
  width: 100%;
  margin-top: 84px;
`;