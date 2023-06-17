import { useSelector } from "react-redux";

const Translate = ({ dictionary }) => {
  const { lang } = useSelector((state) => state.navbar);

  return dictionary[lang.toLowerCase()];
};

export default Translate;
