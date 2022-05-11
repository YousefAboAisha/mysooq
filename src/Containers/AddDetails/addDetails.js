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
import Spinner from "../../Components/Spinner/Spinner";
import LongMenu from "../../Components/AddMenu/addMenu";
import UpdateAdd from "../UpdateAdd/updateAdd";
import Modal from "../../Components/Modal/modal";
import Snackbar from "../../Components/Snackbar/snackbar";
import UpdateModal from "../../Components/UpdateModal/updateModal";

const Wrapper = styled.div`
  position: relative;
  min-height: 600px;

  & p {
    width: 80%;
  }

  & .menu {
    background-color: "#222";
    position: absolute;
    right: 47%;
    top: 7%;
    transform: rotate(90deg);
  }
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

  & img {
    border: 1px solid #ddd;
  }
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
    border: 1px solid #ddd;
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
  const [Add, setAdd] = useState([]);
  const { id } = useParams();
  const [Loading, setLoading] = useState(false);
  const [IsOpen, setIsOpen] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const [mainImg, setMainImg] = useState("");
  const [Imgs, setImgs] = useState([]);
  const [Success, setSuccess] = useState(false);
  const [MainAddImage, setMainAddImage] = useState("");
  const [AddImages, setAddImages] = useState([]);

  const fetchData = () => {
    setLoading(true);
    axios
      .get(`${BASE_URL}Business/GetOne?id=${id}`)
      .then((res) => {
        setAdd(res.data.data);
        setImgs(res.data.data.images.$values);
        setMainImg(res.data.data.images.$values[0]);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  console.log(mainImg);

  console.log(Add);

  useEffect(() => {
    fetchData();
  }, [setAdd]);

  return (
    <Wrapper>
      {copySuccess ? <Snackbar msg={"تم نسخ رابط الإعلان بنجاح"} /> : null}

      {Success ? <Snackbar msg={"تم تحديث الإعلان بنجاح"} /> : null}

      {IsOpen ? (
        <>
          <UpdateAdd
            setIsOpen={setIsOpen}
            open={IsOpen}
            add={Add}
            Success={Success}
            setSuccess={setSuccess}
            // MainAddImage={MainAddImage}
            // setMainAddImage={setMainAddImage}
            // AddImages={AddImages}
            // setAddImages={setAddImages}
          />
          <Modal setIsOpen={setIsOpen} open={IsOpen} />
        </>
      ) : null}

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
                <span>{Add.phone1}</span>
              </Grid>

              <Grid item lg={12}>
                <span>البريد الالكتروني: </span>
                <span>{Add.email}</span>
              </Grid>
            </Grid>

            {Add.youtube ? (
              <Grid item lg={12} xs={12} mt={1.8} mb={5}>
                <Heading title={"رابط فيديو الإعلان"} />
                <span> {Add.youtube}</span>
              </Grid>
            ) : null}
          </Grid>

          <Grid item lg={6} md={12} xs={12} mt={2}>
            {Add.isUserActiveTheOwner ? (
              <div class="menu">
                <LongMenu
                  setLoading={setLoading}
                  setIsOpen={setIsOpen}
                  setCopySuccess={setCopySuccess}
                />
              </div>
            ) : null}

            {/* <div class="menu">
              <LongMenu
                setLoading={setLoading}
                setIsOpen={setIsOpen}
                setCopySuccess={setCopySuccess}
              />
            </div> */}

            <ImagesBox>
              <img
                src={`http://alirafeqpro-001-site1.gtempurl.com/${mainImg}`}
                alt={"main"}
                width="100%"
                height={"350px"}
                style={{ objectFit: "cover", borderRadius: "10px" }}
              />

              <Images>
                {Imgs.map((elem, index) => {
                  return elem ? (
                    <div key={index}>
                      <img
                        src={`http://alirafeqpro-001-site1.gtempurl.com/${elem}`}
                        onClick={() => setMainImg(elem)}
                        alt="alt"
                      />
                    </div>
                  ) : (
                    <div key={index}>
                      <img
                        src={`https://www.publicdomainpictures.net/pictures/280000/nahled/not-found-image-15383864787lu.jpg`}
                        alt="alt"
                      />
                    </div>
                  );
                })}
              </Images>
            </ImagesBox>

            <Social>
              <a target={"_blank"} rel="noreferrer" href={Add.instagram}>
                <Instagram />
              </a>
              <a target={"_blank"} rel="noreferrer" href={Add.facebook}>
                <FacebookOutlined />
              </a>
              <a target={"_blank"} rel="noreferrer" href={Add.twitter}>
                <Twitter />
              </a>
              <a target={"_blank"} rel="noreferrer" href={Add.youtube}>
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
