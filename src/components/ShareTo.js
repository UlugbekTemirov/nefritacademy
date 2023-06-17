import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Translate from "../utils/Translate";
import { FiCopy } from "react-icons/fi";
import { IoCloudDoneSharp } from "react-icons/io5";
import { CopyToClipboard } from "react-copy-to-clipboard";

// shares
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TelegramShareButton,
  TelegramIcon,
  LinkedinShareButton,
  LinkedinIcon,
  EmailShareButton,
  EmailIcon,
} from "react-share";

const ShareTo = ({ link }) => {
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 5000);
    }
  }, [copied]);

  const shareButtons = [
    {
      id: 1,
      name: "Facebook",
      icon: FacebookIcon,
      component: FacebookShareButton,
    },
    {
      id: 2,
      name: "Twitter",
      icon: TwitterIcon,
      component: TwitterShareButton,
    },
    {
      id: 3,
      name: "Whatsapp",
      icon: WhatsappIcon,
      component: WhatsappShareButton,
    },
    {
      id: 4,
      name: "Telegram",
      icon: TelegramIcon,
      component: TelegramShareButton,
    },
    {
      id: 5,
      name: "Linkedin",
      icon: LinkedinIcon,
      component: LinkedinShareButton,
    },
    {
      id: 6,
      name: "Email",
      icon: EmailIcon,
      component: EmailShareButton,
    },
  ];

  return (
    <div>
      <h1 className="font-bold text-2xl">
        <Translate
          dictionary={{
            en: "Link for sharing",
            ru: "Ссылка для обмена",
            uz: "Ulashish uchun havola",
          }}
        />
      </h1>
      <div className="bg-gray-100 rounded-xl py-3 px-2 relative overflow-hidden mt-5">
        <p className="text-gray-500 w-[80%] text-lg">{link}</p>
        {!copied ? (
          <CopyToClipboard text={link} onCopy={() => setCopied(true)}>
            <FiCopy
              size={40}
              color="#555"
              title="Copy to clipboard"
              data-aos="fade-in"
              className="cursor-pointer p-[10px] duration-300 w-[60px] h-full bg-gray-100 hover:bg-gray-200 absolute right-0 top-0"
            />
          </CopyToClipboard>
        ) : (
          <IoCloudDoneSharp
            size={40}
            color="green"
            title="Copied"
            data-aos="fade-in"
            className="cursor-pointer p-[10px] duration-300 w-[60px] h-full bg-gray-100 hover:bg-gray-200 absolute right-0 top-0"
          />
        )}
      </div>
      <div className="pt-10">
        <h1 className="font-bold text-2xl">
          <Translate
            dictionary={{
              en: "Share To",
              ru: "Поделиться",
              uz: "Ulashish",
            }}
          />
        </h1>
        <div
          onTouchStart={(e) => e.stopPropagation()}
          className="flex items-center gap-2 overflow-scroll mt-5"
        >
          {shareButtons.map(
            ({ id, name, icon: Icon, component: Component }) => {
              return (
                <Component key={id} url={link} title={name}>
                  <Icon size={70} round />
                </Component>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default ShareTo;
