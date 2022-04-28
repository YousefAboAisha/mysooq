import React from "react";
import styled from "styled-components";
import PageTitle from "../../Components/PageTitle/pageTitle";
import PageHeader from "../../Components/PageHeader/pageHeader";

const Wrapper = styled.div`
  position: relative;
  height: 1000px;
`;

function Services() {
  const id = 2;
  return (
    <Wrapper>
      <PageTitle title={"خدمات"} />
      <PageHeader id={id} />
    </Wrapper>
  );
}

export default Services;
