import React from "react";
import { BiShareAlt } from "react-icons/bi";
import { SHARE_BUTTON_COLOR } from "../../../utils/helpers";

const ShareButton = ({ onClick }) => {
  return (
    <button
      type="button"
      className="rounded-full p-2 duration-100 hover:scale-110"
      onClick={onClick}
    >
      <BiShareAlt size={35} color={SHARE_BUTTON_COLOR} />
    </button>
  );
};

export default ShareButton;
