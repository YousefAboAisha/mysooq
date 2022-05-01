import React from "react";
import styled from "styled-components";

const Head = styled.h3`
  position: relative;
  font-weight: 600;
  width: fit-content;
  margin-bottom: 15px;

  &::after {
    content: "";
    position: absolute;
    bottom: -3px;
    background-color: #000;
    width: 70%;
    left: 50%;
    transform: translateX(-50%);
    height: 2px;
  }
`;

const Heading = ({ title }) => {
  return <Head>{title}</Head>;
};

export default Heading;
