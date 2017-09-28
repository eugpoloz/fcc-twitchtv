import React from "react";
import styled from "styled-components";
import Link from "./Link";

const Container = styled.div`
  width: 100%;
  margin-top: 30px;
  font-weight: 300;
  font-size: 14px;
  line-height: 1.25;
  text-align: center;
  color: rgba(255,255,255,.5);
`;

const Inner = Container.extend`
  margin-top: 0;
  font-size: 13px;
`;

const Copyright = () => {
  return (
    <Container>
      Made with <span role="img" aria-label="golden heart">💛</span> by <Link href="https://github.com/eugpoloz">Evgenia</Link>
      <Inner>
        Spinner by <Link href="https://codepen.io/claviska/">claviska</Link> |  Thank Facebook for React
      </Inner>
    </Container>
  );
};

export default Copyright;