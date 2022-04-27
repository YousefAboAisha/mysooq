import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  padding: 6px;
  min-width: 110px;
  color: var(--white);
  background-color: var(--blue);
  border-radius: 3px;
  font-family: var(--secondFont);
  font-size: 14px;
  transition: all 0.2s linear;

  &:hover {
    background-color: #01687d;
    transition: all 0.2s linear;
  }
`;

function BlueButton({ title, type }) {
  return <Btn type={type ? type : "button"}>{title}</Btn>;
}

export default BlueButton;
