import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { BASE_URL } from "../../baseURL";
import {
  Wrapper,
  Box,
  BoldSpan,
  LightSpan,
  Halfbox,
  Btn,
} from "../NewAdd/addForm/form";

const UpdateAdd = () => {
  const { id } = useParams();
  const [Add, setAdd] = useState([]);

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

  // Fetch Add Data
  const fetchAddData = () => {
    axios
      .get(`${BASE_URL}Business/GetOne?id=${id}`)
      .then((res) => {
        // console.log(res.data.data);
        setAdd(res.data.data);
        setFields();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const setFields = () => {
    setAddType(Add.service);
    setCountry(Add.country);
    setAddSubType(Add.subtype);
    setCity(Add.city);
    setAddDetails(Add.description);
    setPhoneNumber(Add.Phone1);
    setAddTitle(Add.name);
    setEmail(Add.email);
    setAddPublisher(Add.userName);
    setFLink(Add.facebook);
    setILink(Add.instagram);
    setYLink(Add.youtube);
    setTLink(Add.twitter);
  };

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
    fetchAddData();
  }, [AddType]);

  // useEffect(() => {
  //   fetchAddData();
  // }, [AddTitle]);

  // console.log("Add Type is " + AddType);

  // **************************************

  // const data = new FormData();

  // data.append("phone1", PhoneNumber);
  // data.append("Youtube", YLink);
  // data.append("Phone2", "");
  // data.append("Facebook", FLink);
  // data.append("AREAId", "");
  // data.append("CITY", City);
  // data.append("Name", AddTitle);
  // data.append("uniqueId", "");
  // data.append("StatusId", "");
  // data.append("Instagram", ILink);
  // data.append("Twitter", TLink);
  // data.append("Address", "Address");
  // data.append("service", AddType);
  // data.append("UserName", AddPublisher);
  // data.append("IsPaid", false);
  // data.append("COUNTRY", Country);
  // data.append("subtype", AddSubType);
  // data.append("website", "Website");
  // data.append("ID", id);
  // data.append("image", "");
  // data.append("Email", Email);
  // data.append("Description", AddDetails);
  // data.append("Fax", "Fax");

  const data = {
    Phone1: PhoneNumber,
    Youtube: YLink,
    Phone2: "",
    Facebook: FLink,
    AREAId: "",
    CITY: City,
    Name: AddTitle,
    uniqueId: "",
    StatusId: "",
    Instagram: ILink,
    Twitter: TLink,
    Address: "",
    service: AddType,
    UserName: AddPublisher,
    IsPaid: "",
    COUNTRY: Country,
    subtype: AddSubType,
    Website: "",
    ID: id,
    image: "",
    Email: Email,
    Description: AddDetails,
    Fax: "",
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

  // console.log(data);

  const clickHandler = (e) => {
    setLoading(true);
    e.preventDefault();

    axios
      .put(`${BASE_URL}Business/Update`, data, {
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
            {Loading ? "جارٍ الحفظ ..." : "تعديل الإعلان"}
          </Btn>
        </div>
      </Wrapper>
    </form>
  );
};

export default UpdateAdd;
