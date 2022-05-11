import React, { useState } from "react";
import styled from "styled-components";
import { Box, BoldSpan } from "../../NewAdd/addForm/form";
import axios from "axios";
import { Email } from "@mui/icons-material";
import { BASE_URL } from "../../../baseURL";

const Wrap = styled.div`
  position: relative;
  margin: 5em auto;
  display: flex;
  flex-flow: column wrap;
  width: clamp(40%, 100%, 200px);
  padding: 15px 20px;
  gap: 18px;
  background-color: #fff;
  border-radius: 10px;
  padding-bottom: 30px;
  min-height: 300px;

  & h2 {
    text-align: center;
    margin-bottom: 5px;
  }

  & div {
    display: flex;
    flex-flow: column wrap;
    gap: 5px;
  }

  & span {
    margin-bottom: 0;
  }

  @media only screen and (max-width: 800px) {
    & {
      width: 90%;
    }
  }

  & input:focus {
    width: clamp(350px, 60%);
    border: 1px solid var(--blue);
    transition: all 0.5s linear;
  }
`;

const Btn = styled.button`
  display: block;
  padding: 6px;
  min-width: 110px;
  color: var(--white);
  background-color: var(--blue);
  border-radius: 3px;
  font-family: var(--secondFont);
  font-size: 14px;
  transition: all 0.2s linear;
  margin: 10px auto;
  width: 150px;

  &:hover {
    background-color: #01687d;
    transition: all 0.2s linear;
  }
`;

const clickHandler = (e) => {
  e.preventDefault();

  axios
    .post(`${BASE_URL}User/Forget?username=${Email}`, {})
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

const VerifyCode = () => {
  const [Code, setCode] = useState("");
  return (
    <form onSubmit={clickHandler}>
      <Wrap>
        <h2>كود التحقق</h2>
        <div>
          <BoldSpan> كود التحقق</BoldSpan>
          <input
            type={"text"}
            placeholder="كود التحقق"
            onChange={(e) => setCode(e.target.value)}
            value={Code}
            required
          />
        </div>

        <div>
          <BoldSpan>كلمة المرور الجديدة</BoldSpan>
          <input
            type={"text"}
            placeholder="أدخل كلمةالمرور الجديدة"
            onChange={(e) => setCode(e.target.value)}
            value={Code}
            required
          />
        </div>

        <Btn>تأكيد</Btn>
      </Wrap>
    </form>
  );
};

export default VerifyCode;
