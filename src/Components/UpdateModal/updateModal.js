import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Add } from "@mui/icons-material";
import { useNavigate, useParams } from "react-router";
import { BASE_URL } from "../../baseURL";
import {
  Wrapper,
  BoldSpan,
  LightSpan,
  Halfbox,
  Btn,
} from "../../Containers/NewAdd/addForm/form";
import styled from "styled-components";
import { Clear } from "@mui/icons-material";
import Snackbar from "../Snackbar/snackbar";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #DDD",
  boxShadow: 24,
  p: 4,
  borderRadius: "15px",
  outline: "none",

  "& h1": {
    marginBottom: "20px",
    textAlign: "center",
  },

  "& div": {
    display: "flex",
    gap: "3px",
    fontFamily: "var(--secondFont)",
    alignItems: "center",
    margin: "10px auto",
  },

  "& div a": {
    color: "var(--blue)",
    fontFamily: "var(--secondFont)",
  },
};

const SWrapper = styled(Wrapper)`
  position: fixed;
  display: flex;
  flex-flow: column wrap;
  width: 60%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 500px;
  overflow-y: scroll;
  border-radius: 10px;
  z-index: 1000000;
  padding: 20px;
  padding-top: 40px;

  & svg {
    position: absolute;
    right: 10px;
    top: 10px;
  }
`;

