import React from "react";
import styled from "styled-components";
import PageTitle from "../../Components/PageTitle/pageTitle";

const Wrapper = styled.div`
  position: relative;
  height: 1000px;
`;

function Trades() {
  return (
    <Wrapper>
      <PageTitle title={"تجارة"} />
    </Wrapper>
  );
}

export default Trades;
