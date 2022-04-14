import React from "react";
import styled from "styled-components";
import PageTitle from "../../Components/PageTitle/pageTitle";

const Wrapper = styled.div`
  position: relative;
  height: 1000px;
`;

function FreeLancers() {
  return (
    <Wrapper>
      <PageTitle title={"باحثين عن عمل"} />
    </Wrapper>
  );
}

export default FreeLancers;
