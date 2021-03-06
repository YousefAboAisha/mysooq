import React, { useState } from "react";
import { Box, BoldSpan } from "../NewAdd/addForm/form";
import styled from "styled-components";
import { Link } from "react-router-dom";
import googleIcon from "../../Media/googleIcon.svg";
import facebookIcon from "../../Media/facebookIcon.svg";
import Heading from "../../Components/Heading/heading";
import axios from "axios";
import { BASE_URL } from "../../baseURL";
import VerifyCodeModal from "../../Components/VerifyCodeModal/verifyCodeModal";
import Spinner from "../../Components/Spinner/Spinner";
import Snackbar from "../../Components/Snackbar/snackbar";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { GlobalState } from "../../Context/globalState";

const Wrap = styled.div`
  position: relative;
  margin: 5em auto;
  display: flex;
  flex-flow: column wrap;
  width: clamp(40%, 100%, 200px);
  padding: 15px 20px;
  gap: 10px;
  background-color: #fff;
  border-radius: 10px;
  padding-bottom: 30px;

  & form {
    display: flex;
    flex-flow: column wrap;
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
    width: 60%;
    min-width: fit-content;
    margin: 0 auto;
    border-radius: 10px;
    margin-top: 15px;
  }

  & .error {
    text-align: center;
    margin-top: 7px;
    font-size: 13px;
    font-weight: 600;
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
  margin: 0 auto;
  margin-top: 10px;

  &:hover {
    background-color: #01687d;
    transition: all 0.2s linear;
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
    background-color: #fff;
    border: 1px solid #ddd;
    width: 250px;

    & img {
      width: 30px;
      height: 30px;
    }
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

const InnerBox = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row wrap;
  margin-top: 8px;

  & a span {
    font-size: 13px;
    color: #000;
  }

  & div {
    position: relative;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    gap: 5px;

    & label {
      font-size: 13px;
    }
  }
`;

const Signin = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Loading, setLoading] = useState(false);
  const [ShowSuccessMsg, setShowSuccessMsg] = useState(false);
  const [IsRemembered, setIsRemembered] = useState(false);
  const [IsVerified, setIsVerified] = useState(null);
  const [IsSigned, setIsSigned] = useState();
  const [Error, setError] = useState("");
  const [Code, setCode] = useState("");
  const [Open, setOpen] = useState();

  const { user, setUser } = useContext(GlobalState);

  const navigate = useNavigate();

  const data = {
    userName: Email,
    password: Password,
    rememberLogin: IsRemembered,
  };

  const emptyForm = () => {
    setEmail("");
    setPassword("");
    setIsRemembered("");
  };

  const clickHandler = (e) => {
    setLoading(true);
    e.preventDefault();

    axios
      .post(`${BASE_URL}LoginAPI/Login`, data)
      .then((res) => {
        if (res.data.message === "???????????? ?????? ????????") {
          setIsVerified(false);
          setOpen(true);
        } else if (res.data.message === "???? ?????????? ???????????? ??????????") {
          setUser(res.data.data.userId);
          setIsSigned(true);
          setIsVerified(true);
          setShowSuccessMsg(true);

          setTimeout(() => {
            setShowSuccessMsg(false);
          }, 4000);

          setTimeout(() => {
            navigate("/");
          }, 1000);
        } else {
          setError(res.data.message);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  let verifyBox = null;

  if (Open === true) {
    verifyBox = (
      <VerifyCodeModal
        setCode={setCode}
        Code={Code}
        Open={Open}
        setOpen={setOpen}
        path={"/"}
      />
    );
  }

  return (
    <Wrap>
      {verifyBox}

      {ShowSuccessMsg ? <Snackbar msg={"???? ?????????? ???????????? ??????????"} /> : null}

      <Heading title={"?????????? ????????????"} />
      {Loading ? (
        <Spinner />
      ) : (
        <form onSubmit={clickHandler}>
          <Box style={{ marginBottom: "18px" }}>
            <BoldSpan>???????????? ????????????????????</BoldSpan>
            <input
              type="email"
              placeholder="Mysooq@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
              value={Email}
              required
            />
          </Box>

          <Box>
            <BoldSpan>???????? ????????????</BoldSpan>
            <input
              type="password"
              placeholder="***********"
              onChange={(e) => setPassword(e.target.value)}
              value={Password}
              required
            />
          </Box>

          <InnerBox>
            <div>
              <input
                type="checkbox"
                onChange={(e) => setIsRemembered(e.target.checked)}
                value={IsRemembered}
              />
              <label>???????????? ????????????</label>
            </div>
            <Link to={"forgetpassword"}>
              <span>???? ???????? ???????? ??????????????</span>
            </Link>
          </InnerBox>

          <Btn>?????????? ????????????</Btn>
          {!IsVerified ? (
            <span className="error" style={{ color: "red" }}>
              {Error}
            </span>
          ) : null}
        </form>
      )}

      <Btn2>
        <h5>?????????? ???????????? ????????????</h5>
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
        <span>?????? ???????? ??????????</span>
        <Link to={"/signup"}>
          <span style={{ fontWeight: "600", color: "#000" }}>?????????? ????????</span>
        </Link>
      </Register>
    </Wrap>
  );
};

export default Signin;
