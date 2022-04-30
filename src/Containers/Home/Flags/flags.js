import React, { useRef, useEffect, useState, Suspense } from "react";
import img from "../../../Media/flag.png";
import styled from "styled-components";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import Spinner from "../../../Components/Spinner/Spinner";

const URL = "https://localhost:44387/api/Countries/GetAll";

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

function Flags() {
  const ref = useRef();

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  const [Countries, setCountries] = useState([]);

  const fetchData = async () => {
    const response = await fetch(URL);
    const result = await response.json();
    if (result) setCountries(result.data["$values"]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(Countries);
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  return (
    <Wrapper>
      <ArrowForwardIosOutlined onClick={() => scroll(100)} />

      <Wrap ref={ref}>
        <Suspense fallback={<Spinner />}>
          {arr.map((elem, index) => {
            return (
              <Card key={index}>
                <img
                  src={require(`../../../Media/large/${elem}.jpg`)}
                  alt={elem.altname}
                />
                <BoldSpan>{elem.name}</BoldSpan>
              </Card>
            );
          })}
        </Suspense>
      </Wrap>

      <ArrowBackIosOutlined onClick={() => scroll(-100)} />
    </Wrapper>
  );
}

export default Flags;
