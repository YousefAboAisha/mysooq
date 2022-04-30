import React from "react";
import styled from "styled-components";
import PageTitle from "../../Components/PageTitle/pageTitle";
import PageHeader from "../../Components/PageHeader/pageHeader";
import { Grid } from "@mui/material";
import Heading from "../../Components/Heading/heading";

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

      <Grid item lg={12} mt={5} mb={2}>
        <Heading title={"أحدث الإعلانات"} />
      </Grid>
    </Wrapper>
  );
}

export default Services;
