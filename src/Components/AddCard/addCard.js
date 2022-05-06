import React from "react";
import styled from "styled-components";
import { Grid } from "@mui/material";
import add from "../../Media/cardAdd.png";
import { useParams, useNavigate } from "react-router-dom";

const Item = styled.div`
  position: relative;
  max-height: 400px;
  max-width: 340px;
  margin: 0 auto;
  transition: all 0.5s linear;
  &:hover {
    box-shadow: 1px 1px 15px #9e9e9e;
    transform: scale(1.008);
    transition: all 0.5s linear;
  }
  border-radius: 10px;

  &:hover span {
    opacity: 1;
    transition: all 0.3s ease-in-out;
  }

  & span {
    position: absolute;
    width: 100%;
    right: 0;
    bottom: -2px;
    background: rgba(0, 0, 0, 0.7);
    color: #fff;
    padding: 10px;
    border-radius: 0 0 7px 7px;
    opacity: 0;
    transition: all 0.3s ease-in-out;
  }
`;

const Card = ({ card }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const clickHandler = (id) => {
    navigate(`/add/${id}`);
  };

  // console.log(card.uniqueId);

  return (
    <Grid item lg={3} md={4} sm={6} xs={12}>
      <Item>
        <img
          onClick={() => clickHandler(card.id)}
          src={
            card.uniqueId
              ? `http://alirafeqpro-001-site1.gtempurl.com/Uploads/Images/${card.uniqueId}.jpg`
              : add
          }
          alt={"add"}
          width="100%"
          height={"402"}
          style={{
            objectFit: "cover",
            objectPosition: "50% 50%",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        />
        <span>{card.name}</span>
      </Item>
    </Grid>
  );
};

export default Card;