export default function UpdateModal({ add, setSuccess }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { id } = useParams();

  const [AddTitle, setAddTitle] = useState(add.name);
  const [AddType, setAddType] = useState(add.service);
  const [AddSubType, setAddSubType] = useState(add.subtype);
  const [Price, setPrice] = useState(""); // مش هتبعتو
  const [Currency, setCurrency] = useState(""); // مش هتبعتو
  const [MainAddImage, setMainAddImage] = useState("");
  const [AddDetails, setAddDetails] = useState(add.description);
  const [AddPublisher, setAddPublisher] = useState(add.userName);
  const [Country, setCountry] = useState(add.country);
  const [City, setCity] = useState(add.city);
  const [Email, setEmail] = useState(add.email);
  const [PhoneNumber, setPhoneNumber] = useState(add.phone1);
  const [AddImages, setAddImages] = useState([]);
  const [YLink, setYLink] = useState(add.youtube);
  const [FLink, setFLink] = useState(add.facebook);
  const [TLink, setTLink] = useState(add.twitter);
  const [ILink, setILink] = useState(add.instagram);

  const [Loading, setLoading] = useState(false);

  const [Countries, setCountries] = useState([]);
  const [Cities, setCities] = useState([]);
  const [Subtypes, setSubtypes] = useState([]);

  const countryURL = `${BASE_URL}Countries/GetAll`;
  const cityURL = `${BASE_URL}Cities/GetAllForOneCountry?countryId=${Country}`;
  const SubtypeURL = `${BASE_URL}SubTupe/GetAllForService?siteServiceID=${AddType}`;

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

  const currency = [
    "الشيكل",
    "الدولار الأمريكي",
    "اليورو الأوروبي",
    "الدينار الكويتي",
    "الفرنك السويسري",
    "الجنيه الإسترليني",
    "الين الياباني",
    "الريال السعودي",
    "الروبل الروسي",
  ];

  const navigate = useNavigate();

  // Fetching Countries
  const fetchCountriesData = async () => {
    const response = await fetch(countryURL);
    const result = await response.json();
    if (result) setCountries(result.data["$values"]);
  };

  const fetchCitiesData = async () => {
    const response = await fetch(cityURL);
    const result = await response.json();
    if (result) setCities(result.data["$values"]);
  };

  const fetchSubTypesData = async () => {
    const response = await fetch(SubtypeURL);
    const result = await response.json();
    if (result) setSubtypes(result.data["$values"]);
  };

  useEffect(() => {
    fetchCountriesData();
    fetchCitiesData();
  }, [Country]);

  useEffect(() => {
    fetchSubTypesData();
  }, [AddType]);

  // **************************************

  var data = new FormData();

  data.append("phone1", PhoneNumber);
  data.append("Youtube", YLink);
  data.append("Phone2", PhoneNumber);
  data.append("Facebook", FLink);
  data.append("AREAId", "");
  data.append("CITY", City);
  data.append("Name", AddTitle);
  data.append("uniqueId", "");
  data.append("Instagram", ILink);
  data.append("Twitter", TLink);
  data.append("Address", "Address");
  data.append("service", AddType);
  data.append("UserName", AddPublisher);
  data.append("COUNTRY", Country);
  for (let file of AddImages) {
    data.append("Images", file);
  }
  data.append("subtype", AddSubType);
  data.append("website", "Website");
  data.append("ID", id);
  data.append("Image", MainAddImage);
  data.append("Email", Email);
  data.append("Description", AddDetails);
  data.append("Fax", "Fax");

  const emptyForm = () => {
    setAddType("");
    setCountry("");
    setAddType("");
    setCity("");
    setAddDetails("");
    setPhoneNumber("");
    setAddTitle("");
    setEmail("");
    setAddPublisher("");
    setFLink("");
    setILink("");
    setYLink("");
    setTLink("");
  };

  const clickHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch(`${BASE_URL}Business/UpdateBusiness`, {
      method: "PUT",
      body: data,
    })
      .then((response) => {
        setLoading(true);
        response.json();
      })
      .then((data) => {
        setLoading(false);
        setSuccess(true);

        setTimeout(() => {
          setSuccess(false);
        }, 4000);

        setTimeout(() => {
          window.location.reload(true);
        }, 1000);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  return (
    <div>
      <button onClick={handleOpen}>
        أضف إعلانك
        <Add />
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <SWrapper>
            {/* <Clear onClick={() => setIsOpen(false)} /> */}
            <form onSubmit={clickHandler}>
              <Box>
                <BoldSpan>عنوان الإعلان *</BoldSpan>
                <input
                  type="text"
                  placeholder="عنوان الإعلان"
                  onChange={(e) => setAddTitle(e.target.value)}
                  value={AddTitle}
                  required
                />
                <LightSpan>أدرج عنوانا موجزا يصف العمل بشكل دقيق</LightSpan>
              </Box>

              <Halfbox>
                <Box>
                  <BoldSpan>تصنيف الإعلان *</BoldSpan>
                  <select
                    onChange={(e) => setAddType(e.target.value)}
                    value={AddType}
                  >
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
                  <LightSpan>اختر تصنيفاً للإعلان الذي تريد نشره</LightSpan>
                </Box>

                <Box>
                  <BoldSpan> التصنيف الفرعي للإعلان *</BoldSpan>
                  <select
                    onChange={(e) => setAddSubType(e.target.value)}
                    value={AddSubType}
                  >
                    <option value="" disabled hidden>
                      التصنيف الفرعي للإعلان
                    </option>
                    {Subtypes.map((elem, index) => {
                      return (
                        <option key={index} value={elem.id}>
                          {elem.title}
                        </option>
                      );
                    })}
                  </select>
                  <LightSpan>
                    اختر تصنيفاً فرعياً للإعلان الذي تريد نشره
                  </LightSpan>
                </Box>
              </Halfbox>

              <Halfbox>
                <Box>
                  <BoldSpan> السعر*</BoldSpan>
                  <input
                    type="text"
                    placeholder="السعر"
                    onChange={(e) => setPrice(e.target.value)}
                    value={Price}
                  />
                  <LightSpan>أدرج السعر الذي يناسب الشيء المعلن عنه</LightSpan>
                </Box>

                <Box>
                  <BoldSpan> العملة *</BoldSpan>
                  <select
                    onChange={(e) => setCurrency(e.target.value)}
                    value={Currency}
                  >
                    <option value="" disabled hidden>
                      العملة
                    </option>
                    {currency.map((elem, index) => {
                      return <option key={index}>{elem}</option>;
                    })}
                  </select>
                  <LightSpan>أختر العملة التي تفضل التعامل بها</LightSpan>
                </Box>
              </Halfbox>

              <Box>
                <BoldSpan> صورة مصغرة *</BoldSpan>
                <input
                  type="file"
                  placeholder="اسحب الصورة إلى هنا"
                  accept="image/*"
                  onChange={(e) => setMainAddImage(e.target.files[0])}
                  required
                />
                <LightSpan>أضف صورة جذابة معبرة عن إعلانك</LightSpan>
              </Box>

              <Box>
                <BoldSpan> تفاصيل الإعلان *</BoldSpan>
                <textarea
                  rows={10}
                  placeholder="قم بإضافة تفاصيل الإعلان"
                  onChange={(e) => setAddDetails(e.target.value)}
                  value={AddDetails}
                ></textarea>
                <LightSpan>أضف تفاصيل عن إعلانك</LightSpan>
              </Box>

              <Box>
                <BoldSpan> اسم المُعلن *</BoldSpan>
                <input
                  type="text"
                  placeholder="محمد سامي"
                  onChange={(e) => setAddPublisher(e.target.value)}
                  value={AddPublisher}
                  required
                />
                <LightSpan>أدرج اسم صاحب الإعلان</LightSpan>
              </Box>

              <Halfbox>
                <Box>
                  <BoldSpan>الدولة *</BoldSpan>
                  <select
                    placeholder="الدولة"
                    onChange={(e) => setCountry(e.target.value)}
                    value={Country}
                    required
                  >
                    <option value="" disabled hidden>
                      الدولة
                    </option>
                    {Countries.map((country, index) => {
                      return (
                        <option value={country.id} key={index}>
                          {country.name}
                        </option>
                      );
                    })}
                  </select>
                  <LightSpan>اختر الدولة المتواجد بها الإعلان</LightSpan>
                </Box>

                <Box>
                  <BoldSpan> المدينة *</BoldSpan>
                  <select
                    onChange={(e) => setCity(e.target.value)}
                    value={City}
                    required
                  >
                    <option value="" disabled hidden>
                      المدينة
                    </option>
                    {Cities.map((city, index) => {
                      return (
                        <option value={city.id} key={index}>
                          {city.cityName}
                        </option>
                      );
                    })}
                  </select>
                  <LightSpan>اختر المدينة المتواجد بها الإعلان</LightSpan>
                </Box>
              </Halfbox>

              <Halfbox>
                <Box>
                  <BoldSpan>البريد الالكتروني *</BoldSpan>
                  <input
                    type="text"
                    placeholder="example@gmail.com"
                    onChange={(e) => setEmail(e.target.value)}
                    value={Email}
                  />
                  <LightSpan>أدرج عنوان البريد الالكتروني الخاص بك</LightSpan>
                </Box>

                <Box>
                  <BoldSpan> رقم الهاتف *</BoldSpan>
                  <input
                    type="text"
                    placeholder="0592551405"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={PhoneNumber}
                  />
                  <LightSpan>أدرج رقم الهاتف الخاص بك</LightSpan>
                </Box>
              </Halfbox>

              <Box>
                <BoldSpan> صور الإعلان *</BoldSpan>
                <input
                  type="file"
                  placeholder="اسحب الصورة إلى هنا"
                  accept="image/*"
                  onChange={(e) => setAddImages(e.target.files)}
                  multiple
                  required
                />
                <LightSpan>أضف صور الإعلان بحد أقصى 5 صور</LightSpan>
              </Box>

              <Halfbox>
                <Box>
                  <BoldSpan> فيديو للإعلان </BoldSpan>
                  <input
                    type="url"
                    placeholder="https://www.youtube.com/UCrcrGYRlbF"
                    onChange={(e) => setYLink(e.target.value)}
                    value={YLink}
                  />
                  <LightSpan>أدرج رابط فيديو خاص بالإعلان </LightSpan>
                </Box>

                <Box>
                  <BoldSpan> رابط حساب الفيسبوك </BoldSpan>
                  <input
                    type="url"
                    placeholder="https://www.facebook.com/yousef.aboesha.9"
                    onChange={(e) => setFLink(e.target.value)}
                    value={FLink}
                  />
                  <LightSpan>أدرج رابط حساب الفيسبوك الخاص بك </LightSpan>
                </Box>
              </Halfbox>

              <Halfbox>
                <Box>
                  <BoldSpan> رابط حساب التويتر </BoldSpan>
                  <input
                    type="url"
                    placeholder="https://twitter.com/_abuAisha"
                    onChange={(e) => setTLink(e.target.value)}
                    value={TLink}
                  />
                  <LightSpan>أدرج رابط حساب التويتر الخاص بك </LightSpan>
                </Box>

                <Box>
                  <BoldSpan> رابط حساب الإنستغرام </BoldSpan>
                  <input
                    type="url"
                    placeholder="https://www.instagram.com/yousef_aboesha/"
                    onChange={(e) => setILink(e.target.value)}
                    value={ILink}
                  />
                  <LightSpan>أدرج رابط حساب الإنستغرام الخاص بك </LightSpan>
                </Box>
              </Halfbox>
              <div
                style={{
                  margin: "20px auto",
                  width: "fit-content",
                }}
              >
                <Btn type={"submit"}>
                  {Loading ? "جارٍ الحفظ ..." : "تعديل الإعلان"}
                </Btn>
              </div>
            </form>
          </SWrapper>
        </Box>
      </Modal>
    </div>
  );
}
