import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router";
import { BASE_URL, IMAGE_BASE_URL } from "../../../baseURL";
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
  const [Add1, setAdd1] = useState("");
  const [Add2, setAdd2] = useState("");
  const [Loading, setLoading] = useState(false);
  const [Id1, setId1] = useState("");
  const [Id2, setId2] = useState("");

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
        setAdd1(`${IMAGE_BASE_URL}${fetchedData[2].image}`);
        setAdd2(`${IMAGE_BASE_URL}${fetchedData[3].image}`);
        setId1(fetchedData[2].id);
        setId2(fetchedData[3].id);
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
    <ImageBox>
      <Image src={Add1} alt="Add" onClick={() => clickHandler(Id1)} />
      <Image src={Add2} alt="Add" onClick={() => clickHandler(Id2)} />
    </ImageBox>
  );
};

export default Adds;
