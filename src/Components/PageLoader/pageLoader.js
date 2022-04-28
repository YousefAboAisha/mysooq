import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: #000;
`;

const PageLoader = () => {
  return <Wrapper></Wrapper>;
};

export default PageLoader;
