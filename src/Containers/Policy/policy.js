import React from "react";
import styled from "styled-components";
import { Grid } from "@mui/material";
import PageTitle from "../../Components/PageTitle/pageTitle";
import Heading from "../../Components/Heading/heading";

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 50px;
  height: auto;
`;

const StyledList = styled.li`
  list-style: circle;
  font-weight: 600;
  padding: 3px;
`;

const PoStyledListcy = () => {
  return (
    <Wrapper>
      <Grid item lg={12} mb={2}>
        <PageTitle title={"سياسة الاستخدام"} />
      </Grid>

      <Grid item lg={12} mb={2}>
        <Heading title={"القبول بشروط الاستخدام الآتية :"} />
      </Grid>

      <ul>
        <StyledList>
          يجب الالتزام بالاخلاق فى استخدام الموقع فى جميع ما ينشر على موقع ماي
          سوق.
        </StyledList>
        <StyledList>
          استخدام أسماء المعلن المناسبة وعدم استخدام الحروف أو الأرقام المبهمة
        </StyledList>
        <StyledList>
          التأكد من صحة البيانات التى يقوم بها المستخدم عند تسجيل عضوية جديدة و
          نشر إعلان جديد.
        </StyledList>
        <StyledList>
          لايسمح للمستخدم بتكرار نفس الاعلان اكثر من مرة فى اقل من 20 يوم من
          تاريخ نشر الاعلان.
        </StyledList>
        <StyledList>
          جميع الاعلانات المنشورة على الموقع تمثل صحابها فقط ماي سوق مجرد وسيط
          بين البائع و المشترى.
        </StyledList>
        <StyledList>
          يحق لإدارة الموقع الحذف فى حالة تكرار الاعلان او نشر محتوى غير لائق
          على الموقع.
        </StyledList>
        <StyledList>
          دخولك واستخدامك للموقع يعتبر قبولا منك بشروط الاستخدام هذه ووافقت على
          الالتزام بها.
        </StyledList>
        <StyledList>
          هذه الشروط قابلة للتعديل من جانب إدارة الموقع فى اى وقت.
        </StyledList>
      </ul>
    </Wrapper>
  );
};

export default PoStyledListcy;
