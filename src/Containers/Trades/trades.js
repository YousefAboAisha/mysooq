import React, { Suspense } from "react";
import styled from "styled-components";
import PageHeader from "../../Components/PageHeader/pageHeader";
import PageTitle from "../../Components/PageTitle/pageTitle";
import Spinner from "../../Components/Spinner/Spinner";

const Wrapper = styled.div`
  position: relative;
  height: 1000px;
`;

function Trades() {
  const id = 1;
  return (
    <Suspense fallback={<Spinner />}>
      <Wrapper>
        <PageTitle title={"تجارة"} />
        <PageHeader id={id} />
      </Wrapper>
    </Suspense>
  );
}

export default Trades;
