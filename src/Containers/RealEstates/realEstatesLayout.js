import { Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";
import PageTitle from "../../Components/PageTitle/pageTitle";
import Cards from "./realEstatesCards/realEstatesCards";
import { Box } from "../NewAdd/addForm/form";
import Heading from "../../Components/Heading/heading";
import Spinner from "../../Components/Spinner/spinner";

const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;
`;

const Header = styled.div`
  position: relative;
  padding: 10px 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row nowrap;
  gap: 10px;
  background-color: var(--white);
  width: 100%;
`;

const Btn = styled.button`
  padding: 6px;
  min-width: 110px;
  color: var(--white);
  background-color: var(--blue);
  border-radius: 3px;
  font-family: var(--secondFont);
  font-size: 14px;
  transition: all 0.2s linear;

  &:hover {
    background-color: #01687d;
    transition: all 0.2s linear;
  }

  @media only screen and (max-width: 600px) {
    & {
      min-width: 50px;
    }
  }
`;

const RealEstates = () => {
  return (
    <Wrapper>
      <PageTitle title={"عقارات"} />
      <Grid item lg={12} mt={3}>
        <Header>
          <Box>
            <select>
              <option value="" disabled selected>
                الأقسام الفرعية
              </option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </Box>
          <Box>
            <select>
              <option value="" disabled selected>
                الدولة
              </option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </Box>
          <Box>
            <select>
              <option value="" disabled selected>
                المدينة
              </option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </Box>

          <Btn>بحث</Btn>
        </Header>
      </Grid>

      <Grid item lg={12} mt={5} mb={2}>
        <Heading title={"أحدث الإعلانات"} />
      </Grid>

      <Grid container rowSpacing={2} columnSpacing={2} pr={0}>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </Grid>
    </Wrapper>
  );
};

export default RealEstates;
