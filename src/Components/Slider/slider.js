import React, { useEffect, useRef } from "react";
import Carousel from "react-elastic-carousel";
import image from "../../Media/mainAdd.png";
import styled from "styled-components";
import "./slider.css";

const Image = styled.img`
  object-fit: cover;
  aspect-ratio: 4/2.28;
  object-position: 50% 50%;
  width: 100%;
  height: 100%;
`;

const Slider = () => {
  const items = [
    { id: 1, title: "item #1", img: image },
    { id: 2, title: "item #2", img: image },
    { id: 3, title: "item #3", img: image },
    { id: 4, title: "item #4", img: image },
    { id: 6, title: "item #5", img: image },
    { id: 7, title: "item #5", img: image },
    { id: 8, title: "item #5", img: image },
    { id: 9, title: "item #5", img: image },
  ];

  const carouselRef = useRef(null);
  const totalPages = Math.ceil(items.length);
  let resetTimeout;

  return (
    <Carousel
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
        <div key={item.id}>
          <Image src={item.img} alt={"Add"} />
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;
