import React from "react";
import add from "../../../Media/leftAdd2.png";
import styled from "styled-components";

function LeftLongAdd() {
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
        width={"390"}
        height="630"
        style={{ objectFit: "cover", objectPosition: "50% 50%" }}
      />
    </ImageBox>
  );
}

export default LeftLongAdd;
