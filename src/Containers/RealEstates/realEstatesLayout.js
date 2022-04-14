import React from "react";
import styled from "styled-components";
import PageTitle from "../../Components/PageTitle/pageTitle";

const Wrapper = styled.div`
  position: relative;
  height: 1000px;
`;

function RealEstates() {
  return (
    <Wrapper>
      <PageTitle title={"عقارات"} />
    </Wrapper>
  );
}

export default RealEstates;
