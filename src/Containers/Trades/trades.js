import React from "react";
import styled from "styled-components";
import PageHeader from "../../Components/PageHeader/pageHeader";
import PageTitle from "../../Components/PageTitle/pageTitle";
import { Grid } from "@mui/material";
import Heading from "../../Components/Heading/heading";

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

      <Grid item lg={12} mt={5} mb={2}>
        <Heading title={"أحدث الإعلانات"} />
      </Grid>
    </Wrapper>
  );
}

export default Trades;
