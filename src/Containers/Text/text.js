import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Grid } from "@mui/material";
import PageTitle from "../../Components/PageTitle/pageTitle";
import { BoldSpan, Box } from "../NewAdd/addForm/form";
import axios from "axios";
import { BASE_URL } from "../../baseURL";
import Spinner from "../../Components/Spinner/Spinner";

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 50px;
  min-height: 600px;

  & select {
    width: 50%;
  }

  @media only screen and (max-width: 500px) {
    & select {
      width: 100%;
    }
  }
`;

const services = [
  {
    name: "عقارات",
    id: 6,
  },
  {
    name: "سيارات",
    id: 8,
  },
  {
    name: "مصالح تجارية",
    id: 1,
  },
  {
    name: "خدمات",
    id: 2,
  },
  {
    name: "باحثين عن عمل",
    id: 4,
  },
  {
    name: "وظائف شاغرة",
    id: 5,
  },
];

const Text = () => {
  const [AddType, setAddType] = useState("");
  const [Adds, setAdds] = useState([]);
  const [Loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);
    axios
      .get(`${BASE_URL}Articles/GetAll?categoty=${AddType}`)
      .then((res) => {
        // console.log(res.data.data.$values);

        const fetchedData = [];
        for (let key in res.data.data["$values"]) {
          fetchedData.push(res.data.data.$values[key]);
        }
        setAdds(fetchedData);

        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, [AddType]);

  return (
    <Wrapper>
      <Grid item lg={12} mb={2}>
        <PageTitle title={"سياسة الاستخدام"} />
      </Grid>

      <Box style={{ marginTop: "20px" }}>
        <BoldSpan>تصنيف الإعلان *</BoldSpan>
        <select onChange={(e) => setAddType(e.target.value)} value={AddType}>
          <option value="" disabled hidden>
            تصنيف الإعلان
          </option>

          {services.map((elem, index) => {
            return (
              <option key={index} value={elem.id}>
                {elem.name}
              </option>
            );
          })}
        </select>
      </Box>

      <Grid
        container
        rowSpacing={2}
        columnSpacing={2}
        pr={0}
        minHeight={"400px"}
        mt={3}
      >
        {Loading ? (
          <Spinner />
        ) : Adds.length === 0 ? (
          <h4>لا توجد نتائج للبحث</h4>
        ) : (
          Adds.map((elem, index) => {
            return (
              <div
                key={index}
                dangerouslySetInnerHTML={{ __html: elem.body }}
              />
            );
          })
        )}
      </Grid>
    </Wrapper>
  );
};

export default Text;
