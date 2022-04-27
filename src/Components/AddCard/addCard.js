import React from "react";
import styled from "styled-components";
import { Grid } from "@mui/material";
import add from "../../Media/cardAdd.png";
import { useParams, useNavigate } from "react-router-dom";

const Card = () => {
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
  `;

  const { id } = useParams();
  const navigate = useNavigate();

  console.log(id);

  const clickHandler = (id) => {
    navigate(`/add/${id}`);
  };

  return (
    <Grid item lg={3} md={4} sm={6} xs={12}>
      <Item>
        <img
          onClick={() => clickHandler(2)}
          src={add}
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
      </Item>
    </Grid>
  );
};

export default Card;
