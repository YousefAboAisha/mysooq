import React from "react";
import BlueButton from "../../../Components/BlueButton/blueButton";
import { Wrapper, Box, BoldSpan, Halfbox } from "../../NewAdd/addForm/form";

const Form = () => {
  return (
    <Wrapper>
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

      <Halfbox>
        <Box>
          <BoldSpan> الاسم كامل*</BoldSpan>
          <input type="text" placeholder="يوسف رشاد ابو عيشة" />
        </Box>

        <Box>
          <BoldSpan>البريد الالكتروني *</BoldSpan>
          <input type="email" placeholder="example@gmail.com" />
        </Box>
      </Halfbox>

      <Box>
        <BoldSpan> عنوان الرسالة *</BoldSpan>
        <input type="text" placeholder="استفسار عن الإعلان على الموقع" />
      </Box>

      <Box>
        <BoldSpan> تفاصيل الإعلان *</BoldSpan>
        <textarea
          rows={10}
          placeholder="أرغب في معرفة المزيد من التفاصيل عن الإعلان المعلن على الموقع ..."
        ></textarea>
      </Box>
      <div style={{ margin: "0 auto" }}>
        <BlueButton title={"إرسال"} />
      </div>
    </Wrapper>
  );
};

export default Form;
