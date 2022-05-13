import React, { useState } from "react";
import styled from "styled-components";
import { BoldSpan } from "../../NewAdd/addForm/form";
import axios from "axios";
import { BASE_URL } from "../../../baseURL";
import Snackbar from "../../../Components/Snackbar/snackbar";
import { useNavigate } from "react-router";
import Spinner from "../../../Components/Spinner/Spinner";

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

  & .error {
    margin-top: -5px;
    font-size: 12px;
    font-weight: 600;
    color: red;
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

const VerifyCode = () => {
  const [Code, setCode] = useState("");
  const [Password, setPassword] = useState("");
  const [Error, setError] = useState("");
  const [Loading, setLoading] = useState(false);
  const [SuccessMsg, setSuccessMsg] = useState("");
  const navigate = useNavigate();

  const clickHandler = (e) => {
    e.preventDefault();
    setLoading(true);

    axios
      .post(
        `${BASE_URL}User/ResetPassword?code=${Code}&newpassword=${Password}`,
        {}
      )
      .then((res) => {
        if (res.data.data === false) {
          setError(res.data.message);
          setLoading(false);
        } else {
          setSuccessMsg(true);

          setTimeout(() => {
            setSuccessMsg(false);
          }, 4000);

          setLoading(false);
          setTimeout(() => {
            navigate("code");
          }, 3000);
        }
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={clickHandler}>
      {SuccessMsg ? <Snackbar msg={"تم تغيير كلمة المرور بنجاح"} /> : null}

      {Loading ? (
        <Spinner />
      ) : (
        <Wrap>
          <h2>إعادة تعيين كلمة المرور</h2>
          <div>
            <BoldSpan> كود التحقق</BoldSpan>
            <input
              type={"text"}
              placeholder="كود التحقق"
              onChange={(e) => setCode(e.target.value)}
              value={Code}
              required
            />
            <span className="error">{Error}</span>
          </div>

          <div>
            <BoldSpan>كلمة المرور الجديدة</BoldSpan>
            <input
              type={"password"}
              placeholder="أدخل كلمةالمرور الجديدة"
              onChange={(e) => setPassword(e.target.value)}
              value={Password}
              required
            />
          </div>

          <Btn>تأكيد</Btn>
        </Wrap>
      )}
    </form>
  );
};

export default VerifyCode;
