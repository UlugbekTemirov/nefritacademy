import React, { useEffect } from "react";
import Translate from "../../utils/Translate";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { IMaskInput } from "react-imask";
import { resetStatus, saveDocument } from "../../redux/contact.slice";
import { toast } from "react-toastify";

const ContactForm = () => {
  const { language } = useSelector((state) => state.navbar);
  const { status, loading } = useSelector((state) => state.contact);
  const formRef = useRef();
  const dispatch = useDispatch();

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

  const translation = {
    uz: "Muvaffaqiyatli yuborildi. Administrator qo'ng'irog'ini kuting",
    ru: "Успешно отправлено. Подождите звонка администратора",
    en: "Successfully sent. Wait for the administrator's call",
  };

  useEffect(() => {
    console.log(status);
    if (status === null) return;
    if (status === "success") {
      toast.success(translation[language], {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setTimeout(() => {
        dispatch(resetStatus());
        formRef.current.reset();
      }, 2000);
    }

    //eslint-disable-next-line
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let json = {};
    const formData = new FormData(formRef.current);
    for (let [key, value] of formData.entries()) {
      json[key] = value;
    }

    json.date = new Date().toLocaleString();

    dispatch(saveDocument(json));
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="dark:bg-[#131C31] shadow-2xl bg-white border border-white/[0.3] md:p-10 p-5 rounded-lg max-w-[600px] mx-auto mt-10"
    >
      <input
        required
        name="studentName"
        className="md:p-5 p-3 border rounded-xl text-xl font-semibold w-full dark:bg-transparent bg-gray-100 dark:text-white dark:border-white/[0.3] dark:placeholder-white/[0.3]"
        type="text"
        placeholder={placeholder.name[language]}
      />
      <IMaskInput
        required
        name="phoneNumber"
        className="md:p-5 p-3 border rounded-xl text-xl font-semibold w-full md:mt-8 mt-4 dark:bg-transparent bg-gray-100 dark:text-white dark:border-white/[0.3] dark:placeholder-white/[0.3]"
        mask={"+{998} (00) 000-00-00"}
        radix="."
        unmask={true}
        type="tel"
        placeholder="Enter number here"
      />
      <button
        disabled={loading}
        className={`w-full rounded-xl py-3 text-xl bg-blue-900 md:mt-8 mt-4 ${
          loading ? "bg-gray-500" : "bg-blue-900"
        }`}
        type="submit"
      >
        {loading ? (
          "Loading..."
        ) : (
          <Translate
            dictionary={{
              uz: "Yuborish",
              ru: "Отправить",
              en: "Send",
            }}
          />
        )}
      </button>
    </form>
  );
};

export default ContactForm;
