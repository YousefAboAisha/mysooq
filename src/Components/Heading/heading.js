import React from "react";
import styled from "styled-components";

const Head = styled.h3`
  font-weight: 600;
  border-bottom: 2px solid #000;
  padding-bottom: 5px;
  width: fit-content;
  margin-bottom: 7px;
  border-radius: 2px;
`;

function Heading({ title }) {
  return <Head>{title}</Head>;
}

export default Heading;
