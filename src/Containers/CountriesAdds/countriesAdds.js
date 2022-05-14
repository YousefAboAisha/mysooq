import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PageTitle from "../../Components/PageTitle/pageTitle";
import { BASE_URL } from "../../baseURL";
import { useParams } from "react-router";
import Card from "../../Components/AddCard/addCard";
import Spinner from "../../Components/Spinner/Spinner";
import { Grid } from "@mui/material";
import axios from "axios";
import BlueButton from "../../Components/BlueButton/blueButton";
import Heading from "../../Components/Heading/heading";

const Wrapper = styled.div`
  position: relative;
  min-height: 1000px;

  & .inputs {
    position: relative;
    padding: 10px 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-flow: row nowrap;
    gap: 10px;
    background-color: var(--white);
    width: 100%;
    margin-top: 20px;

    & select {
      width: 100%;
    }
  }
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

  @media only screen and (max-width: 600px) {
    & {
      min-width: 50px;
    }
  }
`;

const services = [
  {
    name: "عقارات",
    id: 6,
  },
  {
    name: "سيارات",
    id: 8,
  },
  {
    name: "مصالح تجارية",
    id: 1,
  },
  {
    name: "خدمات",
    id: 2,
  },
  {
    name: "باحثين عن عمل",
    id: 4,
  },
  {
    name: "وظائف شاغرة",
    id: 5,
  },
];

const CountriesAdds = () => {
  const [AddType, setAddType] = useState("");
  const [AddSubType, setAddSubType] = useState("");
  const [City, setCity] = useState("");
  const [Adds, setAdds] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [Page, setPage] = useState(1);

  const [Cities, setCities] = useState([]);
  const [Subtypes, setSubtypes] = useState([]);

  const { cID } = useParams();

  const cityURL = `${BASE_URL}Cities/GetAllForOneCountry?countryId=${cID}`;
  const SubtypeURL = `${BASE_URL}SubTupe/GetAllForService?siteServiceID=${AddType}`;

  const fetchCitiesData = async () => {
    const response = await fetch(cityURL);
    const result = await response.json();
    if (result) setCities(result.data["$values"]);
  };

  const fetchSubTypesData = async () => {
    const response = await fetch(SubtypeURL);
    const result = await response.json();
    if (result) setSubtypes(result.data["$values"]);
  };

  const fetchData = () => {
    setLoading(true);
    axios
      .get(
        `${BASE_URL}Business/GetLatest?&page=${Page}&countryId=${cID}&cityId=${City}&serviceId=${AddType}&subType=${AddSubType}`
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
  }, [Page]);

  useEffect(() => {
    fetchCitiesData();
  }, [cID]);

  useEffect(() => {
    fetchSubTypesData();
  }, [AddType]);

  return (
    <Wrapper>
      <PageTitle title={"الدول"} />

      <div className="inputs">
        <select onChange={(e) => setAddType(e.target.value)} value={AddType}>
          <option value="" disabled hidden>
            تصنيف الإعلان
          </option>

          {services.map((elem, index) => {
            return (
              <option key={index} value={elem.id}>
                {elem.name}
              </option>
            );
          })}
        </select>

        <select
          onChange={(e) => setAddSubType(e.target.value)}
          value={AddSubType}
        >
          <option value="" disabled hidden>
            التصنيف الفرعي للإعلان
          </option>
          {Subtypes.map((elem, index) => {
            return (
              <option key={index} value={elem.id}>
                {elem.title}
              </option>
            );
          })}
        </select>

        <select onChange={(e) => setCity(e.target.value)} value={City} required>
          <option value="" disabled hidden>
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

        <Btn onClick={fetchData}>بحث</Btn>
      </div>

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
        ) : Adds.length === 0 ? (
          <h4
            style={{
              marginTop: "20px",
            }}
          >
            لا توجد نتائج للبحث
          </h4>
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

export default CountriesAdds;
