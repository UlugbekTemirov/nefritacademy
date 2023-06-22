import React from "react";
import Translate from "../../utils/Translate";
import { useSelector } from "react-redux";
import { useRef } from "react";
import { IMaskInput } from "react-imask";

const ContactForm = () => {
  const { language } = useSelector((state) => state.navbar);
  const formRef = useRef(null);

  const placeholder = {
    name: {
      uz: "Ismingiz",
      ru: "Ваше имя",
      en: "Your name",
    },
    phone: {
      uz: "Telefon raqamingiz",
      ru: "Ваш номер телефона",
      en: "Your phone number",
    },
  };

  return (
    <form className="dark:bg-[#131C31] shadow-2xl bg-white border border-white/[0.3] p-10 rounded-lg max-w-[600px] mx-auto mt-10">
      <input
        className="p-5 border rounded-xl text-xl font-semibold w-full dark:bg-transparent bg-gray-100 dark:text-white dark:border-white/[0.3] dark:placeholder-white/[0.3]"
        type="text"
        placeholder={placeholder.name[language]}
      />
      <IMaskInput
        className="p-5 border rounded-xl text-xl font-semibold w-full mt-8 dark:bg-transparent bg-gray-100 dark:text-white dark:border-white/[0.3] dark:placeholder-white/[0.3]"
        mask={"+{998} (00) 000-00-00"}
        radix="."
        value=""
        unmask={true} // true|false|'typed'
        ref={formRef}
        inputRef={formRef} // access to nested input
        onAccept={(value, mask) => console.log(value)}
        placeholder="Enter number here"
      />
      <button
        className="w-full rounded-xl py-3 text-xl bg-blue-900 mt-8"
        type="submit"
      >
        <Translate
          dictionary={{
            uz: "Yuborish",
            ru: "Отправить",
            en: "Send",
          }}
        />
      </button>
    </form>
  );
};

export default ContactForm;
