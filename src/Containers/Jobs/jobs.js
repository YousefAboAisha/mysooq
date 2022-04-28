import React, { Suspense } from "react";
import styled from "styled-components";
import PageHeader from "../../Components/PageHeader/pageHeader";
import PageTitle from "../../Components/PageTitle/pageTitle";
import Spinner from "../../Components/Spinner/spinner";

const Wrapper = styled.div`
  position: relative;
  height: 1000px;
`;

function Jobs() {
  const id = 5;
  return (
    <Suspense fallback={<Spinner />}>
      <Wrapper>
        <PageTitle title={"وظائف شاغرة"} />
        <PageHeader id={id} />
      </Wrapper>
    </Suspense>
  );
}

export default Jobs;
