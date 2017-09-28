import styled from "styled-components";

const Link = styled.a`
  display: inline-block;
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

export default Link;