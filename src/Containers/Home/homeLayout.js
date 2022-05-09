import React from "react";
import { Grid } from "@mui/material/";
import styled from "styled-components";
import Flags from "./Flags/flags";
import LeftAdd from "./Adds/leftAdd";
import MainAdd from "./Adds/mainAdd";
import LeftLongAdd from "./Adds/leftLongAdd";
import Heading from "../../Components/Heading/heading";
import RecentAdds from "./RecentAdds/recentAdds";

const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;
`;

const HomeLayout = () => {
  return (
    <Wrapper>
      <Grid container spacing={0}>
        {/* Flags Section */}
        <Grid item lg={8} md={12} xs={12}>
          <Flags />
        </Grid>

        {/* Left Small Add */}
        <Grid item lg={4} md={12} xs={12} mt={{ lg: 0, xs: 5 }}>
          <LeftAdd />
        </Grid>

        {/* Heading Tag */}
        <Grid
          item
          lg={6}
          md={12}
          xs={12}
          pr={1}
          mt={{ lg: 0, xs: 10 }}
          sx={{ transform: "translatey(-30px)" }}
        >
          <Heading title={"إعلانات مميزة"} />
        </Grid>

        {/* Main Big Add */}
        <Grid
          item
          lg={8}
          md={12}
          xs={12}
          pr={0}
          mb={{ xs: 5 }}
          sx={{ transform: "translatey(-30px)" }}
        >
          <MainAdd />
        </Grid>

        {/* Left Long Add */}
        <Grid
          item
          lg={4}
          md={12}
          xs={12}
          sx={{ transform: "translatey(-30px)" }}
        >
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
        <RecentAdds />
      </Grid>
    </Wrapper>
  );
};

export default HomeLayout;
