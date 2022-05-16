import React from "react";
import styled from "styled-components";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { IMAGE_BASE_URL } from "../../baseURL";

const Item = styled.div`
  position: relative;
  height: 402px;
  max-height: 402px;
  max-width: 340px;
  width: 300px;
  margin: 0 auto;
  transition: all 0.5s ease-in-out;
  border: 1px solid #ddd;
  cursor: pointer;

  &:hover {
    box-shadow: 1px 1px 2px #ddd;
    transform: scale(1.008);
    transition: all 0.5s ease-in-out;
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
  // const { id } = useParams();
  const navigate = useNavigate();

  const clickHandler = (id) => {
    navigate(`/add/${id}`);
  };

  return (
    <Grid item lg={3} md={4} sm={6} xs={12}>
      <Item onClick={() => clickHandler(card.id)}>
        <img
          src={`${IMAGE_BASE_URL}${card.image}`}
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
