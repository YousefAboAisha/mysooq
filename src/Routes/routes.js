import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  HomeOutlined,
  MapsHomeWorkOutlined,
  DirectionsCarOutlined,
  BusinessCenterOutlined,
  MiscellaneousServicesOutlined,
  PersonSearchOutlined,
  PersonPinOutlined,
} from "@mui/icons-material/";
import styled from "styled-components";
import "./routes.css";

const Wrap = styled.div`
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  gap: 3px;

  & a {
    display: flex;
    align-items: center;
    padding: 8px 12px;
    border-radius: 3px;
    font-weight: 500;
    gap: 3px;
    min-width: fit-content;
    scroll-snap-align: start;
    transition: all 0.5s linear;
  }

  & a:hover {
    background-color: var(--white);
    color: var(--blue);
    transition: all 0.5s linear;
  }

  & a:hover svg {
    color: var(--blue);
    transition: all 0.5s linear;
  }

  &::-webkit-scrollbar {
    height: 3px;
    display: none;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: var(--blue);
  }
`;

function Routes() {
  const location = useLocation();
  console.log(location.pathname);

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
    <Wrap>
      {links.map((elem, index) => {
        return (
          <Link
            to={elem.path}
            key={index}
            className={`/${elem.path}` === location ? "active" : ""}
          >
            {elem.name} {elem.icon}
          </Link>
        );
      })}
    </Wrap>
  );
}

export default Routes;
