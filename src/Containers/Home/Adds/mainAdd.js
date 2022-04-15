import React from "react";
import styled from "styled-components";
import Slider from "../../../Components/Slider/slider";

function MainAdd() {
  const ImageBox = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  return (
    <ImageBox>
      <Slider />
    </ImageBox>
  );
}

export default MainAdd;
