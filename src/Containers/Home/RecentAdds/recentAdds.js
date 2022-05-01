import React, { useState, useEffect, Suspense } from "react";
import { Grid } from "@mui/material";
import Card from "../../../Components/AddCard/addCard";
import Spinner from "../../../Components/Spinner/Spinner";
import { BASE_URL } from "../../../baseURL";
import BlueButton from "../../../Components/BlueButton/blueButton";

// const URL = "https://localhost:44387/api/Business/GetLatest";

const RecentAdds = () => {
  const [Adds, setAdds] = useState([]);
  const [Page, setPage] = useState(0);

  const fetchData = async () => {
    const response = await fetch(
      `${BASE_URL}Business/GetLatest?&page=${Page}&countryId=${null}&cityId=${null}&serviceId=${null}`
    );
    const result = await response.json();
    if (result) setAdds(result.data["$values"]);
  };

  useEffect(() => {
    fetchData();
  }, [Page]);

  console.log(Adds);
  console.log(Page);

  return (
    <Grid
      container
      rowSpacing={{ lg: 4, md: 4, xs: 3 }}
      columnSpacing={{ lg: 4, md: 4, xs: 3 }}
      pr={0}
      minHeight={"400px"}
    >
      <Suspense fallback={<Spinner />}>
        {Adds.map((elem, index) => {
          return <Card key={index} card={elem} />;
        })}
      </Suspense>

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        m={3}
      >
        <BlueButton title={"إظهار المزيد"} setPage={setPage} page={Page} />
      </Grid>
    </Grid>
  );
};

export default RecentAdds;
