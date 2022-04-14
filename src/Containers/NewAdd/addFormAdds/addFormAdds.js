import React from "react";
import styled from "styled-components";
import leftAdd from "../../../Media/leftAdd2.png";

export const ImageBox = styled.div`
  position: relative;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  margin: 0 auto;
  gap: 20px;
`;

export const Image = styled.img`
  object-fit: "cover";
  object-position: "50% 50%";
  width: 100%;
  max-width: 485px;
`;

const Adds = () => {
  return (
    <ImageBox>
      <Image src={leftAdd} alt="Add" />
      <Image src={leftAdd} alt="Add" />
    </ImageBox>
  );
};

export default Adds;
