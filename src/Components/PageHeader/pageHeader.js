import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Box } from "../../Containers/NewAdd/addForm/form";
import { BASE_URL } from "../../baseURL";

const Header = styled.div`
  position: relative;
  padding: 10px 5px;
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: var(--white);

  & div {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-flow: row nowrap;
    gap: 10px;
    width: 100%;

    & select {
      width: 100%;
    }
  }
`;

const Btn = styled.button`
  padding: 6px;
  width: 110px;
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

  @media only screen and (max-width: 700px) {
    & {
      min-width: 50px;
    }
  }
`;

const PageHeader = ({
  id,
  setCountry,
  setCity,
  Country,
  City,
  setSubtype,
  Subtype,
  fetchData,
}) => {
  const [Subtypes, setSubtypes] = useState([]);
  const [Countries, setCountries] = useState([]);
  const [Cities, setCities] = useState([]);

  const URL = `${BASE_URL}SubTupe/GetAllForService?siteServiceID=${id}`;
  const countryURL = `${BASE_URL}Countries/GetAll`;
  const cityURL = `${BASE_URL}Cities/GetAllForOneCountry?countryId=${Country}`;

  // Fetching Subtypes Data
  const fetchSubtypesData = async () => {
    const response = await fetch(URL);
    const result = await response.json();
    if (result) setSubtypes(result.data["$values"]);
  };

  // Fetching Countries
  const fetchCountriesData = async () => {
    const response = await fetch(countryURL);
    const result = await response.json();
    if (result) setCountries(result.data["$values"]);
  };

  // Fetching Cities Data
  const fetchCitiesData = async () => {
    const response = await fetch(cityURL);
    const result = await response.json();
    if (result) setCities(result.data["$values"]);
  };

  useEffect(() => {
    fetchSubtypesData();
    fetchCountriesData();
  }, []);

  useEffect(() => {
    fetchCitiesData();
  }, [Country]);

  return (
    <Grid item lg={12} mt={3}>
      <Header>
        <div>
          <Box>
            <select
              onChange={(e) => setSubtype(e.target.value)}
              value={Subtype}
            >
              <option value="" selected disabled hidden>
                الأقسام الفرعية
              </option>
              {Subtypes.map((elem, index) => {
                return (
                  <option key={index} value={elem.id}>
                    {elem.title}
                  </option>
                );
              })}
            </select>
          </Box>

          <Box>
            <select
              placeholder="الدولة"
              onChange={(e) => setCountry(e.target.value)}
              value={Country}
            >
              <option value="" selected disabled hidden>
                الدولة
              </option>

              {Countries.map((country, index) => {
                return (
                  <option value={country.id} key={index}>
                    {country.name}
                  </option>
                );
              })}
            </select>
          </Box>

          <Box>
            <select onChange={(e) => setCity(e.target.value)} value={City}>
              <option value="" selected disabled hidden>
                المدينة
              </option>
              {Cities.map((city, index) => {
                return (
                  <option value={city.id} key={index}>
                    {city.cityName}
                  </option>
                );
              })}
            </select>
          </Box>
        </div>

        <Btn onClick={fetchData}>بحث</Btn>
      </Header>
    </Grid>
  );
};

export default PageHeader;
