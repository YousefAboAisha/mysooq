import React from "react";
import add from "../../../Media/leftAdd.png";
import styled from "styled-components";

function LeftAdd() {
  const ImageBox = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  return (
    <ImageBox>
      <img
        src={add}
        alt={add}
        style={{ objectFit: "cover", objectPosition: "50% 50%" }}
      />
    </ImageBox>
  );
}

export default LeftAdd;
