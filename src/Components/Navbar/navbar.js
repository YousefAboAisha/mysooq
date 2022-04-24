import React, { useRef } from "react";
import classes from "./navbar.module.css";
import { Link } from "react-router-dom";
import logo from "../../Media/logo.svg";
import {
  SearchOutlined,
  ExitToAppOutlined,
  ArrowForwardIosOutlined,
  ArrowBackIosOutlined,
} from "@mui/icons-material/";
import Links from "../../Links/links";

function Navbar() {
  const ref = useRef();

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

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

        <Link to={"/signup"}>
          <button>
            <ExitToAppOutlined />
            تسجيل الدخول
          </button>
        </Link>
      </div>

      <div className={classes.secondBox}>
        <ArrowForwardIosOutlined
          className={classes.arrow}
          onClick={() => scroll(100)}
        />

        <div ref={ref} className={classes.wrap}>
          <Links />
        </div>

        <ArrowBackIosOutlined
          className={classes.arrow}
          onClick={() => scroll(-100)}
        />
      </div>
    </div>
  );
}

export default Navbar;
