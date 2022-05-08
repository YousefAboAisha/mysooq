import React from "react";
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

const SideBar = ({ toggle, setToggle }) => {
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

  return (
    <div
      className={classes.nav}
      style={{
        transform: toggle ? "translateX(0)" : "translateX(100%)",
      }}
    >
      <Clear onClick={() => setToggle(false)} />

      <div className={classes.profile} onClick={() => setToggle(false)}>
        <Link to={"/signup"}>
          <AccountCircle />
        </Link>
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
