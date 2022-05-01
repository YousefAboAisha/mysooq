import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PageTitle from "../../Components/PageTitle/pageTitle";
import Heading from "../../Components/Heading/heading";
import Card from "../../Components/AddCard/addCard";
import PageHeader from "../../Components/PageHeader/pageHeader";
import { BASE_URL } from "../../baseURL";

const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;
`;

const RealEstates = () => {
  const id = 6;
  const [Adds, setAdds] = useState([]);
  const [Loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const response = await fetch(`${BASE_URL}Business/GetLatest/${id}`);
    const result = await response.json();
    if (result) setAdds(result.data["$values"]);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    fetchData();
    setLoading(false);
  }, []);

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
