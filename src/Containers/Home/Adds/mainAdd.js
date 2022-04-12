import React from "react";
import styled from "styled-components";
import add from "../../../Media/mainAdd.png";
import {
  ArrowForwardIosOutlined,
  ArrowBackIosOutlined,
} from "@mui/icons-material/";

function MainAdd() {
  const ImageBox = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const InfoBox = styled.div`
    position: absolute;
    display: flex;
    justify-content: space-between;
    width: 100%;
    bottom: 0;
    right: 0;
    background-color: rgb(0, 0, 0, 0.7);
    color: var(--white);
    padding: 10px;
    border-radius: 0 0 5px 5px;
  `;

  const ArrowsBox = styled.div`
    position: relative;
    display: flex;
    gap: 15px;
  `;

  return (
    <ImageBox>
      <img
        src={add}
        alt={add}
        width="100%"
        height="430"
        style={{ objectFit: "cover", objectPosition: "50% 50%" }}
      />
      <InfoBox>
        <span>هذا نص تلقائي</span>
        <ArrowsBox>
          <ArrowForwardIosOutlined />
          <ArrowBackIosOutlined />
        </ArrowsBox>
      </InfoBox>
    </ImageBox>
  );
}

export default MainAdd;
