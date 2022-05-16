import React, { useState } from "react";
import { Wrapper, Box, BoldSpan, Halfbox } from "../../NewAdd/addForm/form";
import styled from "styled-components";
import Spinner from "../../../Components/Spinner/Spinner";
import Snackbar from "../../../Components/Snackbar/snackbar";
import { useNavigate } from "react-router";
import { BASE_URL } from "../../../baseURL";
import axios from "axios";

const Swrapper = styled(Wrapper)`
  & form {
    display: flex;
    flex-flow: column wrap;
    gap: 15px;
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

const Form = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Title, setTitle] = useState("");
  const [Details, setDetails] = useState("");
  const [Loading, setLoading] = useState(false);
  const [Success, setSuccess] = useState(false);

  const data = {
    owner: 0,
    roW_STATUS: 0,
    timE_SLOT: 0,
    name: Name,
    email: Email,
    phone: "",
    ip: "",
    body: Details,
    tittle: Title,
  };

  const emptyForm = () => {
    setName("");
    setEmail("");
    setTitle("");
    setDetails("");
  };

  const clickHandler = async (e) => {
    setLoading(true);
    e.preventDefault();

    axios
      .post(`${BASE_URL}IncomingApi/Create`, data)
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 4000);
        emptyForm();
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  return (
    <Swrapper>
      {Success ? <Snackbar msg={"تم إرسال الرسالة بنجاح"} /> : null}

      <BoldSpan
        style={{
          margin: "0 auto",
          fontSize: "16px",
          fontFamily: "var(--secondFont)",
          marginBottom: "10px",
        }}
      >
        اذا كان لديك أي استفسارات طلب او شكوى لا تتردد في الاتصال بنا
      </BoldSpan>

      {Loading ? (
        <Spinner />
      ) : (
        <form onSubmit={clickHandler}>
          <Halfbox>
            <Box>
              <BoldSpan> الاسم كامل*</BoldSpan>
              <input
                type="text"
                placeholder="أدخل اسمك هنا"
                onChange={(e) => setName(e.target.value)}
                value={Name}
                required
              />
            </Box>

            <Box>
              <BoldSpan>البريد الالكتروني *</BoldSpan>
              <input
                type="email"
                placeholder="example@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
                value={Email}
                required
              />
            </Box>
          </Halfbox>

          <Box>
            <BoldSpan> عنوان الرسالة *</BoldSpan>
            <input
              type="text"
              placeholder="استفسار عن الإعلان على الموقع"
              onChange={(e) => setTitle(e.target.value)}
              value={Title}
              required
            />
          </Box>

          <Box>
            <BoldSpan> تفاصيل الرسالة *</BoldSpan>
            <textarea
              rows={10}
              placeholder="أرغب في معرفة المزيد من التفاصيل عن الإعلان المعلن على الموقع ..."
              onChange={(e) => setDetails(e.target.value)}
              value={Details}
              required
            ></textarea>
          </Box>

          <div style={{ margin: "0 auto" }}>
            <Btn>إرسال</Btn>
          </div>
        </form>
      )}
    </Swrapper>
  );
};

export default Form;
