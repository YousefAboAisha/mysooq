import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import Card from "../../../Components/AddCard/addCard";
import Spinner from "../../../Components/Spinner/Spinner";
import { BASE_URL } from "../../../baseURL";

// const URL = "https://localhost:44387/api/Business/GetLatest";

const RecentAdds = () => {
  const [Adds, setAdds] = useState([]);
  const [Loading, setLoading] = useState(false);

  // const fetchData = async () => {
  //   setLoading(true);
  //   const response = await fetch(`${BASE_URL}Business/GetLatest`);
  //   const result = await response.json();
  //   if (result) setAdds(result.data["$values"]);
  //   setLoading(false);
  // };

  // useEffect(() => {
  //   setLoading(true);
  //   fetchData();
  //   setLoading(false);
  // }, []);

  console.log(Adds);

  return (
    <Grid
      container
      rowSpacing={{ lg: 4, md: 4, xs: 3 }}
      columnSpacing={{ lg: 4, md: 4, xs: 3 }}
      pr={0}
      minHeight={"400px"}
    >
      {/* {Loading ? (
        <Spinner />
      ) : (
        Adds.map((elem, index) => {
          return <Card key={index} card={elem} />;
        })
      )} */}
    </Grid>
  );
};

export default RecentAdds;
