import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BASE_URL } from "../../../baseURL";
import Spinner from "../../../Components/Spinner/Spinner";
import Snackbar from "../../../Components/Snackbar/snackbar";
import { useNavigate } from "react-router";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-flow: column wrap;
  width: 100%;
  gap: 15px;
  background-color: var(--white);
  padding: 15px;
`;

export const BoldSpan = styled.span`
  font-weight: 600;
  margin-bottom: 7px;
  font-size: 14px;
`;

export const LightSpan = styled.span`
  font-weight: 300;
  color: #707070;
  font-size: 13px;
  margin-top: 1px;
`;

export const Box = styled.div`
  position: relative;
  display: flex;
  flex-flow: column wrap;
  width: 100%;

  & input:focus,
  & textarea:focus {
    border: 1px solid var(--blue);
    transition: all 0.5s linear;
  }

  & input,
  & textarea {
    width: 100%;
    transition: all 0.5s linear;
  }

  & button {
    padding: 4px 10px;
    width: fit-content;
    font-size: 14px;
    margin-top: 7px;
    border-radius: 7px;
  }
`;

export const Halfbox = styled.div`
  position: relative;
  display: flex;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 600px) {
    & {
      flex-flow: row wrap;
    }
  }
`;

export const Btn = styled.button`
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
`;

const Form = () => {
  const [AddTitle, setAddTitle] = useState("");
  const [AddType, setAddType] = useState("");
  const [AddSubType, setAddSubType] = useState("");
  const [Price, setPrice] = useState(""); // مش هتبعتو
  const [Currency, setCurrency] = useState(""); // مش هتبعتو
  const [mainAddImage, setmainAddImage] = useState("");
  const [AddDetails, setAddDetails] = useState("");
  const [AddPublisher, setAddPublisher] = useState("");
  const [Country, setCountry] = useState("");
  const [City, setCity] = useState("");
  const [Email, setEmail] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [AddImages, setAddImages] = useState([]);
  const [YLink, setYLink] = useState("");
  const [FLink, setFLink] = useState("");
  const [TLink, setTLink] = useState("");
  const [ILink, setILink] = useState("");

  const [Loading, setLoading] = useState(false);
  const [SuccessMsg, setSuccessMsg] = useState(false);

  const [Countries, setCountries] = useState([]);
  const [Cities, setCities] = useState([]);
  const [Subtypes, setSubtypes] = useState([]);

  const countryURL = `${BASE_URL}Countries/GetAll`;
  const cityURL = `${BASE_URL}Cities/GetAllForOneCountry?countryId=${Country}`;
  const SubtypeURL = `${BASE_URL}SubTupe/GetAllForService?siteServiceID=${AddType}`;

  const navigate = useNavigate();

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

  const limitImageNumber = (e) => {
    if (e.files.length > 5) {
      alert("Only 5 files accepted.");
      e.preventDefault();
    }
  };

  var formData = new FormData();

  formData.append("Phone1", PhoneNumber);
  formData.append("Youtube", YLink);
  formData.append("Facebook", FLink);
  formData.append("AREAId", 23);
  formData.append("CITY", City);
  formData.append("Name", AddTitle);
  formData.append("Instagram", ILink);
  formData.append("Twitter", TLink);
  formData.append("Address", "");
  formData.append("service", AddType);
  formData.append("UserName", AddPublisher);
  formData.append("COUNTRY", Country);
  for (let file of AddImages) {
    formData.append("Images", file);
  }
  formData.append("subtype", AddSubType);
  formData.append("Website", "https://www.youtube.com/");
  formData.append("Image", mainAddImage);
  formData.append("Email", Email);
  formData.append("Description", AddDetails);
  formData.append("Fax", "Fax");

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

    fetch(`${BASE_URL}Business/CreateBusiness`, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        setLoading(true);
        response.json();
      })
      .then((data) => {
        console.log(data);
        setLoading(false);
        setSuccessMsg(true);

        setTimeout(() => {
          SuccessMsg(false);
        }, 4000);

        setTimeout(() => {
          navigate("/");
        }, 3000);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  console.log(mainAddImage);

  return (
    <form onSubmit={clickHandler}>
      {SuccessMsg ? <Snackbar msg={"تم إضافة إعلان جديد بنجاح"} /> : null}
      <Wrapper>
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
            <LightSpan>اختر تصنيفاً فرعياً للإعلان الذي تريد نشره</LightSpan>
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
            onChange={(e) => setmainAddImage(e.target.files[0])}
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
          <LightSpan>أضف صورة جذابة معبرة عن إعلانك</LightSpan>
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
            onSelect={(e) => limitImageNumber(e)}
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
        <div style={{ margin: "0 auto" }}>
          <Btn type={"submit"}>
            {Loading ? "جارٍ الحفظ ..." : "حفظ التعديلات"}
          </Btn>
        </div>
      </Wrapper>
    </form>
  );
};

export default Form;
