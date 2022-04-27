import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import Bluebutton from "../../../Components/BlueButton/blueButton";

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

const Form = () => {
  const [AddTitle, setAddTitle] = useState("");
  const [AddType, setAddType] = useState("");
  const [AddSubType, setAddSubType] = useState("");
  const [Price, setPrice] = useState("");
  const [Currency, setCurrency] = useState("");
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

  const clickHandler = (e) => {
    setLoading(true);
    e.preventDefault();
    axios
      .post(
        `http://alirafeqpro-001-site1.gtempurl.com/api/Business/Create?service=200&${Country}=17&${AddSubType}=100&CITY=${City}&AREAId=100&Description=${AddDetails}&Phone1=${PhoneNumber}&StatusId=100&Name=${AddTitle}&Fax=0592551405&Email=${Email}&Website=faw.com&Address=Tal%20Al%20Hawa&UserName=${AddPublisher}&Facebook=${FLink}&Instagram=${ILink}&Youtube=${YLink}&Twitter=${TLink}`
      )
      .then((res) => {
        console.log(res.data);
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
              <option value="" disabled>
                تصنيف الإعلان
              </option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
            <LightSpan>اختر تصنيفاً للإعلان الذي تريد نشره</LightSpan>
          </Box>

          <Box>
            <BoldSpan> التصنيف الفرعي للإعلان *</BoldSpan>
            <select
              onChange={(e) => setAddSubType(e.target.value)}
              value={AddSubType}
              defaultValue=""
            >
              <option value="" disabled>
                التصنيف الفرعي للإعلان
              </option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
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
              defaultValue=""
            >
              <option value="" disabled>
                العملة
              </option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
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
              defaultValue=""
              required
            >
              <option value="" disabled>
                الدولة
              </option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
            <LightSpan>اختر الدولة المتواجد بها الإعلان</LightSpan>
          </Box>

          <Box>
            <BoldSpan> المدينة *</BoldSpan>
            <select
              defaultValue=""
              onChange={(e) => setCity(e.target.value)}
              value={City}
            >
              <option value="" disabled>
                المدينة
              </option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
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
          />
          <LightSpan>أضف صور الإعلان بحد أقصى 5 صور</LightSpan>
        </Box>

        <Halfbox>
          <Box>
            <BoldSpan> فيديو للإعلان *</BoldSpan>
            <input
              type="url"
              placeholder="https://www.youtube.com/UCrcrGYRlbF"
              onChange={(e) => setYLink(e.target.value)}
              value={YLink}
            />
            <LightSpan>أدرج رابط فيديو خاص بالإعلان </LightSpan>
          </Box>

          <Box>
            <BoldSpan> رابط حساب الفيسبوك *</BoldSpan>
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
            <BoldSpan> رابط حساب التويتر *</BoldSpan>
            <input
              type="url"
              placeholder="https://twitter.com/_abuAisha"
              onChange={(e) => setTLink(e.target.value)}
              value={TLink}
            />
            <LightSpan>أدرج رابط حساب التويتر الخاص بك </LightSpan>
          </Box>

          <Box>
            <BoldSpan> رابط حساب الإنستغرام *</BoldSpan>
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
          <Bluebutton
            type={"submit"}
            title={Loading ? "جارٍ الحفظ ..." : "حفظ التعديلات"}
          />
        </div>
      </Wrapper>
    </form>
  );
};

export default Form;
