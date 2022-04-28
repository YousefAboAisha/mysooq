import React, { Suspense } from "react";
import styled from "styled-components";
import PageHeader from "../../Components/PageHeader/pageHeader";
import PageTitle from "../../Components/PageTitle/pageTitle";
import Spinner from "../../Components/Spinner/spinner";

const Wrapper = styled.div`
  position: relative;
  height: 1000px;
`;

function FreeLancers() {
  const id = 4;
  return (
    <Suspense fallback={<Spinner />}>
      <Wrapper>
        <PageTitle title={"باحثين عن عمل"} />
        <PageHeader id={id} />
      </Wrapper>
    </Suspense>
  );
}

export default FreeLancers;
