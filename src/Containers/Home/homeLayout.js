import React from "react";
import { Grid } from "@mui/material/";
import styled from "styled-components";
import Flags from "./Flags/flags";
import LeftAdd from "./Adds/leftAdd";
import MainAdd from "./Adds/mainAdd";
import LeftLongAdd from "./Adds/leftLongAdd";
import Heading from "../../Components/Heading/heading";
import Cards from "./Cards/cards";
import BlueButton from "../../Components/BlueButton/blueButton";

function HomeLayout() {
  const Wrapper = styled.div`
    position: relative;
    margin: 0 auto;
  `;

  return (
    <Wrapper>
      <Grid container spacing={0}>
        {/* Flags Section */}
        <Grid item lg={8} md={12} xs={12} p={0.5}>
          <Flags />
        </Grid>

        {/* Left Small Add */}
        <Grid item lg={4} md={12} xs={12} p={0.5}>
          <LeftAdd />
        </Grid>

        {/* Heading Tag */}
        <Grid item lg={12} md={12} xs={12} pr={0.5}>
          <Heading title={"إعلانات مميزة"} />
        </Grid>

        {/* Main Big Add */}
        <Grid item lg={8} md={12} xs={12} p={0.5}>
          <MainAdd />
        </Grid>

        {/* Left Long Add */}
        <Grid item lg={4} md={12} xs={12} p={0.5}>
          <LeftLongAdd />
        </Grid>

        {/* Heading Tag */}
        <Grid item lg={12} md={12} xs={12} pr={0.5} mt={5} mb={2}>
          <Heading title={"أحدث الإعلانات"} />
        </Grid>

        {/* Adds Cards */}
        <Grid container rowSpacing={2} columnSpacing={2}>
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          m={3}
        >
          <BlueButton />
        </Grid>
      </Grid>
    </Wrapper>
  );
}

export default HomeLayout;
