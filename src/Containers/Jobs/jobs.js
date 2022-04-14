import React from "react";
import styled from "styled-components";
import PageTitle from "../../Components/PageTitle/pageTitle";

const Wrapper = styled.div`
  position: relative;
  height: 1000px;
`;

function Jobs() {
  return (
    <Wrapper>
      <PageTitle title={"وظائف شاغرة"} />
    </Wrapper>
  );
}

export default Jobs;
