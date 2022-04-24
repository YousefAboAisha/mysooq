import React from "react";
import { Box, Halfbox, BoldSpan } from "../NewAdd/addForm/form";
import styled from "styled-components";
import BlueButton from "../../Components/BlueButton/blueButton";
import { Link } from "react-router-dom";
import googleIcon from "../../Media/googleIcon.svg";
import facebookIcon from "../../Media/facebookIcon.svg";
import Heading from "../../Components/Heading/heading";

const Wrap = styled.div`
  position: relative;
  margin: 5em auto;
  display: flex;
  flex-flow: column wrap;
  width: 60%;
  padding: 10px 15px;
  gap: 10px;
  background-color: #fff;
  border-radius: 10px;

  & h3 {
    margin: 0 auto;
    margin-bottom: 20px;
  }

  & input,
  & select {
    border-radius: 10px;
    padding: 12px;
  }

  @media only screen and (max-width: 800px) {
    & {
      width: 100%;
    }
  }

  & h2 {
    text-align: center;
    margin-bottom: 15px;
  }

  & button {
    width: 50%;
    min-width: fit-content;
    margin: 0 auto;
    border-radius: 10px;
    margin-top: 12px;
  }
`;

const BtnBox = styled.div`
  position: relative;
  display: flex;
  flex-flow: column wrap;

  & button {
    position: relative;
    display: flex;
    align-items: center;
    gap: 5px;
    justify-content: center;
    padding: 7px;
    background-color: transparent;
    border: 1px solid #ddd;

    & img {
      width: 30px;
      height: 30px;
    }
  }
`;

const Btn = styled.div`
  position: relative;
  width: 100%;
  margin-top: 10px;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 0;
    height: 2px;
    background-color: #666666;
    transform: translateY(-50%);
    width: 100%;
    border-radius: 10px;
    z-index: 20;
  }

  & h5 {
    position: relative;
    text-align: center;
    background-color: #fff;
    width: fit-content;
    z-index: 1000;
    margin: 0 auto;
    padding: 0 10px;
  }
`;

const Register = styled.div`
  position: relative;
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
  margin-top: 10px;

  & span {
    font-size: 14px;
  }
`;

const Signup = () => {
  return (
    <Wrap>
      <Heading title={"إنشاء حساب"} />
      <Halfbox>
        <Box>
          <BoldSpan>اسم المستخدم</BoldSpan>
          <input type="text" placeholder="اسم المستخدم" />
        </Box>

        <Box>
          <BoldSpan>البريد الالكتروني</BoldSpan>
          <input type="email" placeholder="Mysooq@gmail.com" />
        </Box>
      </Halfbox>

      <Halfbox>
        <Box>
          <BoldSpan>كلمة المرور</BoldSpan>
          <input type="password" placeholder="***********" />
        </Box>

        <Box>
          <BoldSpan>تأكيد كلمة المرور</BoldSpan>
          <input type="password" placeholder="***********" />
        </Box>
      </Halfbox>
      <Halfbox>
        <Box>
          <BoldSpan>رقم التليفون</BoldSpan>
          <input type="text" placeholder="0592551405" />
        </Box>

        <Box>
          <BoldSpan>الدولة</BoldSpan>
          <select>
            <option value="" disabled selected>
              اختر دولة
            </option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </Box>
      </Halfbox>

      <BlueButton title={"إنشاء حساب"} />

      <Btn>
        <h5>إنشاء حساب بواسطة</h5>
      </Btn>

      <BtnBox>
        <button>
          تسجيل الدخول بواسطة جوجل
          <img src={googleIcon} alt="Google icon" />
        </button>
        <button>
          تسجيل الدخول بواسطة فيسبوك
          <img src={facebookIcon} alt="Facebook icon" />
        </button>
      </BtnBox>

      <Register>
        <span>لديك حساب بالفعل؟</span>
        <Link to={"/signin"}>
          <span style={{ fontWeight: "600", color: "#000" }}>تسجيل الدخول</span>
        </Link>
      </Register>
    </Wrap>
  );
};

export default Signup;
