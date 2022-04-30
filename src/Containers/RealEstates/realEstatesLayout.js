import { Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";
import PageTitle from "../../Components/PageTitle/pageTitle";
import Heading from "../../Components/Heading/heading";
import Card from "../../Components/AddCard/addCard";
import PageHeader from "../../Components/PageHeader/pageHeader";

const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;
`;

const RealEstates = () => {
  const id = 6;
  return (
    <Wrapper>
      <PageTitle title={"عقارات"} />
      <PageHeader id={id} />

      <Grid item lg={12} mt={5} mb={2}>
        <Heading title={"أحدث الإعلانات"} />
      </Grid>

      <Grid
        container
        rowSpacing={2}
        columnSpacing={2}
        pr={0}
        minHeight={"400px"}
      ></Grid>
    </Wrapper>
  );
};

export default RealEstates;
