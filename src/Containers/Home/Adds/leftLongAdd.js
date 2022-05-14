import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router";
import { BASE_URL } from "../../../baseURL";
import Spinner from "../../../Components/Spinner/Spinner";

const ImageBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 100%;
  cursor: pointer;

  & img {
    border-radius: 10px;
    border: 1px solid #ddd;
  }
`;

const LeftLongAdd = () => {
  const [Adds, setAdds] = useState([]);
  const [Add, setAdd] = useState("");
  const [Loading, setLoading] = useState(false);
  const [Id, setId] = useState("");

  const navigate = useNavigate();

  const clickHandler = (id) => {
    navigate(`/add/${id}`);
  };

  const fetchData = () => {
    setLoading(true);
    axios
      .get(`${BASE_URL}Business/GetPaid`)
      .then((res) => {
        const fetchedData = [];
        for (let key in res.data.data["$values"]) {
          fetchedData.push(res.data.data.$values[key]);
        }
        setAdds(fetchedData);
        setAdd(
          `http://alirafeqpro-001-site1.gtempurl.com/${fetchedData[2].image}`
        );
        setId(fetchedData[2].id);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return Loading ? (
    <Spinner />
  ) : (
    <ImageBox onClick={() => clickHandler(Id)}>
      <img
        src={Add}
        alt={"add"}
        width={"390"}
        height="630"
        style={{ objectFit: "cover", objectPosition: "50% 50%" }}
      />
    </ImageBox>
  );
};

export default LeftLongAdd;
