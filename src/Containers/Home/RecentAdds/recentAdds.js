import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import Card from "../../../Components/AddCard/addCard";
import Spinner from "../../../Components/Spinner/Spinner";
import { BASE_URL } from "../../../baseURL";
import BlueButton from "../../../Components/BlueButton/blueButton";
import axios from "axios";
import { Link } from "react-router-dom";

const RecentAdds = () => {
  const [Adds, setAdds] = useState([]);
  const [Page, setPage] = useState(1);
  const [Loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);
    axios
      .get(`${BASE_URL}Business/GetLatest?&page=${Page}`)
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
  }, [Page]);

  return (
    <Grid
      container
      rowSpacing={{ lg: 4, md: 4, xs: 3 }}
      columnSpacing={{ lg: 4, md: 4, xs: 3 }}
      pr={0}
      minHeight={"400px"}
    >
      {Loading ? (
        <Spinner />
      ) : (
        Adds.map((elem, index) => {
          return <Card key={index} card={elem} />;
        })
      )}

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        m={3}
      >
        <Link to="recentadds">
          <BlueButton title={"إظهار المزيد"} setPage={setPage} page={Page} />
        </Link>
      </Grid>
    </Grid>
  );
};

export default RecentAdds;
