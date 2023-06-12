import React from "react";
import { Language } from "../utils/types";

interface SocialIconsProps {
  lang: Language;
}

const SocialIcons: React.FC<SocialIconsProps> = ({ lang }) => {
  return (
    <div className="grid grid-flow-col w-full grid-cols-12">
      <img src="spain-flag.png" alt="flag" className="col-span-1" />
      <h1 className="col-span-8">{lang?.title}</h1>
      <div className="flex items-center col-span-3">
        <img src="tweeter.png" alt="tweeter" />
        <img src="social-icon1.png" alt="social-icon1" />
        <img src="social-icon2.png" alt="social-icon2" />
        <img src="social-icon3.png" alt="social-icon3" />
      </div>
    </div>
  );
};

export default SocialIcons;
