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
  Twitter,
  YouTube,
} from "@mui/icons-material";
import img from "../../Media/mainAdd.png";
import img2 from "../../Media/cardAdd.png";
import { BASE_URL } from "../../baseURL";
import axios from "axios";
import TextLoading from "../../Components/TextLoading/textLoading";
import Spinner from "../../Components/Spinner/Spinner";

const Wrapper = styled.div`
  position: relative;
  min-height: 600px;
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
  const [Loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);
    axios
      .get(`${BASE_URL}Business/GetOne?id=${id}`)
      .then((res) => {
        console.log(res.data.data.$values);

        const fetchedData = [];
        for (let key in res.data.data["$values"]) {
          fetchedData.push(res.data.data.$values[key]);
        }
        setAdd(fetchedData);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  console.log(Add);

  useEffect(() => {
    fetchData();
  }, []);

  const extraPhotos = [
    { src: img, id: 1 },
    { src: img2, id: 2 },
    { src: img, id: 3 },
    { src: img2, id: 4 },
  ];

  return (
    <Wrapper>
      <PageTitle title={"تفاصيل الإعلان"} />

      {Loading ? (
        <Spinner />
      ) : (
        <Grid container columnSpacing={3}>
          <Grid item lg={6} xs={12} mt={2}>
            <Grid item lg={12} md={12} xs={12}>
              <h3>{Add.name}</h3>
              <Box>
                <Icon />
                <span> {Add.countryName} </span>
                <span> - </span>
                <span> {Add.cityName} </span>
              </Box>
            </Grid>

            <Grid item lg={12} xs={12} mt={1.8}>
              <Heading title={"تفاصيل الإعلان"} />
              <p>{Add.description}</p>
            </Grid>

            <Grid item lg={12} xs={12} mt={1.8}>
              <Heading title={"تصنيف الإعلان"} />
              <span> {Add.serviceName} </span>
              <span> - </span>
              <span>{Add.subTypeName} </span>
            </Grid>

            <Grid container mt={1.8}>
              <Grid item lg={12} xs={12}>
                <Heading title={"بيانات المعلن"} />
              </Grid>

              <Grid item lg={6} md={6} xs={12} mb={1}>
                <span>اسم المعلن: </span>
                <span>{Add.userName}</span>
              </Grid>

              <Grid item lg={6} md={6} xs={12} mb={1}>
                <span>رقم الهاتف: </span>
                <span>{Add.userName}</span>
              </Grid>

              <Grid item lg={12}>
                <span>البريد الالكتروني: </span>
                <span>{Add.email}</span>
              </Grid>
            </Grid>

            <Grid item lg={12} xs={12} mt={1.8} mb={5}>
              <Heading title={"رابط فيديو الإعلان"} />
              <span> {Add.youtube} </span>
            </Grid>
          </Grid>

          <Grid item lg={6} md={12} xs={12}>
            <ImagesBox>
              <img
                src={mainImg}
                alt={"main"}
                width="100%"
                height={"350px"}
                style={{ objectFit: "cover", borderRadius: "10px" }}
              />

              <Images>
                {extraPhotos.map((elem, index) => {
                  return (
                    <div key={index}>
                      <img
                        src={elem.src}
                        onClick={() => setMainImg(elem.src)}
                        alt="alt"
                      />
                    </div>
                  );
                })}
              </Images>
            </ImagesBox>

            <Social>
              <a href={Add.instagram}>
                <Instagram />
              </a>
              <a href={Add.facebook}>
                <FacebookOutlined />
              </a>
              <a href={Add.twitter}>
                <Twitter />
              </a>
              <a href={Add.youtube}>
                <YouTube />
              </a>
            </Social>
          </Grid>
        </Grid>
      )}
    </Wrapper>
  );
}

export default AddDetails;
