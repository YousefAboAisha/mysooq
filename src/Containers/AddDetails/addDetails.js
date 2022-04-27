import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PageTitle from "../../Components/PageTitle/pageTitle";
import Heading from "../../Components/Heading/heading";
import { useParams } from "react-router-dom";
import {
  LocationOnOutlined,
  FacebookOutlined,
  Instagram,
  WhatsappOutlined,
  Twitter,
} from "@mui/icons-material";
import img from "../../Media/mainAdd.png";
import img2 from "../../Media/cardAdd.png";
import axios from "axios";

const Wrapper = styled.div`
  position: relative;
  height: auto;
`;

const Icon = styled(LocationOnOutlined)`
  color: #707070;
  width: 10px;
  height: 10px;
  font-size: 1.1rem !important;
`;

const Box = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 5px;
  gap: 3px;
  color: #707070;

  & span {
    font-size: 14px;
  }
`;

const ImagesBox = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 10px;
  margin-bottom: 30px;
`;

const Images = styled.div`
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  gap: 10px;

  & div {
    min-width: calc(25% - 60px);
    width: 25%;
  }

  & div img {
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
    cursor: pointer;
    min-height: 140px;
    aspect-ratio: 3/3;
    background-position: 50% 50%;
  }
`;

const Social = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  gap: 25px;
  width: 100%;
  padding: 10px;

  & a {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--blue);
    border-radius: 50%;
    color: #fff;
  }
`;

function AddDetails() {
  const [mainImg, setMainImg] = useState(img);
  const [Add, setAdd] = useState([]);
  const { id } = useParams();

  const fetchData = async () => {
    const response = await fetch(
      `http://alirafeqpro-001-site1.gtempurl.com/api/Business/GetOne?id=${id}`,
      {
        method: "GET",
        mode: "no-cors",
      }
    );
    const result = await response.json();
    if (result) setAdd(result.data);
  };

  console.log(id);

  useEffect(() => {
    fetchData();
  });

  const extraPhotos = [
    { src: img, id: 1 },
    { src: img2, id: 2 },
    { src: img, id: 3 },
    { src: img2, id: 4 },
  ];

  const social = [
    { icon: <Instagram />, link: "" },
    { icon: <Twitter />, link: "" },
    { icon: <FacebookOutlined />, link: "" },
    { icon: <WhatsappOutlined />, link: "" },
  ];

  return (
    <Wrapper>
      <PageTitle title={"تفاصيل الإعلان"} />
      <Grid container>
        <Grid item lg={6} xs={12} mt={2}>
          <Grid item lg={12} md={12} xs={12}>
            <h3>هدفنا تأمين افضل و امهر عاملات التنظيف والترتيب من اجلكم </h3>
            <Box>
              <Icon />
              <span> فلسطين </span>
              <span> - </span>
              <span> غزة </span>
            </Box>
          </Grid>

          <Grid item lg={12} xs={12} mt={1.8}>
            <Heading title={"تفاصيل الإعلان"} />
            <p>
              هدفنا تأميـن افضل و امهـر عاملات التنـظيف والتـرتيب مـن اجلكم
              لدينا عاملات لـتقديم خدمـة التـنظيف و التـرتيـب الـيومي يـتوفر
              خـادمات على مـستوى عالـي لتنظيف المنازل والمكاتـب والعيادات يـتوفر
              خادمـات مـن جنسـيـات عربـية ذوات خبرة عالـية لتنظـيف المنازل
            </p>
          </Grid>

          <Grid item lg={12} xs={12} mt={1.8}>
            <Heading title={"تصنيف الإعلان"} />
            <span> مصالح تجارية </span>
            <span> - </span>
            <span> منتجات لتنظيف المنازل </span>
          </Grid>

          <Grid container mt={1.8}>
            <Grid item lg={12} xs={12}>
              <Heading title={"بيانات المعلن"} />
            </Grid>

            <Grid item lg={6} md={6} xs={12} mb={1}>
              <span>اسم المعلن: </span>
              <span>يوسف رشاد أبو عيشة</span>
            </Grid>

            <Grid item lg={6} md={6} xs={12} mb={1}>
              <span>رقم الهاتف: </span>
              <span style={{ direction: "ltr" }}>0592-55-1405</span>
            </Grid>

            <Grid item lg={12}>
              <span>البريد الالكتروني: </span>
              <span>yousef.aboesha@hotmail.com</span>
            </Grid>
          </Grid>

          <Grid item lg={12} xs={12} mt={1.8} mb={5}>
            <Heading title={"رابط فيديو الإعلان"} />
            <span>https://www.youtube.com/watch?v=O_Ugc8cSgzc</span>
          </Grid>
        </Grid>

        <Grid item lg={6} md={12} xs={12}>
          <ImagesBox>
            <img
              src={mainImg}
              alt={"main image"}
              width="100%"
              height={"350px"}
              style={{ objectFit: "cover", borderRadius: "10px" }}
            />
            <Images>
              {extraPhotos.map((elem, index) => {
                return (
                  <div key={index}>
                    <img src={elem.src} onClick={() => setMainImg(elem.src)} />
                  </div>
                );
              })}
            </Images>
          </ImagesBox>
          <Social>
            {social.map((elem, index) => {
              return (
                <a key={index} href={elem.link}>
                  {elem.icon}
                </a>
              );
            })}
          </Social>
        </Grid>
      </Grid>
    </Wrapper>
  );
}

export default AddDetails;
