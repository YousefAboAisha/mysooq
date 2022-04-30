import React, { Suspense } from "react";
import { Grid } from "@mui/material/";
import styled from "styled-components";
import Flags from "./Flags/flags";
import LeftAdd from "./Adds/leftAdd";
import MainAdd from "./Adds/mainAdd";
import LeftLongAdd from "./Adds/leftLongAdd";
import Heading from "../../Components/Heading/heading";
import BlueButton from "../../Components/BlueButton/blueButton";
import RecentAdds from "./RecentAdds/recentAdds";
import Spinner from "../../Components/Spinner/Spinner";

const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;
`;

function HomeLayout() {
  return (
    <Suspense fallback={<Spinner />}>
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
          <RecentAdds />

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
    </Suspense>
  );
}

export default HomeLayout;
