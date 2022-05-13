import React, { useRef, useState, useEffect } from "react";
import Carousel from "react-elastic-carousel";
import styled from "styled-components";
import { BASE_URL } from "../../baseURL";
import axios from "axios";
import { useNavigate } from "react-router";

const ImageBox = styled.div`
  position: relative;
  height: 630px;
  min-width: 100%;
  border: 1px solid #ddd;
  border-radius: 10px;
  cursor: pointer;

  & span {
    position: absolute;
    display: flex;
    align-items: center;
    padding: 1em 3em 1em 5em;
    height: 60px;
    width: 100%;
    background-color: rgb(0, 0, 0, 0.8);
    bottom: 0;
    left: 0;
    color: var(--white);
    border-radius: 0 0 10px 10px;
  }
`;

const Image = styled.img`
  object-fit: cover;
  aspect-ratio: 4/2.28;
  object-position: 50% 50%;
  width: 100%;
  height: 100%;
  border-radius: 10px;

  @media only screen and (max-width: 800px) {
    height: 100%;
  }
`;

const StyledCarousel = styled(Carousel)`
  & .rec.rec-arrow {
    border-radius: 50%;
    font-size: 13px;
    width: 30px;
    height: 30px;
    min-width: 30px;
    line-height: 30px;
    position: absolute;
    z-index: 10000;
    background-color: rgb(104, 103, 103);
    color: var(--white);
  }

  & .rec.rec-arrow:nth-of-type(1) {
    left: 10%;
    bottom: 7.5%;
  }

  & .rec.rec-arrow:nth-of-type(2) {
    left: 3%;
    bottom: 7.5%;
  }

  & .cPeXhm,
  & .rec-dot_active {
    background-color: var(--blue);
    box-shadow: unset;
  }

  /* round buttons on hover */
  & .rec.rec-arrow:hover,
  & .rec.rec-arrow:active {
    border-radius: 50%;
    background-color: var(--blue);
  }

  @media only screen and (max-width: 750px) {
    .rec.rec-arrow:nth-of-type(1) {
      left: 70px;
      bottom: 50px;
    }

    .rec.rec-arrow:nth-of-type(2) {
      left: 30px;
      bottom: 50px;
    }
  }
`;

const Slider = () => {
  const [Adds, setAdds] = useState([]);
  const [Loading, setLoading] = useState(false);

  const carouselRef = useRef(null);
  const totalPages = Math.ceil(Adds.length);
  let resetTimeout;

  const navigate = useNavigate();

  const clickHandler = (id) => {
    navigate(`/add/${id}`);
  };

  const fetchData = () => {
    setLoading(true);
    axios
      .get(`${BASE_URL}Business/GetPaid`)
      .then((res) => {
        const fetchedData = [];
        for (let key in res.data.data["$values"]) {
          fetchedData.push(res.data.data.$values[key]);
        }
        setAdds(fetchedData);
        setLoading(false);
        console.log(Adds);
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
    <StyledCarousel
      ref={carouselRef}
      easing={"cubic-bezier(1,.8,.8,1)"}
      disableArrowsOnEnd={false}
      enableAutoPlay={true}
      autoPlaySpeed={4500}
      enableMouseSwipe={false}
      isRTL={true}
      onNextEnd={({ index }) => {
        clearTimeout(resetTimeout);
        if (index + 1 === totalPages) {
          resetTimeout = setTimeout(() => {
            carouselRef.current.goTo(0);
          }, 800);
        }
      }}
    >
      {Adds.map((item) => (
        <ImageBox key={item.id} onClick={() => clickHandler(item.id)}>
          <Image
            src={`http://alirafeqpro-001-site1.gtempurl.com/${item.image}`}
            alt={"Add"}
          />
          <span>{item.name}</span>
        </ImageBox>
      ))}
    </StyledCarousel>
  );
};

export default Slider;
