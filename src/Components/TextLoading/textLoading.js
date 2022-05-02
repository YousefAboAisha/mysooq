import React from "react";
import styled from "styled-components";

const H2 = styled.h2`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
`;

const TextLoading = () => {
  return <H2> جارٍ جلبُ البيانات </H2>;
};

export default TextLoading;
