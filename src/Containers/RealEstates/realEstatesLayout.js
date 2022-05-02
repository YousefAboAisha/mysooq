import { Grid } from "@mui/material";
import React, { useState, useEffect, Suspense } from "react";
import styled from "styled-components";
import PageTitle from "../../Components/PageTitle/pageTitle";
import Heading from "../../Components/Heading/heading";
import Card from "../../Components/AddCard/addCard";
import PageHeader from "../../Components/PageHeader/pageHeader";
import { BASE_URL } from "../../baseURL";
import Spinner from "../../Components/Spinner/Spinner";
import axios from "axios";
import TextLoading from "../../Components/TextLoading/textLoading";

const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;
  min-height: 1000px;
`;

const RealEstates = () => {
  const id = 6;
  const [Adds, setAdds] = useState([]);
  const [Country, setCountry] = useState(null);
  const [City, setCity] = useState(null);
  const [Page, setPage] = useState(0);
  const [Loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);
    axios
      .get(
        `${BASE_URL}Business/GetLatest?&page=${Page}&countryId=${Country}&cityId=${City}&serviceId=${id}`
      )
      .then((res) => {
        console.log(res.data.data.$values);

        const fetchedData = [];
        for (let key in res.data.data["$values"]) {
          fetchedData.push(res.data.data.$values[key]);
        }
        setAdds(fetchedData);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, [Country, City, Page]);

  return (
    <Wrapper>
      <PageTitle title={"عقارات"} />
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
        {Loading ? (
          <TextLoading />
        ) : (
          Adds.map((elem, index) => {
            return <Card key={index} card={elem} />;
          })
        )}
      </Grid>
    </Wrapper>
  );
};

export default RealEstates;
