import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router";
import { BASE_URL } from "../../../baseURL";
import Spinner from "../../../Components/Spinner/Spinner";

export const ImageBox = styled.div`
  position: relative;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  margin: 0 auto;
  gap: 20px;
  border-radius: 10px;
  cursor: pointer;
`;

export const Image = styled.img`
  object-fit: "cover";
  object-position: "50% 50%";
  width: 100%;
  width: 390px;
  height: 630px;
  border-radius: 10px;
  border: 1px solid #ddd;
`;

const Adds = () => {
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
          `http://mysooqdemo-001-site1.dtempurl.com/${fetchedData[2].image}`
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
      <Image src={Add} alt="Add" />
      <Image src={Add} alt="Add" />
    </ImageBox>
  );
};

export default Adds;
