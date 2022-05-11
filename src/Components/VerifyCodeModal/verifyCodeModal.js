import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import styled from "styled-components";
import { BASE_URL } from "../../baseURL";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #DDD",
  boxShadow: 24,
  p: 4,
  borderRadius: "15px",
  outline: "none",

  "& h2": {
    marginBottom: "15px",
    textAlign: "center",
  },

  "& div": {
    display: "flex",
    gap: "3px",
    fontFamily: "var(--secondFont)",
    alignItems: "center",
    margin: "10px auto",
  },

  "& div a": {
    color: "var(--blue)",
    fontFamily: "var(--secondFont)",
  },

  "& div input": {
    fontFamily: "var(--mainFont)",
    width: "100%",
    transition: "all 0.5s linear",
  },

  "& div input:focus": {
    border: "1px solid var(--blue)",
    transition: "all 0.5s linear",
  },
};

const Btn = styled.button`
  padding: 6px;
  min-width: 110px;
  color: var(--white);
  background-color: var(--blue);
  border-radius: 3px;
  font-family: var(--secondFont);
  font-size: 14px;
  transition: all 0.2s linear;
  margin: 5px auto;

  &:hover {
    background-color: #01687d;
    transition: all 0.2s linear;
  }

  @media only screen and (max-width: 600px) {
    & {
      min-width: 50px;
    }
  }
`;

export default function VerifyCodeModal({ setCode, Code, Open, setOpen }) {
  const clickHandler = (e) => {
    e.preventDefault();

    axios
      .post(`${BASE_URL}User/AuthCode?code=${Code}`, {})
      .then((res) => {
        console.log(res.data);
        setOpen(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return Open ? (
    <div>
      <Modal open={Open} onClose={() => setOpen(false)}>
        <Box sx={style}>
          <h2>قم بإدخال كود التحقق</h2>
          <div>
            <input
              type={"text"}
              placeholder={"أدخل كود التحقق"}
              onChange={(e) => setCode(e.target.value)}
              value={Code}
            />
          </div>

          <div>
            <Btn onClick={clickHandler}>أرسل الكود</Btn>
          </div>
        </Box>
      </Modal>
    </div>
  ) : null;
}
