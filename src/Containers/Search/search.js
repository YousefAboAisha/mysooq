import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PageTitle from "../../Components/PageTitle/pageTitle";
import { Grid } from "@mui/material";
import { BASE_URL } from "../../baseURL";
import Spinner from "../../Components/Spinner/Spinner";
import Card from "../../Components/AddCard/addCard";
import axios from "axios";
import { useParams } from "react-router";

const Wrapper = styled.div`
  position: relative;
  min-height: 1000px;

  & .search {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
    margin-left: 15px;
    margin-top: 20px;
    margin-bottom: 50px;

    @media only screen and (max-width: 500px) {
      & {
        width: 100%;
      }
    }

    & input {
      width: 100%;
      font-size: 16px;
      transition: all 0.3s linear;

      &:focus {
        border: 1px solid var(--blue);
        transition: all 0.3s linear;
      }
    }

    & .searchBtn {
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      background-color: var(--darkBlue);
      color: var(--white);
      height: 100%;
      padding: 3px 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
  }
`;

const Search = () => {
  const [Adds, setAdds] = useState([]);
  const [Loading, setLoading] = useState(false);
  // const [Val, setVal] = useState("");
  const { query } = useParams();

  const fetchData = () => {
    setLoading(true);
    axios
      .get(`${BASE_URL}Business/SearchByName?name=${query}`)
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
  }, [query]);

  return (
    <Wrapper>
      <Grid mb={3}>
        <PageTitle title={"بحث عن إعلان"} />
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
          <h4>لا توجد نتائج للبحث</h4>
        ) : (
          Adds.map((elem, index) => {
            return <Card key={index} card={elem} />;
          })
        )}
      </Grid>
    </Wrapper>
  );
};

export default Search;
