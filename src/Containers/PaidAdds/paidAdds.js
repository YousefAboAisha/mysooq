import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Grid } from "@mui/material";
import PageTitle from "../../Components/PageTitle/pageTitle";
import axios from "axios";
import { BASE_URL } from "../../baseURL";
import Spinner from "../../Components/Spinner/Spinner";

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 50px;
  min-height: 600px;

  & select {
    width: 50%;
  }

  & a {
    color: var(--blue);
  }

  @media only screen and (max-width: 500px) {
    & select {
      width: 100%;
    }
  }
`;

const Text = () => {
  const [Data, setData] = useState("");
  const [Loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);
    axios
      .get(`${BASE_URL}Articles/GetPoster`)
      .then((res) => {
        setData(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Wrapper>
      <Grid item lg={12} mb={2}>
        <PageTitle title={"لاعلاناتكم"} />
      </Grid>

      <Grid
        container
        rowSpacing={2}
        columnSpacing={2}
        pr={0}
        minHeight={"600px"}
        mt={3}
      >
        {Loading ? (
          <Spinner />
        ) : (
          <section
            style={{ margin: "0px auto" }}
            dangerouslySetInnerHTML={{ __html: Data }}
          />
        )}
      </Grid>
    </Wrapper>
  );
};

export default Text;
