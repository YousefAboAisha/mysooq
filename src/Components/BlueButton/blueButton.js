import React from "react";
import styled from "styled-components";

function BlueButton() {
  const Btn = styled.button`
    padding: 6px;
    min-width: 110px;
    color: var(--white);
    background-color: var(--blue);
    border-radius: 3px;
    font-family: var(--secondFont);
    font-size: 14px;
  `;
  return <Btn>إظهار المزيد</Btn>;
}

export default BlueButton;
