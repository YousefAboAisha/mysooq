import React from "react";
import styled from "styled-components";
import PageHeader from "../../Components/PageHeader/pageHeader";
import PageTitle from "../../Components/PageTitle/pageTitle";

const Wrapper = styled.div`
  position: relative;
  height: 1000px;
`;

function FreeLancers() {
  const id = 4;
  return (
    <Wrapper>
      <PageTitle title={"باحثين عن عمل"} />
      <PageHeader id={id} />
    </Wrapper>
  );
}

export default FreeLancers;
