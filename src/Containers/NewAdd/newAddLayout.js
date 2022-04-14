import { Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";
import PageTitle from "../../Components/PageTitle/pageTitle";
import Form from "./addForm/form";

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 50px;
`;

const NewAddLayout = () => {
  return (
    <Wrapper>
      <Grid item lg={12} mb={2}>
        <PageTitle title={"إضافة إعلان جديد"} />
      </Grid>

      <Grid container spacing={0}>
        <Grid item lg={8} md={12} xs={12} p={1}>
          <Form />
        </Grid>

        <Grid item lg={4} md={12} xs={12} p={1}></Grid>
      </Grid>
    </Wrapper>
  );
};

export default NewAddLayout;
