import React, { useState, useEffect } from "react";
import BlueButton from "../../../Components/BlueButton/blueButton";
import { Wrapper, Box, BoldSpan, Halfbox } from "../../NewAdd/addForm/form";
import styled from "styled-components";

const Form = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Title, setTitle] = useState("");
  const [Details, setDetails] = useState("");

  const data = {
    name: Name,
    email: Email,
    title: Title,
    details: Details,
  };

  const clickHandler = (e) => {
    e.preventDefault();
  };

  const Swrapper = styled(Wrapper)`
    & form {
      display: flex;
      flex-flow: column wrap;
      gap: 15px;
    }
  `;

  return (
    <Swrapper>
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

      <form>
        <Halfbox>
          <Box>
            <BoldSpan> الاسم كامل*</BoldSpan>
            <input
              type="text"
              placeholder="يوسف رشاد ابو عيشة"
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
          <BlueButton title={"إرسال"} />
        </div>
      </form>
    </Swrapper>
  );
};

export default Form;
