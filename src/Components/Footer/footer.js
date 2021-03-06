import React from "react";
import { Grid } from "@mui/material/";
import styled from "styled-components";
import logo from "../../Media/logo.svg";
import { Link } from "react-router-dom";

const FooterSection = styled.div`
  position: relative;
  width: 100%;
  background-color: var(--blue);
  padding: 10px;
  margin-top: 70px;

  & h4 {
    font-size: 16px;
  }

  & h2 {
    font-size: 1.5em;
  }
`;

const Sections = styled.div`
  position: relative;
  display: flex;
  flex-flow: column wrap;
  gap: 10px;

  & a:hover {
    color: #222;
    transition: all 0.3s linear;
  }

  & a {
    width: fit-content;
  }
`;

const BottomSection = styled.div`
  position: relative;
  width: 90%;
  margin: 0 auto;
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row wrap;
  color: var(--white);
  gap: 10px;

  & h5 {
    font-size: 13px;
  }
`;

const SocialSection = styled.div`
  position: relative;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  gap: 5px;

  & a i {
    font-size: 18px;
  }
`;

const Footer = () => {
  let date = new Date();
  return (
    <FooterSection>
      <Grid
        container
        spacing={1}
        width={"90%"}
        sx={{
          margin: "0 auto",
          borderBottom: "1px solid rgb(255,2555,255,0.35)",
        }}
        rowSpacing={5}
        columnSpacing={2.5}
        pb={2}
      >
        {/* Right Grid  */}
        <Grid item lg={6} md={12} xs={12} alignItems="center">
          <Sections>
            <img src={logo} alt={"logo"} width="150" height="150" />
            <h2 style={{ color: "white", marginBottom: "5px" }}> ماي سوق</h2>
            <p style={{ color: "white", width: "90%" }}>
              مـاي سوق ، مجـاني 100% للـبيع والشراء السيـارات والـعقارات
              والاثـاث والحيوانات وقسم خاص بالاسر المنتجه ،، . الموقع بدون عمولة
              ( من يرغب في تعديل اسـم المستخدم بامكانه طـلب ذلك مـن خلال ايقونه
              ( اتصل بنا
            </p>
          </Sections>
        </Grid>

        <Grid item lg={3} md={12} xs={12}>
          <Sections>
            <h4 style={{ color: "white" }}>أقسام الموقع</h4>
            <Link to={"/"}>الرئيسية</Link>
            <Link to={"realEstates"}>عقارات</Link>
            <Link to={"cars"}>سيارات</Link>
            <Link to={"trades"}>مصالح تجارية</Link>
            <Link to={"services"}>خدمات</Link>
            <Link to={"freelancers"}>باحثين عن عمل</Link>
            <Link to={"jobs"}>وظائف شاغرة</Link>
          </Sections>
        </Grid>

        <Grid item lg={3} md={12} xs={12}>
          <Sections>
            <h4 style={{ color: "white" }}>الرئيسية</h4>
            <Link to={"newadd"}>إضافة إعلان</Link>
            <Link to={"about"}>عن الموقع</Link>
            <Link to={"userpolicy"}>اتفاقية الاستخدام</Link>
            <Link to={"contact"}>اتصل بنا</Link>
            <Link to={"search/a"}>بحث الموقع</Link>
            <Link to={"paidadds"}>إعلانات مميزة</Link>
            <Link to={"/"}>أحدث الإعلانات</Link>
          </Sections>
        </Grid>
      </Grid>

      <BottomSection>
        <span>
          All rights reserved © 2011 - <span> {date.getFullYear()} </span>{" "}
        </span>

        <SocialSection>
          <SocialSection style={{ gap: "12px" }}>
            <a
              target="_blank"
              href="https://m.facebook.com/mysooq/"
              rel="noreferrer"
            >
              <i className="fab fa-facebook"></i>
            </a>

            <a
              target="_blank"
              href="https://www.linkedin.com/mwlite/in/%D8%AD%D8%B3%D9%8A%D9%86-%D9%8A%D9%88%D9%86%D8%B3-219b20241"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>

            <a
              target="_blank"
              href="https://twitter.com/mysooq?t=kzqC5QUxvSXe62I4iIh67Q&s=09"
              rel="noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>

            <a
              target="_blank"
              href="https://instagram.com/mysooqnet?igshid=YmMyMTA2M2Y="
              rel="noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </SocialSection>
        </SocialSection>
      </BottomSection>
    </FooterSection>
  );
};

export default Footer;
