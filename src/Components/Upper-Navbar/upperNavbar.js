import React from "react";
import classes from "./upperNavbar.module.css";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/navbar";
import BasicModal from "../AddModal/addModal";

const UpperNavbar = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.box}>
        <div className={classes.right}>
          <Link to={"about"}>عن الموقع</Link>
          <Link to={"userpolicy"}>اتفاقية الاستخدام</Link>
          <Link to={"contact"}>اتصل</Link>
          <Link to={"paidadds"}>لاعلاناتكم</Link>
        </div>

        <BasicModal />
      </div>
      <Navbar />
    </div>
  );
};

export default UpperNavbar;
