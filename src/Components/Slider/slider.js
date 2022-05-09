import React, { useRef } from "react";
import Carousel from "react-elastic-carousel";
import image from "../../Media/mainAdd.png";
import styled from "styled-components";

const ImageBox = styled.div`
  position: relative;
  height: 630px;

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
  }
`;

const Image = styled.img`
  object-fit: cover;
  aspect-ratio: 4/2.28;
  object-position: 50% 50%;
  width: 100%;
  height: 100%;

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
  const items = [
    {
      id: 1,
      title: "item #1",
      img: image,
      info: "اسعار طابعات الكروت البلاستيكية بالسعودية",
    },
    {
      id: 2,
      title: "item #2",
      img: image,
      info: "اسعار طابعات الكروت البلاستيكية بالسعودية",
    },
    {
      id: 3,
      title: "item #3",
      img: image,
      info: "اسعار طابعات الكروت البلاستيكية بالسعودية",
    },
    {
      id: 4,
      title: "item #4",
      img: image,
      info: "اسعار طابعات الكروت البلاستيكية بالسعودية",
    },
    {
      id: 6,
      title: "item #5",
      img: image,
      info: "اسعار طابعات الكروت البلاستيكية بالسعودية",
    },
    {
      id: 7,
      title: "item #5",
      img: image,
      info: "اسعار طابعات الكروت البلاستيكية بالسعودية",
    },
    {
      id: 8,
      title: "item #5",
      img: image,
      info: "اسعار طابعات الكروت البلاستيكية بالسعودية",
    },
    {
      id: 9,
      title: "item #5",
      img: image,
      info: "اسعار طابعات الكروت البلاستيكية بالسعودية",
    },
  ];

  const carouselRef = useRef(null);
  const totalPages = Math.ceil(items.length);
  let resetTimeout;

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
      {items.map((item) => (
        <ImageBox key={item.id}>
          <Image src={item.img} alt={"Add"} />
          <span>{item.info}</span>
        </ImageBox>
      ))}
    </StyledCarousel>
  );
};

export default Slider;