import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PageHeader from "../../Components/PageHeader/pageHeader";
import PageTitle from "../../Components/PageTitle/pageTitle";
import { Grid } from "@mui/material";
import Heading from "../../Components/Heading/heading";
import { BASE_URL } from "../../baseURL";
import Spinner from "../../Components/Spinner/Spinner";
import Card from "../../Components/AddCard/addCard";
import axios from "axios";
import BlueButton from "../../Components/BlueButton/blueButton";

const Wrapper = styled.div`
  position: relative;
  min-height: 1000px;
`;

const Jobs = () => {
  const id = 5;
  const [Adds, setAdds] = useState([]);
  const [AllAdds, setAllAdds] = useState([]);
  const [Country, setCountry] = useState(null);
  const [City, setCity] = useState(null);
  const [Page, setPage] = useState(1);
  const [Subtype, setSubtype] = useState("");

  const [Loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);
    axios
      .get(
        `${BASE_URL}Business/GetLatest?&page=${Page}&countryId=${Country}&cityId=${City}&serviceId=${id}&subType=${Subtype}`
      )
      .then((res) => {
        // console.log(res.data.data.$values);

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

  return (
    <Wrapper>
      <PageTitle title={"وظائف شاغرة"} />
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
        <BlueButton title={"إظهار المزيد"} setPage={setPage} page={Page} />
      </Grid>
    </Wrapper>
  );
};

export default Jobs;
