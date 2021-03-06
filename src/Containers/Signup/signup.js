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
import Spinner from "../../Components/Spinner/Spinner";
import VerifyCodeModal from "../../Components/VerifyCodeModal/verifyCodeModal";

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
    width: 80px;
    direction: ltr;
    border: unset;
    background: transparent;
    height: 47px;
    border-right: 1px solid #ddd;
    border-radius: 0;
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
  const [Fullname, setFullname] = useState("");
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmedPassword, setConfirmedPassword] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [StateCode, setStateCode] = useState("");
  const [SuccessMsg, setSuccessMsg] = useState(false);
  const [Country, setCountry] = useState("");
  const [Loading, setLoading] = useState(false);
  const [Countries, setCountries] = useState([]);
  const [PasswordError, setPasswordError] = useState("");
  const [UserError, setUserError] = useState("");
  const [Code, setCode] = useState("");
  const [Open, setOpen] = useState();

  const countryURL = `${BASE_URL}Countries/GetAll`;

  const fetchCountriesData = async () => {
    const response = await fetch(countryURL);
    const result = await response.json();
    if (result) setCountries(result.data["$values"]);
  };

  useEffect(() => {
    fetchCountriesData();
  }, []);

  const stateCodes = [
    "+974",
    "+973",
    "+20",
    "+970",
    "+249",
    "+252",
    "+966",
    "+968",
    "+963",
    "+964",
    "+213",
    "+269",
    "+212",
    "+965",
    "+216",
    "+222",
    "+967",
    "+971",
    "+962",
    "+218",
    "+961",
    "+253",
  ];

  const data = {
    owner: 0,
    roW_STATUS: 0,
    timE_SLOT: 0,
    username: Username,
    fullname: Fullname,
    password: Password,
    facebook_id: "facebook_id",
    Username: Username,
    joindate: new Date(),
    status: 0,
    address: "address",
    default_country: Country,
    cityid: 0,
    authcode: "authcode",
  };

  const emptyForm = () => {
    setFullname("");
    setUsername("");
    setPassword("");
    setConfirmedPassword("");
    setCountry("");
    setPhoneNumber("");
    setStateCode("");
  };

  const clickHandler = async (e) => {
    e.preventDefault();
    if (Password !== ConfirmedPassword) {
      setPasswordError(" ???????? ???????????? ???? ???????? ????????");
    } else {
      setPasswordError("");
      setLoading(true);
      axios
        .post(`${BASE_URL}User/Create`, data)
        .then((res) => {
          if (!res.data.data) {
            setUserError("?????? ???????????????? ?????????? ??????????");
          } else {
            setSuccessMsg(true);
            setUserError("");
            setPasswordError("");
            setOpen(true);

            setTimeout(() => {
              setSuccessMsg(false);
            }, 4000);

            // emptyForm();
          }

          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    }
  };

  let verifyBox = null;

  if (Open === true) {
    verifyBox = (
      <VerifyCodeModal
        setCode={setCode}
        Code={Code}
        Open={Open}
        setOpen={setOpen}
        path={"signin"}
      />
    );
  }

  return (
    <Wrap>
      {SuccessMsg ? <Snackbar msg={"???? ?????????? ?????????? ??????????"} /> : null}

      {verifyBox}

      <Heading title={"?????????? ????????"} />
      {Loading ? (
        <Spinner />
      ) : (
        <form onSubmit={clickHandler}>
          <Halfbox>
            <Box>
              <BoldSpan>?????? ????????????????</BoldSpan>
              <input
                type="text"
                placeholder="?????? ????????????????"
                onChange={(e) => setFullname(e.target.value)}
                value={Fullname}
                required
              />
            </Box>

            <Box>
              <BoldSpan>???????????? ????????????????????</BoldSpan>
              <input
                type="Username"
                placeholder="Mysooq@gmail.com"
                onChange={(e) => setUsername(e.target.value)}
                value={Username}
                required
              />
              <LightSpan style={{ color: "red" }}>{UserError}</LightSpan>
            </Box>
          </Halfbox>

          <Halfbox>
            <Box>
              <BoldSpan>???????? ????????????</BoldSpan>
              <input
                type="password"
                placeholder="***********"
                onChange={(e) => setPassword(e.target.value)}
                value={Password}
                required
              />
              <LightSpan style={{ color: "red" }}>{PasswordError}</LightSpan>
            </Box>

            <Box>
              <BoldSpan> ?????????? ???????? ????????????</BoldSpan>

              <input
                type="password"
                placeholder="***********"
                onChange={(e) => setConfirmedPassword(e.target.value)}
                value={ConfirmedPassword}
                required
              />
              <LightSpan style={{ color: "red" }}> {PasswordError}</LightSpan>
            </Box>
          </Halfbox>
          <Halfbox>
            <Box>
              <select
                onChange={(e) => setStateCode(e.target.value)}
                value={StateCode}
                className="countryCode"
              >
                <option value="" disabled hidden>
                  +970
                </option>

                {stateCodes.map((elem, index) => {
                  return (
                    <option key={index} value={elem}>
                      {elem}
                    </option>
                  );
                })}
              </select>

              <BoldSpan>?????? ????????????????</BoldSpan>
              <input
                type="tel"
                placeholder="0592551405"
                onChange={(e) =>
                  setPhoneNumber(e.target.value.replace(/\D/g, ""))
                }
                value={PhoneNumber}
                required
              />
            </Box>

            <Box>
              <BoldSpan>????????????</BoldSpan>
              <select
                onChange={(e) => setCountry(e.target.value)}
                value={Country}
              >
                <option value="" disabled hidden>
                  ????????????
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

          <Btn type={"submit"}>?????????? ????????????</Btn>
        </form>
      )}

      <Btn2>
        <h5>?????????? ???????? ????????????</h5>
      </Btn2>

      <BtnBox>
        <button>
          ?????????? ???????????? ???????????? ????????
          <img src={googleIcon} alt="Google icon" />
        </button>
        <button>
          ?????????? ???????????? ???????????? ????????????
          <img src={facebookIcon} alt="Facebook icon" />
        </button>
      </BtnBox>

      <Register>
        <span>???????? ???????? ??????????????</span>
        <Link to={"/signin"}>
          <span style={{ fontWeight: "600", color: "#000" }}>?????????? ????????????</span>
        </Link>
      </Register>
    </Wrap>
  );
};

export default Signup;
