import React from "react";
import styled from "styled-components";
import Bluebutton from "../../../Components/BlueButton/blueButton";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-flow: column wrap;
  width: 100%;
  gap: 15px;
  background-color: var(--white);
  padding: 10px;
`;

const BoldSpan = styled.span`
  font-weight: 600;
  margin-bottom: 10px;
  font-size: 14px;
`;

const LightSpan = styled.span`
  font-weight: 300;
  color: #707070;
  font-size: 13px;
  margin-top: 1px;
`;

const Box = styled.div`
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

const Halfbox = styled.div`
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
  return (
    <Wrapper>
      <Box>
        <BoldSpan>عنوان الإعلان *</BoldSpan>
        <input type="text" placeholder="عنوان الإعلان" />
        <LightSpan>أدرج عنوانا موجزا يصف العمل بشكل دقيق</LightSpan>
      </Box>

      <Halfbox>
        <Box>
          <BoldSpan>تصنيف الإعلان *</BoldSpan>
          <input type="text" placeholder="الأقسام" />
          <LightSpan>اختر تصنيفاً للإعلان الذي تريد نشره</LightSpan>
        </Box>

        <Box>
          <BoldSpan> التصنيف الفرعي للإعلان *</BoldSpan>
          <input type="text" placeholder="الاقسام الفرعية" />
          <LightSpan>اختر تصنيفاً فرعياً للإعلان الذي تريد نشره</LightSpan>
        </Box>
      </Halfbox>

      <Halfbox>
        <Box>
          <BoldSpan> السعر*</BoldSpan>
          <input type="text" placeholder="السعر" />
          <LightSpan>أدرج السعر الذي يناسب الشيء المعلن عنه</LightSpan>
        </Box>

        <Box>
          <BoldSpan> العملة*</BoldSpan>
          <input type="text" placeholder="العُملة" />
          <LightSpan>أختر العملة التي تفضل التعامل بها</LightSpan>
        </Box>
      </Halfbox>

      <Box>
        <BoldSpan> صورة مصغرة*</BoldSpan>
        <input type="file" placeholder="اسحب الصورة إلى هنا" accept="image/*" />
        <LightSpan>أضف صورة جذابة معبرة عن إعلانك</LightSpan>
      </Box>

      <Box>
        <BoldSpan> تفاصيل الإعلان*</BoldSpan>
        <textarea rows={10} placeholder="قم بإضافة تفاصيل الإعلان"></textarea>
        <LightSpan>أضف صورة جذابة معبرة عن إعلانك</LightSpan>
      </Box>

      <Box>
        <BoldSpan> اسم المُعلن*</BoldSpan>
        <input type="text" placeholder="محمد سامي" />
        <LightSpan>أدرج اسم صاحب الإعلان</LightSpan>
      </Box>

      <Halfbox>
        <Box>
          <BoldSpan>الدولة*</BoldSpan>
          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          <LightSpan>اختر الدولة المتواجد بها الإعلان</LightSpan>
        </Box>

        <Box>
          <BoldSpan> المدينة*</BoldSpan>
          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          <LightSpan>اختر المدينة المتواجد بها الإعلان</LightSpan>
        </Box>
      </Halfbox>

      <Halfbox>
        <Box>
          <BoldSpan>البريد الالكتروني*</BoldSpan>
          <input type="text" placeholder="example@gmail.com" />
          <LightSpan>أدرج عنوان البريد الالكتروني الخاص بك</LightSpan>
        </Box>

        <Box>
          <BoldSpan> رقم الهاتف*</BoldSpan>
          <input type="text" placeholder="0592551405" />
          <LightSpan>أدرج رقم الهاتف الخاص بك</LightSpan>
        </Box>
      </Halfbox>

      <Box>
        <BoldSpan> صور الإعلان*</BoldSpan>
        <input type="file" placeholder="اسحب الصورة إلى هنا" accept="image/*" />
        <LightSpan>أضف صور الإعلان بحد أقصى 5 صور</LightSpan>
      </Box>

      <Halfbox>
        <Box>
          <BoldSpan> فيديو للإعلان*</BoldSpan>
          <input type="url" placeholder="https://www.youtube.com/UCrcrGYRlbF" />
          <LightSpan>أدرج رابط فيديو خاص بالإعلان </LightSpan>
        </Box>

        <Box>
          <BoldSpan> رابط حساب الفيسبوك*</BoldSpan>
          <input
            type="url"
            placeholder="https://www.facebook.com/yousef.aboesha.9"
          />
          <LightSpan>أدرج رابط حساب الفيسبوك الخاص بك </LightSpan>
        </Box>
      </Halfbox>

      <Halfbox>
        <Box>
          <BoldSpan> رابط حساب التويتر*</BoldSpan>
          <input type="url" placeholder="https://twitter.com/_abuAisha" />
          <LightSpan>أدرج رابط حساب التويتر الخاص بك </LightSpan>
        </Box>

        <Box>
          <BoldSpan> رابط حساب الإنستغرام *</BoldSpan>
          <input
            type="url"
            placeholder="https://www.instagram.com/yousef_aboesha/"
          />
          <LightSpan>أدرج رابط حساب الإنستغرام الخاص بك </LightSpan>
        </Box>
      </Halfbox>
      <Bluebutton title={"إضافة الإعلان"} />
    </Wrapper>
  );
};

export default Form;
