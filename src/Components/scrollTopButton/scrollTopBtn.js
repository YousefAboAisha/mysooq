import React, { useState } from "react";
import styled from "styled-components";
import { ArrowForwardIosOutlined } from "@mui/icons-material";

const Btn = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  bottom: 20px;
  border-radius: 5px;
  z-index: 1000;
  cursor: pointer;
  color: var(--blue);
  background-color: var(--white);
  left: 20px;
  transition: all 0.5s ease-in-out;
  border: 1px solid #c2c2c2;
`;

function ScrollTopBtn() {
  const [showScroll, setShowScroll] = useState(false);

  const checkScroll = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrolltop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScroll);

  return (
    <Btn style={{ opacity: showScroll ? "1" : "0" }} onClick={scrolltop}>
      <ArrowForwardIosOutlined
        style={{ fontSize: "18px", transform: "rotate(-90deg)" }}
      />
    </Btn>
  );
}

export default ScrollTopBtn;
