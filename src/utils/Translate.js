import { useSelector } from "react-redux";

const Translate = ({ dictionary }) => {
  const { language } = useSelector((state) => state.navbar);

  return dictionary[language];
};

export default Translate;
