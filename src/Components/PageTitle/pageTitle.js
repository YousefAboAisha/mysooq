import React from "react";
import styled from "styled-components";

const StyledSpan = styled.span`
  font-size: 18px;
  font-family: var(--secondFont);
`;

const PageTitle = ({ title }) => {
  return (
    <div>
      <StyledSpan style={{ fontWeight: "600", marginLeft: "5px" }}>
        الرئيسية/
      </StyledSpan>
      <StyledSpan style={{ color: "#707070" }}>{title}</StyledSpan>
    </div>
  );
};

export default PageTitle;
