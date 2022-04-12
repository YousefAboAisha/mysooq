import React from "react";
import classes from "./navbar.module.css";
import { Link } from "react-router-dom";
import logo from "../../Media/logo.svg";
import {
  SearchOutlined,
  ExitToAppOutlined,
  HomeOutlined,
  MapsHomeWorkOutlined,
  DirectionsCarOutlined,
  BusinessCenterOutlined,
  MiscellaneousServicesOutlined,
  PersonSearchOutlined,
  PersonPinOutlined,
  ArrowForwardIosOutlined,
  ArrowBackIosOutlined,
} from "@mui/icons-material/";

function Navbar() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.firstBox}>
        <div className={classes.logo}>
          <Link to={"/"}>
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <div className={classes.search}>
          <input type={"text"} placeholder="بحث" />
          <div className={classes.searchBtn}>
            <SearchOutlined />
          </div>
        </div>

        <div className={classes.btn}>
          <button>
            <ExitToAppOutlined />
            تسجيل الدخول
          </button>
        </div>
      </div>

      <div className={classes.secondBox}>
        <ArrowForwardIosOutlined />
        <Link to={"/"}>
          <HomeOutlined />
          الرئيسية
        </Link>
        <Link to={"/realEstates"}>
          <MapsHomeWorkOutlined />
          عقارات
        </Link>
        <Link to={"/cars"}>
          <DirectionsCarOutlined />
          سيارات
        </Link>
        <Link to={"/trades"}>
          <BusinessCenterOutlined />
          مصالح تجارية
        </Link>
        <Link to={"/services"}>
          <MiscellaneousServicesOutlined />
          خدمات
        </Link>
        <Link to={"/freelancers"}>
          <PersonSearchOutlined />
          باحثين عن عمل
        </Link>
        <Link to={"/jobs"}>
          <PersonPinOutlined />
          وظائف شاغرة
        </Link>
        <ArrowBackIosOutlined />
      </div>
    </div>
  );
}

export default Navbar;
