import React, { useRef, useEffect, useState, Suspense } from "react";
import styled from "styled-components";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import Spinner from "../../../Components/Spinner/Spinner";
import { BASE_URL } from "../../../baseURL";
import axios from "axios";

// const URL = "https://localhost:44387/api/Countries/GetAll";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  margin-top: 75px;
`;

const Wrap = styled.div`
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  overflow-x: auto;
  padding: 0 10px;
  padding-bottom: 10px;
  margin: 0 15px;
  gap: 10px;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    height: 3px;
    display: none;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: #fff;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const Card = styled.div`
  position: relative;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  gap: 3px;
  padding: 5px;
  scroll-snap-align: start;

  & img {
    width: 60px;
    height: 60px;
  }
`;

const BoldSpan = styled.span`
  font-weight: 600;
  font-size: 13px;
`;

const Flags = () => {
  const ref = useRef();

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  const [Countries, setCountries] = useState([]);
  const [Loading, setLoading] = useState(false);

  const fetchData = async () => {
    const response = await fetch(BASE_URL + "Countries/GetAll");
    const result = await response.json();
    if (result) setCountries(result.data["$values"]);
  };

  const fetchedData = () => {
    axios
      .get(BASE_URL + "Countries/GetAll")
      .then((res) => {
        const fetchedData = [];
        for (let key in res.data) {
          fetchedData.push(res.data[key]);
        }
        setCountries(fetchedData);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    setLoading(true);
    fetchData();
    setLoading(false);
  }, []);

  console.log(Countries);
  console.log(BASE_URL);

  return (
    <Wrapper>
      <ArrowForwardIosOutlined onClick={() => scroll(100)} />

      <Wrap ref={ref}>
        <Suspense fallback={<Spinner />}>
          {Loading ? (
            <Spinner />
          ) : (
            Countries.map((elem, index) => {
              return (
                <Card key={index}>
                  <img
                    src={
                      "http://alirafeqpro-001-site1.gtempurl.com" +
                      elem.photoPath
                    }
                    alt={elem.altname}
                    style={{ borderRadius: "50%" }}
                  />
                  <BoldSpan>{elem.name}</BoldSpan>
                </Card>
              );
            })
          )}
        </Suspense>
      </Wrap>

      <ArrowBackIosOutlined onClick={() => scroll(-100)} />
    </Wrapper>
  );
};

export default Flags;
