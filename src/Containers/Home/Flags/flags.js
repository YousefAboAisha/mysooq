import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import { BASE_URL, IMAGE_BASE_URL } from "../../../baseURL";
import axios from "axios";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  margin-top: 25px;
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

  const fetchData = () => {
    setLoading(true);
    axios
      .get(BASE_URL + "Countries/GetAll")
      .then((res) => {
        const fetchedData = [];
        for (let key in res.data.data["$values"]) {
          fetchedData.push(res.data.data.$values[key]);
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
    fetchData();
  }, []);

  return (
    <Wrapper>
      <ArrowForwardIosOutlined onClick={() => scroll(100)} />

      <Wrap ref={ref}>
        {Loading ? (
          <h4> جارٍ جلبُ البيانات </h4>
        ) : (
          Countries.map((elem, index) => {
            return (
              <Card key={index}>
                <Link to={`countriesAdds/${elem.id}`}>
                  <img
                    src={IMAGE_BASE_URL + elem.photoPath}
                    alt={elem.altname}
                    style={{ borderRadius: "50%" }}
                  />
                </Link>
                <BoldSpan>{elem.name}</BoldSpan>
              </Card>
            );
          })
        )}
      </Wrap>

      <ArrowBackIosOutlined onClick={() => scroll(-100)} />
    </Wrapper>
  );
};

export default Flags;
