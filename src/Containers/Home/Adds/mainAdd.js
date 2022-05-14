import React from "react";
import styled from "styled-components";
import Slider from "../../../Components/Slider/slider";

const ImageBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

const MainAdd = () => {
  return (
    <ImageBox>
      <Slider />
    </ImageBox>
  );
};

export default MainAdd;
