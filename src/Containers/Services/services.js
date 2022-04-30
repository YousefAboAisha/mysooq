import React, { Suspense } from "react";
import styled from "styled-components";
import PageTitle from "../../Components/PageTitle/pageTitle";
import PageHeader from "../../Components/PageHeader/pageHeader";
import Spinner from "../../Components/Spinner/Spinner";

const Wrapper = styled.div`
  position: relative;
  height: 1000px;
`;

function Services() {
  const id = 2;
  return (
    <Suspense fallback={<Spinner />}>
      <Wrapper>
        <PageTitle title={"خدمات"} />
        <PageHeader id={id} />
      </Wrapper>
    </Suspense>
  );
}

export default Services;
