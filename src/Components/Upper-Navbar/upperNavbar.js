import React from "react";
import classes from "./upperNavbar.module.css";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/navbar";
import { Add } from "@mui/icons-material";

function UpperNavbar() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.box}>
        <div className={classes.right}>
          <Link to={"/"}>عن الموقع</Link>
          <Link to={"/"}>اتفاقية الاستخدام</Link>
          <Link to={"/"}>اتصل</Link>
        </div>
        <Link to={"/newadd"}>
          <button>
            أضف إعلانك
            <Add />
          </button>
        </Link>
      </div>
      <Navbar />
    </div>
  );
}

export default UpperNavbar;
