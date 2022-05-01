import React, { useState, useEffect, Suspense } from "react";
import styled from "styled-components";
import PageHeader from "../../Components/PageHeader/pageHeader";
import PageTitle from "../../Components/PageTitle/pageTitle";
import { Grid } from "@mui/material";
import Heading from "../../Components/Heading/heading";
import { BASE_URL } from "../../baseURL";
import Spinner from "../../Components/Spinner/Spinner";
import Card from "../../Components/AddCard/addCard";

const Wrapper = styled.div`
  position: relative;
  min-height: 1000px;
`;

const Cars = () => {
  const id = 8;
  const [Adds, setAdds] = useState([]);
  const [Country, setCountry] = useState(null);
  const [City, setCity] = useState(null);
  const [Page, setPage] = useState(0);

  const fetchData = async () => {
    const response = await fetch(
      `${BASE_URL}Business/GetLatest?&page=${Page}&countryId=${Country}&cityId=${City}&serviceId=${id}`
    );
    const result = await response.json();
    if (result) setAdds(result.data["$values"]);
  };

  useEffect(() => {
    fetchData();
  }, [Country, City, Page]);

  return (
    <Wrapper>
      <PageTitle title={"سيارات"} />

      <PageHeader
        id={id}
        setCountry={setCountry}
        setCity={setCity}
        setPage={setPage}
        Country={Country}
        City={City}
      />

      <Grid item lg={12} mt={5} mb={2}>
        <Heading title={"أحدث الإعلانات"} />
      </Grid>

      <Grid
        container
        rowSpacing={2}
        columnSpacing={2}
        pr={0}
        minHeight={"400px"}
      >
        <Suspense fallback={<Spinner />}>
          {Adds.map((elem, index) => {
            return <Card key={index} card={elem} />;
          })}
        </Suspense>
      </Grid>
    </Wrapper>
  );
};

export default Cars;
