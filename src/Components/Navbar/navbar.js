import React, { useRef, useState } from "react";
import classes from "./navbar.module.css";
import { Link } from "react-router-dom";
import logo from "../../Media/logo.svg";
import { SearchOutlined, Menu, ExitToAppOutlined } from "@mui/icons-material/";
import Links from "../../Links/links";
import { useNavigate } from "react-router";
import SideBar from "../Sidebar/Sidebar";

const Navbar = () => {
  const ref = useRef();
  const navigate = useNavigate();
  const [Value, setValue] = useState("");
  const [toggle, setToggle] = useState(false);

  const clickHandler = () => {
    navigate(`/search/${Value}`);
  };

  const toggleHandler = () => {
    setToggle(!toggle);
  };

  const enterHandler = (e) => {
    if (e.key === "Enter") {
      navigate(`/search/${Value}`);
    }
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
          <input
            type={"text"}
            placeholder="ابحث عن إعلانات"
            onChange={(e) => setValue(e.target.value)}
            value={Value}
            onKeyDown={(e) => enterHandler(e)}
            autoFocus
          />
          <div className={classes.searchBtn} onClick={clickHandler}>
            <SearchOutlined />
          </div>
        </div>

        <Link to={"/signin"} className={classes.signup}>
          <button>
            <ExitToAppOutlined />
            تسجيل الدخول
          </button>
        </Link>
      </div>

      <div className={classes.secondBox}>
        <div className={classes.toggle} onClick={toggleHandler}>
          <Menu />
        </div>

        <div ref={ref} className={classes.wrap}>
          <Links />
        </div>
      </div>
      <SideBar toggle={toggle} setToggle={setToggle} />
    </div>
  );
};

export default Navbar;
