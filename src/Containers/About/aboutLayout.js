import { Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";
import PageTitle from "../../Components/PageTitle/pageTitle";
import Content from "./content/content";
import AboutAdds from "./aboutAdds/aboutAdds";

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 50px;
  height: auto;
`;

const ContactLayout = () => {
  return (
    <Wrapper>
      <Grid item lg={12} mb={2}>
        <PageTitle title={"اتصل بنا"} />
      </Grid>

      <Grid container spacing={0} wrap="wrap-reverse">
        <Grid item lg={8} md={12} xs={12} p={1}>
          <Content />
        </Grid>

        <Grid item lg={4} md={12} xs={12} p={1}>
          <AboutAdds />
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default ContactLayout;
