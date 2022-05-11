import React, { useState, useEffect } from "react";
import { Box, Halfbox, BoldSpan, LightSpan } from "../NewAdd/addForm/form";
import styled from "styled-components";
import { Link } from "react-router-dom";
import googleIcon from "../../Media/googleIcon.svg";
import facebookIcon from "../../Media/facebookIcon.svg";
import Heading from "../../Components/Heading/heading";
import axios from "axios";
import { BASE_URL } from "../../baseURL";
import Snackbar from "../../Components/Snackbar/snackbar";
import { useNavigate } from "react-router";
import Spinner from "../../Components/Spinner/Spinner";

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
  padding-bottom: 30px;

  & form {
    display: flex;
    flex-flow: column wrap;
    gap: 15px;
  }

  & h3 {
    margin: 0 auto;
    margin-bottom: 20px;
  }

  & input,
  & select {
    border-radius: 10px;
    padding: 12px;
  }

  & .countryCode {
    position: absolute;
    left: 1px;
    top: 67%;
    transform: translateY(-50%);
    width: 60px;
    direction: ltr;
    border-radius: 10px 0 0 10px;
    border: unset;
    border-right: 1px solid #ddd;

    &:focus {
      border: 1px solid #ddd;
    }
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
    width: 270px;

    & img {
      width: 30px;
      height: 30px;
    }
  }
`;

const Btn2 = styled.div`
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

const Btn = styled.button`
  padding: 6px;
  min-width: 110px;
  color: var(--white);
  background-color: var(--blue);
  border-radius: 3px;
  font-family: var(--secondFont);
  font-size: 14px;
  transition: all 0.2s linear;
  margin-top: 10px;
  display: block;

  &:hover {
    background-color: #01687d;
    transition: all 0.2s linear;
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
  const [UserName, setUserName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmedPassword, setConfirmedPassword] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [StateCode, setStateCode] = useState("");
  const [Success, setSuccess] = useState(false);
  const [Country, setCountry] = useState("");
  const [Loading, setLoading] = useState(false);
  const [Countries, setCountries] = useState([]);
  const [Error, setError] = useState("");

  const navigate = useNavigate();

  const countryURL = `${BASE_URL}Countries/GetAll`;

  const fetchCountriesData = async () => {
    const response = await fetch(countryURL);
    const result = await response.json();
    if (result) setCountries(result.data["$values"]);
  };

  useEffect(() => {
    fetchCountriesData();
  }, []);

  const data = {
    owner: 0,
    roW_STATUS: 0,
    timE_SLOT: 0,
    username: UserName,
    fullname: UserName,
    password: Password,
    facebook_id: "facebook_id",
    email: Email,
    joindate: new Date(),
    status: 0,
    address: "address",
    default_country: Country,
    cityid: 0,
    authcode: "authcode",
  };

  const emptyForm = () => {
    setUserName("");
    setEmail("");
    setPassword("");
    setConfirmedPassword("");
    setCountry("");
    setPhoneNumber("");
    setStateCode("");
  };

  const clickHandler = async (e) => {
    e.preventDefault();
    if (Password !== ConfirmedPassword) {
      setError(" يرجى التأكد من كلمة السر");
    } else {
      setError("");
      setLoading(true);
      fetch(`${BASE_URL}User/Create`, {
        method: "POST",
        headers: {
          contentType: "application/json",
          accept: "*/*",
        },
        body: data,
      })
        .then((res) => {
          console.log(res.data);
          setLoading(false);
          setSuccess(true);

          setTimeout(() => {
            setSuccess(false);
          }, 4000);

          emptyForm();

          setTimeout(() => {
            navigate("/signin");
          }, 4000);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    }
  };

  return (
    <Wrap>
      {Success ? <Snackbar msg={"تم إنشاء حسابك بنجاح"} /> : null}

      <Heading title={"إنشاء حساب"} />
      {Loading ? (
        <Spinner />
      ) : (
        <form onSubmit={clickHandler}>
          <Halfbox>
            <Box>
              <BoldSpan>اسم المستخدم</BoldSpan>
              <input
                type="text"
                placeholder="اسم المستخدم"
                onChange={(e) => setUserName(e.target.value)}
                value={UserName}
                required
              />
            </Box>

            <Box>
              <BoldSpan>البريد الالكتروني</BoldSpan>
              <input
                type="email"
                placeholder="Mysooq@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
                value={Email}
                required
              />
            </Box>
          </Halfbox>

          <Halfbox>
            <Box>
              <BoldSpan>كلمة المرور</BoldSpan>
              <input
                type="password"
                placeholder="***********"
                onChange={(e) => setPassword(e.target.value)}
                value={Password}
                required
              />
              <LightSpan style={{ color: "red" }}>{Error}</LightSpan>
            </Box>

            <Box>
              <BoldSpan> تأكيد كلمة المرور</BoldSpan>

              <input
                type="password"
                placeholder="***********"
                onChange={(e) => setConfirmedPassword(e.target.value)}
                value={ConfirmedPassword}
                required
              />
              <LightSpan style={{ color: "red" }}> {Error}</LightSpan>
            </Box>
          </Halfbox>
          <Halfbox>
            <Box>
              <input
                type={"text"}
                placeholder={"+970"}
                className={"countryCode"}
                onChange={(e) => setStateCode(e.target.value)}
                value={StateCode}
              />

              <BoldSpan>رقم التليفون</BoldSpan>
              <input
                type="text"
                placeholder="0592551405"
                onChange={(e) => setPhoneNumber(e.target.value)}
                value={PhoneNumber}
                required
              />
            </Box>

            <Box>
              <BoldSpan>الدولة</BoldSpan>
              <select
                onChange={(e) => setCountry(e.target.value)}
                value={Country}
              >
                <option value="" disabled hidden>
                  الدولة
                </option>

                {Countries.map((country, index) => {
                  return (
                    <option value={country.id} key={index}>
                      {country.name}
                    </option>
                  );
                })}
              </select>
            </Box>
          </Halfbox>

          <Btn type={"submit"}>إنشاء الحساب</Btn>
        </form>
      )}

      <Btn2>
        <h5>إنشاء حساب بواسطة</h5>
      </Btn2>

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
