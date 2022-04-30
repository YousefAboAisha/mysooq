import React from "react";
import styled from "styled-components";
import PageHeader from "../../Components/PageHeader/pageHeader";
import PageTitle from "../../Components/PageTitle/pageTitle";

const Wrapper = styled.div`
  position: relative;
  height: 1000px;
`;

function Trades() {
  const id = 1;
  return (
    <Wrapper>
      <PageTitle title={"تجارة"} />
      <PageHeader id={id} />
    </Wrapper>
  );
}

export default Trades;
