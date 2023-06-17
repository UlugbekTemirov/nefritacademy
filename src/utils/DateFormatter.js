import { useSelector } from "react-redux";
// import { months } from "../db/months.db";

const DateFormatter = ({ date }) => {
  const { lang } = useSelector((state) => state.navbar);

  const dateObj = new Date(date);
  const month = dateObj.toLocaleString(lang, { month: "long" });
  const day = dateObj.toLocaleString(lang, { day: "numeric" });
  const year = dateObj.toLocaleString(lang, { year: "numeric" });

  const formattedDate = {
    uz: `${day}-${month}, ${year}`,
    ru: `${day}-${month}, ${year}`,
    en: `${month} ${day}, ${year}`,
  };

  return formattedDate[lang];
};

export default DateFormatter;
