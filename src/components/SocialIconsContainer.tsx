import React from "react";
import { Language } from "../utils/types";

interface SocialIconsProps {
  lang: Language;
  setShowRecipeForm: (value: boolean) => void;
}

const SocialIcons: React.FC<SocialIconsProps> = ({
  lang,
  setShowRecipeForm,
}) => {
  return (
    <div className="grid grid-flow-col w-full grid-cols-12">
      <img src={lang?.flag} alt="flag" className="col-span-1" />
      <h1 className="col-span-5">{lang?.title}</h1>
      <div className="flex items-center col-span-6">
        <img src="tweeter.png" alt="tweeter" />
        <img src="social-icon1.png" alt="social-icon1" />
        <img src="social-icon2.png" alt="social-icon2" />
        <button
          className="px-4 py-2 text-xs bg-[#171F2F] rounded-lg"
          onClick={() => setShowRecipeForm(true)}
        >
          Add Recipe
        </button>
      </div>
    </div>
  );
};

export default SocialIcons;
