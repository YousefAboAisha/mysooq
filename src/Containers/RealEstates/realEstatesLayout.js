import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PageTitle from "../../Components/PageTitle/pageTitle";
import Heading from "../../Components/Heading/heading";
import Card from "../../Components/AddCard/addCard";
import PageHeader from "../../Components/PageHeader/pageHeader";
import { BASE_URL } from "../../baseURL";
import Spinner from "../../Components/Spinner/Spinner";
import axios from "axios";

const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;
  min-height: 1000px;
`;

const Btn = styled.button`
  padding: 6px;
  min-width: 110px;
  color: var(--white);
  background-color: var(--blue);
  border-radius: 3px;
  font-family: var(--secondFont);
  font-size: 14px;
  transition: all 0.2s linear;

  &:hover {
    background-color: #01687d;
    transition: all 0.2s linear;
  }
`;

const RealEstates = () => {
  const id = 6;
  const [Adds, setAdds] = useState([]);
  const [Country, setCountry] = useState("");
  const [City, setCity] = useState("");
  const [Page, setPage] = useState(1);
  const [Loading, setLoading] = useState(false);
  const [Subtype, setSubtype] = useState("");

  const fetchData = () => {
    setLoading(true);
    axios
      .get(
        `${BASE_URL}Business/GetLatest?&page=${Page}&countryId=${Country}&cityId=${City}&serviceId=${id}&subType=${Subtype}`
      )
      .then((res) => {
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
  }, [Country, City, Page, Subtype]);

  console.log(Page, Country, City, Subtype);
  console.log("Page Counter", Page);

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
        setSubtype={setSubtype}
        Subtype={Subtype}
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
          <Spinner />
        ) : (
          Adds.map((elem, index) => {
            return <Card key={index} card={elem} />;
          })
        )}
      </Grid>

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        m={3}
      >
        <Btn onClick={() => setPage(Page + 1)}>إظهار المزيد</Btn>
      </Grid>
    </Wrapper>
  );
};

export default RealEstates;
