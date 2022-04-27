import React from "react";
import { Grid } from "@mui/material/";
import styled from "styled-components";
import Flags from "./Flags/flags";
import LeftAdd from "./Adds/leftAdd";
import MainAdd from "./Adds/mainAdd";
import LeftLongAdd from "./Adds/leftLongAdd";
import Heading from "../../Components/Heading/heading";
import Card from "../../Components/AddCard/addCard";
import BlueButton from "../../Components/BlueButton/blueButton";

const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;
`;

function HomeLayout() {
  return (
    <Wrapper>
      <Grid container spacing={0}>
        {/* Flags Section */}
        <Grid item lg={8} md={12} xs={12} p={1}>
          <Flags />
        </Grid>

        {/* Left Small Add */}
        <Grid item lg={4} md={12} xs={12} p={1}>
          <LeftAdd />
        </Grid>

        {/* Heading Tag */}
        <Grid item lg={12} md={12} xs={12} pr={1} mt={{ lg: 0, xs: 5 }}>
          <Heading title={"إعلانات مميزة"} />
        </Grid>

        {/* Main Big Add */}
        <Grid item lg={8} md={12} xs={12} p={1} pr={0} mb={{ xs: 5 }}>
          <MainAdd />
        </Grid>

        {/* Left Long Add */}
        <Grid item lg={4} md={12} xs={12} p={1}>
          <LeftLongAdd />
        </Grid>

        {/* Heading Tag */}
        <Grid
          item
          lg={12}
          md={12}
          xs={12}
          pr={1}
          mb={{ xs: 2, lg: 0 }}
          mt={{ lg: 0, xs: 5 }}
        >
          <Heading title={"أحدث الإعلانات"} />
        </Grid>

        {/* Adds Cards */}
        <Grid
          container
          rowSpacing={{ lg: 4, md: 4, xs: 3 }}
          columnSpacing={{ lg: 4, md: 4, xs: 3 }}
          pr={0}
        >
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          m={3}
        >
          <BlueButton title={"إظهار المزيد"} />
        </Grid>
      </Grid>
    </Wrapper>
  );
}

export default HomeLayout;
