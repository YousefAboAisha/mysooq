import React, { Suspense } from "react";
import styled from "styled-components";
import PageHeader from "../../Components/PageHeader/pageHeader";
import PageTitle from "../../Components/PageTitle/pageTitle";
import Spinner from "../../Components/Spinner/Spinner";

const Wrapper = styled.div`
  position: relative;
  height: 1000px;
`;

function Cars() {
  const id = 8;
  return (
    <Suspense fallback={<Spinner />}>
      <Wrapper>
        <PageTitle title={"سيارات"} />
        <PageHeader id={id} />
      </Wrapper>
    </Suspense>
  );
}

export default Cars;
