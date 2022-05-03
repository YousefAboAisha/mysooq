import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BASE_URL } from "../../../baseURL";

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
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 600px) {
    & {
      flex-flow: row wrap;
    }
  }
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
  const [AddImages, setAddImages] = useState("");
  const [YLink, setYLink] = useState("");
  const [FLink, setFLink] = useState("");
  const [TLink, setTLink] = useState("");
  const [ILink, setILink] = useState("");
  const [Loading, setLoading] = useState();
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

  console.log("Add Type is " + AddType);

  // **************************************

  // const data = new FormData();

  // data.append("service", AddType);
  // data.append("country", Country);
  // data.append("subtype", AddSubType);
  // data.append("city", City);
  // data.append("areaId", 0);
  // data.append("description", AddDetails);
  // data.append("phone1", PhoneNumber);
  // data.append("statusId", 0);
  // data.append("name", AddTitle);
  // data.append("fax", "Fax");
  // data.append("email", Email);
  // data.append("website", "Website");
  // data.append("address", "Address");
  // data.append("userName", AddPublisher);
  // data.append("facebook", FLink);
  // data.append("instagram", ILink);
  // data.append("youtube", YLink);
  // data.append("twitter", TLink);
  // data.append("isPaid", false);

  const data = {
    service: AddType,
    country: Country,
    subtype: AddSubType,
    city: City,
    areaId: 0,
    description: AddDetails,
    phone1: PhoneNumber,
    statusId: 0,
    name: AddTitle,
    fax: "Fax",
    email: Email,
    website: "Website",
    address: "address",
    userName: AddPublisher,
    facebook: FLink,
    instagram: ILink,
    youtube: YLink,
    twitter: TLink,
    isPaid: true,
  };

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

  console.log(data);

  const clickHandler = (e) => {
    setLoading(true);
    e.preventDefault();

    axios
      .post(`${BASE_URL}Business/Create`, data, {
        headers: "Content-Type: application/json",
      })
      .then((res) => {
        console.log(res.data);
        emptyForm();
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  return (
    <form onSubmit={clickHandler}>
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
            onChange={(e) => setmainAddImage(e.target.value)}
            value={mainAddImage}
          />
          <LightSpan>أضف صورة جذابة معبرة عن إعلانك</LightSpan>
          <button>رفع الصورة</button>
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
            onChange={(e) => setAddImages(e.target.value)}
            value={AddImages}
            multiple
          />
          <LightSpan>أضف صور الإعلان بحد أقصى 5 صور</LightSpan>
          <button>رفع الصور</button>
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
