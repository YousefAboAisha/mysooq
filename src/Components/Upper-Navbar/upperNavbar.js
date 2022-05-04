import React from "react";
import classes from "./upperNavbar.module.css";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/navbar";
import { Add } from "@mui/icons-material";

const UpperNavbar = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.box}>
        <div className={classes.right}>
          <Link to={"about"}>عن الموقع</Link>
          <Link to={"userpolicy"}>اتفاقية الاستخدام</Link>
          <Link to={"contact"}>اتصل</Link>
          <Link to={"text"}>لاعلاناتكم</Link>
        </div>
        <Link to={"newadd"}>
          <button>
            أضف إعلانك
            <Add />
          </button>
        </Link>
      </div>
      <Navbar />
    </div>
  );
};

export default UpperNavbar;
