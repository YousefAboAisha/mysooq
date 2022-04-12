import React from "react";
import styled from "styled-components";

function Heading({ title }) {
  const Head = styled.h3`
    font-weight: 600;
    border-bottom: 2px solid #000;
    padding-bottom: 5px;
    width: fit-content;
    margin-bottom: 7px;
    border-radius: 2px;
  `;
  return <Head>{title}</Head>;
}

export default Heading;
