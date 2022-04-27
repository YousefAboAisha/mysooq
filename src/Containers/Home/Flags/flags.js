import React, { useRef, useEffect, useState, Suspense } from "react";
import img from "../../../Media/flag.png";
import styled from "styled-components";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import Spinner from "../../../Components/Spinner/spinner";

const URL = "http://alirafeqpro-001-site1.gtempurl.com/api/Countries/GetAll";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
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
  const contries = [
    {
      flag: img,
      name: "فلسطين",
    },
    {
      flag: img,
      name: "فلسطين",
    },
    {
      flag: img,
      name: "فلسطين",
    },
    {
      flag: img,
      name: "فلسطين",
    },
    {
      flag: img,
      name: "فلسطين",
    },
    {
      flag: img,
      name: "فلسطين",
    },
    {
      flag: img,
      name: "فلسطين",
    },
    {
      flag: img,
      name: "فلسطين",
    },
    {
      flag: img,
      name: "فلسطين",
    },
    {
      flag: img,
      name: "فلسطين",
    },
    {
      flag: img,
      name: "فلسطين",
    },
    {
      flag: img,
      name: "فلسطين",
    },
    {
      flag: img,
      name: "فلسطين",
    },
    {
      flag: img,
      name: "فلسطين",
    },
    {
      flag: img,
      name: "فلسطين",
    },
    {
      flag: img,
      name: "فلسطين",
    },
  ];

  const ref = useRef();

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  const [Countries, setCountries] = useState([]);
  const [Loading, setLoading] = useState();

  const fetchData = async () => {
    const response = await fetch(URL);
    const result = await response.json();
    if (result) setCountries(result.data["$values"]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(Countries);

  return (
    <Wrapper>
      <ArrowForwardIosOutlined onClick={() => scroll(100)} />

      <Wrap ref={ref}>
        {/* {Loading ? (
          <Spinner />
        ) : (
          Countries.map((elem, index) => {
            return (
              <Card key={index}>
                <img src={img} alt={elem.altname} />
                <BoldSpan>{elem.name}</BoldSpan>
              </Card>
            );
          })
        )} */}

        <Suspense fallback={<Spinner />}>
          {Countries.map((elem, index) => {
            return (
              <Card key={index}>
                <img src={img} alt={elem.altname} />
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
