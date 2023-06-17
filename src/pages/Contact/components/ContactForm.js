import React from "react";
import PinkBtn from "../../../components/PinkBtn";
import FormInput from "../../../components/FormInput";
import TextArea from "../../../components/TextArea";
import CustomForm from "../../../components/CustomForm";
import TelMask from "../../../components/TelMask";

function ContactForm() {
  const titleLang = {
    en: "Contact us",
    uz: "Biz bilan bog'laning",
    ru: "Свяжитесь с нами",
  };

  const placeholderName = {
    en: "Your name",
    uz: "Sizning ismingiz",
    ru: "Ваше имя",
  };

  const placeholderEmail = {
    en: "Your email",
    uz: "Sizning emailingiz",
    ru: "Ваша электронная почта",
  };

  const placeholderPhone = {
    en: "Your phone number",
    uz: "Sizning telefon raqamingiz",
    ru: "Ваш номер телефона",
  };

  const placeholderMessage = {
    en: "Your message",
    uz: "Sizning xabaringiz",
    ru: "Ваше сообщение",
  };

  const sendLang = {
    en: "Send message",
    uz: "Xabar yuborish",
    ru: "Отправить сообщение",
  };

  return (
    <div className="">
      <CustomForm title={titleLang} className="">
        <FormInput placeholder={placeholderName} name={"name"} />
        <FormInput type="email" placeholder={placeholderEmail} name={"email"} />
        {/* <FormInput type="text" placeholder={placeholderPhone} name={"phone"} /> */}
        <TelMask />
        <TextArea placeholder={placeholderMessage} name={"message"} />
        <PinkBtn value={sendLang} className="mt-5" />
      </CustomForm>
    </div>
  );
}

export default ContactForm;
