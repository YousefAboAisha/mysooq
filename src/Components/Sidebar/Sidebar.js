import React, { useContext, useState } from "react";
import classes from "./Sidebar.module.css";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MapsHomeWorkOutlined,
  DirectionsCarOutlined,
  BusinessCenterOutlined,
  MiscellaneousServicesOutlined,
  PersonSearchOutlined,
  PersonPinOutlined,
  Clear,
  AccountCircle,
} from "@mui/icons-material/";
import { GlobalState } from "../../Context/globalState";

const SideBar = ({ toggle, setToggle }) => {
  const { user, setUser } = useContext(GlobalState);
  const [ShowSuccessMsg, setShowSuccessMsg] = useState(false);

  const links = [
    {
      path: "/",
      icon: <HomeOutlined />,
      name: "الرئيسية",
    },
    {
      path: "/realestates",
      icon: <MapsHomeWorkOutlined />,
      name: "عقارات",
    },
    {
      path: "/cars",
      icon: <DirectionsCarOutlined />,
      name: "سيارات",
    },
    {
      path: "/trades",
      icon: <BusinessCenterOutlined />,
      name: "مصالح تجارية",
    },
    {
      path: "/services",
      icon: <MiscellaneousServicesOutlined />,
      name: "خدمات",
    },
    {
      path: "/freelancers",
      icon: <PersonSearchOutlined />,
      name: "باحثين عن عمل",
    },
    {
      path: "/jobs",
      icon: <PersonPinOutlined />,
      name: " وظائف شاغرة",
    },
  ];

  const logout = () => {
    setUser("");
    setShowSuccessMsg(true);
    setTimeout(() => {
      setShowSuccessMsg(false);
    }, 4000);

    window.location.reload();
  };

  return (
    <div
      className={classes.nav}
      style={{
        transform: toggle ? "translateX(0)" : "translateX(100%)",
      }}
    >
      <Clear onClick={() => setToggle(false)} />

      <div className={classes.profile} onClick={() => setToggle(false)}>
        {user && user !== "" ? (
          <Link to={"/"} onClick={logout}>
            <AccountCircle />
            <span>تسجيل الخروج</span>
          </Link>
        ) : (
          <Link to={"/signin"}>
            <AccountCircle />
            <span>تسجيل الدخول</span>
          </Link>
        )}
      </div>

      {links.map((elem, index) => {
        return (
          <Link to={elem.path} key={index} onClick={() => setToggle(false)}>
            {elem.name}
          </Link>
        );
      })}
    </div>
  );
};

export default SideBar;
