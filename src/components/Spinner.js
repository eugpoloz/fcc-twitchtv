// copied from
// https://codepen.io/claviska/pen/MoLWbj

import styled from "styled-components";

const Spinner = styled.div`
  /* Animation styles */
  @keyframes spinner {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  display: block;
  align-self: center;
  width: 1em;
  height: 1em;
  border-top-color: #fff;
  border-left-color: #fff;
  border-bottom-color: transparent;
  border-right-color: transparent;
  border-width: 2px;
  border-style: solid;
  border-radius: 50%;  
  animation: spinner .5s linear infinite;
`;

export default Spinner;